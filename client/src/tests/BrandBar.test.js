import {render, screen} from '@testing-library/react';
import BrandBar from '../components/BrandBar';
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

const brands = [{ name: "Samsung", id: 1 },{ name: "Apple", id: 2 },{ name: "LG", id: 3 },{ name: "Xiaomi", id: 4 }]

describe('TEST DevicePage Component', () => {
	//тест рендер элементов из полученных пропсов
	test('render elements by props BRANDS',() => {
		render(<BrandBar brands={brands} selectedBrand={brands[1]}/>);

		const samsung = screen.getByText(/samsung/i);
		expect(samsung).toBeInTheDocument();

		const apple = screen.getByText(/apple/i);
		expect(apple).toBeInTheDocument();

		const xiaomi = screen.getByText(/xiaomi/i);
		expect(xiaomi).toBeInTheDocument();

		const lg = screen.getByText(/lg/i);
		expect(lg).toBeInTheDocument();
	});
	
	test('active element',() => {
		render(<BrandBar brands={brands} selectedBrand={brands[1]}/>);

		const selectedBrand = screen.getByTestId('selected')
		expect(selectedBrand.textContent).toBe(brands[1].name)
		expect(selectedBrand).toBeInTheDocument();
	});

	test('without active element',() => {
		render(<BrandBar brands={brands} selectedBrand={{name:"", id:""}}/>);

		const selectedBrand = screen.queryByTestId('selected')
		expect(selectedBrand).not.toBeInTheDocument();
	});
});