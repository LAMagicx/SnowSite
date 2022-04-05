<?php

$date = $_POST["date"];
$name = $_POST["firstname"];
$surname = $_POST["surname"];
$mail = $_POST["mail"];
if ($_POST["male"] == "true") {
    $gender = "male";
} else if ($_POST["female"] == "true") {
    $gender = "female";
} else if ($_POST["other"] == "true") {
    $gender = "other";
}
$jobs = $_POST["jobs"];
$subject = $_POST["subject"];
$text = $_POST["content"];

if (isset($name) && !preg_match("/^[a-zA-Z-' ]*$/",$name)) {
    $nameErr = "Only letters and white space allowed for the name.";
}
if (isset($mail) && !filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $emailErr = "Invalid email format.";
}
if (isset($surname) && !preg_match("/^[a-zA-Z-' ]*$/",$surname)) {
    $surnameErr = "Only letters and white space allowed for the surname.";
}
if (isset($text) && !preg_match("/^[a-zA-Z0-9- ]*$/",$text)) {
    $textErr = "Only letters, numbers and white space allowed for the text.";
}
if (isset($subject) && !preg_match("/^[a-zA-Z0-9- ]*$/",$subject)) {
    $subjectErr = "Only letters, numbers and white space allowed for the subject.";
}
if (isset($jobs) && !preg_match("/^[a-zA-Z0-9- ]*$/",$jobs)) {
    $jobsErr = "Only letters, numbers and white space allowed for the jobs.";
}
if (isset($date) && !preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/",$date) || time() < strtotime($date)) {
    $dateErr1 = "Invalid date format";
} else if (isset($date) && time() < strtotime("+18 years", strtotime($date))) {
    $dateErr2 = "You must be at least 18 years old to register.";
}

if (isset($nameErr) || isset($surnameErr) || isset($emailErr) || isset($textErr) || isset($subjectErr) || isset($jobsErr) || isset($dateErr1) || isset($dateErr2)) {
    echo "Error(s): ".$nameErr." ".$surnameErr." ".$emailErr." ".$textErr." ".$subjectErr." ".$jobsErr." ".$dateErr1." ".$dateErr2;
} else {
    echo "Success";
}
?>