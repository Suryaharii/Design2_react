const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar2">
        <div className="container-fluid">
          <h4>#logo</h4>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#">
                  <i className="fa fa-dashboard"></i>&nbsp;Dashboard
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-book"></i>&nbsp;Insurance
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-home"></i>&nbsp;Loans
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user"></i>&nbsp; Contacts
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-database"></i>&nbsp;Transactions
                </a>
              </li>

              <li className="nav-item active">Welcome, Surya</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
