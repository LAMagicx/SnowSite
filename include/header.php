<header>
	<div class="header">
		<div class="left">
			<a href="index.php"><img id="logo" src="imgs/logo.png" alt="logo is here"></a>
		</div>
		<div class="right">
			<ul id="nav">
				<li><a class="link" href="/">Home</a></li>
				<li><a class="link" href="store.php">Store</a></li>
				<?php
				if (isset($_SESSION["user"])) {
					echo '<li><a class="link" href="basket.php">Basket</a></li>';
				}
				?>
				<!-- <li><a class="link" href="about.php">About</a></li> -->
				<li><a class="link" href="contact.php">Contact</a></li>
				<li><a class="link" href="connect.php">
				<?php
				if (isset($_SESSION["user"])) {
					echo "Disconnect";
				}else{
					echo "Connect";
				}
				?>
				</a></li>
			</ul>
		</div>
	</div>
</header>
