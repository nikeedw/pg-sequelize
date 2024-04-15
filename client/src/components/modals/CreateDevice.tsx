import Modal from "react-bootstrap/Modal";
import { Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";

interface Props {
	show: boolean;
	onHide: () => void;
}

const CreateDevice: FC<Props> = observer(({ show, onHide }) => {
	const context = useContext(Context);
	const device = context!.device;
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [file, setFile] = useState<File| string | null>(null);

	type TInfo = {
		title: string;
		description: string;
		number: number;
	}

	const [info, setInfo] = useState<TInfo[]>([]);

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data));
		fetchBrands().then(data => device.setBrands(data));
	}, [])

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = (number: number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	type InfoFunctionType = (key: keyof Omit<TInfo, 'number'>, value: string, number: number) => void

	const changeInfo: InfoFunctionType = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
	}

	const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
		if(e.target.files !== null)
			setFile(e.target.files[0])
	}
	
	const addDevice = () => {
		const formData = new FormData();
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file as string);
		formData.append('brandId', device.getSelectedBrand.id)
		formData.append('typeId', device.getSelectedType.id);
		formData.append('info', JSON.stringify(info));
		createDevice(formData).then(() => onHide())
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
						<Dropdown.Toggle>{device.getSelectedType.name || 'Выберите тип'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.getTypes.map(type => 
								<Dropdown.Item 
									onClick={() => device.setSelectedType(type)} 
									key={type.id}
								>
									{type.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-3">
						<Dropdown.Toggle>{device.getSelectedBrand.name || 'Выберите брэнд'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.getBrands.map(brand => 
								<Dropdown.Item 
									onClick={() => device.setSelectedBrand(brand)} 
									key={brand.id}
								>
									{brand.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control 
						className="mt-3"
						placeholder="Введите название устройства"
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Form.Control 
						className="mt-3"
						placeholder="Введите стоимость устройства"
						type="number"
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
					/>
					<Form.Control 
						className="mt-3"
						placeholder="Выберите изображение устройства"
						type="file"
						onChange={selectFile}
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
									value={i.title}
									onChange={(e) => changeInfo('title', e.target.value, i.number)}
								/>
							</Col>
							<Col md={4}>
								<Form.Control 
									placeholder="Введите описание свойства"
									value={i.description}
									onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
				<Button variant="outline-success" onClick={addDevice}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
})

export default CreateDevice