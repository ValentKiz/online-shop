import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import DeleteBrand from '../components/modals/DeleteBrand';
import DeleteType from '../components/modals/DeleteType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
		const [deleteBrandVisible, setDeleteBrandVisible] = useState(false)
		const [deleteTypeVisible, setDeleteTypeVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
						<h2 style={{"textAlign":"center", "marginTop":"15px"}}>Панель администратора</h2>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
						<Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteBrandVisible(true)}
            >
                Удалить бренд
            </Button>
						<Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteTypeVisible(true)}
            >
                Удалить тип
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
						<DeleteBrand show={deleteBrandVisible} onHide={() => setDeleteBrandVisible(false)} />
						<DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} />
        </Container>
    );
};

export default Admin;
