import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link className="nav-link" to="/">
        Summary
      </Link>
      <Link className="nav-link" to="/book">
        Book a Holiday
      </Link>
      <Link className="nav-link" to="/approvals">
        Approvals
      </Link>
    </>
  );
};

export default Nav;
