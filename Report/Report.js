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

//chuẩn bị dữ liệu
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
    let labelCategoryExpenses = idDiffExpenses.map((item) => categoryNameOrigin[item]);
    let labelCategoryIncomes = idDiffIncomes.map((item) => categoryNameOrigin[item]);
    
    //Prep Background color
    let bgcExpenses = idDiffExpenses.map((item) => colors[item]);
    let bgcIncomes = idDiffIncomes.map((item) => colors[item]);

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

    //render report allow category expense
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

    var myPieChar1 = new Chart(myChart3, {
        type: 'pie',
        data: data1,
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
                    text: 'Report allow category expense',
                    font: {
                        size: 20
                    }
                },
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

    var myPieChart2 = new Chart(myChart4, {
        type: 'pie',
        data: data3,
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
                    text: 'Report allow category income',
                    font: {
                        size: 20
                    }
                },
            },
        }
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


