// ======= Navbar =========

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const linksContainer = document.querySelector(".links-container")

navToggle.addEventListener("click", function(){
  // links.classList.toggle("show-links")
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})

// Fixed Nav

const navBar = document.getElementById("nav")
window.addEventListener("scroll", function(){
  fixedLinks()
})

function fixedLinks(){
  const scrollHeight = window.pageYOffset
  const navHeight = navBar.getBoundingClientRect().height 
  if(scrollHeight > navHeight){
    navBar.classList.add("fixed-nav")
  } else {
    navBar.classList.remove("fixed-nav")
  }
}


//========= Smooth Scroll =========

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(links){
  links.addEventListener("click", function(e){
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1)
    const element = document.getElementById(id)
    //calculate the heights
    const navHeight = navBar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navBar.classList.contains("fixed-nav")
    let position = element.offsetTop - navHeight
    if(!fixedNav){
      position = position - 0
    }
    if(navHeight > 82){
      position = position + containerHeight
    }
    window.scrollTo({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0
  })
})


// ========= About =========

const aboutBtns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", function(e){
  const ids = e.target.dataset.id
  if(ids){
    //remove active from other btns
    aboutBtns.forEach(function(btn){
      btn.classList.remove("active")
      e.target.classList.add("active")
    })
    // hide other articles 
    articles.forEach(function(article){
      article.classList.remove("active")
    })
    const element = document.getElementById(ids)
    element.classList.add("active")
  }
})


// ========= Menu ==========

const menu = [
  {
    id: 1,
    title: "Birria",
    category: "tacos",
    price: 2.49,
    img: "./images/taco-01.jpg",
    desc: `Saucy meat with stew. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: "Shrimp Tacos",
    category: "tacos",
    price: 3.59,
    img: "./images/taco-06.jpg",
    desc: `Flavourful shrimp and fresh toppings. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 3,
    title: "Tacos de pescado",
    category: "tacos",
    price: 2.19,
    img: "./images/taco-05.jpg",
    desc: `Grilled fish with pico de gallo and sour cream. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 4,
    title: "Iced Cola",
    category: "drinks",
    price: 2.35,
    img: "./images/drink-01.jpg",
    desc: `Cola with ice cubes. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 5,
    title: "Chorizo Tacos",
    category: "tacos",
    price: 1.24,
    img: "./images/taco-02.jpg",
    desc: `Ground pork seasoned with chile peppers. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 6,
    title: "Carnitas",
    category: "tacos",
    price: 1.65,
    img: "./images/taco-04.jpg",
    desc: `Tender pork with warm corn tortilla. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 7,
    title: "Margarita",
    category: "drinks",
    price: 4.29,
    img: "./images/drink-04.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 8,
    title: "Tinga Tacos",
    category: "tacos",
    price: 1.53,
    img: "./images/taco-08.jpg",
    desc: `Rostisserie chicken cooked in smoky tomato-chipotle sauce. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 9,
    title: "Barbacoa",
    category: "tacos",
    price: 3.15,
    img: "./images/taco-07.png",
    desc: `Lamb meat topped with leaves. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 10,
    title: "Iced Tea",
    category: "drinks",
    price: 1.69,
    img: "./images/drink-02.jpg",
    desc: `Peach tea with ice cubes. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 11,
    title: "Cabeza Tacos",
    category: "tacos",
    price: 1.25,
    img: "./images/taco-09.jpg",
    desc: `cooked beef tongue with salsa, avocado and cilantro. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 12,
    title: "Mango Smoothie",
    category: "drinks",
    price: 2.99,
    img: "./images/drink-03.jpg",
    desc: `Fresh mango smoothie with lime. I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
]

const menuCenter = document.querySelector(".menu-center")
const btnContainer = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu)
  displayMenuBtns()
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
              <img src="${item.img}" alt="${item.title}" class="photo">
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`
  })
  displayMenu = displayMenu.join("")
  menuCenter.innerHTML = displayMenu
}

function displayMenuBtns(){
  const categories = menu.reduce(function(values,item){
    if(!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  },["all"])
  const categoriesBtn = categories.map(function(category){
    return `<button type="button" class="filter-btn" data-id=${category}>
              ${category}
            </button>`
  }).join("")
  btnContainer.innerHTML = categoriesBtn

  // filter items
  const filterBtns = btnContainer.querySelectorAll(".filter-btn")
  
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category){
          return menuItem
        }
      })
      
      if(category === "all"){
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      }   
    })
  })
}

//========= Discount =========
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const discount = document.querySelector(".discount")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

// let tempDate = new Date()
// let tempYear = tempDate.getFullYear()
// let tempMonth = tempDate.getMonth()
// let tempDay = tempDate.getDate()

// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

let futureDate = new Date(2022, 5, 30, 18, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const month = months[futureDate.getMonth()]
const acutalDate = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]

discount.textContent = `Discount ends on ${weekday}, ${acutalDate} ${month} ${year}, ${hours}:${minutes}pm`

// future time in ms

const futureTime = futureDate.getTime()

function getRemainingTime(){
  const today = new Date().getTime()
  const t = futureTime - today

  //values in ms
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000

  // calculate all values
  let days = t/oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour )
  let minutes = Math.floor((t % oneHour) / oneMinute )
  let seconds = Math.floor((t % oneMinute) / 1000 )

  //set values array 
  const values = [days, hours, minutes, seconds]

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item 
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index])
  })

  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired"> sorry, this discount has expired!</h4>`
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()

// ========= Reviews ===========
//local reviews data
const reviews = [
  {
    id: 1,
    name: "Sophie Abebe",
    img: "./images/user1.jpg",
    text: "The tacos served here, is the reason why I live. Great customer service and easy access to it as a student. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    name: "Caleb Ovadia",
    img: "./images/user2.jpg",
    text: "A good chill spot while you work and get served one of the best tacos in town. Total 5 stars! Kudos to y'all. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa quia quaerat ut doloremque nesciunt dolore quisquam eveniet voluptas nam."
  },
  {
    id: 3,
    name: "Anna Krause",
    img:  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "This is my favorite place, and it's not just the mouth-watering tacos and amazing customer service. I've been coming here every day for years and I still can't get over their tacos. P.S you should try the Barbacoa, it's my favorite."
  },
  {
    id: 4,
    name: "Daniella Evans",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "As a student, easy access to food is essential. But not to worry cos LTS serves the cheapest yet tastiest tacos I've had in my life. I'm always making a stop, to grab one of those crunchy goodness."
  },
]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentPerson = 0

window.addEventListener("DOMContentLoaded", function(){
  showPerson(currentPerson)
})

function showPerson(person){
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  info.textContent = item.text
}

//next btn
nextBtn.addEventListener("click", function(){
  currentPerson++
  if(currentPerson > reviews.length - 1){
    currentPerson = 0
  }
  showPerson(currentPerson)
})

// prev btn
prevBtn.addEventListener("click", function(){
  currentPerson--
  if(currentPerson < 0){
    currentPerson = reviews.length - 1
  }
  showPerson(currentPerson)
})

//======= Footer ==========
// set date
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()
