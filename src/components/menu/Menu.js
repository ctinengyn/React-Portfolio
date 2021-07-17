import "./menu.css"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul className="menuul">
                <li className="menuli" onClick={()=>setMenuOpen(false)}>
                    <a href="#main">Home</a>
                </li>
                <li className="menuli" onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li >
                <li className="menuli" onClick={()=>setMenuOpen(false)}>
                    <a href="#resume">Resume</a>
                </li>
                <li className="menuli" onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
