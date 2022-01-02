import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import Logo from "../../vectors/Logo";
import { FcMenu } from "react-icons/fc";
import "./navbar.scss";
import { BsCaretDownFill } from "react-icons/bs";

function NavigationBar() {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        bg="transparent"
        variant="dark"
        expand="lg"
        className="py-3"
      >
        <Container>
          <Navbar.Brand href="#home">
            <span style={{ width: "3rem" }}>
              <Logo width="164" height="80" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive_nav">
            <FcMenu />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive_nav">
            <Nav className="ms-auto ">
              <Nav.Link className="nav_link" href="#products">
                Products <BsCaretDownFill className="color_green_dark ms-1" />
              </Nav.Link>
              <Nav.Link className="nav_link" href="#docs">
                Docs <BsCaretDownFill className="color_green_dark ms-1" />
              </Nav.Link>
              <NavDropdown
                className="nav_dropdown"
                title={
                  <>
                    Staking
                    <BsCaretDownFill className="color_green_dark ms-1" />
                  </>
                }
                id="Docs"
                align="end"
              >
                <NavDropdown.Item className="pt-2" href="#action/3.2">
                  Stake UMX
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Stake DGN
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Stake SpaceX
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
