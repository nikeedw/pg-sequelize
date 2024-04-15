import { observer } from "mobx-react-lite"
import { Context } from "../main"
import { useContext } from "react";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
	const context = useContext(Context);
	const device = context!.device;

	const pagesCount = Math.ceil(device.getTotalCount / device.getLimit);
	const pages: number[] = [];

	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1);
	}

	return (
		<Pagination className="mt-3">
			{pages.map(page =>
				<Pagination.Item
					key={page}
					active={device.getPage === page}
					onClick={() => device.setPage(page)}
				>
					{page}
				</Pagination.Item>
			)}
		</Pagination>
	)
})

export default Pages
