import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// React router dom Link
import { Link } from "react-router-dom";

// Importing icons
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/mail.svg';

const PageFooter = () => {
 return (
  <footer className="page_footer bg-theme-dark">
   <Container className="mb-3 mt-3">
    <Row className="gap-3">
     <Col>
     <h4 className="text-white mb-3">About Noroff Job Agency</h4>
     <p className="text-white">Noroff Jobs is a student-built and student-run employment agency designed to link Industry Partners with skilled candidates.</p> 
        <p className="text-white">Noroff Jobs is a non-profit organisation dedicated to placing students into their ideal workplace.</p>
     </Col>
     <Col>
     <h4 className="text-white mb-3">For Companies</h4>
        <ul className="p-0 d-flex flex-column gap-1">
        <li className="list-group-item"><Link to="#" className="nav-link text-white" target="_blanc">About Noroff Jobs</Link></li>
        <li className="list-group-item"><Link to="#" className="nav-link text-white" target="_blanc">Company User Guide</Link></li>
        <li className="list-group-item"><Link to="#" className="nav-link text-white" target="_blanc">FAQ</Link></li>
        </ul>
     </Col>
     <Col>
     <h4 className="text-white mb-3">Contact us</h4>
        <ul className="p-0 d-flex flex-column gap-1">
          <li className="list-group-item text-white">Noroff Education AS</li>
          <li className="list-group-item text-white">Tordenskjoldsgate 9</li>
          <li className="list-group-item text-white">4612 Kristiansand S</li>
        </ul>
        <div className="d-flex flex-column gap-1">
          <Link to="tel:38000000" className="nav-link text-white"><img src={phone} className="footerIcon" alt="icons"/> 38000000</Link>
          <Link to="mailto:utdanning@noroff.no" className="nav-link text-white"><img src={email} className="footerIcon" alt="icons"/> utdanning@noroff.no</Link>
        </div>
     </Col>
     <Col>
     <h4 className="text-white mb-3">Help</h4>
        <ul className="p-0 d-flex flex-column gap-1">
       <li className="list-group-item"><Link to="#" className="nav-link text-white" target="_blanc">Customer Service</Link></li>
       <li className="list-group-item"><Link to="#" className="nav-link text-white" target="_blanc">Terms of use</Link></li>
       <li className="list-group-item"><Link to="#" className="nav-link text-white" target="_blanc">Ad policies</Link></li>
       </ul>
     </Col>
    </Row>
   </Container>
  </footer>
 );
};

export default PageFooter;
