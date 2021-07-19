import "./works.css"
import Fitness from "../../assets/fitness.JPG"
import Budget from "../../assets/budget.JPG"
import Pokemon from "../../assets/pokemon.JPG"
import Note from "../../assets/notetaker.JPG"
import Team from "../../assets/team.JPG"
import Work from "../../assets/workschedule.JPG"

export default function Works() {

    return (

        // Work/Project image examples with live links
        <div className="works" id="worksid">
            <h1 className="workh1">Portfolio</h1>

            <div className="workcontainer">
                <div className="workfitem">
                    <a href="https://enigmatic-lowlands-43601.herokuapp.com/?id=60e9d24ac99c7100153ac36c"> 
                    <img className="example1" src={Fitness} alt="Workout Tracker Example" />
                    <h3 className="workh3">Fitness Tracker</h3>
                    </a>
                </div>

                <div className="workitem">
                    <a href="https://dry-caverns-13937.herokuapp.com/">
                    <img className="example1" src={Budget} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Budget Tracker</h3>
                    </a>
                </div>

                <div className="workitem">
                    <a href="https://whos-the-pokemon.herokuapp.com/"> 
                    <img className="example1" src={Pokemon} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Who's That Pokemon?</h3>
                    </a>
                </div>

                <div className="workitem">
                    <a href="https://whispering-woodland-84908.herokuapp.com/">
                    <img className="example1" src={Note} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Note Taker</h3>
                    </a>
                </div>

                <div className="workitem">
                    <a href="https://github.com/ctinengyn/Team-Profile-Generator">
                    <img className="example1" src={Team} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Team Profile</h3>
                    </a>
                </div>

                <div className="workitem">
                    <a href="https://github.com/ctinengyn/Work-Day-Scheduler">
                    <img className="example1" src={Work} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Work Day Scheduler</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}
