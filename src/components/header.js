import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaPiggyBank } from "react-icons/fa";

import '../css/header.css';

const Header = () => {
  return (
    <div className="header-pd">
      <Navbar  bg="primary" variant="dark">

        <Navbar.Brand href="#home">

          <div className="headerr">

            <div><FaPiggyBank className='icon' /></div>
            <div><span className='head'> Dashboard </span></div>

          </div>
          <div>

          </div>


        </Navbar.Brand>



      </Navbar>
    </div>

  )
}

export default Header;