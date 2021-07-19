import "./contact.css"
import Mobile from "../../assets/mobile.png"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contactleft">
                <img className="mobileimg" src={Mobile} alt=""></img>
            </div>
                <div className="contactright">
                    <h2 className="contacth2">Contact</h2>
                <form>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
