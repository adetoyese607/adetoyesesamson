// Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;


for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");

            }

        }


    })
}


// Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter"),
    lightboxClose = lightbox.querySelector(".lightbox-close");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}
function nextItem() {
    if (itemIndex == totalPortfolioItem - 1) {
        itemIndex = 0;
    }
    else {
        itemIndex++
    }
    changeItem();
}

function prevItem() {
    if (itemIndex == 0) {
        itemIndex = totalPortfolioItem - 1;
    }
    else {
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

// close LightBox
lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }
})


var typed = new Typed(".auto-input", {
    strings: ["Adetoyese Samson"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

var typed = new Typed(".auto-put", {
    strings: ["Web Developer.", "Project Manager."],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true
})

// Aside Navbar
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a=navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j=0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

        showSection(this);

    })
}

function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }

    const target=element.getAttribute("href").split("#")[1];
 document.querySelector("#"+target).classList.add("active")
}

