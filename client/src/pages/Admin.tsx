import { Button, Container } from "react-bootstrap"
import CreateBrand from "../components/modals/CreateBrand"
import CreateType from "../components/modals/CreateType"
import CreateDevice from "../components/modals/CreateDevice"
import { useState } from "react"

const Admin = () => {
	const [brandVisible, setBrandVisible] = useState(false);
	const [typeVisible, setTypeVisible] = useState(false);
	const [deviceVisible, setDeviceVisible] = useState(false);

	return (
		<Container className="d-flex flex-column gap-4 mt-4">
			<Button 
				variant="outline-dark" 
				className="p-2"
				onClick={() => setTypeVisible(true)}
			>
				Добавить тип
			</Button>
			<Button 
				variant="outline-dark" 
				className="p-2"
				onClick={() => setBrandVisible(true)}
			>
				Добавить бренд
			</Button>
			<Button 
				variant="outline-dark" 
				className="p-2"
				onClick={() => setDeviceVisible(true)}
			>
				Добавить устройство
			</Button>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
			<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
		</Container>
	)
}

export default Admin
