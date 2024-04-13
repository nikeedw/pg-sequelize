import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { FC, useState } from "react";

interface Props {
	show: boolean;
	onHide: () => void;
}

const CreateType: FC<Props> = ({ show, onHide }) => {
	const [] = useState();

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
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success">Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateType;