import Component from '../Component';

class CopyRight extends Component {
  static markup() {
    return /* html */ `
      <p class="copyright">
        Copyright &copy; ${new Date().getFullYear()} <strong>Forkify-JS</strong> by
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/CreepyMemes/forkify-js"
        >CreepyMemes</a>.
        
        Original UI design made by
        <a
        class="twitter-link"
        target="_blank"
        href="https://twitter.com/jonasschmedtman"
        >Jonas Schmedtmann</a>.
      </p>
    `;
  }
}

export default CopyRight;
