
// function validPalindrome (str) {
//   const newStr = str.split('').reverse().join('');
//   if (str === newStr) {
//     console.log('是回文')
//   } else {
//     console.log('不是回文')
//   }
// }
// let str1 = 'aba'
// let str2 = 'abc'
// validPalindrome(str1)
// validPalindrome(str2)
// -----------------------------------------------------------------
// function validPalindrome (str) {
//   if ( !str || typeof str != 'string') return false
//   return str.split('').reverse().join('') === str
// }
// let str1 = 'aba'
// let str2 = 'abc'
// console.log(validPalindrome(str1))
// console.log(validPalindrome(str2))
// ------------------------------------------------------------------
var isValidChar = (c) => {  // abc 123
  return /^[/w]$/.test(c);  //[0-9a-zA-Z]
}
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let left = 0,
      right = s.length - 1;

  while(left < right) {
    if(!isValidChar(s[left])) {
      left ++;
      continue;
    }
    if(!isValidChar(s[right])) {
      right --;
      continue;
    }
    if(s[left] == s[right]) {
      left ++;
      right --;
    } else {
      break;
    }
  }
  return right <= left
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
