<?php 
$name = $_POST["name"];
$stock = $_POST["stock"];
include "DB.php";
if (!$conn) {
	header("Location: /");
	die("Connection to database failed: " . mysqli_connect_error());
}

$sql='UPDATE CATS SET stock = '.$stock.' WHERE image="'.$name.'" AND '.$stock.' >= 0';
$data = $conn->query($sql);
?>
