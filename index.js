const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



// const titleCased = () => {
//   return tutorials.map(eachLine => {
//     const eachWord = eachLine.split(' ');
//     const capitalizeWord =
//       eachWord.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     const response = capitalizeWord.join(' ');
//     return response;
//   });
// }

// const titleCased = () => {
//   return tutorials.map(eachLine => {
//     const eachWord = eachLine.split(' ');
//     const capitalizeWord =
//       eachWord.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//     return capitalizeWord
//   });
// }

const titleCased = () => {
  return tutorials.map(eachWord => eachWord.split(' ').map(myTutorial => myTutorial.charAt(0).toUpperCase() + myTutorial.slice(1)).join(' '))
}

