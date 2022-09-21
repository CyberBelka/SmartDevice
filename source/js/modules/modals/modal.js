import IMask from 'imask';

const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.form-modal');
const toggleOpen = document.querySelector('.btn--header');
const toggleClose = document.querySelector('.modal__close-btn');
const html = document.documentElement;
const focusTrap = require('focus-trap');
const inputName = document.querySelector('#modal-name');
const element = document.querySelector('#modal-phone');

const maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: true,
};

let scrollPosition;

const bodyScrollControl = () => {
  if (modal.classList.contains('modal.is-active')) {
    html.classList.add('menu-opened');
    window.scrollTo(0, scrollPosition);
    html.style.top = '';
    return;
  }
  scrollPosition = window.pageYOffset;
  html.style.top = scrollPosition + 'px';
  html.classList.add('menu-opened');
};

const modalFocusTrap = focusTrap.createFocusTrap(modal, {allowOutsideClick: true});

const openModal = () => {
  modal.classList.add('is-active');
  bodyScrollControl();
  inputName.focus();
  modalFocusTrap.activate();
  modalForm.reset();
};

const closeModal = () => {
  modal.classList.remove('is-active');
  html.classList.remove('menu-opened');
  modalFocusTrap.deactivate();
};

const isEscapeKey = (evt) => evt.key === 'Escape';

function escKeydownHandler(evt) {
  if (isEscapeKey(evt)) {
    closeModal();
  }
}

function modalClickHandler(evt) {
  const target = evt.target;

  if (!target.closest('.modal__overlay')) {
    return;
  }

  closeModal();
}

const initModal = () => {
  // eslint-disable-next-line no-new
  new IMask(element, maskOptions);
  toggleOpen.addEventListener('click', openModal);
  toggleClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', escKeydownHandler);
  document.addEventListener('click', modalClickHandler);
};

export {initModal};
