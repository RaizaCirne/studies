function myFunction(text, flag = "start") {
  if (flag === "start") {
    return text.substr(0,3);
  } else {
    return text.substr(-3);
  }
}

console.log(myFunction("abcdefg", "start")); // abc 
console.log(myFunction("abcdefg", "end")); // efg
console.log(myFunction("ab", "end")); // ab
console.log(myFunction("abcdefg")); // abc