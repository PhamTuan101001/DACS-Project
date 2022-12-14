var btnsearch = document.querySelector(".s");
var opensearch = document.querySelector(".search-input");
var searchbox = document.querySelector(".search-content");

btnsearch.addEventListener("click", () => {
    if(opensearch.value == ''){
      searchbox.classList.remove("active");
      removesearch()
      return;
    }else{
      removesearch()
      searchtitle();
    }  
  });

opensearch.addEventListener("click", () => {
    searchbox.classList.add("active");
  });
function searchtitle(){
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
function addsearch(imgsearch,namesearch){
  
    var searchbox = document.createElement("div");
    searchbox.classList.add("search-box");
    var searchtitems = document.getElementsByClassName("search-content")[0]

    var searchboxcontent = `<img class="search-img" src="${imgsearch}" alt="">
                          <div class="search-product-title">${namesearch} </div>`
    searchbox.innerHTML = searchboxcontent;
    searchtitems.append(searchbox)
}

function removesearch(){
  var searchcontent = document.getElementsByClassName("search-content")[0];
  while (searchcontent.hasChildNodes()){
    searchcontent.removeChild(searchcontent.firstChild);
  }
}