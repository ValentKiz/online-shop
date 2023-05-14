import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {fetchTypes} from "../../app/api/deviceAPI";
import {Button, Form, Dropdown, Modal} from "react-bootstrap";
import {deleteType} from "../../app/api/deviceAPI";
import {observer} from "mobx-react-lite";

const DeleteType = observer(({show, onHide}) => {
	const {device} = useContext(Context)

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
	}, [])

	const deleteHandler = () => {
		deleteType(device.selectedType.id).then(data => {
			device.setSelectedType('')
			onHide()
		})
	}
	return (
		<Modal
			show={show}
			onHide={onHide}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Удалить тип
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type =>
								<Dropdown.Item
									onClick={() => device.setSelectedType(type)}
									key={type.id}
								>
									{type.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={deleteHandler}>Удалить</Button>
			</Modal.Footer>
		</Modal>
	);
});

export default DeleteType;
