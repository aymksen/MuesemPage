import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul >
            <li className="hover-underline-animation" onClick={()=>setMenuOpen(false)}>
                <a href="#main">Home</a>
            </li><br/>
            <li className="hover-underline-animation" onClick={()=>setMenuOpen(false)}>
                <a href="#map">Map</a>
            </li><br/>
            <li className="hover-underline-animation" onClick={()=>setMenuOpen(false)}>
                <a href="#about">About</a>
            </li ><br/>
            <li className="hover-underline-animation" onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li><br/>
        </ul>
    
    
    </div>
  )
}
