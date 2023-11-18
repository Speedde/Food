/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/


document.addEventListener('DOMContentLoaded', () => {
  const tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items'),
    tab = document.querySelectorAll('.tabheader__item');
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tab.forEach(tab => {
      tab.classList.remove('tabheader__item_active');
    });
  }
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tab[i].classList.add('tabheader__item_active');
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    let target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tab.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  const deadline = '2023-07-12T16:22';
  function getTimerRemaining(endtime) {
    const t = Date.parse(endtime) - new Date(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor(t / (1000 * 60 * 60) % 24),
      minutes = Math.floor(t / (1000 * 60) % 60),
      seconds = Math.floor(t / 1000 % 60);
    return {
      total: t,
      days,
      hours,
      minutes,
      seconds
    };
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else return num;
  }
  function setTimer(endtime) {
    const timer = document.querySelector('.timer'),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const tim = getTimerRemaining(endtime);
      days.innerHTML = getZero(tim.days);
      hours.innerHTML = getZero(tim.hours);
      minutes.innerHTML = getZero(tim.minutes);
      seconds.innerHTML = getZero(tim.seconds);
      if (tim.total <= 0) {
        clearInterval(timeInterval);
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      }
    }
  }
  setTimer(deadline);
  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');
  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
  modalTrigger.forEach(item => {
    item.addEventListener('click', () => {
      openModal();
      clearInterval(setTimerForModal);
    });
  });
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  });
  const setTimerForModal = setTimeout(openModal, 300000);
  function showModWind() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModWind);
    }
    ;
  }
  window.addEventListener('scroll', showModWind);
  class CardMenu {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }
      this.class = classes;
      this.course = 37.3;
      this.cashInUAN();
    }
    cashInUAN() {
      this.price = Math.floor(this.price * this.course);
    }
    render() {
      const elem = document.createElement('div');
      if (this.class.length === 0) {
        this.class = 'menu__item';
        elem.classList.add(this.class);
      } else {
        this.class.forEach(item => {
          elem.classList.add(item);
        });
      }
      ;
      elem.innerHTML = `<img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
      this.parent.append(elem);
    }
  }
  ;
  new CardMenu("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '9', ".menu .container").render();
  new CardMenu("img/tabs/elite.jpg", "elite", 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '18', ".menu .container").render();
  new CardMenu("img/tabs/post.jpg", "post", 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', '13', ".menu .container").render();

  //Форми і відправка форм на сервер
  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'Загрузка...',
    succsess: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(form => {
    postData(form);
  });
  const postAwaitData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return await res.json();
  };
  function postData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('img');
      statusMessage.src = 'img/spinner.svg';
      statusMessage.style.cssText = 'display: block; margin: 0 auto;';
      form.insertAdjacentElement('afterend', statusMessage);
      // const newRequest = new XMLHttpRequest();
      // newRequest.open("POST", "server.php");
      // newRequest.setRequestHeader("Content-type", "application/json; charset=utf-8");
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      postAwaitData('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        showSuccesfullMessage(message.succsess);
        statusMessage.remove();
      }).catch(() => {
        showSuccesfullMessage(message.failure);
      }).finally(() => {
        form.reset();
      });
      // newRequest.send(json);
      // newRequest.addEventListener('load', () => {
      //   if (newRequest.status === 200) {
      //     console.log(newRequest.response);
      //     showSuccesfullMessage(message.succsess);
      //     form.reset();
      //   } else {
      //     showSuccesfullMessage(message.failure);
      //   };
      //   statusMessage.remove();
      // });
    });
  }

  function showSuccesfullMessage(message) {
    const prevModulWindow = document.querySelector('.modal__dialog');
    prevModulWindow.classList.add('hide');
    prevModulWindow.classList.remove('show');
    openModal();
    let completeModulWindow = document.createElement('div');
    completeModulWindow.classList.add('modal__dialog');
    completeModulWindow.innerHTML = `<div class=modal__content>
          <div data-close class="modal__close">&times;</div>
          <div class="modal__title">${message}</div>
        </div>`;
    prevModulWindow.insertAdjacentElement('beforebegin', completeModulWindow);
    setTimeout(() => {
      completeModulWindow.remove();
      prevModulWindow.classList.add('show');
      prevModulWindow.classList.remove('hide');
      closeModal();
    }, 3000);
  }
});
/******/ })()
;
//# sourceMappingURL=script.js.map