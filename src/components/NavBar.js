import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function NavBar({title, mode, toggleMode}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme={mode}>
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            
          </Nav>


          <Form>
      <Form.Check // prettier-ignore
      
        type="switch"
        className={`text-${mode === "dark" ? "light" : "dark"}`}
        id="custom-switch"
        label="Swith Mode"
        onClick={() => toggleMode()}
      />
    </Form>
    
        </Navbar.Collapse>

        
      </Container>

     
    </Navbar>
  );
}

export default NavBar;