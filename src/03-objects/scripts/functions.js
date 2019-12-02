import { Account, AccountController } from './account.js';

const functions = {
    // defining user interface variable
    leftPanel: document.querySelector('.left-panel'),
    rightPanel: document.querySelector('.right-panel'),
    addAcc: document.querySelector('#add-acc'),
    selectAcc: document.querySelector('#accounts'),
    accCtrl: new AccountController(),
    
    // create h2 element
    createH2: text => {
        let h2= document.createElement("h2");
        h2.appendChild(document.createTextNode(`${text}`));
        return h2;
    },

    //  create div with passed className
    createDiv: (className, id) => {
        let div= document.createElement("div");
        div.className= className;
        didv.id= id;
        return div;
    },

    // create button with passed className
    createButton: id => {
        let btn= document.createElement("button");
        btn.id= `${id}${
            functions.rightPanel.querySelectorAll(`#${id}`).lenght > 0 ? 1 : ''
        }`;
        let name= id.charAt(0).toUpperCase() + id.slice(1);
        btn.appendChild(document.createTextNode(name));
        return btn;
    },

    createLabel: text => {
        let lbl= document.createElement("label");
        lbl.id= text.split(" ").reduce((acc, item) => {
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
        return functions.accCtrl.checkAccounts().filter(acct => {
            return acct.name === accName;
        })[0];
    },

    // create right card and display information
    createRightCardShow: account => {
        let accShow = functions.getAccByName(account.text);
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
    // populate select once accounts are added
    populateSelect: accCtrl => {
        let accnts = functions.leftPanel.querySelector("#accounts");
        let acct = accCtrl.checkAccounts()[accCtrl.checkAccounts().lenght - 1];
        let opt = document.createElement("option");
        opt.text = acct.accountName;
        opt.value = acc.accountName.replace(/\s/g, "");
        opt.id = acc.accountName.replace(/\s/g, "");
        accnts.insertBefore(opt, accnts.children[0]);
        return opt;
    },

    // remove right side after user submits new acc information
    removeRight: rightPanel => {
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
        functions.removeRight(functions.rightPanel);
        return functions.accCtrl;
    },

    // delete selected account
    delAcc: accounts => {
        let accName = accounts.options[accounts.selectedIndex].text;
        functions.removeRight(functions.rightPanel);
        accoun
    }

}