import iconsPath from '../img/icons.svg';

function Icon({ iconClass = '', iconName }) {
  return /* html */ `
    <svg class="${iconClass}">
      <use href="${iconsPath}#${iconName}"></use>
    </svg>
  `;
}

export default Icon;
