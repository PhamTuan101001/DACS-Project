const items = document.getElementsByClassName("items")
const url = 'https://fakestoreapi.com/products'

async function getapishop() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
  
}
getapishop().then(data =>{
  const items = document.getElementsByClassName("items")
  for(var i=0; i< 18 ;i++){
    items[i].innerHTML=`
              <div class="img"><img class="product-img" src="${data[i].image}" alt=""></div>
              <div class="name">${data[i].category}</div>
              <div class="price">${data[i].price}$</div>
              <div class="info">${data[i].description}</div>
              <div class="btnpay">
                <button class="btnbuy">buy now</button>
                <button class="btnaddcar">add cart</button>
              </div>
     `
  }
})
