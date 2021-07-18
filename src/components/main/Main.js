import "./main.css"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import Me from "../../assets/Me.JPG"
import Arrow from "../../assets/arrow.png"

export default function Main() {

    // Styles for "ityed"
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1700,
            backSpeed: 70,
            strings: ["Developer", "Programmer", "Content Creator"]
        });
    }, [])

    return (
        <div className="main" id="main">

            {/* Left side with photo */}
            <div className="left">
                <div className="imgContainer">
                    <img className="me" src={Me} alt="Photo for main page"/>
                </div>
            </div>

            {/* Right side with intro */}
            <div className="right1">
                <div className="wrapper">
                    <h2 className="mainh2">Hi there, I'm</h2>
                    <h1 className="mainh1">Christine Nguyen</h1>
                    <h3 className="mainh3"><div ref={textRef}></div></h3>
                </div>
                <a href="#works">
                    <div className="down" src={Arrow} alt="Down arrow"/>
                </a>
            </div>
        </div>
    )
}
