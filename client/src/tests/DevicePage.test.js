import {render, screen} from '@testing-library/react';
import DevicePage from '../pages/DevicePage';
import { unmountComponentAtNode } from 'react-dom';

let container = null;
beforeEach(() => {
  // настраиваем элемент DOM как цель рендеринга
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // очистка при выходе
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('TEST DevicePage Component', () => {
	test('render elements',() => {
		render(<DevicePage />);

		const adminPanel = screen.getByText(/характеристики/i);
		expect(adminPanel).toBeInTheDocument();

		const addToCart = screen.getByText(/Добавить в корзину/i);
		expect(addToCart).toBeInTheDocument();

		const addToCartBtn = screen.getByRole('button', {className: "addToCartBtn"})
		expect(addToCartBtn).toBeInTheDocument();
	});
});