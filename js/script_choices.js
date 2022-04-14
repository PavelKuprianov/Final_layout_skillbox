const choicesElem = document.querySelector('.js-choice');
const choicesClass = document.querySelector('.choices');

const choices = new Choices(choicesElem, {
  searchEnabled: false,
  itemSelectText: '',
});

choicesClass.setAttribute('data-arrow', 'castom');

