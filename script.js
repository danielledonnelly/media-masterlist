(function(window, document) {

  // code that should be taken care of right away

  window.onload = initialize;

  function initialize (){
    // the code to be called when the dom has loaded
    // #document has its nodes

    const theTable = document.getElementById('game-table')

    console.log(theTable)

    const theBody = document.getElementById('game-table-body')

    console.log(theBody)

    //the code below is creating a div element that says hello and attaching it to an existing tbody element.

    //const myTestDiv = document.createElement('div')
    //const myTestDivText = document.createTextNode('Helloooo')
    //myTestDiv.append(myTestDivText)
    //myTestDiv.setAttribute('id', 'my-test-div');
    //theBody.append(myTestDiv)
  }

})(window, document);

/*this code is supposed to empty the table, but I don't know how to call it */
$("#table_of_items tr").remove(); 

/*this code is supposed to serve a similar function, but I don't know how to call it 
how woulc i attach it to a button?*/

document.getElementById('tbody').innerHTML = '';

const button1 = document.getElementById("button1"):

button1.addEventListener("click", function() {
  document.getElementById('tbody').innerHTML = '';
}