function generateText() {
  var element = document.createElement('h2');
  element.innerHTML = 'hello sub.js';
  return element;
}

module.exports = generateText;