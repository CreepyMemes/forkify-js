import Icon from './Icon';

function Message({ message }) {
  return /* html */ `
    <div class="message">
      <div>
        ${Icon({ iconName: 'icon-smile' })}
      </div>
      <p>${message}</p>
    </div>
  `;
}

export default Message;
