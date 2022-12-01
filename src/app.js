const loginBtn = document.querySelector(".userLogin");
const userBtn = document.querySelector(".user");
userBtn.addEventListener("click", () => {
  loginBtn.innerHTML = `
          <div class="loginUser">
            <button class="btnLogin">Đăng nhập</button>
          </div>
      `;
  const btnLogin = document.querySelector(".btnLogin");
  const btnSignin = document.querySelector(".btnSignin");
  const display_login = document.querySelector(".display_login");
  const display_signin = document.querySelector(".display_signin");
  btnLogin.addEventListener("click", () => {
    display_login.innerHTML = `
    <div class="modal_login login">
      <div class="wapper">
        <div class="wapper-heading">
          <h1>Login</h1>
        </div>
        <form>
          <div class="input__field">
            <input id="username" type="text" placeholder="User Name" />
          </div>
          <div class="input__field">
            <input id="password" type="password" placeholder="Password" />
          </div>
          <button type="button" class="btn btn-login">Đăng nhập</button>
          <p>
            bạn chưa có tài khoản đăng ký tại <button type="button" class="btnSignin"><b>đây</b></button>
          </p>
        </form>
      </div>
    </div>
      `;

    btnSignin.addEventListener("click", () => {
      display_login.removeChild(display_login);
      display_signin.innerHTML = `
      <div class="modal_signin signin">
        <div class="wapper">
          <div class="wapper-heading">
            <h1>Đăng ký</h1>
          </div>
          <form>
            <div class="input__field">
              <input id="username" type="text" placeholder="User Name" />
            </div>
  
            <div class="input__field">
              <input id="email" type="text" placeholder="Email" />
            </div>
            <div class="input__field">
              <input id="password" type="password" placeholder="Password" />
            </div>
            <div class="input__field">
              <input
                id="password"
                type="password"
                placeholder="xác nhận Password"
              />
            </div>
            <button type="button" class="btn btn-signup">Đăng ký</button>
          </form>
        </div>
      </div>
        `;
    });
  });
});

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  x = window.pageYOffset;
  if (x > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length;
let index = 0;

imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
  dotItem[index].addEventListener("click", function () {
    slider(index);
  });
});
function imgSlide() {
  index++;
  if (index >= imgNumber) {
    index = 0;
  }
  slider(index);
}
function slider(index) {
  imgContainer.style.left = "-" + index * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotItem[index].classList.add("active");
}
setInterval(imgSlide, 5000);

function toast({ title = "", message = "", type = "", duration = 5000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    //  auto remove toast
    const autoTimeOut = setTimeout(function () {
      main.removeChild(toast);
    }, duration);

    //  remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoTimeOut);
      }
    };

    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.3s, outLine linear 1s ${delay}s forwards;`;
    toast.innerHTML = `
                <div class="toast__icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `;
    main.appendChild(toast);
  }
}
function showSuccess() {
  toast({
    title: "Thành Công",
    message: "Bạn Đã Mua Hàng Thành Công",
    type: "success",
    duration: 5000,
  });
}
