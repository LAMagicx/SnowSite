<footer>
	<div class="footer">
		<div class="top">
			<div id="site">
				<ul class="nav">
					<p>Navigate</p>
					<li><a class="link" href="index.html">Home</a></li>
					<li><a class="link" href="store.html">Store</a></li>
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
					<li><a class="link" href="contact.html">Contact us</a></li>
				</ul>
			</div>
		</div>
		<div class="bottom">
			<p> © 2022 SnowShop. All Rights Reserved</p>
	</div>
</footer>
<script>

<?php

$js_array = json_encode(json_decode(file_get_contents("cat.json")));
echo "var PRODUCTS = ". $js_array . ";\n";

?>

	let s = new Set();
	for (p of PRODUCTS) {
		for (c of p.category) {
			s.add(c);
		}
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
