getapishop().then((data) => {
  const priceascending = document.querySelector(".price-ascending");
  const pricedecrease = document.querySelector(".price-decrease");
  priceascending.addEventListener("click", () => {
    const items = document.getElementsByClassName("items");
    data.sort(function (a, b) {
      return a.price - b.price;
    });
    for (var i = 0; i < 20; i++) {
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
  pricedecrease.addEventListener("click", () => {
    data.sort(function (a, b) {
      return b.price - a.price;
    });
    const items = document.getElementsByClassName("items");
    for (var i = 0; i < 20; i++) {
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
});
