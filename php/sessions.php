<?php

session_start();
$_SESSION["root"] = substr($_SERVER['REQUEST_URI'], 0, strpos(substr($_SERVER['REQUEST_URI'], 1), '/')+1);
if (!isset($_SESSION["loggedIn"]))
	$_SESSION["loggedIn"] = false;
if (!isset($_SESSION["basket"]))
	$_SESSION["basket"] = array();
?>
