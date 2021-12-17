var input = document.querySelectorAll('textarea')[0];
var characterCount = document.querySelector('#characterCount');
var wordCount = document.querySelector('#wordCount');
var sentenceCount = document.querySelector('#sentenceCount');
var paragraphCount = document.querySelector('#paragraphCount');

input.addEventListener('keyup', function() {

  console.clear();

  characterCount.innerHTML = input.value.length;

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);

  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }

  if (words) {
    var sentences = input.value.split(/[.|!|?]+/g);
    console.log(sentences);
    sentenceCount.innerHTML = sentences.length - 1;
  } else {
    sentenceCount.innerHTML = 0;
  }

  if (words) {
    var paragraphs = input.value.replace(/\n$/gm, '').split(/\n/);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }
});
