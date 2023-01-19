// Bootstrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// React router dom Link
import { Link } from "react-router-dom";

// Importing logo
import logo from "../../assets/icons/noroff-logo.svg";

const Navigation = () => {
 return (
  <Navbar bg="bg-theme-dark" expand="lg" variant="dark">
   <Container fluid>
    <div>
     <Navbar.Brand as={Link} to="/Home">
      <div className="d-flex gap-2">
       <img src={logo} className="Logo-noroff" alt="Noroff-logo"/>
       <div className="d-flex flex-column">
        <span className="company_name text-white">Noroff</span>
        <span className="company_branch text-white">Job Agency</span>
       </div>
      </div>
     </Navbar.Brand>
    </div>
    <div>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
       <div className="d-flex gap-3">
        <Nav.Link as={Link} to="/Listings">
         Listings
        </Nav.Link>
        <Nav.Link as={Link} to="/SignIn" className="btn btn-outline-light text-white" id="signInUser">
         Sign In
        </Nav.Link>
        <Nav.Link as={Link} to="/Register" className="btn btn-theme-secondary text-black" id="registerUser">
         Register
        </Nav.Link>
       </div>
      </Nav>
     </Navbar.Collapse>
    </div>
   </Container>
  </Navbar>
 );
};

export default Navigation;
