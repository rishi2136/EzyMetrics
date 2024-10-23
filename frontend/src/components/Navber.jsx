import { Link } from "react-router-dom";

const Navber = (props) => {
  let {email, setEmail} = props;
const handleClick = ()=>{
  if(email === null)
  alert("You need to add email to download report");
}

const handleAddEmail = ()=>{
  const email = prompt("Enter your email id");
  setEmail(email);
}


  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder" to={"/"}>
          Ezymetrics
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/lead"}>
                Leads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Campaigns
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={handleClick} to={email !== null ? "/report" : "#"}>
              Generate Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={handleAddEmail} >
              Add Email
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={handleClick}  to={email !== null ? "/new/campaign" : "#"}>
              Create Campaign
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
