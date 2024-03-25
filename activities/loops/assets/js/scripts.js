// let Multiply = document.getElementById("btnMultiply");

// Execute.addEventListener('click', function() {
//     let Rows = parseInt(document.getElementById('txtRows').value);
//     let Column = parseInt(document.getElementById('txtColumn').value);
//     let Divs = "";

//     for(var x = 1; x <= Rows; x++) {
//         Divs += "<div class='text-center rounded-circle bg-primary m-1' style='width: 40px; height: 40px;'>" + x + "</div>";
//         for(var col = 1; col <= Column; col++) {
//             Quotients += (row * col) + " "; 
//         }
//         console.log( Quotients);


//     }
    
//     document.getElementById("div-wrapper").innerHTML = Divs;
// });


// let Options  = "";
// for(var opts = 1; opts <= 1000; opts++) {
//     Options  += "<option value='"+ opts +"'>" + opts +"</option>";
// }

// document.getElementById("selOptions").innerHTML = Options;

document.getElementById('btnMultiply').addEventListener('click', function() {
    // Get user input for rows and columns
    const rows = parseInt(document.getElementById('txtLimit').value);
    const cols = parseInt(document.getElementById('txtLimit').value);
  
    // Clear any previous table data
    document.getElementById('div-wrapper').innerHTML = "";
  
    // Create the multiplication table using a for loop
    let tableContent = "";
    for (let i = 1; i <= rows; i++) {
      tableContent += "<tr>";
      for (let j = 1; j <= cols; j++) {
        const product = i * j;
        tableContent += `<td>${product}</td>`;
      }
      tableContent += "</tr>";
    }
  
    // Update the table content in the HTML
    document.getElementById('div-wrapper').innerHTML = tableContent;
  });
  