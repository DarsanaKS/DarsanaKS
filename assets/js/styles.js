// styles.js

// Copy button script
function copyBlockQuote() {
  var blockQuote = document.getElementById('myBlockQuote');
  var textArea = document.createElement('textarea');
  textArea.value = blockQuote.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert('Code copied to clipboard!');
}

// Custom accordion script
document.addEventListener('DOMContentLoaded', function () {
  var accordionItems = document.querySelectorAll('.wy-menu .toctree-l1');

  accordionItems.forEach(function (item) {
    var toggleButton = document.createElement('button');
    toggleButton.className = 'toctree-expand';
    toggleButton.title = 'Toggle menu';

    toggleButton.addEventListener('click', function () {
      var nestedList = item.querySelector('.current > ul');
      if (nestedList) {
        nestedList.classList.toggle('current');
      }
    });

    item.insertBefore(toggleButton, item.firstChild);
  });
});

// Apply styles
var styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);



