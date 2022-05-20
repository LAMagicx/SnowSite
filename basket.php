<?php

include_once("php/sessions.php");

?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="description" content="snowboard shop">
	<meta name="author" content="samson + pierrick">
	<meta name="viewport" content="width=device-width, initial-scale=0.5">
	<title>Snow Store</title>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<div id="container">
	<?php

	include("include/header.php");

	?>
		<div class="main">
			<div id="basket">
    		</div>
		</div>
	<?php

	include("include/footer.php");

	?>
	</div>
	<div id="image-zoomer" class="hidden">
	</div>
</body>
<script src="js/script.js"></script>
<script>
<?php
echo "var BASKET = " . json_encode($_SESSION["basket"]) . ";\n";
?>
addBasket(BASKET);
</script>
</html>


