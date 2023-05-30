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
  
      //MAIN CONTENT TRANSACTION
  //xu ly khi chua co giao dich nao
  
  //xu ly khi da co giao dich
  //prep data
  let imageCategories = [
      'https://static.moneylover.me/img/icon/ic_category_foodndrink.png',
      'https://static.moneylover.me/img/icon/ic_category_transport.png',
      'https://static.moneylover.me/img/icon/icon_136.png',
      'https://static.moneylover.me/img/icon/icon_124.png',
      'https://static.moneylover.me/img/icon/icon_125.png',
      'https://static.moneylover.me/img/icon/icon_139.png',
      'https://static.moneylover.me/img/icon/icon_126.png',
      'https://static.moneylover.me/img/icon/ic_category_doctor.png',
      'https://static.moneylover.me/img/icon/icon_53.png',
      'https://static.moneylover.me/img/icon/icon_142.png',
      'https://static.moneylover.me/img/icon/icon_49.png',
      'https://static.moneylover.me/img/icon/icon_138.png',
      'https://static.moneylover.me/img/icon/ic_category_salary.png',
      'https://static.moneylover.me/img/icon/ic_category_other_income.png'
  ];
  
  async function fetchDataCategoryT3(){
      //prep data from file category json
      const response = await fetch('../JsonFile/Category.json');
      const data = await response.json();
  
      let categoryIDOrigin = data.map((item) => item.categoryID);
      let categoryNameOrigin = data.map((item) => item.categoryName);
  
      //prep data from file trans json
      let days =  [];
      let categoryIDTrans = [];
      let amounts = [];
  
      const response2 = await fetch('../JsonFile/TransactionT3.json');
      const data2 = await response2.json();
  
      for(let i = 0; i < data2.length; i++){
          days.push(data2[i].date.slice(0,2));
          categoryIDTrans.push(data2[i].categoryID);
          amounts.push(Number(data2[i].amount));
      }
  
      let monthAndYear_ = data2[0].date.slice(3, 10);
  
      //Tao mang Id có các phần tử khác nhau
      let categoryIDDiffs = []
      for(let i = 0; i < categoryIDTrans.length; i++){
          if(!categoryIDDiffs.includes(categoryIDTrans[i])){
              categoryIDDiffs.push(categoryIDTrans[i]);
          }
      }
  
      let have_content = document.querySelector('.have-content');
      // Duyệt từng giao dịch
      for(let i = 0; i < categoryIDDiffs.length; i++){
          let transAllowCategory = document.createElement('div');
          transAllowCategory.classList.add('transAllowCategory');
  
          if(categoryIDDiffs[i] !== categoryIDDiffs[0]){
              let Empty = document.createElement('div');
              Empty.classList.add('Empty');
              transAllowCategory.appendChild(Empty);
          }
          
  
          let overviewTrans = document.createElement('div');
          overviewTrans.classList.add('overviewTrans');
          transAllowCategory.appendChild(overviewTrans);
  
          let left1 = document.createElement('div');
          left1.classList.add('left');
          overviewTrans.appendChild(left1)
          
          let img_Category = document.createElement('div');
          img_Category.classList.add('img-Category');
          left1.appendChild(img_Category);
  
          let img = document.createElement('img');
          img.src = imageCategories[categoryIDDiffs[i]-1]
          img_Category.appendChild(img);
  
          let detail = document.createElement('div');
          detail.classList.add('detail');
          left1.appendChild(detail);
  
          let name_category = document.createElement('div');
          name_category.classList.add('name-category');
          name_category.innerHTML = categoryNameOrigin[categoryIDDiffs[i]-1];
          detail.appendChild(name_category);
  
          let quantity = document.createElement('div');
          quantity.classList.add('quantity');
          detail.appendChild(quantity);
  
          let totalInOverView = document.createElement('p');
          totalInOverView.classList.add('total');
          overviewTrans.appendChild(totalInOverView);
  
          let dem = 0;
          let total = 0;
          for(let j = 0; j < categoryIDTrans.length; j++){
              if(categoryIDTrans[j] == categoryIDDiffs[i]){
                  dem = dem + 1;
                  total = total + amounts[j];
  
                  let itTrans = document.createElement('div');
                  itTrans.classList.add('it-Trans');
                  transAllowCategory.appendChild(itTrans);
  
                  let left2 = document.createElement('div');
                  left2.classList.add('left');
                  itTrans.appendChild(left2);
  
                  let day = document.createElement('p');
                  day.classList.add('day');
                  day.innerHTML = days[j];
                  left2.appendChild(day);
  
                  let monthAndYear = document.createElement('p');
                  monthAndYear.classList.add('monthAndYear');
                  monthAndYear.innerHTML = "T" + monthAndYear_;
                  left2.appendChild(monthAndYear);
  
                  let amountInTrans = document.createElement('p');
                  amountInTrans.classList.add('amount');
                  amountInTrans.innerHTML = amounts[j] + " đ";
                  itTrans.appendChild(amountInTrans);
              }
          }
  
          quantity.innerHTML = dem + " Transactions";
          totalInOverView.innerHTML = total + " đ";
          have_content.appendChild(transAllowCategory)
          // console.log(transAllowCategory);
      }
      console.log(have_content);
  }
  
  fetchDataCategoryT3();
    
    
    