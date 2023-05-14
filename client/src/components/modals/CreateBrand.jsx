import React, {useState, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from '../../index';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrand} from "../../app/api/deviceAPI";
import {checkName} from '../../app/store/reducers/validation';



const CreateBrand = observer(({show, onHide}) => {
	const {device} = useContext(Context)
	const [value, setValue] = useState('')

	const addBrand = () => {
		const checkedName = checkName(value, device.brands)

		if (checkedName[0] === 'Error') {
			setValue(checkedName[1])
		} else {
			createBrand({name: String(checkedName[1])}).then(data => {
				setValue('')
				onHide()
			})
		}
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить бренд
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder={"Введите название бренда"}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addBrand}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
});

export default CreateBrand;
