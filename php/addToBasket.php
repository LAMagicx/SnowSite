<?php
session_start();
if (isset($_POST["id"]) && $_POST["stock"] > 0) {
	array_push($_SESSION["basket"], array("ID" => $_POST["id"], "STOCK" => $_POST["stock"]));
}
?>
