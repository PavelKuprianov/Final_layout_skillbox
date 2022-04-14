const accordionButtons = document.querySelectorAll('.accordion');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const self = e.currentTarget;

    const control = self.querySelector('.accordion__btn');
    const content = self.querySelector('.accordion__content');

    if (content.classList.contains('open')) {
      content.classList.toggle('open')
      btn.querySelector('.accordion__btn_arrow').classList.remove('open_arrow')
      content.style.maxHeight = null;
    } else {
      accordionButtons.forEach((button) => {
        const contentRemove = button.querySelector('.accordion__content');
        contentRemove.classList.remove('open');
        button.querySelector('.accordion__btn_arrow').classList.remove('open_arrow')
        contentRemove.style.maxHeight = null;
      })

      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      self.querySelector('.accordion__btn_arrow').classList.add('open_arrow')

    }
  })
})
