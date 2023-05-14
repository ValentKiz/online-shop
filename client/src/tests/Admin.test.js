import {render, screen, fireEvent} from '@testing-library/react';

import { unmountComponentAtNode } from 'react-dom';
import Admin from "../pages/Admin";
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import DeleteBrand from '../components/modals/DeleteBrand';
import DeleteType from '../components/modals/DeleteType';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

	jest.mock('../components/modals/CreateBrand', () => (props) => {
		return <div data-testid="modal-createBrand">{props.show ? 'Show' : 'Hide'}</div>;
	});

	jest.mock('../components/modals/CreateDevice', () => (props) => {
		return <div data-testid="modal-createDevice">{props.show ? 'Show' : 'Hide'}</div>;
	});

	jest.mock('../components/modals/CreateType', () => (props) => {
		return <div data-testid="modal-createType">{props.show ? 'Show' : 'Hide'}</div>;
	});

	jest.mock('../components/modals/DeleteBrand', () => (props) => {
		return <div data-testid="modal-deleteBrand">{props.show ? 'Show' : 'Hide'}</div>;
	});

	jest.mock('../components/modals/DeleteType', () => (props) => {
		return <div data-testid="modal-deleteType">{props.show ? 'Show' : 'Hide'}</div>;
	});

describe('TEST Admin Component', () => {


	test('render elements',() => {
		// рендер статичных элементов
		render(<Admin />);
		const adminPanel = screen.getByText(/Панель администратора/i)
		expect(adminPanel).toBeInTheDocument();

		const createBrand = screen.getByText(/добавить бренд/i)
		const createDevice = screen.getByText(/добавить устройство/i)
		const createType = screen.getByText(/добавить тип/i)
		const deleteBrand = screen.getByText(/удалить бренд/i)
		const deleteType = screen.getByText(/удалить тип/i)

		expect(createBrand).toBeInTheDocument();
		expect(createDevice).toBeInTheDocument();
		expect(createType).toBeInTheDocument();
		expect(deleteBrand).toBeInTheDocument();
		expect(deleteType).toBeInTheDocument();
	});

	test('render children components', () => {
		//рендер дочерних компонентов
		render(<Admin />);

		const createBrand = screen.queryByTestId('modal-createBrand')
		const createDevice = screen.queryByTestId('modal-createDevice')
		const createType = screen.queryByTestId('modal-createType')
		const deleteBrand = screen.queryByTestId('modal-deleteBrand')
		const deleteType = screen.queryByTestId('modal-deleteType')

		expect(createBrand).toBeInTheDocument();
		expect(createDevice).toBeInTheDocument();
		expect(createType).toBeInTheDocument();
		expect(deleteBrand).toBeInTheDocument();
		expect(deleteType).toBeInTheDocument();
	})
})

describe('test clicks on buttons', () => {
	//тестирование работы кнопки и передачи props в дочерний компонент(интеграционное тестирование?)
	
	test('click button create brand', () => {
		render(<Admin />);
		const createBrand = screen.queryByTestId('modal-createBrand')
		expect(createBrand.textContent).toEqual('Hide')

		const createBrandButton = screen.getByText(/добавить бренд/i)
		fireEvent.click(createBrandButton)
		expect(createBrand.textContent).toEqual('Show')
	})

	test('click button create type', () => {
		render(<Admin />);

		const createType = screen.queryByTestId('modal-createType')
		expect(createType.textContent).toEqual('Hide')

		const createTypeButton = screen.getByText(/добавить тип/i)
		fireEvent.click(createTypeButton)
		expect(createType.textContent).toEqual('Show')
	})

	test('click button create device', () => {
		render(<Admin />);

		const createDevice = screen.queryByTestId('modal-createDevice')
		expect(createDevice.textContent).toEqual('Hide')

		const createDeviceButton = screen.getByText(/добавить устройство/i)
		fireEvent.click(createDeviceButton)
		expect(createDevice.textContent).toEqual('Show')
	})

	test('click button delete brand', () => {
		render(<Admin />);

		const deleteBrand = screen.queryByTestId('modal-deleteBrand')
		expect(deleteBrand.textContent).toEqual('Hide')

		const deleteBrandButton = screen.getByText(/удалить бренд/i)
		fireEvent.click(deleteBrandButton)
		expect(deleteBrand.textContent).toEqual('Show')
	})

	test('click button delete type', () => {
		render(<Admin />);

		const deleteType = screen.queryByTestId('modal-deleteType')
		expect(deleteType.textContent).toEqual('Hide')

		const deleteTypeButton = screen.getByText(/удалить тип/i)
		fireEvent.click(deleteTypeButton)
		expect(deleteType.textContent).toEqual('Show')
	})
})