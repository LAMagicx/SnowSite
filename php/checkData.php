<?php

$date = $_POST["date"];
$name = $_POST["firstname"];
$surname = $_POST["surname"];
$mail = $_POST["mail"];
if ($_POST["male"] == true) {
    $gender = "male";
}
if ($_POST["female"] == true) {
    $gender = "female";
}
if ($_POST["other"] == true) {
    $gender = "other";
}
echo $_POST["male"]."\n";
echo $gender."\n";
echo "success";
?>