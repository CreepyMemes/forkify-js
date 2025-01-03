import Component from '../Component';

class RecipeFigure extends Component {
  static markup({ recipe }) {
    return /* html */ `
      <figure class="recipe__fig">
        <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>
    `;
  }
}

export default RecipeFigure;
