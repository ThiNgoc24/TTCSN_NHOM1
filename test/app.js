var iconMenu = document.querySelector('.icon-menu');
var account = document.querySelector('.account');

function toggleAccount(){
    account.classList.toggle('hide')
}

iconMenu.addEventListener('click', toggleAccount);
account.addEventListener('click', toggleAccount);