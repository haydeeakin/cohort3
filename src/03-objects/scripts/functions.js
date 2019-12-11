import { AccountController } from './account.js';


// Account,

const functions = {
    // defining user interface variable
    leftPanel: document.querySelector(".left-panel"),
    rightPanel: document.querySelector(".right-panel"),
    addAcc: document.querySelector("#add-acc"),
    select: document.querySelector("#accounts"),
    accCtrl: new AccountController(),
    
    // create h2 element
    createH2: text => {
        let h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode(`${text}`));
        return h2;
    },

    //  create div with passed className
    createDiv: (className, id) => {
        let div = document.createElement("div");
        div.className = className;
        div.id = id;
        return div;
    },

    // create button with passed className
    createButton: id => {
        let btn = document.createElement("button");
        btn.id = `${id}${
            functions.rightPanel.querySelectorAll(`#${id}`).length > 0 ? 1 : ''
        }`;
        let name = id.charAt(0).toUpperCase() + id.slice(1);
        btn.appendChild(document.createTextNode(name));
        return btn;
    },

    createLabel: text => {
        let lbl = document.createElement("label");
        lbl.id = text.split(" ").reduce((acc, item) => {
            if (item.charAt(0) < `A` || item.charAt(0) > `z`) {
                return (acc += '');
            } else {
                return (acc += item.toLowerCase());
            }
        }, '');
        lbl.textContent= text;
        return lbl;
    },

    // input field for a given id
    createInput: (id, type) => {
        let input = document.createElement('input');
        input.id = id;
        input.type = type;
        return input;
    },

    // create right card
    createRightCard: text => {
        let rcrd = functions.createDiv("new-acc", "new-acc");
        rcrd.appendChild(functions.createH2(text));
        rcrd.appendChild(functions.createLabel("Account Name: "));
        rcrd.appendChild(functions.createInput("new-acc-name", "text"));
        rcrd.appendChild(document.createElement("br"));
        rcrd.appendChild(functions.createLabel("Initial Deposit: "));
        rcrd.appendChild(functions.createInput("new-acc-init-bal", "number"));
        rcrd.appendChild(document.createElement("br"));
        rcrd.appendChild(functions.createButton("submit"));
        rcrd.appendChild(functions.createButton("cancel"));
        functions.rightPanel.appendChild(rcrd);
        return rcrd;
    },
    // get account by name
    getAccByName: accName => {
        // console.log('all accounts',functions.accCtrl.checkAccounts())
        return functions.accCtrl.checkAccounts().filter(acct => {
            return acct.accountName === accName;
        })[0];
    },

    // create right card to display information
    createRightCardShow: account => {
        // console.log('account',account,'account.text',account.text)
        let accShow = functions.getAccByName(account.text);
        // console.log('accShoe',accShow)
        let rcrd = functions.createDiv("show-acc-r", "show-acc-r");
        functions.rightPanel.appendChild(rcrd);
        rcrd.appendChild(functions.createH2(`${account.text}`));
        rcrd.appendChild(functions.createLabel(`Current balance ($): ${accShow.balance()}`));
        rcrd.appendChild(document.createElement("br"));
        rcrd.appendChild(functions.createLabel(`Make a deposit ($): `));
        rcrd.appendChild(functions.createInput("acc-dep-amt", "number"));
        rcrd.appendChild(document.createElement("br"));
        rcrd.appendChild(functions.createButton("confirm"));
        rcrd.appendChild(document.createElement("br"));
        rcrd.appendChild(functions.createLabel(`Make a Withdrawal ($): `));
        rcrd.appendChild(functions.createInput("acc-wid-amt", "number"));
        rcrd.appendChild(document.createElement("br"));
        rcrd.appendChild(functions.createButton("confirm"));
        return rcrd;
    },

    // show/hide
    toggleHidden: () => {
        let hidden = true;
        let hiddenElems = document.querySelectorAll(".hidden");
        if (functions.accCtrl.checkAccounts().length === 0) {
            hiddenElems.forEach(item => {
                item.style.display = "none";
            });
            hidden = true;
        } else {
            hiddenElems.forEach(item => {
                item.style.display = "block";
            });
            hidden = false;
        }
        return hidden;
    },


    // populate select once accounts are added
    populateSelect: accCtrl => {
        let accnts = functions.leftPanel.querySelector("#accounts");
        let acct = accCtrl.checkAccounts()[accCtrl.checkAccounts().length - 1];
        let opt = document.createElement("option");
        opt.text = acct.accountName;
        opt.value = acct.accountName.replace(/\s/g, "");
        opt.id = acct.accountName.replace(/\s/g, "");
        accnts.insertBefore(opt, accnts.children[0]);
        return opt;
    },

    // remove right side after user submits new acc information
    removeRight: rightPanel => {
        // console.log(rightPanel);
        while (rightPanel.firstChild) {
            rightPanel.removeChild(rightPanel.firstChild);
        }
    },

    // check for duplicated names
    duplicatedAccName: accName => {
        let dupltd = false;
        functions.accCtrl.checkAccounts().forEach(item => {
            if (item.accountName.toLowerCase() === accName.toLowerCase()) {
                dupltd = true;
            }
        });
        return dupltd;
    },

    toggleDisableAdd: add => {
        if (add.disabled) {
            add.disabled = false;
        } else {
            add.disabled = true;
        }
        return add.disabled;
    },

    // store user input to create new account
    storeAccInfo: btn => {
        let accName = btn.parentElement.querySelector("#new-acc-name");
        let accInitBal = btn.parentElement.querySelector("#new-acc-init-bal");
        if (accName.value === "") {
            alert("Must enter valid name");
            return;
        }

        // check for acc name duplicates
        if (functions.duplicatedAccName(accName.value)) {
            alert("Account name already exists, please choose a diffrent name");
            return;
        }
        functions.accCtrl.createAccount(accName.value, parseFloat(accInitBal.value) || 0);
        functions.populateSelect(functions.accCtrl);
        functions.toggleHidden();
        functions.removeRight(functions.rightPanel);
        functions.toggleDisableAdd(functions.addAcc);
        return functions.accCtrl;
    },

    // delete selected account
    delAcc: accounts => {
        let accName = accounts.options[accounts.selectedIndex].text;
        functions.removeRight(functions.rightPanel);
        accounts.removeChild(accounts.options[accounts.selectedIndex]);
        let reminingAcctns = accounts.children[0];
        if (reminingAcctns) functions.createRightCardShow(reminingAcctns);
        let removedAcc = functions.accCtrl.removeAccount(accName);
        functions.toggleHidden();
        return removedAcc
    },

    // update single accoutn balance
    updateAccBal: (input, accName) => {
        let acctn = functions.getAccByName(accName);
        let balanceLabel = functions.rightPanel.querySelector("#currentbalance");
        let amt =  parseFloat(input.value) || 0;
        if (amt <= 0) {
            alert("Enter valid amount");
            return;
        }
        if (input.id === "acc-dep-amt") {
            acctn.deposit(amt);
            balanceLabel.textContent = `Current balance ($): ${acctn.balance()}`;
        }
        if (input.id === "acc-wid-amt") {
            let balance = acctn.balance();
            let withdraw = acctn.withdraw(amt);
            if (amt > balance) {
                let newLabel = functions.createLabel(``);
                functions.rightPanel.appendChild(document.createElement("br"));
                functions.rightPanel.appendChild(document.createElement("br"));
                functions.rightPanel.appendChild(newLabel);
                newLabel.textContent = `Not enough balance in your account`;
            }
            balanceLabel.textContent = `Current balance ($): ${acctn.balance()}`;
        }
        input.value = "";
        return acctn.balance();
    },

    //  get total balance
    getTotalBalance: accCtrl => {
        let rcrd = functions.createDiv("show-total", "show-total");
        functions.rightPanel.appendChild(rcrd);
        rcrd.appendChild(functions.createH2(`Total balance all accounts`));
        rcrd.appendChild(functions.createLabel(`Total balance ($): ${accCtrl.totalBalance()}`));
        rcrd.appendChild(document.createElement("br"));
        let accNum = functions.accCtrl.checkAccounts().length;
        if (accNum > 0) {
            rcrd.appendChild(functions.createH2(`Individual account balance`));
            for (let accName of accCtrl.checkAccounts()) {
                rcrd.appendChild(functions.createLabel(`${accName.accountName} ($): ${accName.balance()}`));
                rcrd.appendChild(document.createElement("br"));
            }
        }
        return accCtrl.totalBalance();
    },

    // highest account
    highestAcc: accCtrl => {
        let accName = accCtrl.highestBalance().accountName.replace(/\s/g, "");
        let acctnOptions = functions.leftPanel.querySelector(`#${accName}`);
        functions.removeRight(functions.rightPanel);
        functions.createRightCardShow(acctnOptions);
        return accCtrl.highestBalance();
    },
    lowestAcc: accCtrl => {
        let accName = accCtrl.lowestBalance().accountName.replace(/\s/g, "");
        let acctnOptions = functions.leftPanel.querySelector(`#${accName}`);
        functions.removeRight(functions.rightPanel);
        functions.createRightCardShow(acctnOptions);
        return accCtrl.lowestBalance();
    },
    steve: steve =>{
        console.log("hello World from functions");
    }
};

functions.steve();

export { functions };