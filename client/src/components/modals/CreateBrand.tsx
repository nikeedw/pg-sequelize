import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { FC } from "react";

interface Props {
	show: boolean;
	onHide: () => void;
}

const CreateBrand: FC<Props> = ({ show, onHide }) => {
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
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success">Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateBrand
