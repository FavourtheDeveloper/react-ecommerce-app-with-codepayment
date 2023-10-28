import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import FilterListIcon from '@mui/icons-material/FilterList';
import "./pages.css"
import ProductCard from '../component/ProductCard/ProductCard';
import {data} from '../data'

const Shop = () => {
  return (
    <div>
        <div className="row">
            <div className="col-lg-3">
                <h4>Shop</h4>
            </div>
            <div className="col-lg-6"></div>
            <div className="col-lg-3">
                <Button style={{marginRight: 20}}>Preview</Button>
                <Button>Publish</Button>
            </div>
        </div>

        <div className="products mt-4">
    <div className="row">
        <div className="col-lg-4">
            <h5>Products: {data.length}</h5>
            
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FilterListIcon /></InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </div>
        
    </div>
    <hr />

    <div className="product">
        <div className="row">
            {data.map((item, index) => (
                <ProductCard key={index} title={item.title} imgsrc={item.img} price={item.price} /> 
  ))}
           

        
        </div>
    </div>
        </div>
      
    </div>
  )
}

export default Shop