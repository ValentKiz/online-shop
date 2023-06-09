import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {fetchBrands} from "../../app/api/deviceAPI";
import {Button, Form, Dropdown, Modal} from "react-bootstrap";
import {deleteBrand} from "../../app/api/deviceAPI";
import {observer} from "mobx-react-lite";

const DeleteBrand = observer(({show, onHide}) => {
	const {device} = useContext(Context)

	useEffect(() => {
		fetchBrands().then(data => device.setBrands(data))
	}, [])

	const deleteHandler = () => {
		deleteBrand(device.selectedBrand.id).then(data => {
			device.setSelectedBrand('')
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
					Удалить бренд
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand =>
								<Dropdown.Item
									onClick={() => device.setSelectedBrand(brand)}
									key={brand.id}
								>
									{brand.name}
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

export default DeleteBrand;
