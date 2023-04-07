// box-transaction
var nocontent = document.querySelector(".no-content");
var icon_smile = document.querySelector(".icon-smile");
var icon_cry = document.querySelector(".icon-cry");
var have_content = document.querySelector(".have-content div");
var transaction_contentBox = document.querySelector(".transaction_content-box");
if(have_content){
    nocontent.classList.add('hide');
}

function toggleIconTrans(){
    icon_cry.classList.toggle('hide');
    icon_smile.classList.toggle('hide');
}

transaction_contentBox.addEventListener('mouseover', toggleIconTrans);
transaction_contentBox.addEventListener('mouseout', toggleIconTrans);

//icon-menu
var iconMenu = document.querySelector('.icon-menu');
var account = document.querySelector('.account');

function toggleAccount(){
    account.classList.toggle('hide')
}

iconMenu.addEventListener('click', toggleAccount);
account.addEventListener('click', toggleAccount);

//add-trans
var addTrans = document.querySelector('.add-trans');
var btnAdd = document.querySelector('.btn-theme');

function toggleAddTrans(){
    addTrans.classList.toggle('hide');
}

btnAdd.addEventListener("click",toggleAddTrans);
addTrans.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) toggleAddTrans();
})
