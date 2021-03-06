var __re = /\d+/;

var __matched = [];

var __expected = ["123","123","123","123","123","123","123","123","123","123"];

function $ERROR(msg) { 
  throw new Error(msg); 
}

do{
    var __executed = __re.exec("123 456 789");
    if (__executed !== null) {
    	__matched.push(__executed[0]);
    } else {
    	break;
    }
}while(__matched.length<10);

//CHECK#1
if (__expected.length !== __matched.length) {
  $ERROR('#1: __executed = /\\d+/.exec("123 456 789"); __matched.length === ' + (__expected.length) + '.Actual: ' + (__matched.length));
}

//CHECK#2
for(var index=0; index<__expected.length; index++) {
  if (__expected[index] !== __matched[index]) {
    $ERROR('#2: __executed = /\\d+/.exec("123 456 789"); __matched[' + index + '] === ' + __expected[index] + '. Actual: ' + __matched[index]);
  }
}