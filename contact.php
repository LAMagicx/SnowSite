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
				<form >
					<div class="contact-form style-input">
						<input type="date" name="date" id="date" required>
						<label for="date" class="perm-up">Birth date</label>
					</div>
					<div class="contact-form style-input">
						<input type="text" name="firstname" id="firstname" required>
						<label for="firstname">First name</label>
					</div>
					<div class="contact-form style-input">
						<input type="text" name="name" id="surname" required>
						<label for="name">Surname</label>
					</div>
					<div class="contact-form style-input">
						<input type="mail" name="mail" id="mail" required>
						<label for="mail">Email</label>
					</div>
					<div class="contact-form">
						<label for="gender">Gender</label>
						<div class="radio">
							<label for="male">Male</label>
							<input type="radio" name="gender" id="male" value="Male" checked>
						</div>
						<div class="radio">
							<label for="female">Female</label>
							<input type="radio" name="gender" id="female" value="Female">
						</div>
						<div class="radio">
							<label for="other">Other</label>
							<input type="radio" name="gender" id="other" value="Other">
						</div>
					</div>
					<div class="contact-form">
						<label for="job">Job</label>
						<select id="jobs" name="jobs">
						</select>
					</div>
					<div class="contact-form style-input">
						<input type="text" name="subject" id="subject" required>
						<label for="subject">Subject</label>
					</div>
					<div class="contact-form" style="justify-content:normal;">
						<label for="content">Content</label>
						<textarea name="content" id="content" rows="1" cols="38" placeholder="Enter your message here" required style="margin-left:3em;"></textarea>
					</div>
					<div class="contact-form" style="justify-content: center;">
						<button type="button" onclick="checkValues()" style="min-width: 20%;" class="btn effect01" ><span>Send</span></button>
					</div>
				</form>
			</div>
		</div>
	<?php

	include("include/footer.php");

	?>
	</div>
</body>
<script src="js/jobs.js"></script>
</html>
