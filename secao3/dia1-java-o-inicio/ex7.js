var bruteSalary= 3000;
var aliquote;
var baseSalary;
var imposto;
var deduction;
var renda;
var liquidSalary;

if (bruteSalary <= 1555.94) {
aliquote= bruteSalary * 0.08; 
} else if (bruteSalary >= 1556.95 && bruteSalary <=2594.92) {
    aliquote= bruteSalary * 0.09;
} else if (bruteSalary >= 2594.93 && bruteSalary <=5189.82) {
    aliquote= bruteSalary* 0.11;
} else {
    aliquote= 570.88
}
baseSalary= bruteSalary - aliquote;

if (baseSalary <= 1903.98) {
    imposto= 0;
    } else if (baseSalary >= 1903.99 && baseSalary <=2826.65) {
        imposto= baseSalary * 0.075;
        deduction= 142.8
    } else if (baseSalary >= 2826.66 && baseSalary <=3715.05) {
        imposto= baseSalary * 0.15;
        deduction= 354.8;
    } else if (baseSalary >= 3751.06 && baseSalary <=4664.68) {
        imposto= baseSalary * 0.225;
        deduction= 636.13
    } else {
        imposto= baseSalary *0.275;
        deduction= 869.36
    }
renda= imposto-deduction;
liquidSalary= baseSalary-renda;

console.log(liquidSalary);