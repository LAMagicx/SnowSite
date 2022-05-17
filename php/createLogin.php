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
	if (file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT))) {
		return 2;
	} else {
		return 0;
	}
}

function createUserSQL($username, $password) {

	$conn = mysqli_connect('localhost', 'magic', 'azda', 'SNOW_DB');

	if (!$conn) {
		header("Location: /");
		die("Connection to database failed: " . mysqli_connect_error());
	}

	$sql = "SELECT username FROM USERS";
	$users = $conn->query($sql);
	if ($users->num_rows > 0) {
		// output data of each row
		while($row = $users->fetch_assoc()) {
			if (strcmp($row["username"], $username) == 0) {
				return 1;
			}
		}
	}
	$sql = "INSERT INTO USERS (username, password) VALUES ('$username', '".password_hash($password, PASSWORD_DEFAULT)."')";

	if ($conn->query($sql) === TRUE) {
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

	$l = createUserSQL($username, $password);
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

