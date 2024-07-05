<?php
class PdoContainer{
    public $conn;
    public $key;
    public $table;
    public $stds = [];
    public $mode = 1;
    public function __construct(PDO $conn = null,string $table,string $key = "id")
    {
        $this->conn = $conn;
        $this->table = $table;
        $this->key = $key;
    }
    public function lastid(){
        $q = $this->conn->query("SELECT TOP 1 {$this->key} FROM {$this->table} ORDER BY {$this->key} DESC");
        $id = $q->fetchColumn(); 
        return intval($id);
    }
    public function get(string $id){
        $sql = "SELECT * FROM ".$this->table." WHERE {$this->key}=".$id;
        $result = $this->conn->query($sql);
        return $this->toRes($result)[$id];
    }
    public function add(StdArray $std)
    {
        return $this->_insert($std);
    }
    public function list(string $order = "",array $filter = [],int $limit = -1) : StdArray{
        $sql = "SELECT * FROM ".$this->table;
        if(!empty($filter)){
            $sql .= " WHERE ";
            foreach ($filter as $key => $value) {
                $sql .= $key."='".$value."' and ";
            }
            $sql = trim($sql," and ");
        }
        if(!empty($order)){
            $sql .= " ORDER BY ".$order;
        }
        if($limit > 0){
            $sql .= " LIMIT ".$limit;
        }
        $result = $this->conn->query($sql);
        return $this->toRes($result);
    }
    public function toRes(PDOStatement $result){
        $res = [];
        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $s = new StdArray($row);
            $s['id'] = $row[$this->key];
            $s->setShutdown(function() use($s) {
                $this->_shutdown($s);
            });
            if($this->mode == 1){
                $res[$s->id()] = $s;
            }else{
                $res[] = $s;
            }
        }
        $res = new StdArray($res);
        $res->setShutdown(function() use($res) {
            $this->_shutdown($res);
        });
        array_push($this->stds,$res);
        return $res;
    }
    public function shutdown()
    {
        foreach ($this->stds as $value) {
            $value->getShutdown()();
        }
    }
    public function _shutdown(StdArray $std)
    {
        $modifies = $std->getModifies();
        if(count($modifies) == 0) {
            foreach ($std as $value) {
                if($value instanceof StdArray)
                $this->_shutdown($value);
            }
            return;
        };
        foreach ($modifies as $key => $value) {
            if($key == "id") continue;
            if($value == 1){
                $this->_insert($std[$key]);
            }
            if($value == -1){
                $this->_delete($key);
            }
            if($value == 0){
                $this->_update($std);
                return;
            }
        }
    }
    public function _update(StdArray $std)
    {
        $modifies = $std->getModifies();
        $sql = "UPDATE ".$this->table;
        $sql .= " SET ";
        $up = false;
        foreach ($modifies as $key => $value) {
            if($value == 0){
                $sql .= $key."='".$std[$key]."',";
                $up = true;
            }
        };
        if(!$up) return;
        $sql = trim($sql,",");
        $sql .= " WHERE {$this->key}=".$std['id'];
        return $this->conn->query($sql);
    }
    public function _insert(StdArray $std)
    {
        $sql = "INSERT INTO ".$this->table;
        $l = "(";
        $r = "(";
        foreach ($std as $key => $value) {
            if(!is_scalar($value)) continue;
            if($key == "id") {
                $key = $this->key;
                if(empty($value)){
                    $value = $this->lastid() + 1;
                    $std['id'] = $value;
                }
            }
            $l .= $key.",";
            $r .= "'".$value."',";
        };
        $l = trim($l,",");
        $r = trim($r,",");
        $l.=")";
        $r.=")";
        $sql .= $l ." VALUES ". $r;
        return $this->conn->query($sql);
    }
    public function _delete(string $id)
    {
        $sql = "DELETE FROM ".$this->table." WHERE {$this->key}=".$id;
        return $this->conn->query($sql);
    }
}
?>