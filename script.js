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

        //We get the Score buttons
        const myScoreSelButtons = document.getElementsByClassName("score-dropdown-class"); // there are 11 of these
        //We get the Score button options that can be selected
        const mySels = document.getElementsByClassName("score-menu-dropdown-class"); // there are 11 of these

        function myFunction(event) {
            console.log(event.target);
            myScoreSelButtons[0].innerText = event.target.innerText;
            };
                // }

        const rowsCount = myScoreSelButtons.length
        const numOfOptionsPerRow = mySels[0].children.length
        // for (var i = 0; i < rowsCount; i++) {
        //     const numOfOptionsPerRow = mySels[i].children.length
            for (var j = 0; j < numOfOptionsPerRow; j++) {
                mySels[0].children[j].addEventListener('click', myFunction);
            };
    }
        
    // Get the Add Row button
    let addRowButton = document.getElementById("add-row");

    // Add event listener to button
    addRowButton.addEventListener('click', addRow);
        
  })(window, document);

//This defines what happens when we add a row (this happens 9 times when page loads, and occurs whenever Add Row button is clicked)
function addRow() {
    // Get the table body element in which you want to add row
    let table = document.getElementById("game-table-body");
    // Create row element
    let row = document.createElement("tr");
    // Create cells
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("td");
    let c6 = document.createElement("td");
        
    // Insert data to cells
    c1.innerText = " ";
    c3.innerText = " ";
    c4.innerText = " ";
    c5.innerText = " ";
    c6.innerText = " ";
        
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
        dropdownItem.innerText = stars[i]; // Set star emoji as inner text
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

    // Append row to table body
    table.appendChild(row);
}