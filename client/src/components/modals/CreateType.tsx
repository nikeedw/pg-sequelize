import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { FC, useState } from "react";
import { createType } from "../../http/deviceAPI";

interface Props {
	show: boolean;
	onHide: () => void;
}

const CreateType: FC<Props> = ({ show, onHide }) => {
	const [value, setValue] = useState('');

	const addType = () => {
		createType({ name: value } as IType).then(_ => setValue(''));
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
					Добавить тип
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder={"Введите название типа"}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addType}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateType;