import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../main'
import { Card, Col } from 'react-bootstrap';

const BrandBar = observer(() => {
	const context = useContext(Context);
	const device = context!.device;

	return (
		<Col className='d-flex'>
			{device.getBrands.map(brand => (
				<Card
					style={{cursor: "pointer"}}
					onClick={() => device.setSelectedBrand(brand)}
					border={brand.id === device.getSelectedBrand.id ? 'danger' : 'light'}
					key={brand.id}
					className='p-3'
				>
					{brand.name}
				</Card>
			))}
		</Col>
	)
})

export default BrandBar
