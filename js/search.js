var btnsearch = document.querySelector(".s");
var opensearch = document.querySelector(".search-input");
var searchbox = document.querySelector(".search-content");
var closesearch = document.querySelector(".close-search");
btnsearch.addEventListener("click", () => {
    if(opensearch.value == ''){
      closesearch.classList.remove("active");
      searchbox.classList.remove("active");
      removesearch()
      opensearch.value=null;
    }else{
      removesearch()
      searchtitle();
    }  
  });

  closesearch.addEventListener("click", () => {
    closesearch.classList.remove("active");
    searchbox.classList.remove("active");
      removesearch()
      opensearch.value=null;
    });

opensearch.addEventListener("click", () => {
  closesearch.classList.add("active");
    searchbox.classList.add("active");
  });
function searchtitle(){//so sanh
        var valuesearch = document.querySelector(".search-input").value;
        var nameitems = document.getElementsByClassName('items');
        for(var i=0;i<nameitems.length;i++){
            var imgsearch = nameitems[i].querySelector(".product-img").src;
            var namesearch = nameitems[i].querySelector(".name").innerText;
            if(namesearch.toUpperCase().indexOf(valuesearch.toUpperCase()) >  -1){
                addsearch(imgsearch,namesearch);
            }
        }
}
function addsearch(imgsearch,namesearch){//add hàng vào ô tim kiem
  
    var searchbox = document.createElement("div");
    searchbox.classList.add("search-box");
    var searchtitems = document.getElementsByClassName("search-content")[0]

    var searchboxcontent = `<img class="search-img" src="${imgsearch}" alt="">
                          <div class="search-product-title">${namesearch} </div>`
    searchbox.innerHTML = searchboxcontent;
    searchtitems.append(searchbox)
}

function removesearch(){//xóa hàng trong ô tìm kiếm
  var searchcontent = document.getElementsByClassName("search-content")[0];
  while (searchcontent.hasChildNodes()){
    searchcontent.removeChild(searchcontent.firstChild);
  }
}