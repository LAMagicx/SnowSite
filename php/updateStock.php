<?php 
$img = $_POST["name"];
$add = $_POST["stock"];
include "DB.php";
if (!$conn) {
	header("Location: /");
	die("Connection to database failed: " . mysqli_connect_error());
}

$sql='UPDATE CATS SET stock = stock+'.$add.' WHERE image="'.$img.'" AND stock+'.$add.' >= 0';
$data = $conn->query($sql);
?>
