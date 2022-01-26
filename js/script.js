var PRODUCTS = [
	{
		name : 'Burton all mountain',
		description : '',
		image : 'burton-all.jpg',
		price : '100',
		category : ['snowboard']
	},
	{
		name : 'Burton custom',
		description : '',
		image : 'burton-custom.jpg',
		price : '100',
		category : ['snowboard']

	},
	{
		name : 'Libtech all mountain',
		description : '',
		image : 'libtech-all.jpg',
		price : '100',
		category : ['snowboard']

	},
	{
		name : 'LotusSpell femme',
		description : '',
		image : 'lotusspell-femme.jpg',
		price : '100',
		category : ['snowboard', 'pack']

	},
	{
		name : 'Salomon Enfant',
		description : '',
		image : 'salomon-enfant.jpg',
		price : '100',
		category : ['snowboard']

	},
	{
		name : 'Salomon Enfant pack',
		description : '',
		image : 'salomon-enfant-pack.jpg',
		price : '100',
		category : ['snowboard', 'pack']

	},
	{
		name : 'Salomon Freestyle',
		description : '',
		image : 'salomon-freestyle.jpg',
		price : '100',
		category : ['snowboard']

	},
	{
		name : 'Wedze all',
		description : '',
		image : 'wedze-all.jpg',
		price : '100',
		category : ['snowboard']

	},
	{
		name : 'Burton Freeride/Polyvalent',
		description : '',
		image : 'burton-freeride_poly.jpg',
		price : '100',
		category : ['snowboard', 'pack']
	},
	{
		name : 'Jones All/Freestyle',
		description : '',
		image : 'burton-all.jpg',
		price : '100',
		category : ['snowboard', 'pack']
	},
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
