import React from 'react';
import {Card, Row, Form, Spinner} from "react-bootstrap";

const BrandBar = ({brands, selectedBrand, setBrand}) => {
    return (
        <Row className="d-flex">
					{brands.length > 0 ? 
						brands.map(brand =>
							<Card
									style={{cursor:'pointer', margin:'10px'}}
									key={brand.id}
									className="p-3"
									onClick={() => setBrand(brand)}
									border={brand.id === selectedBrand.id ? 'danger' : 'light'}
									data-testid={brand.id === selectedBrand.id ? 'selected' : 'none'}
							>
									{brand.name}
							</Card>
						)
						:
						<Spinner></Spinner>
					}
        </Row>
    );
};

export default BrandBar;
