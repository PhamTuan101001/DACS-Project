getapishop().then(data =>{
let caricon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");

//open cart
caricon.addEventListener("click", () => {
    cart.classList.add("active");
  });
//close cart
closecart.addEventListener("click", () => {
    cart.classList.remove("active");
  });
//
if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded',ready)
} else{
  ready();
}
function ready(){
  var removecartbutton = document.getElementsByClassName('cart-remove')
  console.log(removecartbutton)
  for (var i = 0;i < removecartbutton.length ;i++){
    var button = removecartbutton[i];
    button.addEventListener('click', removecartitem)
  }
  //quantity chanes
  var quantityinputs = document.getElementsByClassName("cart-quantity")
  for(var i=0;i<quantityinputs.length ;i++){
    var input =quantityinputs[i];
    input.addEventListener("change", quantitychanged);
  }
  //add cart
  var addcart = document.getElementsByClassName("btnaddcar")
  for(var i=0; i<addcart.length ;i++){
    var button = addcart[i];
    button.addEventListener("click", addcartclicked);
  }
}

//
function removecartitem(event){
  var buttonclicked = event.target
  buttonclicked.parentElement.remove()
  updatetotal();
}
//quantity chanes
function quantitychanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}
//add cart
function addcartclicked(event){
  var button = event.target
  var shopproducts = button.parentElement.parentElement
  var title = shopproducts.getElementsByClassName("name")[0].innerText;
  var price = shopproducts.getElementsByClassName("price")[0].innerText;
  var producimg = shopproducts.getElementsByClassName("product-img")[0].src;
  
  addproducttocart(title,price,producimg);
  updatetotal();
}
function addproducttocart(title, price,producimg){
  var cartshopbox = document.createElement("div");
  cartshopbox.classList.add("cart-box");
  var cartitems = document.getElementsByClassName("cart-content")[0]
  var cartitemsnames = cartitems.getElementsByClassName("cart-product-title")
  for(var i=0;i<cartitemsnames.length;i++){
    if(cartitemsnames[i].innerText == title){
      alert(" them thanh cong");
      return;
    }
  }


var cartboxcontent = `
  <img class="cart-img" src="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
  <div class="detail-box">
    <div class="cart-product-title"> earbuds</div>
    <div class="cart-price">$25</div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <!--remove cart-->
  <i class="cart-remove fa-solid fa-trash"></i>`;
//
cartshopbox.innerHTML = cartboxcontent;
cartitems.append(cartshopbox)
cartshopbox.getElementsByClassName('cart-remove')[0].addEventListener('click',removecartitem)
cartshopbox.getElementsByClassName('cart-quantity')[0].addEventListener('click',quantitychanged)

}
//updeta total

function updatetotal(){
  var cartconten = document.getElementsByClassName('cart-content')[0]
  var cartboxes = cartconten.getElementsByClassName('cart-box')
  var total = 0;
  for(var i=0; i < cartboxes.length ;i++){
    var cartbox = cartboxes[i]
    var priceelement = cartbox.getElementsByClassName('cart-price')[0]
    var price = parseFloat(priceelement.innerText.replace("$",""));
    var quantityelement = cartbox.getElementsByClassName('cart-quantity')[0]
    var quantity = quantityelement.value
    total = total + price * quantity;
    //
    total = Math.round(total*100)/100;
    document.getElementsByClassName('total-price')[0].innerText = "$" + total;
  }
}
})