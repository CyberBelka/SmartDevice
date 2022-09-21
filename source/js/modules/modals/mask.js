import IMask from 'imask';

const element = document.getElementById('phone');
const maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: true,
};

const initForm = () => {
  // eslint-disable-next-line no-new
  new IMask(element, maskOptions);
};


export {initForm};
