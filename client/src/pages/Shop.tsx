import { Col, Container, Row } from "react-bootstrap"
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { Context } from "../main"
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI"
import Pages from "../components/Pages"

const Shop = observer(() => {
	const context = useContext(Context);
	const device = context!.device;

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data));
		fetchBrands().then(data => device.setBrands(data));
		fetchDevices(null, null, 1, 3).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		});
	}, [])

	useEffect(() => {
		fetchDevices(device.getSelectedType.id, device.getSelectedBrand.id, device.getPage, 3).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [device.getPage, device.getSelectedBrand, device.getSelectedType])

	return (
		<Container>
			<Row className="mt-2">
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<DeviceList />
					<Pages />
				</Col>
			</Row>
		</Container>
	)
})

export default Shop
