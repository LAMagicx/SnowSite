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

	<?php

	include("include/header.php");

	?>
		<div class="main">
			<div id="form">
				<form action="" method="" >
					<div class="contact-form style-input">
						<input type="text" name="username" id="username" placeholder="Enter your username" required>
						<label for="username">Username</label>
					</div>
					<div class="contact-form style-input">
						<input type="password" name="password" id="password" placeholder='Enter your password' required>
						<label for="password">Password</label>
					</div>
					<div class="contact-form" style="justify-content: center;">
						<input type="submit" value="Log In" style="min-width: 20%;">
					</div>
				</form>
			</div>
		</div>
	<?php

	include("include/footer.php");

	?>
	</div>
</body>
</html>

