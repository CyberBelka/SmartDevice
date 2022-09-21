const accordionItems = document.querySelectorAll('.accordion__item');

const closeBody = () => {
  accordionItems.forEach((item) => {
    item.classList.remove('no-js');
  });
};

const initAccordion = () => {
  closeBody();

  // eslint-disable-next-line no-new
  new ItcAccordion('#accordion-1', {
    alwaysOpen: false,
  });
};

class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: false,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__title');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.is-open');
        if (elOpenItem) {
          if (elOpenItem !== elHeader.parentElement) {
            elOpenItem.classList.toggle('is-open');
          }
        }
      }
      elHeader.parentElement.classList.toggle('is-open');
    });
  }
}

export {initAccordion};
