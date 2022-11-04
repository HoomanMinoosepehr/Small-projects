const prompt = require(`prompt-sync`)();

let roman = prompt(`Please enter your roman number: `);
let romanVal = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
roman = roman.toUpperCase() ;
roman = roman.split(""); 

    function toInt () {
        let ans = 0;
        for (let i= 0 ; i<roman.length ; i++){
            if ((4*romanVal[roman[i]]+romanVal[roman[i]]) == romanVal[roman[i+1]] || ((8*romanVal[roman[i]])+(2*romanVal[roman[i]]) == romanVal[roman[i+1]])){
                ans = ans + (romanVal[roman[i+1]] - romanVal[roman[i]]); i++;
            } else {
            ans = ans + romanVal[roman[i]];
            }
        }
       return ans;
    };
    
console.log(toInt(roman));
