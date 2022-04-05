<?php

function login($username, $password) {
	// 0 - not logged in
	// 1 - user correct password incorrect
	// 2 - user and pwd correct
	$file = "../users.json";
	$users = json_decode(file_get_contents($file), true);
	foreach ($users as $k => $user) {
		if (strcmp($user["username"], $username) == 0) {
			if (password_verify($password, $user["password"])) {
				return 2;
			}else{
				return 1;
			}
		}
	}
	return 0;
}

function createUser($username, $password) {
	$file = "../users.json";
	$users = json_decode(file_get_contents($file), true);
	$user = array("username" => $username, "password" => password_hash($password, PASSWORD_DEFAULT));
	array_push($users, $user);
	file_put_contents($file, json_encode($users));
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

	$l = login($username, $password);
	echo $l;
	if ($l == 2) {
		// logged in
		$_SESSION["loggedIn"] = true;
		$_SESSION["user"] = $username;
		$redirect = "Location: /";
	} else if ($l == 1) {
		// user exists but password incorrect
		// redirect back to page
		$redirect = "Location: /connect.php?error";
	} else {
		// no user exists
		// create user ?
		$redirect = "Location: /connect.php?create&username=$username";
	}
} else {
	$redirect = "Location: /";
}
//echo $redirect;
header($redirect);
die();
?>
