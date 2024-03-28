// (function(window, document) {

//   // code that should be taken care of right away

//   window.onload = initialize;

//   function initialize (){
//     // the code to be called when the dom has loaded
//     // #document has its nodes

//     const theTable = document.getElementById('game-table')

//     console.log(theTable)

//     const theBody = document.getElementById('game-table-body')

//     console.log(theBody)

//     //the code below is creating a div element that says hello and attaching it to an existing tbody element.

//     const myTestDiv = document.createElement('div')
//     const myTestDivText = document.createTextNode('Helloooo')
//     myTestDiv.append(myTestDivText)
//     myTestDiv.setAttribute('id', 'my-test-div');
//     theBody.append(myTestDiv)
//   }

// })(window, document);

/*this code is supposed to empty the table, but I don't know how to call it 
$("#table_of_items tr").remove(); 

/*this code is supposed to serve a similar function, but I don't know how to call it 
how woulc i attach it to a button?*/






// // I tried for ages to make a button that would clear the rows in Javascript, but couldn't do it. 
// // ChatGPT ended up writing this solution for me, but I don't understand it.
// document.getElementById('button1').addEventListener('click', function() {
//     // Clear text content of cells in the tbody
//     var table = document.getElementById('game-table');
//     var tbody = table.getElementsByTagName('tbody')[0];  // [tbody]  // tbody
//     var rows = tbody.getElementsByTagName('tr'); // [tr, tr, tr, tr, tr]

//     for (var i = 0; i < rows.length; i++) {      // 5 things, length is 5, indexes 0-4 exist, so we want up to 4 which is the one "< 5"
//       var cells = rows[i].cells;

//         for (var j = 0; j < cells.length; j++) { // 8 cells, length is 8, indexes 0-7 exist, so we want up to 7 which is the one "< 8"
//             cells[j].textContent = '';
//         }
//     }
// });

// //this was attempt 1 to save dropdown value
// const mySel = document.getElementById("score-dropdown"); 

// mySel.addEventListener('click', function() {

//     console.log('skchskcskjfncekjfnc')
// })



(function(window, document) {

    // code that should be taken care of right away
  
    window.onload = initialize;
  
    function initialize (){
        // Functions that are called immedaitelt (get elements) go in inititalize
        
        // // I tried for ages to make a button that would clear the rows in Javascript, but couldn't do it. 
        // // ChatGPT ended up writing this solution for me, but I don't understand it.
        // document.getElementById('button1').addEventListener('click', function() {
        //     // Clear text content of cells in the tbody
        //     var table = document.getElementById('game-table');
        //     var tbody = table.getElementsByTagName('tbody')[0];  // [tbody]  // tbody
        //     var rows = tbody.getElementsByTagName('tr'); // [tr, tr, tr, tr, tr]

        //     for (var i = 0; i < rows.length; i++) {      // 5 things, length is 5, indexes 0-4 exist, so we want up to 4 which is the one "< 5"
        //     var cells = rows[i].cells;

        //         for (var j = 0; j < cells.length; j++) { // 8 cells, length is 8, indexes 0-7 exist, so we want up to 7 which is the one "< 8"
        //             cells[j].textContent = '';
        //         }
        //     }
        // });
        const initialRowsCount = 9
        for (var i = 0; i < initialRowsCount; i++) {
            addRow()
        }

        const myScoreSelButtons = document.getElementsByClassName("score-dropdown-class"); // there are 11 of these
        const mySels = document.getElementsByClassName("score-menu-dropdown-class"); // there are 11 of these

        //this stays here
        // function createEventListener(i) {
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
                mySels[0].children[j].addEventListener('click', myFunction)
                ;
            }
        // }
    }

        

        // Get the Add Row button
        let addRowButton = document.getElementById("add-row");

        // Add event listener to button
        addRowButton.addEventListener('click', addRow);
        
    
   
    
        //we're on the 0th row at its 0th option
        //we're on the 0th row at its 1st option
        //we're on the 0th row at its 2nd option
        // ..........
        //we're on the 9th row at its 0th option
        // ..........
        //we're on the 9th row at its 9th option
        //i represents each row/dropdown, j represents each option within each row/dropdown

        // function myFunc1(event) {
        //     console.log(event.target)
        //     myScoreSelButtons[0].innerText = event.target.innerText
        // }
        
        // for (var j = 0; j < 10; j++) {
        //     mySels[i].children[j].addEventListener('click', myFunc1)
        // }

        

        // for (var i = 0; i < 3; i++) {    // the thing will happen 3 times 
        //     // do this thing
        // }
        //- Using a function pointer:
    //     document.getElementById("add-row").onclick = addRow();
    //     function addRow() {
    //         console.log('skchskcskjfncekjfnc')
    //         function addRow() {
    //             // Get the table element in which you want to add row
    //             let table = document.getElementById("game-table");
    //             // Create a row using the insertRow() method and
    //             // specify the index where you want to add the row
    //             let row = table.insertRow(-1); // We are adding at the end
    //             }

    //     }

    // }
  
  })(window, document);

// Note to self, call addRow() 9 times when page first loads,  one can live in HTML
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