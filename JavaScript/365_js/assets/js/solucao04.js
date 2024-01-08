function myFunction(text, flag = "start") {
  if (text.length < 3) return text; 
  return flag === "start" ? text.slice(0,3) : text.slice(-3);

}

console.log(myFunction("abcdefg", "start")); // abc 
console.log(myFunction("abcdefg", "end")); // efg
console.log(myFunction("ab", "end")); // ab
console.log(myFunction("abcdefg")); // abc