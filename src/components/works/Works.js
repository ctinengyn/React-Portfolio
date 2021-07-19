import "./works.css"
import Fitness from "../../assets/fitness.JPG"
import Budget from "../../assets/budget.JPG"
import Pokemon from "../../assets/pokemon.JPG"
import Note from "../../assets/notetaker.JPG"
import Team from "../../assets/team.JPG"
import Work from "../../assets/workschedule.JPG"

export default function Works() {

    return (
        <div className="works" id="worksid">
            <h1 className="workh1">Portfolio</h1>

            <div className="workcontainer">
                <div className="workfitem">
                    <img className="example1" src={Fitness} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                    <div className="workitem">
                    <img className="example1" src={Budget} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                <div className="workitem">
                    <img className="example1" src={Pokemon} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                <div className="workitem">
                    <img className="example1" src={Note} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                <div className="workitem">
                    <img className="example1" src={Team} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                <div className="workitem">
                    <img className="example1" src={Work} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                </div>
            </div>
        </div>
    )
}
