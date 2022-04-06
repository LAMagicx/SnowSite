function addToShop (name, description, image, price, stock) {
	let item = document.createElement("div");
	item.setAttribute('class', 'item');
	let header = document.createElement('h3');
	header.innerText = name;
	let desc = document.createElement('p');
	desc.innerText = description;
	let cost = document.createElement('h4');
	cost.innerText = "Price: " + price;
	let stockQty = document.createElement('h4');
	stockQty.innerText = "Stock: " + stock;
	stockQty.setAttribute('class', 'stock');
	stockQty.hidden = true;
	let shop = document.getElementById("shop");
	let img = document.createElement('img');
	img.setAttribute('src', "imgs/" + image);
	img.setAttribute('onclick', 'zoomImage(this)')
	let selectQty = document.createElement("div");
	selectQty.setAttribute('class', 'selectQty');
	let minus = document.createElement('button');
	minus.innerText = "-";
	minus.setAttribute('onclick', 'reduceQty(this, ' + stock + ')');
	minus.setAttribute('class', 'effect01');
	let qtyNb = document.createElement('p');
	qtyNb.innerText = '0';
	let plus = document.createElement('button');
	plus.innerText = "+";
	plus.setAttribute('onclick', 'increaseQty(this, ' + stock + ')');
	plus.setAttribute('class', 'effect01');
	let addToCartDiv = document.createElement("div");
	addToCartDiv.setAttribute('class', 'addToCartDiv');
	let addToCart = document.createElement('button');
	addToCart.innerText = 'Add to cart';
	addToCart.setAttribute('class', 'btn effect01');
	addToCart.setAttribute('onclick', 'sendToBasket(this)');
	let imgdiv = document.createElement('div');
	imgdiv.setAttribute('class', 'image-container');
	imgdiv.appendChild(img);
	item.appendChild(header);
	item.appendChild(imgdiv);
	item.appendChild(desc);
	item.appendChild(cost);
	item.appendChild(stockQty);
	item.appendChild(selectQty);
	selectQty.appendChild(minus);
	selectQty.appendChild(qtyNb);
	selectQty.appendChild(plus);
	item.appendChild(addToCartDiv);
	addToCartDiv.appendChild(addToCart);
	shop.appendChild(item);
}

function addToBasket (name, description, image, price, stock) {
	let d = document.createElement("div");
	let item = document.createElement("div");
	item.setAttribute('class', 'item');
	let header = document.createElement('h3');
	header.innerText = name;
	let desc = document.createElement('p');
	desc.innerText = description;
	let cost = document.createElement('h4');
	cost.innerText = "Price: " + price + "€";
	let shop = document.getElementById("basket");
	let img = document.createElement('img');
	img.setAttribute('src', "imgs/" + image);
	img.setAttribute('onclick', 'zoomImage(this)')
	let imgdiv = document.createElement('div');
	imgdiv.setAttribute('class', 'image-container');
	imgdiv.appendChild(img);
	let stockQty = document.createElement('h4');
	stockQty.innerText = "Stock: " + stock;
	stockQty.setAttribute('class', 'stock');
	let close = document.createElement('button');
	close.setAttribute("class", "close-button  effect01");
	close.setAttribute("onclick", "removeItem('"+image+"', this)");
	close.innerText = "x";
	item.appendChild(close);
	item.appendChild(header);
	item.appendChild(imgdiv);
	item.appendChild(stockQty);
	item.appendChild(desc);
	item.appendChild(cost);
	shop.appendChild(item);
}

function removeItem(img, dat) {
	//dat.parentElement.remove();
	let data = new FormData();
	data.append("id", img);
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "php/removeFromBasket.php");
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			addBasket(JSON.parse(this.responseText));
		}
	}
	xhttp.send(data);
}

function addBasket(basket) {
	document.getElementById("basket").innerHTML = "";
	if (document.body.contains(document.getElementById("basket").nextElementSibling)) {
		document.getElementById("basket").nextElementSibling.remove();
	}
	let total = 0;
	PRODUCTS.forEach(product => {
		for (pro of basket) {
			if (pro.ID == product.image) {
				total += pro.STOCK * product.price;
				addToBasket(product.name, product.description, product.image, product.price, pro.STOCK);
			}
		}
	});
	if (total != 0) {
		let d = document.createElement("h3");
		d.innerText = "Total Price: " + String(total) + "€";
		document.getElementById("basket").parentElement.appendChild(d);
	}
}

function loadProducts (categories) {
	shop.innerHTML = "";
	PRODUCTS.forEach(product => {
		let add = false;
		for (cat of categories) {
			if (product.category.includes(cat)) {
				add = true;
			}
		}
		if (add) {
			addToShop(product.name, product.description, product.image, product.price, product.stock);
		}
	});
}

function zoomImage (element) {
	let src = element.src;
	let div = document.getElementById("image-zoomer");
	div.innerHTML = "";
	div.classList.remove("hidden");
	let img = document.createElement('img');
	img.setAttribute("src", src);
	img.setAttribute("onclick", "unzoom()");
	div.setAttribute("onclick", "unzoom()");
	div.appendChild(img);
}

function unzoom() {
	let div = document.getElementById("image-zoomer");
	div.innerHTML = "";
	div.classList.add("hidden");
}

function reduceQty(element, stock) {
	let qty = parseInt(element.nextSibling.innerText);
	if ((stock >= qty) && (qty > 0)) {
		qty--;
		element.nextSibling.innerText = qty;
	}
}

function increaseQty(element, stock) {
	let qty = parseInt(element.previousSibling.innerText);
	if ((stock > qty) && (qty >= 0)) {
		qty++;
		element.previousSibling.innerText = qty;
	}
}

function changeCategory() {
	let cat = [];
	let cats = document.getElementsByClassName("category");
	for (const c of cats) {
		if (c.checked)
			cat.push(c.value);
	}
	loadProducts(cat);
}

function showStock() {
	document.getElementById("showStock").hidden = true;
	document.getElementById("hideStock").hidden = false;
	let stocks = document.getElementsByClassName("stock");
	Array.from(stocks).forEach(element => {
		element.hidden = false;
	});
}

function hideStock() {
	document.getElementById("hideStock").hidden = true;
	document.getElementById("showStock").hidden = false;
	let stocks = document.getElementsByClassName("stock");
	Array.from(stocks).forEach(element => {
		element.hidden = true;
	});
}

function createTicks (cats) {
	let b = document.getElementById("category-container");
	for (cat of cats) {
		let d = document.createElement('div');
		let i = document.createElement('input');
		let l = document.createElement('label');
		d.setAttribute('class', 'cat');
		i.setAttribute('class', 'category');
		i.setAttribute('type', 'checkbox');
		i.setAttribute('id', cat);
		i.setAttribute('name', cat);
		i.setAttribute('onclick', "changeCategory()");
		i.setAttribute('value', cat);
		l.setAttribute('for', cat);
		l.innerText = cat;
		d.appendChild(i);
		d.appendChild(l);
		b.appendChild(d);
	}
}

function clearSession() {
	let data = new FormData();
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "php/disconnect.php");
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let res = this.responseText;
			console.log(res);
		}
	}
	xhttp.send(data);
}

function getSession() {
	let data = new FormData();
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "php/getSessionData.php");
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let res = this.responseText;
			console.log(res);
		}
	}
	xhttp.send(data);
}

function sendToBasket(dat) {
	let img = dat.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousSibling.children[0].src.slice(27);
	let stock = parseInt(dat.parentElement.previousElementSibling.children[1].innerText);
	if (stock > 0) {
		let data = new FormData();
		data.append("id", img);
		data.append("stock", stock);
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", "php/addToBasket.php");
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let res = this.responseText;
				console.log(res);
			}
		}
		xhttp.send(data);
	}
}
