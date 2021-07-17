import "./navbar.css"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper1">
                <div className="left">
                    <a href="#main" className="logo">🌿</a>
                </div>

                {/* Creating drop down menu page */}
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="1"></span>
                        <span className="2"></span>
                        <span className="3"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
