const prompt = require('prompt-sync')();


//payee generated for salary parameter
function taxToBePaid(salary){
    let payee;
    salary = salary-1080;
    if (salary <= 24000){
        payee = 0;
    }else if (salary > 24000 && salary <=32333){
        payee = 0.25*(salary-24000)
    }else if (salary >32333 && salary <= 500000){
        payee = 2083 + (0.3*(salary-32333))
    }else if (salary > 500000 && salary <= 800000){
        payee = 142383 + (0.325*(salary-500000))
    }else if (salary > 800000){
        payee = 239883 + (0.35*(salary-800000))
    }else{
        //pass
    }

    return payee;
}

//nhif payment  generated for salary parameter
function nhifToBePaid(salary){
    let nhifpayment;
    if (salary <= 5999){
        nhifpayment = 150
    }else if (salary >=6000 && salary <= 7999){
        nhifpayment = 300
    }else if (salary >=8000 && salary <= 11999){
        nhifpayment = 400
    }else if (salary >=12000 && salary <= 14999){
        nhifpayment = 500
    }else if (salary >=15000 && salary <= 19999){
        nhifpayment = 600
    }else if (salary >=20000 && salary <= 24999){
        nhifpayment = 750
    }else if (salary >=25000 && salary <= 29999){
        nhifpayment = 850
    }else if (salary >=30000 && salary <= 34999){
        nhifpayment = 900
    }else if (salary >=35000 && salary <= 39999){
        nhifpayment = 950
    }else if (salary >40000 && salary <= 44999){
        nhifpayment = 1000
    }else if (salary >=45000 && salary <= 49999){
        nhifpayment = 1100
    }else if (salary >=50000 && salary <= 59999){
        nhifpayment = 1200
    }else if (salary >=60000 && salary <= 69999){
        nhifpayment = 1300
    }else if (salary >=70000 && salary <= 79999){
        nhifpayment = 1400
    }else if (salary >=80000 && salary <= 89999){
        nhifpayment = 1500
    }else if (salary >=90000 && salary <= 99999){
        nhifpayment = 1600
    }else if (salary >=100000){
        nhifpayment = 1700
    }else{
        //pass
    }

    return nhifpayment;
}

//nssf has a flat rate of 1000ksh
function nssfpayment(){
    return 1000;
}


//what is the client paid
let salary = prompt("salary:   ")
let nhif = nhifToBePaid(salary)
let nssf = nssfpayment()
let payee = taxToBePaid(salary)

//prints required values
console.log(`Gross Income: ${salary}`)
console.log(`Tax payable: ${payee}`)
console.log(`NHIF: ${nhif}`)
console.log(`NSSF: ${nssf}`)
console.log(`Net Salary: ${salary-payee-nhif-nssf}`)