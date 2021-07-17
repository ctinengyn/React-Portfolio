import "./main.css"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Main() {

    // Styles for "ityed"
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1700,
            backSpeed: 70,
            strings: ['Developer', 'Programmer', "Content Creater" ]
        });
    }, [])

    return (
        <div className="main" id="main">

            {/* Left side with photo */}
            <div className="left">
                <div className="imgContainer">
                    <img class="me" src="assets/Me.JPG" alt="Photo for main page"/>
                </div>
            </div>

            {/* Right side with intro */}
            <div className="right1">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Christine Nguyen</h1>
                    <h3><div class="pro" ref={textRef}></div></h3>
                </div>
                <a href="#works">
                    <div class="down" scr="assets/down.png" alt="Down arrow"/>
                </a>
            </div>
        </div>
    )
}
