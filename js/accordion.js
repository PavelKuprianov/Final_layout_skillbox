const accordionButtons = document.querySelectorAll('.accordion__btn');
const accordionContent = document.querySelectorAll('.accordion__content');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const control = e.currentTarget;
    const content = control.nextElementSibling;
    console.log(content)

    if (content.classList.contains('open')) {
      content.classList.toggle('open')
      btn.querySelector('.accordion__btn_arrow').classList.remove('open_arrow')
      content.style.maxHeight = null;
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
    } else {
      accordionButtons.forEach((button) => {

        content.classList.remove('open');

        button.querySelector('.accordion__btn_arrow').classList.remove('open_arrow')
        content.style.maxHeight = null;
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      });

      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);

      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      control.querySelector('.accordion__btn_arrow').classList.add('open_arrow')

    }
  })
})
