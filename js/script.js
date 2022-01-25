var PRODUCTS = [
	{
		name : 'product name',
		description : 'this is a description',
		image : 'img1.png',
		price : '10'
	},
	{
		name : 'product name',
		description : 'this is a description',
		image : 'img1.png',
		price : '10'
	},
	{
		name : 'product name',
		description : 'this is a description',
		image : 'img1.png',
		price : '10'
	},
	{
		name : 'product name',
		description : 'this is a description',
		image : 'img1.png',
		price : '10'
	}
]

function addToShop (name, description, image, price) {
	let item = document.createElement("div");
	item.setAttribute('class', 'item');
	let header = document.createElement('h3');
	header.innerText = name;
	let img = document.createElement('img');
	img.setAttribute('src', "imgs/" + image);
	let desc = document.createElement('p');
	desc.innerText = description;
	let cost = document.createElement('h4');
	cost.innerText = "Price: " + price;
	let shop = document.getElementById("shop");
	item.appendChild(header);
	item.appendChild(img);
	item.appendChild(desc);
	item.appendChild(cost);
	shop.appendChild(item);
}

function loadProducts () {
	PRODUCTS.forEach(product => {
		addToShop(product.name, product.description, product.image, product.price);
	});
}
