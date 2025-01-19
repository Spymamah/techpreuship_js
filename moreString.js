let ans;

let sentence = "this is a string sentence"

ans = sentence.split(" ")

console.log(ans)

ans = sentence.includes("ring") 

console.log(ans)

ans = sentence.slice(0, -2)

console.log(ans)
ans = sentence.slice(0, 3)// three is not included

console.log(ans)

 ans = sentence.substring(0, 3) // it does not support negetive index

console.log(ans)

let newWord =    "    hello world   "  

console.log(newWord.length)

ans = newWord.trim()

console.log(ans.length)

ans = newWord.trimStart()

console.log(ans.length)

ans = newWord.trimEnd()

console.log(ans.length)