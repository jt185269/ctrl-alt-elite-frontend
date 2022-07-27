import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import {Expenses} from './Expenses'
import { CoffeeCalendar } from './CoffeeCalendar';
import { Income } from './Income';
import { Summary } from './Summary';

async function fetchData() {

  let options= {

    method: 'GET',

    headers: { 'Content-Type': 'application/json' },

  }

  const res = await fetch('http://localhost:5000/api/datafetch', options)

  return res.json();

}

export const NavMenu = () => {
  const [page, setPage] = useState(null);
  const [data, setData] = useState(null)
  fetchData().then( (res) => {
    setData(res)
  }
    
  );
  
  const onPageChange = (e) => {
    setPage(e)
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => onPageChange("expenses")}>Expenses</Nav.Link>
            <Nav.Link onClick={() => onPageChange("income")}>Income</Nav.Link>
            <Nav.Link onClick={() => onPageChange("summary")}>Summary</Nav.Link>
            <Nav.Link onClick={() => onPageChange("schedule")}>Schedule</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {(page === "expenses" && data !== null) && <Expenses data={data}/>}
    {(page === "income" && data !== null) && <Income data={data} />}
    {(page === "summary" && data !== null) && <Summary data={data} />}
    {page === "schedule" && <CoffeeCalendar />}
    </>

  );
}
