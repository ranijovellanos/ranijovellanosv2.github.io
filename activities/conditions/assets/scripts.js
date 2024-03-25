alert("Your message here");

 
var weight = propmt("60");
var height = propmt("1.5");


 var bmi = weight / (height * height);


 if (bmi < 16)
 {
    console.log("Severely Underweight");
 }
 else if (bmi >= 16.0 && bmi <= 18.4)
 {
    console.log("Underweight");
 }
 else if (bmi >= 18.5 && bmi <= 24.9)
 {
    console.log("Normal Weight");
 }
 else if (bmi >= 25.0 && bmi <= 29.9)
 {
    console.log("Overweight");
 }
 else if (bmi >= 30.0 && bmi <= 34.9)
 {
    console.log("Moderately obese");
 }
 else if (bmi >= 35.0 && bmi <= 39.9)
 {
    console.log("Severely obese");
 }
 else if (bmi >= 35.0 && bmi <= 39.9)
 {
    console.log("Severely obese");
 }
 else
 {
    console.log("Morbidly obese");
 }

