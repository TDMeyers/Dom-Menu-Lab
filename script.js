// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

let topMenuEl = document.querySelector('#top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add('flex-around');

for(let i = 0; i < menuLinks.length; i++){
    console.log(menuLinks[i]);
    let mLink = document.createElement('a');
    mLink.innerHTML = menuLinks[i].text;
    mLink.setAttribute('href', menuLinks[i].href);
    topMenuEl.appendChild(mLink)
};

// mLink.classList.add('topMenuEl')

