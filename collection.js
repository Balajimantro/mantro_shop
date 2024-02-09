var productContainer = document.getElementById("products")
var search = document.getElementById("search-item");
var productlist = productContainer.querySelectorAll("div");

 search.addEventListener("keyup", function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count=count+1){
        var productname = productlist[count].querySelector("p").textContent;

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }else{
            productlist[count].style.display="block"
        }

    }
})

var sidenav = document.querySelector(".side-navbar");

function shownav(){
    sidenav.style.left="0"
}

function closenav(){

    sidenav.style.left="-60%"
}