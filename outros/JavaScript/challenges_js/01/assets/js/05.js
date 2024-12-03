/*
function myFunction(fullname, flag="") {
  if (flag === "firstname") {
    return fullname.split(" ")[0];
  } else if (flag === "lastname") {
    return fullname.substring(5);
  } else {
    return fullname.substring(0,20);
  }
}
*/

console.log(myFunction("John Williams Smith", "firstname")); // John 
console.log(myFunction("John Williams Smith", "lastname")); // Williams Smith
console.log(myFunction("John Williams Smith")); // John Williams Smith
console.log(myFunction("John", "lastname")); // John 