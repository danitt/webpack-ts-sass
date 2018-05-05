import './index.scss';

const { SECRET } = process.env;

document.addEventListener('DOMContentLoaded', () => {
  const element: HTMLElement | null = document.body.querySelector('#js-selector');
  if (element) {
    element.innerHTML = `
      Dynamic text via index.tsx <br/>
      ${ SECRET }
   `;
  }
});
