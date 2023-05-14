import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../shared/assets/star.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../shared/utils/consts";

const DeviceItem = ({device, brand}) => {
	const navigate = useNavigate()

	return (
		<Col md={3} className={"mt-3"} onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
			<Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
				{device.img ? <Image width={150} height={150} src={import.meta.env.VITE_API_URL + device.img} /> : null}
				<div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
					<div>{brand}</div>
					<div className="d-flex align-items-center">
						<span>{device.rating}</span>
						<Image width={18} height={18} src={star} />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	);
};

export default DeviceItem;
