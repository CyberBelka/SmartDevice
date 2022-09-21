const textLast = document.querySelector('.description__base--last');
const textSmall = document.querySelector('.description__base--small');
const descriptionButton = document.querySelector('.btn--description');

// const openLast = () => {
//   if (textLast.classList.contains('is-close')) {
//     textLast.classList.remove('is-close');
//     descriptionButton.textContent = 'Свернуть';
//   } else {
//     textLast.classList.add('is-close');
//     descriptionButton.textContent = 'Подробнее';
//   }
// };

const openLast = () => {
  const display = textLast.style.display;

  if (display === 'none') {
    textLast.style.display = 'block';
    descriptionButton.textContent = 'Свернуть';
  } else {
    textLast.style.display = 'none';
    descriptionButton.textContent = 'Подробнее';
  }
};

// const closeSmall = () => {
//   const mediaQuery = window.matchMedia('(max-width: 767px)');

//   if (mediaQuery.matches) {
//     textSmall.style.display = 'block';
//   }
// };

const openSmall = () => {
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  const display = textSmall.style.display;

  if (mediaQuery.matches) {
    if (display === 'none') {
      textSmall.style.display = 'block';
    }
  }
};


const buttonClickHandler = () => {
  openLast();
  openSmall();
};

const initDescription = () => {
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches) {
    textSmall.style.display = 'none';
  } else {
    textSmall.style.display = 'block';
  }

  descriptionButton.addEventListener('click', buttonClickHandler);
};

// // const openSmall = () => {
// //   const display = textSmall.style.display;
// //   if (display === 'none') {
// //     textSmall.style.display = 'block';
// //     descriptionButton.textContent = 'Свернуть';
// //   } else {
// //     textSmall.style.display = 'none';
// //     descriptionButton.textContent = 'Подробнее';
// //   }
// // };

// const buttonClickHandler = () => {
//   openLast();
//   openSmall();
// };

// // textBlocks.forEach((block) => {
// //   const display = block.style.display;
// //   if (display === 'none') {
// //     block.style.display = 'block';
// //     descriptionButton.textContent = 'Свернуть';
// //   } else {
// //     block.style.display = 'none';
// //     descriptionButton.textContent = 'Подробнее';
// //   }
// // });

export {initDescription};
