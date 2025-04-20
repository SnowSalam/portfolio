const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

function handleMobileChange(e) {
  if (e.matches) {
    // Если экран мобильный — добавляем бургер-меню
    document.querySelector('header').innerHTML = `
      <nav>
                <div class="hamb-field" id="hamb">
                    <span class="bar"></span> <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <div class="popup">
                    <ul class="popup-menu">
                    </ul>
                </div>
            </nav>
    `;

    const page = document.body.dataset.page;
    if (page === "main") {
      document.querySelector('.popup-menu').innerHTML = `
                        <li class="header-links"><a href="works.html">Works</a></li>
                        <li class="header-links"><a href="blog.html">Blog</a></li>
                        <li class="header-links"><a>Contact</a></li>
      `;
    } else if (page === "blog") {
      document.querySelector('.popup-menu').innerHTML = `
                        <li class="header-links"><a href="index.html">Main</a></li>
                        <li class="header-links"><a href="works.html">Works</a></li>
                        <li class="header-links"><a class="current-page">Blog</a></li>
                        <li class="header-links"><a>Contact</a></li>
      `;
    } else if (page === "works") {
      document.querySelector('.popup-menu').innerHTML = `
                        <li class="header-links"><a href="index.html">Main</a></li>
                        <li class="header-links"><a class="current-page">Works</a></li>
                        <li class="header-links"><a href="blog.html">Blog</a></li>
                        <li class="header-links"><a>Contact</a></li>
      `;
    }

    document.querySelector('.hamb-field').addEventListener('click', clickHambHandler);
    document.querySelector('.popup').addEventListener('click', clickHambHandler);

    function clickHambHandler(event) {
      event.stopPropagation();

      document.body.classList.toggle('noscroll');
      document.querySelector('.hamb-field').classList.toggle('active');
      document.querySelector('.popup').classList.toggle('open');
    };

  } else {
    // Если экран большой — возвращаем обычное меню
    document.querySelector('header').innerHTML = `
      <nav class="header-links">
                <a href="works.html">Works</a>
                <a href="blog.html">Blog</a>
                <a>Contact</a>
            </nav>
    `;
  }
}

// Запускаем проверку при загрузке и при изменении размера окна
mobileMediaQuery.addEventListener('change', handleMobileChange);
handleMobileChange(mobileMediaQuery); // Проверить сразу