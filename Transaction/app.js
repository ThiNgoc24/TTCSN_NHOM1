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
    account.classList.toggle('hide');
}

iconMenu.addEventListener('click', toggleAccount);
account.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) toggleAccount();
});

//add-trans
var addTrans = document.querySelector('.add-trans');
var btnAdd = document.querySelector('.btn-theme');
var btnCancel = document.querySelector('.btn-cancel');
function toggleAddTrans(){
    addTrans.classList.toggle('hide');
}

function noneSelectCategory(){
    if(!selectCategory.classList.contains('hide'))
        selectCategory.classList.add('hide');
}

function noneSelectWallet(){
    if(!selectWallet.classList.contains('hide'))
        selectWallet.classList.add('hide');
}

function noneSelectInOut(){
    if(!selectInOut.classList.contains('hide'))
        selectInOut.classList.add('hide');
}

btnAdd.addEventListener("click",toggleAddTrans);
btnCancel.addEventListener('click', toggleAddTrans);
addTrans.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) {
        toggleAddTrans();
        noneSelectCategory();
        noneSelectWallet();
        noneSelectInOut();
    }
})

//Select Expense/Income
var group0 = document.querySelector('.box-trans .group0');
var selectInOut = document.querySelector('.select-inout');
var selected0 = document.querySelector('.selected0');
var options0 = document.querySelectorAll('.select-inout .option');

function toggleSelectInOut(){
    selectInOut.classList.toggle('hide');
}

group0.addEventListener('click', () => {
    toggleSelectInOut();
    noneSelectCategory();
    noneSelectWallet();
});

options0.forEach((option) => {
    option.addEventListener('click', () => {
        selected0.innerHTML = option.querySelector("label").innerHTML;
        selectInOut.classList.add('hide');
    })
})

//Select-Wallet
var group1 = document.querySelector('.box-trans .group1');
var selected1 = document.querySelector('.selected1');
var selectWallet= document.querySelector('.select-wallet');
var options1 = document.querySelectorAll('.select-wallet .option');

function toggleSelectWallet(){
    selectWallet.classList.toggle('hide');
}

group1.addEventListener('click', () => {
    toggleSelectWallet();
    noneSelectCategory();
    noneSelectInOut();
});

options1.forEach((option) => {
    option.addEventListener('click', () => {
        selected1.innerHTML = option.querySelector("label").innerHTML;
        selectWallet.classList.add('hide');
    })
})

//Select Category
var group2 = document.querySelector('.box-trans .group2');
var selected2 = document.querySelector('.selected2');
var options2 = document.querySelectorAll('.select-category .option');
var selectCategory = document.querySelector('.select-category');

function toggleSelectCategory(){
    selectCategory.classList.toggle('hide');
}

group2.addEventListener('click', ()=> {
    toggleSelectCategory();
    noneSelectWallet();
    noneSelectInOut();
});

options2.forEach((option) => {
    option.addEventListener('click', () => {
        selected2.innerHTML = option.querySelector("label").innerHTML;
        selectCategory.classList.add('hide');
    })
})

//icon-close-selectBox
var selectBoxs = document.querySelectorAll('.select-box');
selectBoxs.forEach((selectBox) => {
    selectBox.querySelector('.icon-close-selectBox').addEventListener('click', () => {
        selectBox.classList.add('hide');
    })
})

//btn-save
const input1 = document.getElementById("input1");
const input2 = document.getElementById("money");
const submitBtn = document.getElementById("submit");

function checkInputs() {
  if (input1.value && input2.value && input3.value) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// input1.addEventListener("input", checkInputs);
// input2.addEventListener("input", checkInputs);


//My-wallets
var contentMain = document.querySelector('.content');
var My_wallets = document.getElementById('my-wallets');
var btn_MyWallets = document.querySelector('.account .my-wallets');
var iconCombackTrans = document.querySelector('#my-wallets .icon-comeback');

btn_MyWallets.addEventListener('click', () => {
    contentMain.classList.add('hide');
    My_wallets.classList.remove('hide');
})

iconCombackTrans.addEventListener('click', () => {
    contentMain.classList.remove('hide');
    My_wallets.classList.add('hide');
    account.classList.add('hide');
    if(!detailWallet.classList.contains('hide')) detailWallet.classList.add('hide');
    if(cash_out.classList.contains('hide')) cash_out.classList.remove('hide');
    if(card_out.classList.contains('hide')) card_out.classList.remove('hide');
})


//Content-My-Wallets
var detailWallet = document.querySelector('.detail-wallet');
var cash_out = document.querySelector('.cash-out');
var card_out = document.querySelector('.card-out');
var nameWalletDetail = document.querySelector('.detail-wallet .name-wallet-detail');
var iconCloseWallet = document.querySelector('.detail-wallet .icon-close');
var btnCancelWallet = document.querySelector('.detail-wallet .btn-cancel');
var inputMoney = document.getElementById('inputMoney');
var btnSave = document.querySelector('.detail-wallet .btn-saveMoney');
var btnCancelWallet = document.querySelector('.detail-wallet .btn-cancel');

function toggleCardOut(){
    card_out.classList.toggle('hide');
}

function toggleCashOut(){
    cash_out.classList.toggle('hide');
}

function toggleDetailWallet(){
    detailWallet.classList.toggle('hide');
}

cash_out.addEventListener('click', () => {
    let moneyCash = cash_out.querySelector('#money-cash');
    detailWallet.classList.remove('hide');
    if(moneyCash.innerHTML ===  '0'){
        inputMoney.value = "";
    }else{
        inputMoney.value = moneyCash.innerHTML;
    }
    nameWalletDetail.innerHTML = 'Cash';
    card_out.classList.add('hide');
})

card_out.addEventListener('click', () => {
    let moneyCard = card_out.querySelector('#money-card');
    detailWallet.classList.remove('hide');
    if(moneyCard.innerHTML === '0'){
        inputMoney.value = "";
    }else{
        inputMoney.value = moneyCard.innerHTML;
    }
    nameWalletDetail.innerHTML = 'Card';
    cash_out.classList.add('hide');
})

iconCloseWallet.addEventListener('click', () => {
    toggleDetailWallet();
    card_out.classList.remove('hide');
    cash_out.classList.remove('hide');
})

btnCancelWallet.addEventListener('click', () => {
    toggleDetailWallet();
    card_out.classList.remove('hide');
    cash_out.classList.remove('hide');
})

    //save-money-wallet
btnSave.addEventListener('click', () => {
    if(nameWalletDetail.innerHTML === 'Cash'){
       cash_out.querySelector('#money-cash').innerHTML = inputMoney.value;
       toggleDetailWallet();
       card_out.classList.remove('hide');
    }
    else{
        card_out.querySelector('#money-card').innerHTML = inputMoney.value;
        toggleDetailWallet();
        cash_out.classList.remove('hide');
    }
})

//Move to report
var myIcon = document.getElementById('myIcon');
myIcon.onclick = function() {
    window.open("../Report/index.html");
}

