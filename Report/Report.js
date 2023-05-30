    //REPORT ALLOW YEAR
let ctx = document.getElementById("myChart").getContext("2d");
var dataIncome = [];
var dataExpense = [];

//Array of month, inOutID, amount from Transaction.json
var month = [];
var inOutID = [];
var amount = [];


//Xu ly du lieu
async function fetchData(){
    const response = await fetch("../JsonFile/Transaction.json");
    const data1 = await response.json();
        for (let i = 0; i < data1.length; i++) {
            month.push(Number(data1[i].date.slice(3, 5)));
            inOutID.push(data1[i].inOutID);
            amount.push(data1[i].amount)
        }     

    //get dataIncome, dataExpense
    for (let i = 1; i <= 12; i++) {
    let expense = 0;
    let income = 0;
    
    if (month.includes(i)){
        for (let j = 0; j < month.length; j++) {
            if (month[j] == i) {
                if (inOutID[j] === 1) {
                    expense += amount[j];
                } else {
                    income += amount[j];
                }
            }
        }
    }

    dataExpense.push(expense);
    dataIncome.push(income);
    }

    //render report allow year
    var data = {
        labels: ["January", "February", "Match", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Income",
                backgroundColor: "blue",
                data: dataIncome
            },
            {
                label: "Expense",
                backgroundColor: "red",
                data: dataExpense
            },
        ]
    };

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            barValueSpacing: 20,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                    }
                }]
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Report allow year',
                    font: {
                        size: 30
                    }
                },
            },
        }
    });
}

//call function render report allow year
fetchData();

    //REPORT ALLOW MONTH
var myChart2 = document.getElementById("myChart2").getContext("2d");;
var dataIncomeMonth = [];
var dataExpenseMonth = [];

//array day, inout, amount
var day = [];
var inOutID2 = [];
var amount2 = [];

//get label day
labelDays = []
for(let i = 1; i <= 31; i++){
    labelDays.push(i);
}

//function render data allow month
async function fetchDataMonth(){
    const response2 = await fetch("../JsonFile/Transaction.json");
    const data2 = await response2.json();

    //get data day, inout, amount
    for(let i = 0; i < data2.length; i++){
        day.push(Number(data2[i].date.slice(0, 2)));
        inOutID2.push(data2[i].inOutID);
        amount2.push(data2[i].amount)
    }

    //get data allow month (data in one month)
    for(let i = 1; i <= 31; i++){
        let expense2 = 0;
        let income2 = 0;
        if(day.includes(i)){
            if(inOutID2[i] === 1){
                expense2 += amount2[i];
            }else{
                income2 += amount2[i];
            }
        }

        //push data
        dataExpenseMonth.push(expense2);
        dataIncomeMonth.push(income2);
    }

    //render report allow month
    var data2_2 = {
        labels: labelDays,
        datasets: [
            {
                label: "Income",
                backgroundColor: "blue",
                data: dataIncomeMonth
            },
            {
                label: "Expense",
                backgroundColor: "red",
                data: dataExpenseMonth
            },
        ]
    };

    var myBarChar2 = new Chart(myChart2, {
        type: 'bar',
        data: data2_2,
        options: {
            barValueSpacing: 20,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                    }
                }]
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Report allow month',
                    font: {
                        size: 30
                    }
                },
            },
        }
    });
}

//call function render report allow month
fetchDataMonth()

    //REPORT CATEGORY EXPENSE
var myChart3 = document.getElementById("myChart3").getContext('2d');
var myChart4 = document.getElementById("myChart4").getContext('2d');

var dataCategoryExpense  = [];
var dataCategoryIncome = [];

//Prep data
//bảng màu
var colors = ["red", "yellow", "green", "blue", "orange", "#ccc", "pink", "#AE5CAD", "#34ADB5", "#FE5A5E", "#6FA917", "#CF8500", "#027B83", "#FF965F"];

//function render report category Expense
async function fetchDataCategory(){
    //Lay du lieu tu file category
    const response = await fetch("../JsonFile/Category.json");
    const data = await response.json();

    //lay du lieu goc tu file category
    let categoryIDOrigin = data.map((item) => item.categoryID);
    let categoryNameOrigin = data.map((item) => item.categoryName);

    //tach du lieu goc thanh ID Expense và ID Income
    let categoryIDOriginExpenses = categoryIDOrigin.filter((item) => (item >= 1 && item <= 12))
    let categoryIDOriginIncomes = categoryIDOrigin.filter((item) => item > 12);

    //Lay du lieu tu file Transaction
    const response2 = await fetch("../JsonFile/Transaction.json");
    const data2 = await response2.json();
    let amount = data2.map((item) => item.amount); //money in trans
    let categoryIDTrans = data2.map((item) => item.categoryID);

    //tach id thanh 2 mang expense va income (cac phan tu khong trung lap)
    let idDiffExpenses = [];
    let idDiffIncomes = [];

    for(let i = 0; i < categoryIDTrans.length; i++){
        if(categoryIDOriginExpenses.includes(categoryIDTrans[i]) && !idDiffExpenses.includes(categoryIDTrans[i])){
            idDiffExpenses.push(categoryIDTrans[i]);
        }
        if(categoryIDOriginIncomes.includes(categoryIDTrans[i]) && !idDiffIncomes.includes(categoryIDTrans[i])){
            idDiffIncomes.push(categoryIDTrans[i]);
        }
    }
    
    //Prep labels
    let labelCategoryExpenses = idDiffExpenses.map((item) => categoryNameOrigin[item-1]);
    let labelCategoryIncomes = idDiffIncomes.map((item) => categoryNameOrigin[item-1]);

    //Prep Background color
    let bgcExpenses = idDiffExpenses.map((item) => colors[item-1]);
    let bgcIncomes = idDiffIncomes.map((item) => colors[item-1]);

    //Prep data money
    for(let i = 0; i < idDiffExpenses.length; i++){
        let amountExpense = 0;
        for(let j = 0; j < categoryIDTrans.length; j++){
            if(categoryIDTrans[j] == idDiffExpenses[i]){
                amountExpense += amount[j];
            }
        }
        dataCategoryExpense.push(amountExpense);
    }

    for(let i = 0; i < idDiffIncomes.length; i++){
        let amountIncome = 0;
        for(let j = 0; j < categoryIDTrans.length; j++){
            if(categoryIDTrans[j] == idDiffIncomes[i]){
                amountIncome += amount[j];
            }
        }
        dataCategoryIncome.push(amountIncome);
    }

    // render report allow category expense
    var data1 = {
        labels: labelCategoryExpenses,
        datasets: [
            {
                label: "Expenses",
                backgroundColor: bgcExpenses,
                data: dataCategoryExpense,
            },
        ]
    };

    // var data1 = [{
    //     data: dataCategoryExpense,
    //     // labels: labelCategoryExpenses,
    //     backgroundColor: bgcExpenses,
    //     borderColor: "#fff",
    //     // datasets: [
    //     //     {
    //     //         label: "Expenses",
    //     //         backgroundColor: bgcExpenses,
    //     //         data: dataCategoryExpense,
    //     //     },
    //     // ]
    // }];

    // var options1= {
    //     tooltip: {
    //         enabled: true
    //     },

    //     plugins: {
    //         datalabels: {
    //             formatter: (value, myChart3) => {
    //                 let sum = myChart3.datasets._meta[0].total;
    //                 let percentage
    //             }
    //         }
    //     }
    // }

    var myPieChar1 = new Chart(myChart3, {
        type: 'pie',
        data: data1,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Report allow category expense',
                    font: {
                        size: 20
                    }
                },
                // labels:{
                //     render: 'percentage'
                // }
            },
        }
    });

    //render report allow category income
    var data3 = {
        labels: labelCategoryIncomes,
        datasets: [
            {
                label: "Income",
                backgroundColor: bgcIncomes,
                data: dataCategoryIncome,
            },
        ]
    };

  // Cấu hình biểu đồ
// var options2 = {
//     plugins:{
//         tooltip: {
//             enabled: false
//         },

//         datalabels: {
//             formatter: (value, myChart4) => {
//                 let sum = 0;
//                 const datapoints = myChart4.Chart.data.datasets[0].data;
//                 datapoints.map(data => {
//                     sum += data;
//                 });
//                 const percentageValue = (value*100 / sum).toFixed(2) + "%";
//                 return percentageValue;
//             },
//             color: "#fff",
//         }
//     },
//     plugins: {
//         title: {
//             display: true,
//             text: 'Report allow category income',
//             font: {
//                 size: 20
//             }
//         },
//     }  
// };

    var myPieChart2 = new Chart(myChart4, {
        type: 'pie',
        data: data3,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Report allow category income',
                    font: {
                        size: 20
                    }
                },
            },
        }
        // options: options2
    });
}

//call function report category
fetchDataCategory();

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


