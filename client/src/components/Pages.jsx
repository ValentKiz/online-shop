import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

export function pagination(totalCount, limit) {
	const pageCount = Math.ceil(totalCount / limit)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
			pages.push(i + 1)
	}
	return pages
}

const Pages = observer(() => {
    const {device} = useContext(Context)

		const pages = pagination(device.totalCount, device.limit);

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
