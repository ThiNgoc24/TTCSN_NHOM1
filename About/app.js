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
    
    
    