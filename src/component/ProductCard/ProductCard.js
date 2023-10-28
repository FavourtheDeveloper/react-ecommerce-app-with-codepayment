import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Codebutton from '../codepayment/Codebutton';

const ProductCard = ({title, imgsrc, price}) => {
  return (
    <div className="col-lg-3">
                 <Card className='mb-4' style={{ width: '18rem', backgroundColor: '#F9FAFB' }}>
      <Card.Img variant="top" src={imgsrc}     />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          ${price}
        </Card.Text>
        <Codebutton price = {price} />
      </Card.Body>
    </Card>
            </div>
  )
}

export default ProductCard