import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardList from './CardList';
import { useEffect, useState } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import Business from './Business';
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";



function NavBar() {
    const [news, setNews] = useState([])
const {pathname} = useLocation()
    const handleHi = () => {
        console.log ("hi")
    }
    const handleFetch = async () => {
        
        //const url = "https://newsapi.org/v2/top-headlines?language=en&apiKey=cae650073e234e8e91d9d69e5a6e2bfa"
        const url = urlcat("https://newsapi.org", "/v2/top-headlines", {
                language: "en",
                category: pathname.slice(1),
                apiKey: "cae650073e234e8e91d9d69e5a6e2bfa"
            });
        console.log("url:", url)
        const response = await axios.get(url)
           console.log(response)
           setNews(response.data.articles)
           console.log(news)
      
           useEffect(() => {
            handleFetch()
        }, []);
        console.log(news)
      }
      
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link to="/business">Business <Business />
   </Nav.Link>
          

            <Nav.Link href="#action2">Link</Nav.Link>
           
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

export default NavBar;