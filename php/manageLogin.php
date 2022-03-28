<?php

session_start();

if (isset($_POST["username"]) && isset($_POST["password"]) && !$_SESSION["loggedIn"]) {

	$file = "../users.json";
	$username = $_POST["username"];
	$password = $_POST["passsword"];
	$loggedIn = false;
	$users = json_decode(file_get_contents($file), true);
	foreach ($users as $k => $user) {
		if (strcmp($user["username"], $username) == 0 && password_verify($password, $user["password"])) {
			$loggedIn = true;
		}
	}

	if (!$loggedIn) {
		$user = array("username" => $username, "password" => password_hash($password, PASSWORD_DEFAULT));
		array_push($users, $user);
		file_put_contents($file, json_encode($users));
		$loggedIn = true;
	}
	if ($loggedIn) {
		$_SESSION["loggedIn"] = true;
	}

	header("Location: /");
	die();
}

?>
