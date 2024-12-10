// arrEmployees is a 2-dimensional array - arrays within an array
var arrEmployees = [
    ['John Doe', 'HR', 'Generalist'],
    ['Jane Smith', 'Sales', 'Lead Generator'],
    ['Emily Davis', 'IT', 'Network Administrator'],
    ['Fred Jones', 'Management', 'CEO']
];

// function to build the table rows and columns to show the data
function displayData(){
    // create the pointer/nickname/shortcut to the HTML table element
    var table = document.getElementById("tblData");

    // loop through the 2-d arrEmployees
    for (var i=0; i<arrEmployees.length; i++){
        // set up a variable to hold the employee info array
        var employee = arrEmployees[i];

        // build the table row
        var row = document.createElement("tr");

        // nested loop to build the columns / table data
        for (var j=0; j<employee.length; j++){
            // create a column / table data for each piece of information about our employee
            var column = document.createElement("td");
            // add the piece of information to the td
            column.textContent = employee[j];

            // need to add this new column to the table row created in the outer loop
            row.appendChild(column);
        }

        // add this new row with the 3 columns of information to the table
        table.appendChild(row);
    }
}

// call the function to display the data
displayData();