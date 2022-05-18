<?php

include "DB.php";

if (!$conn) {
	header("Location: /");
	die("Connection to database failed: " . mysqli_connect_error());
}
$data = $conn->query("SELECT * FROM CATS WHERE stock > 0");
$rows = array();
if ($data->num_rows > 0) {
	while ($r = $data->fetch_assoc()) {
		$rows[] = $r;
	}
}
echo json_encode($rows);

?>
