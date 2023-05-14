import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../app/api/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
	const {device} = useContext(Context)

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
		fetchDevices(null, null, 1, 20).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [])

	useEffect(() => {
		fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 20).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [device.page, device.selectedType, device.selectedBrand,])

	const brandList = []
	device.brands.map(item => brandList.push({name: item.name, id: item.id}))
	// console.log(brandList)

	return (
		<Container>
			<Row className="mt-2">
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar brands={brandList} selectedBrand={device.selectedBrand} setBrand={(item) => device.setSelectedBrand(item)} />
					<DeviceList />
					<Pages />
				</Col>
			</Row>
		</Container>
	);
});

export default Shop;
