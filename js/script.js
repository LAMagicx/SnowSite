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
		category : ['pack']

	},
	{
		name : 'Salomon Enfant',
		description : '',
		image : 'salomon-enfant.jpg',
		price : '100',
		category : ['snowboard']

	},
	{

		description : '',
		image : 'salomon-enfant-pack.jpg',
		price : '100',
		category : ['pack']

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
		name : "Foraker 300",
		description : '',
		image : 'foraker.jpg',
		price : '80',
		category : ['boots']
	},
	{
		name : "Maoke 300",
		description : '',
		image : 'moake.jpg',
		price : '80',
		category : ['boots']
	},
	{
		name : 'Burton Freeride/Polyvalent',
		description : '',
		image : 'burton-freeride_poly.jpg',
		price : '100',
		category : ['pack']
	},
	{
		name : "Vans Encore OG",
		description : '',
		image : 'vans.jpg',
		price : '260',
		category : ['boots']
	},
	{
		name : "Burton Ruler Boa",
		description : '',
		image : 'burton.jpg',
		price : '320',
		category : ['boots']
	},
	{
		name : "Jones All/Freestyle",
		description : '',
		image : 'jones-all_freestyle.jpg',
		price : '320',
		category : ['pack']
	},
	{
		name : "Firefly",
		description : '',
		image : 'firefly.jpg',
		price : '90',
		category : ['boots']
	}
]

function addToShop (name, description, image, price) {
	let item = document.createElement("div");
	item.setAttribute('class', 'item');
	let header = document.createElement('h3');
	header.innerText = name;
	let desc = document.createElement('p');
	desc.innerText = description;
	let cost = document.createElement('h4');
	cost.innerText = "Price: " + price;
	let shop = document.getElementById("shop");
	let img = document.createElement('img');
	img.setAttribute('src', "imgs/" + image);
	let imgdiv = document.createElement('div');
	imgdiv.setAttribute('class', 'image-container')
	imgdiv.appendChild(img);
	item.appendChild(header);
	item.appendChild(imgdiv);
	item.appendChild(desc);
	item.appendChild(cost);
	shop.appendChild(item);
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
			addToShop(product.name, product.description, product.image, product.price);
		}
	});
}
