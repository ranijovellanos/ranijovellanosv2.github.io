alert("Your message here");

// addition/

// let FirstNumber = document.getElementById("num-english").value;
// let SecondNumber = document.getElementById("num-math").value;
// let ThirdNumber = document.getElementById("num-data").value;
// let FourthNumber = document.getElementById("num-com").value;
// let FifthNumber = document.getElementById("num-web").value;
// let total = parseFloat(FirstNumber) + parseFloat(SecondNumber) + parseFloat(ThirdNumber) + parseFloat(FourthNumber) + parseFloat(FifthNumber);

// document.getElementById("p-total").innerText = total;




// key/
let txtFirstNumber = document.getElementById("num-english"); //html code 
let txtSecondNumber = document.getElementById("num-math");
let txtThirdNumber = document.getElementById("num-data"); //html code 
let txtFourthNumber = document.getElementById("num-com");
let txtFifthNumber = document.getElementById("num-web"); //html code 






txtFirstNumber.addEventListener('keyup', function() {
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value) + parseFloat(txtThirdNumber.value) + parseFloat(txtFourthNumber.value) + parseFloat(txtFifthNumber.value);

    document.getElementById("p-total").value = total;

    let ave = total / 5;
    document.getElementById("num-average").value = ave;
});

txtSecondNumber.addEventListener('keyup', function() {    
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value) + parseFloat(txtThirdNumber.value) + parseFloat(txtFourthNumber.value) + parseFloat(txtFifthNumber.value);
    
    document.getElementById("p-total").value = total;

    let ave = total / 5;
    document.getElementById("num-average").value = ave;
});

txtThirdNumber.addEventListener('keyup', function() {    
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value) + parseFloat(txtThirdNumber.value) + parseFloat(txtFourthNumber.value) + parseFloat(txtFifthNumber.value);

    document.getElementById("p-total").value = total;
   
    let ave = total / 5;
    document.getElementById("num-average").value = ave;
});

txtFourthNumber.addEventListener('keyup', function() {    
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value) + parseFloat(txtThirdNumber.value) + parseFloat(txtFourthNumber.value) + parseFloat(txtFifthNumber.value);

    document.getElementById("p-total").value = total;
    
    let ave = total / 5;
    document.getElementById("num-average").value = ave;
});

txtFifthNumber.addEventListener('keyup', function() {    
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value) + parseFloat(txtThirdNumber.value) + parseFloat(txtFourthNumber.value) + parseFloat(txtFifthNumber.value);

    document.getElementById("p-total").value = total;

    let ave = total / 5;
    document.getElementById("num-average").value = ave;
});
