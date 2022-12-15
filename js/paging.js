let thispage = 1;
let limit = 5;
let list = document.querySelectorAll('.container .items');
loaditem()
function loaditem(){
    let beginget = limit * (thispage - 1);
    let endget = limit * thispage - 1;
    for(var i=0 ;i<list.length ;i++){
        if(i >= beginget && i <= endget){
            list[i].style.display = 'block';
        }else{
            list[i].style.display = 'none';
        }
    }
    listpage();
}
function listpage(){
    let count = Math.ceil(list.length/limit);
    document.querySelector(".listpage").innerHTML = "";
    for(var i=1 ;i <= count; i++){
        let newpage = document.createElement('li');
        newpage.innerText = i;
        if(i == thispage){
            newpage.classList.add('active');
        }
        newpage.setAttribute('onclick',"changepage("+ i +")");
        document.querySelector('.listpage').appendChild(newpage);

    }
}
function changepage(i){
    thispage = i;
    loaditem();
}