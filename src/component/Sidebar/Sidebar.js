import React from 'react'
import "./sidebar.css"
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div id='sidenav'>
        <div className="logo">
            <h2><QrCodeScannerIcon className='mb-1' /> Code App</h2>
        </div>

        <div className="links mt-3">
            <ul>
                <li> <Link to="/" ><AddShoppingCartIcon className='m-1' /> Shop</Link> </li>
                <li><Link to="/about" ><InfoIcon className='m-1' /> About</Link></li>
                <li><Link to="/contact" ><RecentActorsIcon className='m-1' />Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar