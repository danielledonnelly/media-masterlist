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






// I tried for ages to make a button that would clear the rows in Javascript, but couldn't do it. 
// ChatGPT ended up writing this solution for me, but I don't understand it.
document.getElementById('button1').addEventListener('click', function() {
    // Clear text content of cells in the tbody
    var table = document.getElementById('game-table');
    var tbody = table.getElementsByTagName('tbody')[0];  // [tbody]  // tbody
    var rows = tbody.getElementsByTagName('tr'); // [tr, tr, tr, tr, tr]

    for (var i = 0; i < rows.length; i++) {      // 5 things, length is 5, indexes 0-4 exist, so we want up to 4 which is the one "< 5"
      var cells = rows[i].cells;

        for (var j = 0; j < cells.length; j++) { // 8 cells, length is 8, indexes 0-7 exist, so we want up to 7 which is the one "< 8"
            cells[j].textContent = '';
        }
    }
});



document.getElementById('button2').addEventListener('click', function() {
  console.log('blah')
});
