function toggleInfo(id) {
    let element = document.getElementById(id);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
}
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
   
     //MY-CATEGORIES
   
     var container_listCategory = document.querySelector('.list-category');
     var list_category = document.querySelectorAll('.it-category');
     var categoryDetail = document.querySelector(".category-detail");
     var icon_closeCategoryDetail = document.querySelector('.category-detail .icon-close');
     
     list_category.forEach((it) => {
         it.addEventListener('click', () => {
             // container_listCategory.style.marginLeft = '-100px';
             categoryDetail.classList.remove('hide');
             // categoryDetail.style.left = '100%';
             categoryDetail.querySelector('.img-categoryDetail img').src = it.querySelector('.img img').src;
             categoryDetail.querySelector('.name-categoryDetail').innerHTML = it.querySelector('.name-itCategory').innerHTML;
             categoryDetail.querySelector(".name-inout").innerHTML = it.parentElement.querySelector('.name-listCategory').innerHTML;
             if(categoryDetail.querySelector(".name-inout").innerHTML == 'Incomes'){
               categoryDetail.querySelector(".name-inout").style.backgroundColor = 'blue';
           }else{
               categoryDetail.querySelector(".name-inout").style.backgroundColor = 'red';
           }
         })
     })
     
     icon_closeCategoryDetail.addEventListener('click', () => {
         categoryDetail.classList.add('hide');
     })
     
     document.querySelector("#my-categories .icon-comeback").addEventListener('click', () => {
         document.getElementById('my-categories').classList.add('hide');
         contentMain.classList.remove('hide');
         account.classList.add('hide');
         if(!categoryDetail.classList.contains('hide')) categoryDetail.classList.add('hide');
     })
     
         //button My-category in icon menu
     var My_categories = document.getElementById('my-categories');
     var btn_MyCategories = document.querySelector('.account .categories');
     btn_MyCategories.addEventListener('click', () => {
         contentMain.classList.add('hide');
         My_categories.classList.remove('hide');
     })
     
         //MY-ACCOUNT
     var myAccount = document.getElementById('my-account');
     var btn_closeAccount = document.querySelector('.icon-closeAccount');
     var btn_MyAccount = document.querySelector('.account .my-account');
     
     btn_closeAccount.addEventListener('click', () => {
         myAccount.classList.add('hide');
         contentMain.classList.remove('hide');
         account.classList.add('hide');
     })
         
     //button my-account in icon menu
     btn_MyAccount.addEventListener('click', () => {
         myAccount.classList.remove('hide');
         account.classList.add('hide');
     })