import Icon from './Icon';

function Spinner() {
  return /* html */ `
    <div class="spinner">
      ${Icon({ iconName: 'icon-loader' })}
    </div>
  `;
}

export default Spinner;
