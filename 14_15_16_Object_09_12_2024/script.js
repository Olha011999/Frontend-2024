console.log("hello, objects!");

// object
// сложный тип данных
// синтаксис объекта включает фигурные скобки

// Объекты - это структура данных, состоящие из пар "ключ: значение"

// пример объекта
let user = {
    name: "John",
    age: 30,
    isAdmin: true
}

// 1. точечная нотация
console.log(user.name);

// 2. квадратные скобки
console.log(user["name"]);

console.log(user.salary);
// +'5000'    ->    5000
// 'пять тысяч'

user.salary = 5000;
console.log(user.salary);

user.age = 31;

delete user.isAdmin;
console.log(user);

// i - index (Array)
// key - ключ (Object)
// for (const key in object) {
    
// }

for (const key in user) {
    console.log(`Ключ: ${key}, Значение равно: ${user[key]}`);
    // console.log(`Ключ: ${key}, Значение равно: ${user.key}`);
}

user.greet = function() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age}`);
}

user.greet();

// HW

// DEBIT CARD
// Создать объект bankAccount, который:
/* 
    1. accountNumber: "123456789"
    2. accountHolderName: "Alice"
    3. balance: 0

    4. deposit(sum) {
            // TODO Пополнение счёта
       }
    5. withdraw(sum) {
            // TODO Списание счёта
       }
    6. checkBalance() {
            // TODO Просмотр баланса счёта
       }
*/

let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
}

// this.balance += sum
bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения") // this.balance = this.balance + sum
}

// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function(sum) {
    sum <= this.balance && sum > 0 ? this.balance -= sum : alert("Некорректная сумма списания")
}

// Просмотр баланса
bankAccount.checkBalance = function() {
    console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
}

// // Уведомление
// alert("Привет из модального окна");

// // Подтверждение/Отказ (Boolean)
// let answer = confirm("Вы действительно хотите закрыть страницу ?");
// console.log(answer);

// // Ответ (String | null)
// answer = prompt("Введите Ваше имя ?");
// console.log(answer);





// lesson 14


const bank = [];

function createAccount() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    // falsy null, '', 0, undefined, NaN
    if (name) {
        bank.push({
            ...bankAccount,
            accountNumber: bank.length + 1,
            accountHolderName: name
        })
        alert('Account created successfully')
    } else {
        alert('Please, enter a valid name')
    }

    nameInput.value = '';
    console.log(bank);
}


//lesson 17

function showAccounts() {

    const accountList=document.getElementById('accountList');

    accountList.innerHTML= ''; // Очистить предыдущий список

    // for (const account of bank) {
    //     // account.balance
    //     const li = document.createElement('li');
    //     li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance${account.balance}`
    //     accountList.appendChild(li);

        // accountList.innerHTML+=
        // <li>ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance${account.balance}</li>
        // }

     bank.forEach((account, index)=>{
       // accountList.innerHTML += `<li>${index + 1}. ID: ${
       //   account.accountNumber
       // }, Name: ${account.accountHolderName}, Balance: ${account.balance} </li>`; // <button id=${account.accountNumber}>X</button>



        // function showAccounts() {
//     if (bank.length === 0) {
//         console.log("Such account does not exist");
//     } else {
//         for (let i = 0; i < bank.length; i++) {
//             const account = bank[i];
//             console.log(`Account Number: ${account.accountNumber}; holder: ${account.accountHolderName}; balance: ${account.balance}`);
//         }
//     }
// }


const li = document.createElement("li");
    li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;

    // Логика удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.append(deleteBtn);
    accountList.append(li);

    deleteBtn.onclick = function () {
      const answer = bank.splice(index, 1); // Удаляет элемент из оригинала массива (индекс старта, кол-во удаляемых элементов)
      // bank.slice(index, 1); // Возвращает копию элементов вырезанных из оригинала массива (индекс старта (входит в диапазон), индекс финиша (не входит в диапазон)) 
      // showAccounts();
      li.remove(); // метод удаления элемента со страницы
      // const newBank = [];
      // for (const i in bank) {
      //   if (index !== i) {
      //     newBank.push(bank[i]);
      //   }
      // }
      // input type="checkbox" checked
    };
  });


//вариант анастасии подлесной
  //   accounts.forEach((account, index) => {
  //     accountList.innerHTML += `<li> ${index + 1}. Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance} <button class = deleteButton onclick="deleteAccount(${index})" >DELETE</button> </li>`;
  //    });
  //    }

  // // --------- удаление аккаунтов -------

  // function deleteAccount(index) {
  //  accounts.splice(index, 1);
  //  showAccounts();
  // }





  // for (let index = 0; index < bank.length; index++) {
  //     // bank[i].balance
  // }
}




// lesson 15


const withdraw= document.getElementById('withdraw');
const deposit = document.getElementById('deposit');

//homework
// function deposit() {

//      // Ссылки на элементы
//     const accountIdInput = document.getElementById('accountId');
//     const amountInput = document.getElementById('amount');

//     const accountId = accountIdInput.value;
//     const amount = amountInput.value;

//     if (accountId === "" || amount === "" || amount <= 0) {
//         alert('Please enter a valid Account ID and amount.');
//         return;
//     }

//     const account = bank.find(function(ac) {
//         return ac.accountNumber == accountId;
//     });

//     if (!account) {
//         alert('Account not found.');
//         return;
//     }

//     account.balance = account.balance + Number(amount);

//     alert('Deposit ' + amount + ' at account ID: ' + accountId + '. New balance: ' + account.balance);
//     console.log(bank); 
// }


// function withdraw() {
//     const accountIdInput = document.getElementById('accountId');
//     const amountInput = document.getElementById('amount');

//     const accountId = accountIdInput.value;
//     const amount = amountInput.value;

//     if (accountId === "" || amount === "" || amount <= 0) {
//         alert('Please enter a valid Account ID and amount.');
//         return;
//     }

//     const account = bank.find(function(acc) {
//         return acc.accountNumber == accountId;
//     });

//     if (!account) {
//         alert('Account not found.');
//         return;
//     }

//     if (account.balance < amount) {
//         alert('Insufficient funds.');
//         return;
//     }

//     account.balance = account.balance - Number(amount);

//     alert('Withdrew ' + amount + ' from Account ID: ' + accountId + '. New Balance: ' + account.balance);
//     console.log(bank); 
// }



//lesson 16

deposit.onclick = function () {
    operation('deposit');
  };
  
  withdraw.onclick = function () {
    operation('withdraw');
  };
  
  function operation(operator) {
   // TODO (Описание действия при нажатии на кнопку deposit)
    // Ссылки на элементы
    const accountIdInput = document.getElementById("accountId");
    const amountInput = document.getElementById("amount");
  
    // Считывание значений, написанных в input
    // input.value - string
    // Number('0') parseInt() parseFloat() +'0' eval('10+10-5') *1
    const accountId = accountIdInput.value.trim(); // string
    const amount = +amountInput.value.trim(); // number (число или NaN) с помощью + переходим в формат числа
  
    // isNaN() - true, если передать значение NaN и false в остальных случаях
  
    // let account;
    // bank.forEach(e => {
    //   if (e.accountNumber === accountId) {
    //     account = e;
    //     return;
    //   }
    // })
  
    // Искомый элемент или undefined
    const accountFind = bank.find(e => e.accountNumber.toString() === accountId);
  
    // Индекс искомого элемента или -1
    // const accountIndexFind = bank.findIndex(e => e.accountNumber.toString() === accountId);
  
    if(accountFind) {
      if (operator === 'deposit') {
        accountFind.deposit(amount);
      } else {
        accountFind.withdraw(amount);
      }
    } else {
      alert('Account not found');
    }
  
    accountIdInput.value = "";
    amountInput.value = "";
  };
  
  // DRY (Don't repeat yourself)
  
  // const answer = prompt("Введите Ваше имя");
  // if (typeof answer === "string") {
  //   // String
  // }
  // if (answer) {
  //   // String (кроме пустой строки)
  // }
  
  // function plus(a, b) {
  //   calculator(5, 10, "+");
  // }
  
  // function minus() {
  //   calculator(5, 10, "-");
  // }
  
  // function multiply() {
  //   calculator(5, 10, "*");
  // }
  
  // function division() {
  //   calculator(5, 10, "/");
  // }
  
  // function calculator(a, b, operator) {
  //   if (operator === '+') {
  //     return a + b;
  //   }
  //   if (operator === '-') {
  //     return a - b;
  //   }
  //   if (operator === '*') {
  //     return a * b;
  //   }
  //   if (operator === '/') {
  //     return a / b;
  //   }
  // }
  
  // // undefined
  // console.log(calculator(5, 10, "+"));
  // console.log(calculator(5, 10, "-"));
  // calculator(5, 10, "*");
  // calculator(5, 10, "/");





//   //homework 16
//   const deleteButton = document.getElementById('delete'); 
  
//   deleteButton.onclick = function () {
//     const accountIdInput = document.getElementById('accountId');
//     const accountId = parseInt(accountIdInput.value, 10);

//     if (isNaN(accountId)) {
//         alert("Please enter a valid account ID.");
//     } else {
//         const accountIndex = bank.findIndex(function (acc) {
//             return acc.accountNumber === accountId;
//         });

//         if (accountIndex === -1) {
//             alert("Account not found.");
//         } else {
//             bank.splice(accountIndex, 1);
//             alert(`Account ID: ${accountId} has been successfully deleted.`);
//             console.log(bank);
//         }
//     }
// };
 