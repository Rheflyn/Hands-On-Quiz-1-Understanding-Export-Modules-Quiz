const { add, subtract, multiply, divide } = require('./calculation');


const ratePerHour = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;
const taxRate = 0.10;
const sssDeduction = 1200;
const pagIbigDeduction = 300;
const philHealthDeduction = 400;

// to calculate the gross income
const weeklyHours = multiply(hoursPerDay, daysPerWeek);
const grossIncome = multiply(weeklyHours, ratePerHour);

// to calculate the deductions
const tax = multiply(grossIncome, taxRate);
const totalDeductions = add(add(add(tax, sssDeduction), pagIbigDeduction), philHealthDeduction);

// to calculate net salary
const netSalary = subtract(grossIncome, totalDeductions);

//results to preview 
console.log(`Rate per hour: ${ratePerHour}`);
console.log(`Hours worked per day: ${hoursPerDay}`);
console.log(`Days worked per week: ${daysPerWeek}`);
console.log(`Gross Income: ${grossIncome}`);
console.log(`Tax: ${tax}`);
console.log(`SSS: ${sssDeduction}`);
console.log(`Pag-Ibig fund: ${pagIbigDeduction}`);
console.log(`PhilHealth: ${philHealthDeduction}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Salary: ${netSalary}`);
//Buan Enrico Jr. J. WD-303