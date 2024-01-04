let list = document.querySelector('.product-right-bottom'),
	circle = document.querySelectorAll('.fa-circle'),
	li = document.querySelectorAll('.list'),
	bookType = document.querySelectorAll('.book-type')
homeBg = document.querySelector('.img2')

let products = [
	{
		id: 0,
		type: 'modern',
		title: 'big magic',
		author: 'donna karan',
		image: '1.PNG',
		price: 20.0,
	},
	{
		id: 1,
		type: 'classic',
		title: 'i was born width music',
		author: 'dolce & cabanna',
		image: '2.PNG',
		price: 200.0,
	},
	{
		id: 2,
		type: 'biography',
		title: "i'm glad my mom died",
		author: 'jennette mcCurdy',
		image: '3.PNG',
		price: 21.99,
	},
	{
		id: 3,
		type: 'detective',
		title: 'Warrior Soul: A Tye Caine Wilderness Mystery',
		author: 'David Barbur',
		image: '4.PNG',
		price: 4.99,
	},
	{
		id: 4,
		type: 'fantasy',
		title: 'The Mountain in the Sea: A Novel',
		author: 'Ray Nayler',
		image: '5.PNG',
		price: 18.0,
	},
	{
		id: 5,
		type: 'cookbook',
		title: 'Sweet Enough: A Dessert Cookbook',
		author: 'Alison Roman',
		image: '6.PNG',
		price: 32.55,
	},
	{
		id: 6,
		type: 'fairy tale',
		title: 'Fairy Tale',
		author: 'Stephen King',
		image: '7.PNG',
		price: 30.23,
	},
	{
		id: 7,
		type: 'fiction',
		title: 'Flash Fiction America: 73 Very Short Stories',
		author: 'John DuFresne , et al.',
		image: '8.PNG',
		price: 15.76,
	},
	{
		id: 8,
		type: 'horror',
		title: 'Taaqtumi: An Anthology of Arctic Horror Stories',
		author: 'Thomas Anguti Johnston , et al.',
		image: '9.PNG',
		price: 15.76,
	},
	{
		id: 9,
		type: 'historical fiction',
		title:
			'The Things We Cannot Say: A WWII Historical Fiction Novel (Original)',
		author: 'Kelly Rimmer',
		image: '10.PNG',
		price: 15.8,
	},
	{
		id: 10,
		type: 'history',
		title: 'The Secret History',
		author: 'Donna Tartt',
		image: '11.PNG',
		price: 16.74,
	},
	{
		id: 11,
		type: 'romance',
		title: 'Daughter of the Moon Goddess: A Fantasy Romance Novel',
		author: 'Sue Lynn Tan',
		image: '12.PNG',
		price: 16.73,
	},
	{
		id: 12,
		type: 'modern',
		title: 'Women Without Men: A Novel of Modern Iran',
		author: 'Shahrnush Parsipur , et al.',
		image: '13.PNG',
		price: 14.83,
	},
	{
		id: 13,
		type: 'classic',
		title: 'War and Peace',
		author: 'Leo Tolstoy , et al.',
		image: '14.PNG',
		price: 20.46,
	},
	{
		id: 14,
		type: 'biography',
		title: 'Barkley: A Biography (Original)',
		author: 'Timothy Bella',
		image: '15.PNG',
		price: 27.89,
	},
	{
		id: 15,
		type: 'detective',
		title: 'The Detective Up Late',
		author: 'Adrian McKinty',
		image: '16.PNG',
		price: 25.1,
	},
	{
		id: 16,
		type: 'fantasy',
		title: 'Legends & Lattes: A Novel of High Fantasy and Low Stakes',
		author: 'Travis Baldree',
		image: '17.PNG',
		price: 16.73,
	},
	{
		id: 17,
		type: 'cookbook',
		title: 'The Everlasting Meal Cookbook: Leftovers A-Z',
		author: 'Tamar Adler , et al.',
		image: '18.PNG',
		price: 32.55,
	},
	{
		id: 18,
		type: 'fairy tale',
		title: 'Fairy Tales for Fearless Girls',
		author: 'Anita Ganeri , et al.',
		image: '19.PNG',
		price: 18.59,
	},
	{
		id: 19,
		type: 'fiction',
		title: 'Wonderbook (Revised and Expanded)',
		author: 'Jeff VanderMeer',
		image: '20.PNG',
		price: 25.58,
	},
	{
		id: 20,
		type: 'horror',
		title: 'Nightmare Fuel: The Science of Horror Films',
		author: 'Nina Nesseth',
		image: '21.PNG',
		price: 24.17,
	},
	{
		id: 21,
		type: 'historical fiction',
		title: 'Falconland: A Novel of Medieval',
		author: 'Reggie Connell',
		image: '22.PNG',
		price: 14.99,
	},
	{
		id: 22,
		type: 'history',
		title: 'We Are the Land: A History of Native California',
		author: 'Damon B. Akins , et al.',
		image: '23.PNG',
		price: 27.85,
	},
	{
		id: 23,
		type: 'romance',
		title: 'Rough Around the Hedges: an Uncanny Romance Novel',
		author: 'Lish McBride',
		image: '24.PNG',
		price: 16.73,
	},
]

;(function initApp() {
	products.forEach((value, key) => {
		let newDiv = document.createElement('div')
		newDiv.classList.add('book-card')
		newDiv.setAttribute('data-item', `${value.type}`)
		newDiv.innerHTML = `
    <div class="book-image">
        <img src="./assets/Images/${value.image}" alt="" class="book-imagish" />
    </div>
    <div class="book-details">
        <div class="book-type">${value.type}</div>
        <div class="book-title">${value.title}</div>
        <div class="book-author">${value.author}</div>
        <div class="book-price">
            <span class="book-price-symbol">$</span>${value.price}
        </div>
        <div class="buttons">
            <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
            <i class="ri-heart-line" id="heart"></i>
            <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
            <div class="inOption">
                <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
            </div>
        </div>
    </div>
        `

		list.appendChild(newDiv)
	})
})()

for (let index = 0; index < circle.length; index++) {
	li[index].addEventListener('click', function () {
		for (let h = 0; h < li.length; h++) {
			li[h].classList.remove('active')
		}
		this.classList.add('active')
		let dataFilter = li[index].getAttribute('data-filter')
		bookType.forEach((item, index) => {
			console.log(index)
		})
		for (let k = 0; k < products.length; k++) {
			let box = list.querySelectorAll('.book-card')
			box[k].classList.remove('show')
			box[k].classList.add('hide')
			if (products[k].type == dataFilter || dataFilter == 'all') {
				box[k].classList.remove('hide')
				box[k].classList.add('show')
			} else {
				console.log('error')
			}
		}
	})
}

let btn = document.getElementById('click')

btn.addEventListener('click', () => {
	let mood = document.getElementById('mood')
	if (mood.getAttribute('href') == './CSS/style.css') {
		mood.href = './CSS/black.css'
	} else {
		mood.href = './CSS/style.css'
	}
})







const slides = document.querySelectorAll('.slide')
slides.forEach((slide, indx) => {
	slide.style.transform = `translateX(${indx * 100}%)`
})
const nextSlide = document.querySelector('.btn-next')
let curSlide = 0
let maxSlide = slides.length - 1;
const prevSlide = document.querySelector('.btn-prev')

nextSlide.addEventListener('click', function () {
	if (curSlide === maxSlide) {
		curSlide = 0
	} else {
		curSlide++
	}
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
	})
})

prevSlide.addEventListener('click', function () {
	if (curSlide >= maxSlide) {
		curSlide = 0
	} else {
		curSlide++
	}
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
	})
})



let mySearch = document.getElementById('mySearch');
let bookCards = document.querySelectorAll('.book-card');

mySearch.addEventListener("keyup", function() {
	let input = mySearch.value.toUpperCase(),
		bookTitle = document.querySelectorAll(".book-title");

	bookTitle.forEach((item, index) => {
		if(item.innerHTML.toUpperCase().indexOf(input) > -1){
			bookCards[index].style.display = 'block'
		}else {
			bookCards[index].style.display = 'none'
		}
	})
})


let active1 = document.querySelector("ul");
let btn3 = document.querySelector("#btn");

btn3.addEventListener("click", function () {
	active1.classList.toggle('active1');
	console.log("clicked");
})