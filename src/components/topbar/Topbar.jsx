import "./topbar.scss";
import { Person, Email } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo ">
            osmnnl
          </a>
          <div className="itemContainer">
            <Person id="icon" />
            <span>+90 506 170 0818</span>
          </div>
          <div className="itemContainer">
            <Email id="icon" />
            <span>osmnnl@osmnnl.dev</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
