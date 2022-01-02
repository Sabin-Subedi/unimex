import React from "react";
import { Container } from "react-bootstrap";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <Container className="footer">
        <p>Unimex 2022</p>
        <div className="d-flex gap-2">
          <div className="icon">
            <BsTwitter />
          </div>
          <div className="icon">
            <BsFacebook />
          </div>
        </div>
      </Container>
    </footer>
  );
}
