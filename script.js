 // Function to save table data to local storage
 // This is defined in the global scope because it causes bugs when placed elsewhere
 function saveTableData() {
    console.log("Saving table data");
    const tableContent = document.getElementById('media-table-body').innerHTML;
    localStorage.setItem('mediaMasterlist', tableContent);
    console.log("Data saved to localStorage:", localStorage.getItem('mediaMasterlist'));
}

document.addEventListener('DOMContentLoaded', function() { //This may appear like it causes the Add Row button adds TWO rows instead of one when operating within the CodeSwing, but it ensures everything works correctly when working in the browser.
    (function(window, document) {
        // This contains code that should be taken care of right away
        window.onload = initialize;
        function initialize (){
            // Functions that are called immediately (get elements) go in inititalize
            
            //This represents the amount of rows we want JavaScript to add in immediately
            //Since we have 1 row defined in HTML and want 10 rows by default, we want 9
            const desiredRowsCount = 9
            for (var i = 0; i < desiredRowsCount; i++) {
                addRow()
            };

            // Add event listener to save table data whenever a cell's content changes
            document.getElementById('media-table-body').addEventListener('input', saveTableData);
    
            //Get the Score buttons
            const myScoreSelButtons = document.getElementsByClassName("score-dropdown-class"); // there are 11 of these
            //Get the Score button options that can be selected
            
            //     function myFunction(event) {
            //     // Find the closest row to the clicked dropdown item
            //     console.log("myFunction")
            //     let row = event.target.closest('tr');
            //     if (row) {
            //         // Find the dropdown button within the row
            //         let button = row.querySelector('.dropdown-toggle');
            //         if (button) {
            //             // Update the button's text
            //             button.innerText = event.target.innerText;
            //             // Save the dropdown values
            //             saveScoreDropdowns();
            //         }
            //     }
            // }
    
            //When I remove this specific line of code, 
            //Local storage stops working and dropdowns work again.
            loadTableData();

            //Below is my solution to local storage not being compatible with dropdowns
            // Get all elements with the class "dropdown-item"
            const dropdownItems = document.querySelectorAll('.dropdown-item');

            // This ensures event listeners are added after loadTableData is called
            dropdownItems.forEach(item => {
            // Add event listener to each dropdown item
            item.addEventListener('click', function(event) {
            
            // Find the closest row to the clicked dropdown item
            console.log("Updating dropdown value");
            let row = event.target.closest('tr');
            if (row) {
            // Find the dropdown button within the row
            let button = row.querySelector('.dropdown-toggle');
            if (button) {
                // Update the button's text
                button.innerText = event.target.innerText;
                // Save the dropdown values
                saveTableData();
            }
        }
    });
});

   
            // Create an array of trash 
            let trashArray = document.getElementsByClassName("delete");
            const numOfTrash = trashArray.length;
            for (var i = 0; i < numOfTrash; i++) {
                trashArray[i].addEventListener('click', deleteSpecificRow);     
            };
            
    
        }
        

        // // Function to load table data from local storage
        // function loadTableData() {
        //     console.log("Loading table data");
        //     const tableContent = localStorage.getItem('mediaMasterlist');
        //     if (tableContent) {
        //         document.getElementById('media-table-body').innerHTML = tableContent;
        //     }
        // }

        // Function to load table data from local storage
        function loadTableData() {
        console.log("Loading table data");
        const tableContent = localStorage.getItem('mediaMasterlist');
        if (tableContent) {
        // Set the innerHTML of media-table-body to the loaded table content
        document.getElementById('media-table-body').innerHTML = tableContent;
    }
}
        
        // Function to save row count
        function saveRowCount(count) {
            localStorage.setItem('rowCount', count);
        }
    
        // Call loadTableData when the page loads
        document.addEventListener('DOMContentLoaded', loadTableData);
            
        // Get the Add Row button
        let addRowButton = document.getElementById("add-row");
        let rowCount = document.getElementById('media-table-body').getElementsByTagName('tr').length;
        saveRowCount(rowCount);
    
        // Add event listener to Add Row button
        addRowButton.addEventListener('click', addRow);
    
        //Get the Clear button
        let clearButton = document.getElementById("clear");
    
        // Add event listener to Clear button
        clearButton.addEventListener('click', clearTable);
    
        //Get the Delete button
        let deleteButton = document.getElementById("delete");
    
        // Add event listener to Delete button
        deleteButton.addEventListener('click', deleteRow);
    
        // Get the Export Button
        let exportButton = document.getElementById("export");
    
        // Add event listener to the export button
        exportButton.addEventListener('click', exportTableToCSV);    

    
    
    })(window, document);
    
    
    
    
    });
    
    
    
    //This defines what happens when we add a row (this happens 9 times when page loads, and occurs whenever Add Row button is clicked)
    function addRow() {
    console.log("addRow");
    // Get the table body element in which you want to add row
    let table = document.getElementById("media-table-body");
    // Create row element
    let row = document.createElement("tr");
    // Create cells
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("td");
    let c6 = document.createElement("td");
    let deleteCell = document.createElement("td");

    // Insert data to cells
    c1.innerText = " ";
    c3.innerText = " ";
    c4.innerText = " ";
    c5.innerText = " ";
    c6.innerText = " ";

    // Make appropriate cells editable
    c1.setAttribute("contenteditable", "true");
    c3.setAttribute("contenteditable", "true");
    c4.setAttribute("contenteditable", "true");
    c5.setAttribute("contenteditable", "true");
    c6.setAttribute("contenteditable", "true");

    // Create delete button with trash icon
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete", "fa", "fa-trash-o"); // Add appropriate classes
    deleteButton.style.fontSize = "24px"; // Set font size

    // Append delete button to delete cell
    deleteCell.appendChild(deleteButton);

    // Create a new dropdown menu for the score
    let dropdown = document.createElement("div");
    dropdown.setAttribute("class", "dropdown");

    // Create the score button
    let button = document.createElement("button");
    button.innerText = "Score";
    button.setAttribute("class", "btn btn-secondary dropdown-toggle");
    button.setAttribute("type", "button");
    button.setAttribute("id", "dropdownMenuButton1");
    button.setAttribute("data-toggle", "dropdown");
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");

    // Create the dropdown menu
    let dropdownMenu = document.createElement("div");
    dropdownMenu.setAttribute("class", "dropdown-menu");

    // Define star emojis
    const stars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

    // Create dropdown items for star ratings
    for (let i = 0; i < stars.length; i++) {
        let dropdownItem = document.createElement("button");
        dropdownItem.setAttribute("class", "dropdown-item");
        dropdownItem.setAttribute("type", "button");
        dropdownItem.setAttribute("value", i + 1); // Set value from 1 to 5
        dropdownMenu.appendChild(dropdownItem);
        // Add event listener to capture the selected value
        dropdownItem.addEventListener('click', function() {
            button.innerText = this.innerText; // Update button text with selected value
            // Save the selected value to a variable or perform other actions as needed
            console.log("Selected value:", this.value);
        });
        dropdownMenu.appendChild(dropdownItem);
    }

    // Append the dropdown menu to the dropdown
    dropdown.appendChild(dropdownMenu);

    // Append the button to the dropdown
    dropdown.appendChild(button);

    // Append the dropdown to the second cell
    c2.appendChild(dropdown);

    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.appendChild(c6);
    row.appendChild(deleteCell);

    // Append row to table body
    table.appendChild(row);
};
    //This defines what happens when we click the clear button.
    function clearTable() {
        // Get all elements with class "score-dropdown-class"
        let buttons = document.querySelectorAll('.dropdown-toggle');
    
        // Iterate through each button
        buttons.forEach(button => {
            // Set the inner text of each button to "Score"
            button.innerText = "Score";
        });
    
        // Get the table body element
        let tableBody = document.getElementById("media-table-body");
    
        // Iterate through each row
        for (let i = 0; i < tableBody.rows.length; i++) {
            let row = tableBody.rows[i];
    
            // Iterate through each cell in the row
            for (let j = 0; j < row.cells.length; j++) {
                let cell = row.cells[j];
    
                // If it's not the second column or final column, clear the inner text
                if (j !== 1 && j !== row.cells.length - 1) {
                    cell.innerText = "";
                }
            }
        }
                //This isn't working, table data is not saved as blank when clearTable is used and the page is reloaded
                saveTableData()

    }
    
    // Function to delete the last row
    function deleteRow() {
        console.log('deleteRow')
        // Get the table body element
        let table = document.getElementById("media-table-body");
    
        // Check if there's more than one row
        if (table.rows.length > 1) {
            // Remove the last row
            table.deleteRow(-1);
        }
    }
    
    function deleteSpecificRow(event) {
        console.log('event.target', event.target)
        console.log('event.target.parentElement', event.target.parentElement)
        console.log('event.target.parentElement.parentElement', event.target.parentElement.parentElement)
        let row = event.target.parentElement.parentElement;
        //Remove the row from its parent
        row.remove();
    }
    
    
    
    
    
    // .addEventListener("click", function() {
    // // Get the parent row and remove it
    // var row = this.closest("tr");
    //         row.remove() ;
    //         });
    
    //Not working
    function exportTableToCSV() {
        let csvContent = "data:text/csv;charset=utf-8,";
                
            // Iterate over each row in the table
            let rows = document.querySelectorAll("table tr");
            rows.forEach(row => {
                   let rowData = [];
                    // Iterate over each cell in the row
                    row.querySelectorAll("td").forEach(cell => {
                        // Escape double quotes in cell value and wrap in double quotes
                        let cellValue = '"' + cell.textContent.replace(/"/g, '""') + '"';
                        rowData.push(cellValue);
                    });
                    // Concatenate row data into CSV string
                    csvContent += rowData.join(",") + "\n";
                });
            
                // Create Blob from CSV content
                let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
            
                // Create download link
                let downloadLink = document.createElement("a");
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = "media_masterlist.csv";
            
                // Trigger download
                downloadLink.click();
            }
    
    
    
    
    
    
    
    // These are equivalent
    
    const dogs = ['Spot', 'Spike', 'Fred']
    
    for (let i = 0; i < dogs.length; i++) {
        console.log(dogs[i])
    }
    
    dogs.forEach((dog) => { // lots of super awesome array functions like .forEach .map .filter .find .findIndex
        console.log(dog)
    })
    
    // This is not working
    
    // let trashArray = document.getElementsByClassName("delete");
    // const numOfTrash = trashArray.length;
    // for (var i = 0; i < numOfTrash; i++) {
    //     trashArray[i].addEventListener('click', deleteSpecificRow);     
    // };
    
    // trashArray.forEach((trash) => {
    //     trash.addEventListener('click', deleteSpecificRow);
    // })

