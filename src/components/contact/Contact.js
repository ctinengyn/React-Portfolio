import "./contact.css"
import Mobile from "../../assets/mobile.png"

export default function Contact() {
    return (
        <div className="contact" id="contact">
           <div className="contactleft">
               <img src={Mobile} alt=""></img>
           </div>
           <div className="contactright">
               <h2 className="contacth2">Contact</h2>
               <form>
                   <input type="text" placeholder="Email"></input>
               </form>
           </div>
        </div>
    )
}
