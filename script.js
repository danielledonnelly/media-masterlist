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

        const myScoreSelButtons = document.getElementsByClassName("score-dropdown-class"); // there are 11 of these
        const mySels = document.getElementsByClassName("score-menu-dropdown-class"); // there are 11 of these


        function createEventListener(i) {
            return function(event) {
                console.log(event.target);
                myScoreSelButtons[i].innerText = event.target.innerText;
            };
        }

        const rowsCount = myScoreSelButtons.length
        for (var i = 0; i < rowsCount; i++) {
            const numOfOptionsPerRow = mySels[i].children.length
            for (var j = 0; j < numOfOptionsPerRow; j++) {
                mySels[i].children[j].addEventListener('click', createEventListener(i));
            }
        }

        
        //we're on the 0th row at its 0th option
        //we're on the 0th row at its 1st option
        //we're on the 0th row at its 2nd option
        // ..........
        //we're on the 9th row at its 0th option
        // ..........
        //we're on the 9th row at its 9th option
        //i represents each row/dropdown, j represents each option within each row/dropdown

        //I DON'T DESERVE CREDIT FOR THE TWO BLOCKS OF CODE ABOVE I USED CHATGPT SORRY
        //I asked it to explain and have a very basic understanding of why this works
        //


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

    }
  
  })(window, document);