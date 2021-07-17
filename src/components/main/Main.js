import "./main.css"

export default function Main() {
    return (
        <div className="main" id="main">

            {/* Left side with photo */}
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Me.JPG" alt="Photo for main page"></img>
                </div>
            </div>

            {/* Right side with intro */}
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Christine Nguyen</h1>
                    <h3>Full-Stack Developer<span></span></h3>
                </div>
            </div>
        </div>
    )
}
