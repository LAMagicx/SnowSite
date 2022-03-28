<?php

include("php/sessions.php");

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
<script>
<?php
echo "console.log(".$_SESSION["loggedIn"].");";
?>
</script>

	<?php

	include("include/header.php");
	if (!$_SESSION["loggedIn"]) {

	?>
		<div class="main">
			<div id="form">
				<form action="php/manageLogin.php" method="POST" >
					<div class="contact-form style-input">
						<input type="text" name="username" id="username" placeholder="Enter your username" required>
						<label for="username">Username</label>
					</div>
					<div class="contact-form style-input">
						<input type="password" name="password" id="password" placeholder='Enter your password' required>
						<label for="password">Password</label>
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
</html>

