document.addEventListener('DOMContentLoaded', () => {
  const itemName = document.querySelectorAll('.accordion__content_item-name');
  const photo = document.querySelector('.dossier__photo');
  const imageSrc = document.querySelector('.dossier__photo_img');
  const title = document.querySelector('.dossier__title');
  const text = document.querySelector('.dossier__text');
  const group = document.querySelector('.dossier__group');

  const visitors = [
    {
      id: 0, name: 'Ольга Мартынова', img: './images/woman.jpg',
      annotation: 'Российский искусствовед, арткритик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты «Коммерсантъ». Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.'
    },
    {
      id: 1, name: 'Сергей Денисов', img: './images/man.jpg',
      annotation: 'Видный российский деятель, умник, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты «Коммерсантъ». Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.'
    },
    {
      id: 3, name: 'Матвей Мечников', img: './images/matvey.jpg',
      annotation: 'Ещё один представитель интеллигентной элиты, организатор выставок,  специалист, кандидат на выбывание. Арт-критик газеты "Пионерская правда". Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.'
    },
    {
      id: 3, name: 'Константин Прусино', img: './images/prusino.jpg',
      annotation: 'Очень любит рыбий жир, при звуках флейты теряет волю, организатор выставок,  специалист, кандидат на выбывание. Арт-критик газеты "Пионерская правда". Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.'
    },
  ]

  itemName.forEach(item => {
    item.addEventListener('click', (e) => {
      const self = e.currentTarget.textContent;
      let visitor = visitors.find(elem => elem.name === self);

      if (visitor) {
        group.style.display = 'block';
        imageSrc.src = `${visitor.img}`;
        title.textContent = visitor.name;
        text.textContent = visitor.annotation;
      } else {
        imageSrc.src = './images/plug.jpg';
        group.style.display = 'none';
      }
    });
  });
});

