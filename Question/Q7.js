//Print a multiplication table from 1 to 10.

function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
      let row = ''; // Initialize an empty string for each row
      for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`; // Append the product to the row string with a tab space
      }
      console.log(row); 
    }
  }
  
  printMultiplicationTable();