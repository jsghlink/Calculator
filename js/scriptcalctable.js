let checkingval, stringassigntemp, indexofop, numonestore, numtwostore, opstore, opconsecutiveaddop = "+", opconsecutivemulop = "*", opconsecutivedivop = "/", opconsecutivesubop = "-", opconsecutivedecop = ".", count = 0, countmeter;
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// num1store, opstore, num2store
// if (inputhai.value === "123") {
//     inputhai.value = "Check complete"
// } did not work; conclusion drawn to check conditions on event
let eqregexdefformat = /\d+\+\d+/g; // default format
let eqregexnumonly = /\d+/g;        // 5, (then =)
let eqregexnumandoponly = /\d+\+/g; // 5+, (then =)
let opregexdefformat = /\d+\+\d+/g; // default format used again while clicking '+' operator
let opregexnumzeroatstart = /0\+/g; // matches '0+' at the start when op is clicked
let opregexnumandoponly = /\d+\+/g; // i) 0+ ii) 5+ 
let ccregexnoconsecutive = /\+{2,}/g; ///\++?/g;// // matches 2 or more '+' operators // default was {2,}, can negation be used (if ^, includes === true, if not 0 or 1)
let ccregexnoconsecutive2 = /^\+?/g;
let ccregexnoconsecutiveeq = /={2,}/g; // matches 2 or more '=' operators

let eqregexopandnumonly = /\+\d+/g;  // +5, (then =)  // also been used for add op
let eqregexoponly = /\+/g;           // +,  (then =)

let opregexdefformatmulop = /\d+\*\d+/g;


// 3. ADDING NEW FOR EQUAL OP
let eqregexdefformatrevised = /\d+[+\-*/]\d+/; // global flag not used // use for ops too
let eqregexnumandoponlyrevised = /\d+[+\-*/]/; // global flag not used // use for ops too
let eqregexopandnumonlyrevised = /[+\-*/]\d+/; // global flag not used // use for ops too
// Consecutive wala check original strings condition in '+'. Try '&&' and '||' afterwards
let eqregexoponlyrevised = /[+\-*/]/; // global flag not used // use for ops too
let signedseparateregexcheck = /[-\d+]/; // REFER 27 AND CHECK


let decimaldefformat = /\d+.\d+[+/\-*]\d+.\d+/;
let decimalpointthendigits = /.\d+/;
let digitsbeforedecimalpoint = /\d+./;
let decimalpreventconsecutive = /\.{2,}/g;
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// behaviour of buttons on click
let valueone = document.getElementById("numbutt1");
let valuetwo = document.getElementById("numbutt2");
let valuethree = document.getElementById("numbutt3"); // marker
let valuefour = document.getElementById("numbutt4");
let valuefive = document.getElementById("numbutt5");
let valuesix = document.getElementById("numbutt6");
let valueseven = document.getElementById("numbutt7");
let valueeight = document.getElementById("numbutt8");
let valuenine = document.getElementById("numbutt9");
let valuezero = document.getElementById("numbutt0");
let additionop = document.getElementById("addop");
let multiplicationop = document.getElementById("mulop");
let subtractionop = document.getElementById("subop");
let divisionop = document.getElementById("divop");
let decimalop = document.getElementById("decop");

let deleteop = document.getElementById("delop");
let clearop = document.getElementById("clrop");
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx






// input field
//let inputhai = []; // values stored in an array
let inputhai = document.getElementById("dispbutt"); // array input lena hai kya?
// Found out this eventually returns a string. let inputhai = []; redundant hai, serves no purpose - check push later

// event listeners for number buttons. '3' has been kept for experiments
// 39. Added for decimal operation (mainly) --x--
stringassigntemp = inputhai.value;

valueone.addEventListener("click", myFunco);
function myFunco() {
    inputhai.value += valueone.value;
}

valuetwo.addEventListener("click", myFunco2);
function myFunco2() {
    inputhai.value += valuetwo.innerHTML;  // observation recorded on inputhai.value vs inputhai.text etc. - Find out more
}

valuethree.addEventListener("click", myFunco3);
function myFunco3() {
    // e.preventDefault(); this works! 
    inputhai.value += valuethree.innerText; // take note of this development
}

valuefour.addEventListener("click", function (e) {
    // Don't redirect user to the link
    inputhai.value += valuefour.innerText;
    // if (inputhai.value = 12) {
    // e.preventDefault();
    // } check this
})
// valuefour.addEventListener("click", myFunco4);
// function myFunco4() {
//     inputhai.value += valuefour.innerText;
  
// }
valuefive.addEventListener("click", myFunco5);
function myFunco5() {
    inputhai.value += valuefive.innerText;
}
valuesix.addEventListener("click", myFunco6);
function myFunco6() {
    inputhai.value += valuesix.innerText;
}
valueseven.addEventListener("click", myFunco7);
function myFunco7() {
    inputhai.value += valueseven.innerText;
}
valueeight.addEventListener("click", myFunco8);
function myFunco8() {
    inputhai.value += valueeight.innerText;
}
valuenine.addEventListener("click", myFunco9);
function myFunco9() {
    inputhai.value += valuenine.innerText;
}
valuezero.addEventListener("click", myFunco0);
function myFunco0() {
    inputhai.value += valuezero.innerText;
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx






additionop.addEventListener("click", myFuncoAdditionOp);
function myFuncoAdditionOp() {
    // test starting and ending condition
    // if (inputhai.value === "123")
    // {
    //     return inputhai.value = "10000"; // take care to add "" in strings, used check complete in string
        
    // }
    if (eqregexdefformatrevised.test(inputhai.value) === true ) { // 11. TRYING eqregexdefformatrevised REGEX CONDITION HERE 
        stringassigntemp = inputhai.value;
        if (stringassigntemp.includes('+') === true) {
        indexofop = stringassigntemp.indexOf('+');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '+') {
            additionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    } // 12. DEFAULT FORMAT FOR eqregexdefformatrevised FOR ADDITION OP
        else if (stringassigntemp.includes('*') === true) {
        indexofop = stringassigntemp.indexOf('*');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
        else if (stringassigntemp.includes('-') === true) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '-') {
            subtractionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
        else if (stringassigntemp.includes('/') === true) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '/') {
            divisionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
} 

    else if (eqregexnumandoponlyrevised.test(inputhai.value) === true ) { // 13. TRYING REGEX eqregexnumandoponlyrevised REGEX HERE, opregexnumandoponly WAS USED PREVIOUSLY
    // look at eqregexnumandoponly 
    stringassigntemp = inputhai.value;
        if (stringassigntemp.includes('+') === true) {
        indexofop = stringassigntemp.indexOf('+');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); 
        numtwostore = "0";
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
        if (opstore = '+') {
        additionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
}
        else if (stringassigntemp.includes('*') === true) { // 14. LOOPS FOR else if CONDITIONS eqregexnumandoponlyrevised here
        indexofop = stringassigntemp.indexOf('*');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); 
        numtwostore = "0";
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
        if (opstore = '*') {
        multiplicationPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
}
        else if (stringassigntemp.includes('-') === true) { // 14. LOOPS FOR else if CONDITIONS eqregexnumandoponlyrevised here
        indexofop = stringassigntemp.indexOf('-');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); 
        numtwostore = "0";
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
        if (opstore = '-') {
        subtractionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
}
        else if (stringassigntemp.includes('/') === true) { // 14. LOOPS FOR else if CONDITIONS eqregexnumandoponlyrevised here
        indexofop = stringassigntemp.indexOf('/');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); 
        numtwostore = "0";
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
        if (opstore = '/') {
        divisionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
}
} 
    else if (eqregexopandnumonlyrevised.test(inputhai.value) === true ) { // there should be a separate regex for this - assign and update comment
    // 15. TRYING REGEX FOR eqregexopandnumonlyrevised HERE
    stringassigntemp = inputhai.value;
        if (stringassigntemp.includes('+') === true) {
        indexofop = stringassigntemp.indexOf('+');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '+') {
            additionPerform(numonestore, numtwostore);
        }
}
        else if (stringassigntemp.includes('*') === true) { // 16. CONDITIONS FOR REGEX eqregexopandnumonlyrevised ELSE IF BEGIN HERE
        indexofop = stringassigntemp.indexOf('*');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '*') {
        multiplicationPerform(numonestore, numtwostore);
        }
}
        else if (stringassigntemp.includes('-') === true) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '-') {
        subtractionPerform(numonestore, numtwostore);
        }
}
        else if (stringassigntemp.includes('/') === true) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '/') {
        divisionPerform(numonestore, numtwostore);
        }
} 
}// ^^^^^^^^^^^^^^^^^^^xxxxxxxxxxxxxx^^^^^^^^^^^^^^^^
else if (eqregexoponlyrevised.test(inputhai.value) === true ) { // 24. TRYING eqregexoponlyrevised REGEX HERE - ADDITION OP
    stringassigntemp = inputhai.value;
    opOnlyEqualOp(); // /////// can also call additionPerform here. Take care to display string here. Akin to num only.
    // could/should also have been done directly.
}
// 17. ORIGINAL STRING BASED CONSECUTIVE PREVENTING CONDITIONS ARE HERE


else if (inputhai.value.indexOf(opconsecutiveaddop) > 0 ) {//|| inputhai.value.indexOf(opconsecutivemulop) > 0 ) {
    return false;
}

else if (inputhai.value.indexOf(opconsecutiveaddop) < 0 ) {//&& inputhai.value.indexOf(opconsecutivemulop) < 0 ) {
    return inputhai.value += "+";
}
} // 1. ADDED CONDITIONS AFTER '&&' IN BOTH else ifs ABOVE 
// 2. CHECK '&&' AND '||' CONDITIONS

// -> checking from here
// else if (inputhai.value.indexOf(opconsecutivemulop) > 0) {
//     return false;
// }
// -> check ends here

// * else if (ccregexnoconsecutive2.test(inputhai.value) === true ) {
//     stringassigntemp = inputhai.value;
//     noConsecutiveAddOp();
// }
   // * else inputhai.value += additionop.innerText; // does else come into play here
   // check what happens if the else condition is removed - 'tis necessary, 
   // else inputhai.value += additionop.innerText; is/was here

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





multiplicationop.addEventListener("click", myFuncoMultiplicationOp);
function myFuncoMultiplicationOp() {
    
    if (eqregexdefformatrevised.test(inputhai.value) === true ) { // 18. TRYING REGEX FOR eqregexdefformatrevised HERE
        stringassigntemp = inputhai.value;

        if (stringassigntemp.includes('*') === true) {
        indexofop = stringassigntemp.indexOf('*');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('+') === true) { // 19. CONDITIONS FOR else if FOR REGEX eqregexdefformatrevised BEGIN HERE
        indexofop = stringassigntemp.indexOf('+');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '+') {
            additionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('-') === true) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '-') {
            subtractionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('/') === true) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '/') {
            divisionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
} else if (eqregexnumandoponlyrevised.test(inputhai.value) === true ) { // 20. TESTING REVISED REGEX eqregexnumandoponlyrevised HERE NUM AND OP ONLY
    // look at eqregexnumandoponly // check if this is multiplication specific
    stringassigntemp = inputhai.value;
    if (stringassigntemp.includes('*') === true) {
    indexofop = stringassigntemp.indexOf('*');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '*') {
        multiplicationPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
} // 21. CONDITIONS FOR else if REVISED REGEX eqregexnumandoponlyrevised HERE NUM AND OP ONLY
else if (stringassigntemp.includes('+') === true) {
    indexofop = stringassigntemp.indexOf('+');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '+') {
        additionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}
else if (stringassigntemp.includes('-') === true) {
    indexofop = stringassigntemp.indexOf('-');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '-') {
        subtractionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}
else if (stringassigntemp.includes('/') === true) {
    indexofop = stringassigntemp.indexOf('/');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '/') {
        divisionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}

} else if (eqregexopandnumonlyrevised.test(inputhai.value) === true ) { // 22. TESTING REVISED REGEX eqregexnumandoponlyrevised HERE OP AND NUM ONLY
    stringassigntemp = inputhai.value;
    if (stringassigntemp.includes('*') === true) {
        indexofop = stringassigntemp.indexOf('*');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        }
} // 23. REVISED REGEX CONDITIONS else if FOR eqregexnumandoponlyrevised HERE OP AND NUM ONLY BEGIN HERE
else if (stringassigntemp.includes('+') === true) {
    indexofop = stringassigntemp.indexOf('+');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '+') {
        additionPerform(numonestore, numtwostore);
    }
}
else if (stringassigntemp.includes('-') === true) {
    indexofop = stringassigntemp.indexOf('-');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '-') {
        subtractionPerform(numonestore, numtwostore);
    }
}
else if (stringassigntemp.includes('/') === true) {
    indexofop = stringassigntemp.indexOf('/');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '/') {
        divisionPerform(numonestore, numtwostore);
    }
}
}
else if (eqregexoponlyrevised.test(inputhai.value) === true ) { // 25. TRYING eqregexoponlyrevised REGEX HERE - MULTIPLICATION OP
    stringassigntemp = inputhai.value;
    opOnlyEqualOp(); // /////// can also call additionPerform here. Take care to display string here. Akin to num only.
    // could/should also have been done directly.
}

else if (inputhai.value.indexOf(opconsecutivemulop) > 0 ) {
    return false;
}

else if (inputhai.value.indexOf(opconsecutivemulop) < 0) {
    return inputhai.value += "*";
}
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




subtractionop.addEventListener("click", myFuncoSubtractionOp); // 26. 25 WAS LAST
function myFuncoSubtractionOp() {
    if (eqregexdefformatrevised.test(inputhai.value) === true ) { // 18. TRYING REGEX FOR eqregexdefformatrevised HERE
        stringassigntemp = inputhai.value;

        if (stringassigntemp.includes('-') === true) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '-') {
            subtractionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('+') === true) { // 19. CONDITIONS FOR else if FOR REGEX eqregexdefformatrevised BEGIN HERE
        indexofop = stringassigntemp.indexOf('+');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '+') {
            additionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('*') === true) {
        indexofop = stringassigntemp.indexOf('*');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('/') === true) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '/') {
            divisionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
} else if (eqregexnumandoponlyrevised.test(inputhai.value) === true ) { // 20. TESTING REVISED REGEX eqregexnumandoponlyrevised HERE NUM AND OP ONLY
    // look at eqregexnumandoponly // check if this is multiplication specific
    stringassigntemp = inputhai.value;
    if (stringassigntemp.includes('-') === true) {
    indexofop = stringassigntemp.indexOf('-');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '-') {
        subtractionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
} // 21. CONDITIONS FOR else if REVISED REGEX eqregexnumandoponlyrevised HERE NUM AND OP ONLY
else if (stringassigntemp.includes('+') === true) {
    indexofop = stringassigntemp.indexOf('+');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '+') {
        additionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}
else if (stringassigntemp.includes('*') === true) {
    indexofop = stringassigntemp.indexOf('*');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '*') {
        multiplicationPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}
else if (stringassigntemp.includes('/') === true) {
    indexofop = stringassigntemp.indexOf('/');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '/') {
        divisionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}

} else if (eqregexopandnumonlyrevised.test(inputhai.value) === true ) { // 22. TESTING REVISED REGEX eqregexnumandoponlyrevised HERE OP AND NUM ONLY
    stringassigntemp = inputhai.value;
    if (stringassigntemp.includes('-') === true) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '-') {
            subtractionPerform(numonestore, numtwostore);
        }
} // 23. REVISED REGEX CONDITIONS else if FOR eqregexnumandoponlyrevised HERE OP AND NUM ONLY BEGIN HERE
else if (stringassigntemp.includes('+') === true) {
    indexofop = stringassigntemp.indexOf('+');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '+') {
        additionPerform(numonestore, numtwostore);
    }
}
else if (stringassigntemp.includes('*') === true) {
    indexofop = stringassigntemp.indexOf('*');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '*') {
        multiplicationPerform(numonestore, numtwostore);
    }
}
else if (stringassigntemp.includes('/') === true) {
    indexofop = stringassigntemp.indexOf('/');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '/') {
        divisionPerform(numonestore, numtwostore);
    }
}
}
else if (eqregexoponlyrevised.test(inputhai.value) === true ) { // 25. TRYING eqregexoponlyrevised REGEX HERE - SUBTRACTION OP
    stringassigntemp = inputhai.value;
    opOnlyEqualOp(); // /////// can also call additionPerform here. Take care to display string here. Akin to num only.
    // could/should also have been done directly.
}

else if (inputhai.value.indexOf(opconsecutivemulop) > 0) {
    return false;
}

else if (inputhai.value.indexOf(opconsecutivemulop) < 0) {
    return inputhai.value += "-";
}
// 27. TRYING FOR UNSIGNED
// else if (signedseparateregexcheck.test(inputhai.value) === true ) {
//     return inputhai.value += "-";
// }

}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





divisionop.addEventListener("click", myFuncoDivisionOp); // AFTER 27
function myFuncoDivisionOp() {
    if (eqregexdefformatrevised.test(inputhai.value) === true ) { // 28. TRYING REGEX FOR eqregexdefformatrevised HERE
        stringassigntemp = inputhai.value;

        if (stringassigntemp.includes('/') === true) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '/') {
            divisionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('+') === true) { // 29. CONDITIONS FOR else if FOR REGEX eqregexdefformatrevised BEGIN HERE
        indexofop = stringassigntemp.indexOf('+');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '+') {
            additionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('-') === true) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '-') {
            subtractionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
    else if (stringassigntemp.includes('*') === true) {
        indexofop = stringassigntemp.indexOf('*');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); 
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1);
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }
} else if (eqregexnumandoponlyrevised.test(inputhai.value) === true ) { // 30. TESTING REVISED REGEX eqregexnumandoponlyrevised HERE NUM AND OP ONLY
    // look at eqregexnumandoponly // check if this is multiplication specific
    stringassigntemp = inputhai.value;
    if (stringassigntemp.includes('/') === true) {
    indexofop = stringassigntemp.indexOf('/');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '/') {
        divisionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
} // 31. CONDITIONS FOR else if REVISED REGEX eqregexnumandoponlyrevised HERE NUM AND OP ONLY
else if (stringassigntemp.includes('+') === true) {
    indexofop = stringassigntemp.indexOf('+');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '+') {
        additionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}
else if (stringassigntemp.includes('-') === true) {
    indexofop = stringassigntemp.indexOf('-');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '-') {
        subtractionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}
else if (stringassigntemp.includes('*') === true) {
    indexofop = stringassigntemp.indexOf('*');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '*') {
        multiplicationPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
}

} else if (eqregexopandnumonlyrevised.test(inputhai.value) === true ) { // 32. TESTING REVISED REGEX eqregexnumandoponlyrevised HERE OP AND NUM ONLY
    stringassigntemp = inputhai.value;
    if (stringassigntemp.includes('/') === true) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '/') {
            divisionPerform(numonestore, numtwostore);
        }
} // 33. REVISED REGEX CONDITIONS else if FOR eqregexnumandoponlyrevised HERE OP AND NUM ONLY BEGIN HERE
else if (stringassigntemp.includes('+') === true) {
    indexofop = stringassigntemp.indexOf('+');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '+') {
        additionPerform(numonestore, numtwostore);
    }
}
else if (stringassigntemp.includes('-') === true) {
    indexofop = stringassigntemp.indexOf('-');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '-') {
        subtractionPerform(numonestore, numtwostore);
    }
}
else if (stringassigntemp.includes('*') === true) {
    indexofop = stringassigntemp.indexOf('*');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '*') {
        multiplicationPerform(numonestore, numtwostore);
    }
}
}
else if (eqregexoponlyrevised.test(inputhai.value) === true ) { // 34. TRYING eqregexoponlyrevised REGEX HERE - DIVISION OP
    stringassigntemp = inputhai.value;
    opOnlyEqualOp(); // /////// can also call additionPerform here. Take care to display string here. Akin to num only.
    // could/should also have been done directly.
}

else if (inputhai.value.indexOf(opconsecutivedivop) > 0 ) {
    return false;
}

else if (inputhai.value.indexOf(opconsecutivedivop) < 0) {
    return inputhai.value += "/";
}
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





equalop.addEventListener("click", myFuncoEqualOp);
function myFuncoEqualOp() {
    
    // e.preventDefault(); this works! 
    // inputhai.value += equalop.innerText; // take note of this development
    if (eqregexdefformatrevised.test(inputhai.value) === true ) { // 4. USED REVISED REGEX HERE FIRST eqregexdefformatrevised
        stringassigntemp = inputhai.value;
        if (stringassigntemp.includes('+') === true) {
        indexofop = stringassigntemp.indexOf('+');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '+') {
            additionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }   // start else if loops for operators from here
// 5. ELSE IF LOOPS ADDING HERE
    else if (stringassigntemp.includes('*') === true ) {
        indexofop = stringassigntemp.indexOf('*');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        } 
    }
    else if (stringassigntemp.includes('-') === true ) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
        if (opstore = '-') {
            subtractionPerform(numonestore, numtwostore);
        } 
    }
    else if (stringassigntemp.includes('/') === true ) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
        if (opstore = '/') {
            divisionPerform(numonestore, numtwostore);
        } 
    }
} 
else if (eqregexnumonly.test(inputhai.value) === true ) {
    stringassigntemp = inputhai.value;
    numOnlyEqualOp(stringassigntemp); // try numOnlyEqualOp(inputhai.value)
}
else if (eqregexnumandoponlyrevised.test(inputhai.value) === true ) { // 6. TRYING REVISED NUM AND OP ONLY HERE eqregexnumandoponlyrevised
    stringassigntemp = inputhai.value;
    if (stringassigntemp.includes('+') === true) {
    indexofop = stringassigntemp.indexOf('+');
    numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); 
    numtwostore = "0";
    opstore = stringassigntemp.substr(indexofop,1); // can also use slice
// } // contemplate this bracket's positioning
    if (opstore = '+') {
        additionPerform(numonestore, numtwostore);
    } //|| if () || if () || if ()
} // 7. LOOPS FOR eqregexnumandoponlyrevised REGEX else if HERE
    else if (stringassigntemp.includes('*') === true) {
        indexofop = stringassigntemp.indexOf('*');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); 
        numtwostore = "0";
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
    }
    else if (stringassigntemp.includes('-') === true) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); 
        numtwostore = "0";
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '-') {
            subtractionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
    }
    else if (stringassigntemp.includes('/') === true) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); 
        numtwostore = "0";
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '/') {
            divisionPerform(numonestore, numtwostore); 
        } //|| if () || if () || if ()
    }
}
else if (eqregexopandnumonlyrevised.test(inputhai.value) === true ) { // 8. TRYING REVISED OP AND NUM ONLY HERE eqregexopandnumonlyrevised
    stringassigntemp = inputhai.value;
    if (stringassigntemp.includes('+') === true) { 
        indexofop = stringassigntemp.indexOf('+');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '+') {
            additionPerform(numonestore, numtwostore);
        }
} // 9. LOOPS FOR eqregexopandnumonlyrevised REGEX else if HERE 
    else if (stringassigntemp.includes('*') === true) { 
        indexofop = stringassigntemp.indexOf('*');
        numonestore = "0";
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1);
        opstore = stringassigntemp.substr(indexofop,1);
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        }
} else if (stringassigntemp.includes('-') === true) { 
    indexofop = stringassigntemp.indexOf('-');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '-') {
        subtractionPerform(numonestore, numtwostore);
    }
} else if (stringassigntemp.includes('/') === true) { 
    indexofop = stringassigntemp.indexOf('/');
    numonestore = "0";
    numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1);
    opstore = stringassigntemp.substr(indexofop,1);
    if (opstore = '/') {
        divisionPerform(numonestore, numtwostore);
    }
}
}
else if (eqregexoponlyrevised.test(inputhai.value) === true ) { // 10. TRYING eqregexoponlyrevised REGEX HERE
    stringassigntemp = inputhai.value;
    opOnlyEqualOp(); // /////// can also call additionPerform here. Take care to display string here. Akin to num only.
    // could/should also have been done directly.
} // 35. adding DECIMAL REGEXES HERE --x--

else if (decimaldefformat.test(inputhai.value) === true) {

    stringassigntemp = inputhai.value;
        if (stringassigntemp.includes('+') === true) {
        indexofop = stringassigntemp.indexOf('+');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('+')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('+') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
    // } // contemplate this bracket's positioning
        if (opstore = '+') {
            additionPerform(numonestore, numtwostore);
        } //|| if () || if () || if ()
        // switch (opstore) {
    
        //     case '+': additionPerform(numonestore, numtwostore);
        //     default : inputhai.value = "Check complete";
        // } 

    }   // start else if loops for operators from here
// 5. ELSE IF LOOPS ADDING HERE
    else if (stringassigntemp.includes('*') === true ) {
        indexofop = stringassigntemp.indexOf('*');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('*')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('*') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
        if (opstore = '*') {
            multiplicationPerform(numonestore, numtwostore);
        } 
    }
    else if (stringassigntemp.includes('-') === true ) {
        indexofop = stringassigntemp.indexOf('-');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('-')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('-') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
        if (opstore = '-') {
            subtractionPerform(numonestore, numtwostore);
        } 
    }
    else if (stringassigntemp.includes('/') === true ) {
        indexofop = stringassigntemp.indexOf('/');
        numonestore = stringassigntemp.slice(0,stringassigntemp.indexOf('/')); // or indexop
        numtwostore = stringassigntemp.slice(stringassigntemp.indexOf('/') + 1); // or indexop
        opstore = stringassigntemp.substr(indexofop,1); // can also use slice
        if (opstore = '/') {
            divisionPerform(numonestore, numtwostore);
        } 
    }

}

// As of n-2 regex matches, not adding a condition for checking consecutive == yields no click upon clicking. Take note for the '+' operator.
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 37. TRIALLING DECIMAL CONSECUTIVE --x--
    // \.{2,}
    // parseFLoat, toFixed, if regex condition and count > 2 specified
    function countString(str, letter) {
        // let count = 0;
    
        // looping through the items
        for (let i = 0; i < str.length; i++) {
    
            // check if the character is at that position
            if (str.charAt(i) == letter) {
                count += 1;
            }
        }
        return count;
    }

    countmeter = countString(stringassigntemp,opconsecutivedecop);



decimalop.addEventListener("click", myFuncoDecimalOp);
function myFuncoDecimalOp() {

    let indexofpos = inputhai.value.indexOf(opconsecutivedecop);
    let lastindexofpos = inputhai.value.lastIndexOf(opconsecutivedecop); // 40. Try this again to check --x--
    if (decimalpreventconsecutive.test(inputhai.value) === true ) {// try false here) {//&& countmeter > 2 ) {
        return false;
    }
    else {
        return inputhai.value += "."; // 41. use stringassigntemp to check --x--
    }
    // 38. This was the 2nd condition --x-- if (indexofpos > 0 && lastindexofpos > indexofpos) {
    //     return false;
    // }

    // else if (indexofpos < 0 && lastindexofpos < 0) {
    //     return inputhai.value += ".";
    // }

    // 36. THE ORIGINAL FOR PREVENTING CONSECUTIVE IS BELOW --x--
    // if (inputhai.value.indexOf(opconsecutivedecop) > 0 ) {
    //     return false;
    // }
    
    // else if (inputhai.value.indexOf(opconsecutivedecop) < 0) {
    //     return inputhai.value += ".";
    // }
    

}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





deleteop.addEventListener("click", myFuncoDeleteOp);
function myFuncoDeleteOp() {
    stringassigntemp = inputhai.value;
    inputhai.value = stringassigntemp.slice(0, stringassigntemp.length - 1);
}

clearop.addEventListener("click", myFuncoClearOp);
function myFuncoClearOp() {
    // stringassigntemp = inputhai.value;
    inputhai.value = "";
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx






function additionPerform (paramone, paramtwo) {
    let additionresult = Number(paramone) + Number(paramtwo);
    return inputhai.value = additionresult.toString(); // checking toString()
}
function subtractionPerform (paramuno, paramdos) {
    let subtractionresult = Number(paramuno) - Number(paramdos);
    return inputhai.value = subtractionresult.toString();
}
function multiplicationPerform (paramonee, paramtwoo) {
    let multiplicationresult = Number(paramonee) * Number(paramtwoo);
    return inputhai.value = multiplicationresult.toString();
}
function divisionPerform (paramunoo, paramdoss) {
    let divisionresult = Number(paramunoo) / Number(paramdoss);
    return inputhai.value = divisionresult.toString();
}

function numOnlyEqualOp (paraone) {
    // let displayprevdigit = Number(paraone);
    // return inputhai.value = displayprevdigit;
    return inputhai.value = paraone; //Number(paraone);  // upon getting NaN as an error, rectified it to assign a string value to the input field. The same solution is to be applied for opregexnumzeroatstart and opregexnumandoponly.
}
function numAndOpEqualOp (param1) {

}
function opOnlyEqualOp () {
    return inputhai.value = "0";
}
function noConsecutiveAddOp () {
    return inputhai.value += "+";
}




console.log(inputhai.value); // marker end check -----------------X------------------



