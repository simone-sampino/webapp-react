import { NavLink } from "react-router-dom";

export default function Header() {
  const menu = [
    {
      id: 1,
      to: "/",
      text: "MOVIES",
    },
    {
      id: 2,
      to: "/trailers",
      text: "TRAILERS",
    },
    {
      id: 3,
      to: "/coming-soon",
      text: "COMING SOON",
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <i className="bi bi-camera-reels"></i>
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                {menu.map((item) => {
                  return (
                    <li key={item.id} className="nav-item">
                      <NavLink
                        className="nav-link"
                        to={item.to}
                        aria-current="page"
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <form className="d-flex my-2 my-lg-0">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
