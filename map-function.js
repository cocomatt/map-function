var words = ["ground", "control", "to", "major", "tom"];

function map(list, cb) {
  var newWords = [];
  words.forEach(function(element, i) {
    newWords.push(cb(words[i], list))
  });
  return newWords;
}

var result = map(words, function(word) {
  return word.length;
});
console.log(result);

var result = map(words, function(word) {
  return word.toUpperCase();
});
console.log(result);

var result = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(result);





/* Epected result...

[6, 7, 2, 5, 3] number of letters in each word of "ground control to major tom"

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ] capitalized

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ] letters in each word reversed (but not the word order)

*/