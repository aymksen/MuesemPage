import "./topbar.scss"

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}  >
      <div className="wrapper " >
        <div className="left" >
          <a href="#main" className="logo" onClick={()=>setMenuOpen(false)}>Morocco</a>
        </div>
        <div className="middle" >
        <div className="itemContainer" href="#main">
          <a href="#main" >Home</a>
          </div>
          <div className="itemContainer">
          <a href="#map" >Map</a>
          </div>
          <div className="itemContainer">
          <a href="#about" >About</a>
          </div>
          <div className="itemContainer">
          <a href="#contact" >Contact</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  )
  
}

