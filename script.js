const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 300);
    clickCounter++;
    if (itemNumber - (5 + clickCounter)+ (5 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }

  });
})

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,#menu-bar")

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})
 
const menu =document.querySelector("#menu-bar");
const menulist=document.querySelector(".menu-list")

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    menulist.classList.toggle('active');
});

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    menulist.classList.remove('active');
}