var x   = /\d+/; 
var ret = x.exec("abc123"); 
if (ret === null) { 
  console.log ("Test Failed")
  process.exit(1)
} else { 
  if ((ret.index !== 3)) {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  } else {
    console.log ("Test Passed")
    process.exit(0)
  } 
}
