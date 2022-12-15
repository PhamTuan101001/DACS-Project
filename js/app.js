const url = 'https://fakestoreapi.com/products'

async function getapishop() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
getapishop().then(data =>{
  const items = document.getElementsByClassName("items")
  for(var i=0; i< data.length ;i++){
    items[i].innerHTML=`
              <div class="img id=${data[i].id}"><img class="product-img" src="${data[i].image}" alt=""></div>
              <div class="name">${data[i].category}</div>
              <div class="price">${data[i].price}$</div>
              <div class="info">${data[i].description}</div>
              <div class="ratetig" style="display: none;">${data[i].rating.rate}</div>
              <div class="title" style="display: none;">${data[i].title}</div>
              <div class="btnpay">
                <button class="btndetail">chi tiết</button>
                <button class="btnaddcar">add cart</button>
              </div>
     `
  }
})

