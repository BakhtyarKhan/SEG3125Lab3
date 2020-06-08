var products = [
	{
		name: "Water",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.50,
		img: "water.png",
		foodGroup: [0,0,0,1]
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.50,
		img: "chicken.png",
		foodGroup: [0,0,1,0]
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 7.50,
		img: "salmon.png",
		foodGroup: [0,0,1,0]
	},
	{
		name: "Beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 5.50,
		img: "beef.png",
		foodGroup: [0,0,1,0]
	},
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.50,
		img: "apple.png",
		foodGroup: [1,0,0,0]
	},
	{
		name: "Banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.50,
		img: "banana.png",
		foodGroup: [1,0,0,0]
	},
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.50,
		img: "broccoli.png",
		foodGroup: [1,0,0,0]
	},
	{
		name: "Onion",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.50,
		img: "onion.png",
		foodGroup: [1,0,0,0]
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 4.50,
		img: "bread.png",
		foodGroup: [0,1,0,0]
	},
	{
		name: "Lays Chips",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.50,
		img: "lay chips.png",
		foodGroup: [0,0,0,1]
	}
];

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian & GlutenFree & Organic") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic & GlutenFree") && (prods[i].organic == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic & Vegetarian") && (prods[i].organic == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

