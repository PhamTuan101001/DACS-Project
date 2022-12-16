const url = "https://fakestoreapi.com/products";

async function getapishop() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
getapishop().then((data) => {
  const items = document.getElementsByClassName("items");
  for (let i = 0; i < 20; i++) {
    items[i].innerHTML = `
              <button class="img id=${data[i].id}" onclick="getProduct(${data[i].id})" type="button"><img class="product-img" src="${data[i].image}" alt=""></button>
              <div class="name">${data[i].category}</div>
              <div class="price">${data[i].price}$</div> 
              <div class="info">${data[i].description}</div>
              <div class="ratetig" style="display: none;">${data[i].rating.rate}</div>
              <div class="title" style="display: none;">${data[i].title}</div>
              <div class="btnpay">
                <button class="btndetail">chi tiết</button>
                <button class="btnaddcar">add cart</button>
              </div>
     `;
  }
});
