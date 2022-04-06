<?php
session_start();
if (isset($_POST["id"])) {
	array_push($_SESSION["basket"], array("ID" => $_POST["id"], "STOCK" => $_POST["stock"]));
}
?>
