<footer>
	<div class="footer">
		<div class="top">
			<div id="site">
				<ul class="nav">
					<p>Navigate</p>
					<li><a class="link" href="index.php">Home</a></li>
					<li><a class="link" href="store.php">Store</a></li>
					<li><a class="link" href="basket.php">Basket</a></li>
				</ul>
			</div>
			<div id="Products">
				<ul class="nav" id="shop-links">
					<p>Products<p>
				</ul>
			</div>
			<div id="info">
				<ul class="nav">
					<p>Info</p>
					<!-- <li><a class="link" href="about.html">About us</a></li> -->
					<li><a class="link" href="contact.php">Contact us</a></li>
				</ul>
			</div>
		</div>
		<div class="bottom">
			<p> © 2022 SnowShop. All Rights Reserved</p>
	</div>
</footer>
<script>

<?php

$conn = mysqli_connect('localhost', 'magic', 'azda', 'SNOW_DB');
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
echo "var PRODUCTS = ". json_encode($rows) . ";\n";

//$js_array = json_encode(json_decode(file_get_contents("cat.json")));
//echo "var PRODUCTS2 = ". $js_array . ";\n";

?>
	let s = new Set();
	for (p of PRODUCTS) {
		s.add(p.category);
		/*
		for (c of p.category) {
			s.add(c);
		}
		*/
	}
	let cats = Array.from(s);
	for (const c of cats) {
		let l = document.createElement("li");
		let a = document.createElement("a");
		a.setAttribute("href", "store.php?category="+c);	
		a.setAttribute("class", "link");
		a.innerText = c;
		l.appendChild(a); 
		document.getElementById("shop-links").appendChild(l);
	}
</script>
