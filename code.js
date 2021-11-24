//create global variables
var text = [];
var equation= [];
var array = [];
var operator;
var π = Math.PI;
var e = Math.E;



//button Functionalities
onEvent("0btn", "click", function( ) {
  text = text + "0";
  setText("answerArea", text);
});
onEvent("1btn", "click", function( ) {
  text = text + "1";
  setText("answerArea", text);
});
onEvent("2btn", "click", function( ) {
  text = text + "2";
  setText("answerArea", text);
});
onEvent("3btn", "click", function( ) {
  text =  text + "3";
  setText("answerArea", text);
});
onEvent("4btn", "click", function( ) {
  text = text + "4";
  setText("answerArea", text);
});
onEvent("5btn", "click", function( ) {
  text =  text + "5";
  setText("answerArea", text);
});
onEvent("6btn", "click", function( ) {
  text = text + "6";
  setText("answerArea", text);
});
onEvent("7btn", "click", function( ) {
  text =  text + "7";
  setText("answerArea", text);
});
onEvent("8btn", "click", function( ) {
  text = text + "8";
  setText("answerArea", text);
});
onEvent("9btn", "click", function( ) {
  text =  text + "9";
  setText("answerArea", text);
});
onEvent("eBtn", "click", function( ) {
  text = text + "2.7";
  operator = "+";
  setText("answerArea", text);
});
onEvent("piBtn", "click", function( ) {
  text =  text + "π";
  operator = "+";
  setText("answerArea", text);
});
onEvent("decimalBtn", "click", function( ) {
  text = text + ".";
  setText("answerArea", text);
});
onEvent("negativeBtn", "click", function( ) {
  text =  text + "-";
  setText("answerArea", text);
});
onEvent("clearBtn", "click", function( ) {
  text = [];
  array = [];
  setText("answerArea", "");
});
onEvent("addBtn", "click", function( ) {
  text = text + " + ";
  operator = "norm";
  setText("answerArea", text);
});
onEvent("subBtn", "click", function( ) {
  text = text + " - ";
    operator = "norm";
  setText("answerArea", text);
});
onEvent("divBtn", "click", function( ) {
  text = text + " / "; 
  operator = "norm";
  setText("answerArea", text);
});
onEvent("multBtn", "click", function( ) {
  text = text + " * ";
    operator = "norm";
  setText("answerArea", text);
});
onEvent("sinBtn", "click", function() {
  text = text + "sin ";
    operator = "sine";
  setText("answerArea", text);  
});
onEvent("cosBtn", "click", function() {
  text = text + "cos ";
    operator = "cosine";
  setText("answerArea", text);  
});
onEvent("tanBtn", "click", function() {
  text = text + "tan ";
    operator = "tangent";
  setText("answerArea", text);  
});
onEvent("enterBtn", "click", function( ) {
compute();
});
function  compute() {
  if (operator == "norm") {
  solve();
} else if (operator == "sine") {
  sin();
} else if (operator == "cosine") {
  cos();
} else if (operator == "tangent") {
  tan();
} 
  else{
    
  }
}
//Used to grab the text from the calculator screen 
//and solve for the answer if there is addition, 
//subtraction, multiplication, or division.
function solve() {
 var equation = getText('answerArea');
 equation = eval(equation);
 setText("answerArea",equation);
 //console.log(equation);
 text=equation;
}

function sin() {
  setArray();
  equation = Math.sin(array[1]);
  setText("answerArea", equation);
  text=equation;
}
function cos() {
  setArray();
  equation = Math.cos(array[1]);
  setText("answerArea", equation);
  text=equation;
}
function tan() {
  setArray();
  equation = Math.tan(array[1]);
  setText("answerArea", equation);
  text=equation;
}
function setArray() {
  array = getText("answerArea").split(" ");
  array[0] = Number(array[0]);
  array[1] = Number(array[1]);
}
