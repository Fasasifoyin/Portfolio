import { Link } from "react-scroll";

const MobileNav = ({ isOpen, setOpen }) => {
  return (
    <div
      className="position-fixed left-0 w-100"
      style={{ top: "70px", height: "calc(100vh - 70px)", background:'rgb(255,255,255,0.5)' }}
    >
      <div className="d-flex justify-content-center align-items-center h-100 flex-column gap-5">
        <div
          style={{ height: "35px" }}
          className="d-flex align-items-center bbhover"
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="cursor fw-bold display-6"
            onClick={() => setOpen(!isOpen)}
          >
            Home
          </Link>
        </div>

        <div
          style={{ height: "35px" }}
          className="d-flex align-items-center bbhover"
        >
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor fw-bold display-6"
            onClick={() => setOpen(!isOpen)}
          >
            About
          </Link>
        </div>

        <div
          style={{ height: "35px" }}
          className="d-flex align-items-center bbhover"
        >
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor fw-bold display-6"
            onClick={() => setOpen(!isOpen)}
          >
            Project
          </Link>
        </div>

        <div
          style={{ height: "35px" }}
          className="d-flex align-items-center bbhover"
        >
          <Link
            activeClass="active"
            to="message"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor fw-bold display-6"
            onClick={() => setOpen(!isOpen)}
          >
            Message me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
