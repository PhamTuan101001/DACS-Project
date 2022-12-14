getapishop().then(data =>{
    var detailbtn = document.getElementsByClassName("btndetail")
    let detail = document.querySelector(".detail");


  if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded',addditaill)
} else{
    addditaill();
}
  function addditaill(){
    for(var i=0; i<detailbtn.length ;i++){
      var button = detailbtn[i];
      button.addEventListener("click", activedetail);
     }
  }
  function activedetail(event){
    detail.classList.add("active");
    var button = event.target
    var detatilall = button.parentElement.parentElement
    var category = detatilall.getElementsByClassName("name")[0].innerText;
    var price = detatilall.getElementsByClassName("price")[0].innerText;
    var description = detatilall.getElementsByClassName("info")[0].innerText;
    var producimg = detatilall.getElementsByClassName("product-img")[0].src;
    var rate = detatilall.getElementsByClassName("ratetig")[0].innerText;
    var title = detatilall.getElementsByClassName("title")[0].innerText;
    console.log(category,price,producimg,description,rate)
    adddetail(category,price,producimg,description,rate,title)
  }
  function adddetail(category,price,producimg,description,rate,title){
        detail.innerHTML=`<h2>Chi tiết</h2>
        <i class="clossig fa-solid fa-xmark" id="close-detail"></i>
        <img class="detail-img" src="${producimg}" alt="">
        <ul>
          <li>title:${title}</li>
          <li>price: ${price}$</li>
          <li>description:${description}</li>
          <li>category:${category}</li>
          <li>rating:${rate} <i class="rating fa-solid fa-star"></i></li>
        </ul>`
  }
  
})