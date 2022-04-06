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
	<title>Snow Store</title>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<div id="container">
	<?php

	include("include/header.php");

	?>
		<div class="main">
			<div id="category-container">
				<label>Categories: </label>
			</div>
			<div id="shop">
    		</div>
			<div id="showStockOrNot">
				<button class="btn effect01" id="showStock" onclick="showStock()">Show Stock</button>
				<button class="btn effect01" id="hideStock" onclick="hideStock()" hidden>Hide Stock</button>
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
	createTicks(cats);
	let params = new URLSearchParams(location.search);
	if (params.get("category")) {
		document.getElementById(params.get("category")).checked=true;
	} else {
		for (const cat of cats) {
			document.getElementById(cat).checked = true;
		}
	}
	changeCategory();
</script>
</html>

