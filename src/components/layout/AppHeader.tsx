import { NavLink, Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Matches-React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/matches">
                Matches
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/standings">
                Standings
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/players">
                Players
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
