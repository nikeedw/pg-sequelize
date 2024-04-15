import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { FC, useState } from "react";
import { createBrand } from "../../http/deviceAPI";

interface Props {
	show: boolean;
	onHide: () => void;
}

const CreateBrand: FC<Props> = ({ show, onHide }) => {
	const [value, setValue] = useState('');

	const addBrand = () => {
		createBrand({ name: value } as IBrand).then(_ => setValue(''));
		onHide();
	}

	return (
		<Modal
			centered
			show={show}
			onHide={onHide}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить бренд
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder={"Введите название брэнда"}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addBrand}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateBrand
