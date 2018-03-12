<?php
/**
 * Created by PhpStorm.
 * User: Geoff Finch
 * Date: 3/11/2018
 * Time: 6:15 PM
 */


if ($_GET['request'] === 'get_data') {
    $dbconnect = connectPDO();
    $result = $dbconnect->query('SELECT * from user_metadata');
    $jsonOutput = json_encode($result->fetchAll());
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    echo $jsonOutput;
} elseif ($_GET['request'] === 'delete' && array_key_exists('id', $_GET)) {
    $dbconnect = connectPDO();
    if($dbconnect->query('DELETE FROM user_metadata WHERE ID = ' . $_GET['id']) !== false){
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        echo json_encode(array('result' => true));
    } else {
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        echo json_encode(array('result' => false));
    }
} elseif ($_GET['request'] === 'add' &&
    array_key_exists('name', $_GET) &&
    array_key_exists('age', $_GET) &&
    array_key_exists('title', $_GET) &&
    array_key_exists('project', $_GET)) {
    $dbconnect = connectPDO();
    $sth = $dbconnect->prepare('INSERT INTO user_metadata VALUES (DEFAULT,?,?,?,?)');
    $dbconnect->beginTransaction();
    $sth->execute(array($_GET['name'], intval($_GET['age']), $_GET['title'], $_GET['project']));
    $dbconnect->commit();
    if ($dbconnect->errorCode() === '00000') {
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        echo json_encode(array('result' => true));
    } else {
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        echo json_encode(array('result' => false, 'dbresponse' => $dbconnect->errorInfo()));
    }
} else {
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    echo json_encode(array('errors' => array('error' => 'invalid method')));
}

function connectPDO(): PDO {
    return new PDO('pgsql:port=5432;host=postgres;dbname=postgres', 'postgres', 'testingpass');
}