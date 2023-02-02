import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function NavScrollExample() {
    const Altaf=useSelector((state)=> state.productReducer.cart)
    
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img style={{height:'80px',width:'200px'}} src="https://www.nicepng.com/png/detail/253-2532888_zen-cart-mobile-commerce-mcommerce-shopping-cart-zen.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/cart">Cart<ShoppingBagIcon style={{fontSize:'40px'}}/><sup style={{position:'relative',left:'-30px',top:'6px',color:'red'}}>{Altaf.length}</sup></Link>
            <Link className='link' to="/viewd">View-details</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;