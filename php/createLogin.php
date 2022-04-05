<?php

function createUser($username, $password) {
	$file = "../users.json";
	$users = json_decode(file_get_contents($file), true);
	foreach ($users as $k => $user) {
		if (strcmp($user["username"], $username) == 0) {
			return 1;
		}
	}
	$user = array("username" => $username, "password" => password_hash($password, PASSWORD_DEFAULT));
	array_push($users, $user);
	if (file_put_contents($file, json_encode($users))) {
		return 2;
	} else {
		return 0;
	}
}

session_start();

if (!isset($_SESSION["loggedIn"])) {
	header("Location: /");
	die();
} else if ($_SESSION["loggedIn"]) {
	header("Location: /");
	die();
}

if (isset($_POST["username"]) && isset($_POST["password"])) {

	$username = $_POST["username"];
	$password = $_POST["password"];

	$l = createUser($username, $password);
	echo $l;
	if ($l == 2) {
		$redirect = "Location: /connect.php?username=$username";
	} else if ($l == 1) {
		$redirect = "Location: /connect.php?create&error";
	} else {
		$redirect = "Location: /connect.php?create";
	}
} else {
	$redirect = "Location: /";
}
//echo $redirect;
header($redirect);
//die();
?>

