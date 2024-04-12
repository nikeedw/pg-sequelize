import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../main"
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
	const context = useContext(Context);
	const device = context!.device;

	return (
		<Row className="d-flex">
			{device.getDevices.map(device => (
				<DeviceItem key={device.id} device={device} />
			))}
		</Row>
	)
})

export default DeviceList
