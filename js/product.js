const home = document.querySelector(".section_product");
const product = document.querySelector(".signin-product");
const btnImg = document.querySelectorAll(".img");
function getProduct(id) {
  const ID = id - 1;
  getapishop().then((data) => {
    product.innerHTML = `
        <div class="product-container">
        <div class="product-top">
          <p>Home</p><span>&#10230;</span><p>${data[ID].category}</p>
        </div>
        <div class="product-content">
          <div class="product-contentLeft">
            <div class="product-contentLeft-bigImg">
              <img src="${data[ID].image}" alt="">
      
            </div>
            <div class="product-contentLeft-smallImg">
              <img src="${data[ID].image}" alt="">
              <img src="${data[ID].image}" alt="">
              <img src="${data[ID].image}" alt="">
              <img src="${data[ID].image}" alt="">
            </div>
          </div>
          <div class="product-contentRight">
            <div class="product-contentRight-productName">
              <h3>${data[ID].category}</h3>
              <p>MSP: #15151</p>
      
            </div>
            <div class="product-contentRight-productPrice">
              <p>${data[ID].price}$</p>
            </div>
            <div class="product-contentRight-productDetail">
              <p>${data[ID].description}</p>
            </div>
            <div class="product-contentRight-productButton">
              <button><i class="fa-sharp fa-solid fa-money-bill"></i><p>Mua ngay</p></button>
              <button ><i class="cart-icon fa-solid fa-cart-shopping"></i><p>them vao gio hang</p></button>
            </div>
            
      
          </div>
        </div>
      </div>
      <div class="policy">
        <h3>shop cam kết về sản phẩm:</h3>
        <p>1. Sản phẩm giống mô tả và hình ảnh thật 100% của Shop giữ bản. quyền hình ảnh. <br />
          2. Đảm bảo vải chất lượng sản phẩm 100%. <br/>  
          3. Sản phẩm được kiểm tra cẩn thận khi gói hàng giao cho Quý Khách. <br />
          4. Hoàn tiền nếu sản phẩm không giống với mô tả.</p>
      </div>
      `;
  });
  home.setAttribute("style", "display:none;");
  product.setAttribute("style", "display:block;");
}

function getHone() {
  product.setAttribute("style", "display:none;");
  home.setAttribute("style", "display:block;");
}
