import Component from '../Component';

class CopyRight extends Component {
  static markup() {
    return /* html */ `
      <p class="copyright">
        &copy; Copyright by
        <a
          class="twitter-link"
          target="_blank"
          href="https://twitter.com/jonasschmedtman"
        >Jonas Schmedtmann</a>.
        
        Use for learning or your portfolio. Don't use to teach. 
        Don't claim as your own.
      </p>
    `;
  }
}

export default CopyRight;
