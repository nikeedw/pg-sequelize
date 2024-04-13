import Modal from "react-bootstrap/Modal";
import { Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import { FC, useContext, useState } from "react";
import { Context } from "../../main";

interface Props {
	show: boolean;
	onHide: () => void;
}

type TInfo = {
	title: string;
	description: string;
	number: number;
}

const CreateDevice: FC<Props> = ({ show, onHide }) => {
	const context = useContext(Context);
	const device = context!.device;
	const [info, setInfo] = useState<TInfo[]>([]);

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = (number: number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	return (
		<Modal
			centered
			show={show}
			onHide={onHide}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить устройство
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown>
						<Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.getTypes.map(type => 
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-3">
						<Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.getBrands.map(brand => 
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control 
						className="mt-3"
						placeholder="Введите название устройства"
						type="text"
					/>
					<Form.Control 
						className="mt-3"
						placeholder="Введите стоимость устройства"
						type="number"
					/>
					<Form.Control 
						className="mt-3"
						placeholder="Выберите изображение устройства"
						type="file"
					/>
					<Button 
						variant='outline-dark' 
						className="mt-3"
						onClick={addInfo}
					>
						Добавить новое свойство
					</Button>
					{info.map(i =>
						<Row className="mt-3" key={i.number}>
							<Col md={4}>
								<Form.Control 
									placeholder="Введите название свойства"
								/>
							</Col>
							<Col md={4}>
								<Form.Control 
									placeholder="Введите описание свойства"
								/>
							</Col>
							<Col md={4}>
								<Button 
									variant="outline-danger"
									onClick={() => removeInfo(i.number)}
								>
									Удалить
								</Button>
							</Col>
						</Row>
					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success">Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateDevice
