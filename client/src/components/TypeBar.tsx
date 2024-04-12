import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../main";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
	const context = useContext(Context);
	const device = context!.device;

	return (
		<ListGroup>
			{device.getTypes.map(type => (
				<ListGroup.Item 
					style={{cursor: "pointer"}}
					active={type.id === device.getSelectedType.id}
					onClick={() => device.setSelectedType(type)}
					key={type.id}
				>
					{type.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	)
})

export default TypeBar
