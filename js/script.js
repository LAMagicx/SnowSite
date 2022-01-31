var PRODUCTS = [
	{
		name : 'Burton All Mountain Beginner',
		description : '',
		image : 'burton-all.jpg',
		price : '200',
		category : ['snowboard'],
		stock : '3'
	},
	{
		name : 'Burton All Mountain Expert',
		description : '',
		image : 'burton-custom.jpg',
		price : '500',
		category : ['snowboard'],
		stock : '1'

	},
	{
		name : 'Libtech All Mountain',
		description : '',
		image : 'libtech-all.jpg',
		price : '350',
		category : ['pack'],
		stock : '2'

	},
	{
		name : 'LotusSpell Woman',
		description : '',
		image : 'lotusspell-femme.jpg',
		price : '250',
		category : ['pack'],
		stock : '3'

	},
	{
		name : 'Salomon Child',
		description : '',
		image : 'salomon-enfant.jpg',
		price : '150',
		category : ['snowboard'],
		stock : '4'

	},
	{
		name : 'Salomon Child',
		description : '',
		image : 'salomon-enfant-pack.jpg',
		price : '175',
		category : ['pack'],
		stock : '1'

	},
	{
		name : 'Salomon Freestyle',
		description : '',
		image : 'salomon-freestyle.jpg',
		price : '300',
		category : ['snowboard'],
		stock : '2'

	},
	{
		name : 'Wedze All Mountain',
		description : '',
		image : 'wedze-all.jpg',
		price : '200',
		category : ['snowboard'],
		stock : '2'

	}, 
	{
		name : "Foraker 300",
		description : '',
		image : 'foraker.jpg',
		price : '80',
		category : ['boots'],
		stock : '5'
	},
	{
		name : "Maoke 300",
		description : '',
		image : 'moake.jpg',
		price : '80',
		category : ['boots'],
		stock : '6'
	},
	{
		name : 'Burton Freeride/Polyvalent',
		description : '',
		image : 'burton-freeride_poly.jpg',
		price : '300',
		category : ['pack'],
		stock : '2'
	},
	{
		name : "Vans Encore OG",
		description : '',
		image : 'vans.jpg',
		price : '120',
		category : ['boots'],
		stock : '4'
	},
	{
		name : "Burton Ruler Boa",
		description : '',
		image : 'burton.jpg',
		price : '130',
		category : ['boots'],
		stock : '6'
	},
	{
		name : "Jones All/Freestyle",
		description : '',
		image : 'jones-all_freestyle.jpg',
		price : '370',
		category : ['pack'],
		stock : '2'
	},
	{
		name : "Firefly",
		description : '',
		image : 'firefly.jpg',
		price : '90',
		category : ['boots'],
		stock : '4'
	}
]

function addToShop (name, description, image, price, stock) {
	let item = document.createElement("div");
	item.setAttribute('class', 'item');
	let header = document.createElement('h3');
	header.innerText = name;
	let desc = document.createElement('p');
	desc.innerText = description;
	let cost = document.createElement('h4');
	cost.innerText = "Price: " + price;
	let qty = document.createElement('h4');
	qty.innerText = "Stock: " + stock;
	qty.setAttribute('class', 'stock');
	qty.hidden = true;
	let shop = document.getElementById("shop");
	let img = document.createElement('img');
	img.setAttribute('src', "imgs/" + image);
	img.setAttribute('onclick', 'zoomImage(this)')
	let imgdiv = document.createElement('div');
	imgdiv.setAttribute('class', 'image-container');
	imgdiv.appendChild(img);
	item.appendChild(header);
	item.appendChild(imgdiv);
	item.appendChild(desc);
	item.appendChild(cost);
	item.appendChild(qty);
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
