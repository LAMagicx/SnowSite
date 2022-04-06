<?php
session_start();

if (isset($_POST["id"])) {
	$key=null;
	foreach ($_SESSION["basket"] as $k => $pro) {
		if (strcmp($pro["ID"], $_POST["id"]) == 0) {
			$key = $k;
			break;
		}
	}
	array_splice($_SESSION["basket"], $key, 1);
} 
echo json_encode($_SESSION["basket"]);

?>
