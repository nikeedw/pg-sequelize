import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Card, Col, Image } from "react-bootstrap"
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import RoutesEnum from "../routes/routes";

interface Props {
	device: IDevice;
}

const DeviceItem: FC<Props> = observer(({ device }) => {
	const navigate = useNavigate();

	return (
		<Col md={3} className="mt-3" onClick={() => navigate(RoutesEnum.DEVICE_ROUTE + '/' + device.id)}>
			<Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
				<Image width={150} src={'http://localhost:5000/' + device.img} />
				<div className="text-black-50 d-flex justify-content-between">
					<div>Samsung...</div>
					<div className="d-flex align-items-center">
						<div>{device.rating}</div>
						<Image width={18} height={18} src={star} />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	)
})

export default DeviceItem
