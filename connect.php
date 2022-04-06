<?php

include_once("php/sessions.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Snowboard Shop">
	<meta name="author" content="Samson + Pierrick">
	<meta name="viewport" content="width=device-width, initial-scale=0.5">
	<title>Snow  Store</title>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<div id="container">

	<?php

	include("include/header.php");
	if (!$_SESSION["loggedIn"]) {

	?>
		<div class="main">
			<?php
				if (isset($_GET["create"])) {
			?>
			<h2>Sign up</h2>
			<div id="form">
				<form action="php/createLogin.php" method="POST" >
			<?php
				} else {
			?>
			<h2>Login</h2>
			<div id="form">
				<form action="php/manageLogin.php" method="POST" >
			<?php } ?>
					<div class="contact-form style-input">
					<input type="text" name="username" id="username" placeholder="Enter your username" value="<?php echo $_GET["username"]; ?>" required>
						<label for="username">Username</label>
					</div>
					<div class="contact-form style-input">
						<input type="password" name="password" id="password" placeholder='Enter your password' required>
						<label for="password">Password</label>
					</div>
					<div class="contact-form style-input">
						<?php
							if (isset($_GET["error"])) {
								if (isset($_GET["create"])) {
									echo '<label for="error" id="error" class="error">Username taken</label>';
								} else {
									echo '<label for="error" id="error" class="error">Password Incorrct</label>';
								}
							}
						?>
					</div>
					<div class="contact-form" style="justify-content: center;">
						<button type="submit" style="min-width: 20%;" class="btn effect01" ><span>Sign In</span></button>
					</div>
				</form>
			</div>
		</div>
	<?php
	}else{
	?>
	<div class="main">
		<div id="form">
			<form action="php/disconnect.php">
				<div class="contact-form" style="justify-content: center;">
					<button type="submit" style="min-width: 20%;" class="btn effect01" ><span>Disconnect</span></button>
				</div>
			</form>
		</div>
	</div>
	<?php
	}

	include("include/footer.php");

	?>
	</div>
</body>
<script>
	let params = new URLSearchParams(location.search);
	if (params.get("error")) {
		document.getElementById("error").classList.remove("error");	
	} else {
	}
</script>
</html>

