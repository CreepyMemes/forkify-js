import Icon from './Icon';

function ErrorMessage({ message }) {
  return /* html */ `
    <div class="error">
      <div>
        ${Icon({ iconName: 'icon-alert-triangle' })}
      </div>
      <p>${message}</p>
    </div>
  `;
}

export default ErrorMessage;
