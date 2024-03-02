// import react from 'react';
import propType from 'prop-types'

export default function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav-mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.title}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.google.com">{props.link}</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button">
            Dropdown Menue
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">{props.about}</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    );
}
Navbar.propType = {

    title: propType.string.isRequired,
    about:propType.string,
    link:propType.string

}
Navbar.defaultProps = {
    title:'set title of the page',
    about:'set about of the page',
    link:'any extrernal link you want to open'

}

