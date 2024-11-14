/*
function myFunction(fullname, flag =""){
  const parts = fullname.split(" ");
  if (flag.length == 0 || parts.length <=1) {
    return fullname;
  } else if (flag === "firstname") {
    return parts[0]
  }
  return parts.slice(1).join(" ");
}
*/

// Simplificação
function myFunction(fullname, flag =""){
  const parts = fullname.split(" ");
  return flag.length == 0 || parts.length <= 1 ? fullname : flag === "firstname" ? parts[0] : parts.slice(1).join(" ");
}


console.log(myFunction("John Williams Smith", "firstname")); // John 
console.log(myFunction("John Williams Smith", "lastname")); // Williams Smith
console.log(myFunction("John Williams Smith")); // John Williams Smith
console.log(myFunction("John", "lastname")); // John 