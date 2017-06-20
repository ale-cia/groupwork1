console.log('hello');




var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

//for (var i = 0; i < employees.length; i++) {
  //console.log(employees[i]);





var bonusCalc = function(person){

var bonus = 0;
var bonusOfFour = 0;
var bonusEmployee = 0;
var adjustedBonus = 0;
var totalBonus = 0;
var salaryPlusBonus = 0;
var newArray = [];
var name = person[0];
var employeeID = person[1];
var salary = person[2];
var rating = person[3];
//newArray[0] = name;
newArray.push(name);


if(rating <= 2 ) {
  console.log('No bonus');
  bonus = 0;
} else if(rating == 3 ){
  console.log(salary * 0.04);
    bonus = salary * 0.04;
}else if (rating == 4) {
  console.log(salary * 0.06);
  bonus = salary * 0.06;
}else if (rating == 5) {
  console.log(salary * 0.10);
   bonus = employees[i][2] * 0.10;
}
//this entire if/else is bonus for employee rating 1-5, is equal to var bonus

if (employeeID.length == 4) {
  console.log(salary * 0.5);
  bonusOfFour = (salary * 0.5);
}else {
  console.log("Less bonus");
}
//this is the employee digit length additional five percent bonus
if (salary > 65000) {
  adjustedBonus = salary* 0.01;
  console.log(adjustedBonus);
}
totalBonus = bonus + bonusOfFour - adjustedBonus;

if (totalBonus <= 0) {
  totalBonus = 0;
} else if (totalBonus > (salary * 0.13)) {
  totalBonus = salary * 0.13;
}

//totalBonus = salary / totalBonus;
var percentBonus = Math.floor(salary / totalBonus);
newArray.push(percentBonus); 

salaryPlusBonus = totalBonus + salary;
newArray.push(salaryPlusBonus);


  console.log(newArray);
};



for(var i = 0; i < employees.length; i++ ) {
  console.log(employees[i]);
  bonusCalc(employees[i]);
}




//function bonusCalc(firstName, bonusPercentage, adjustedIncome, totalBonus) {
  //this.firstName = first;
  //this.bonusPercentage = bonusPercentage;
  //this.adjustedIncome = adjustedIncome;
  //this.totalBonus = totalBonus;

//}

//var atticus = new bonusCalc() {
