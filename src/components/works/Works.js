import "./works.css"
import Fitness from "../../assets/fitness.JPG"

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
                    <img className="example1" src={Fitness} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                <div className="workitem">
                    <img className="example1" src={Fitness} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                <div className="workitem">
                    <img className="example1" src={Fitness} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                <div className="workitem">
                    <img className="example1" src={Fitness} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                    </div>
                <div className="workitem">
                    <img className="example1" src={Fitness} alt="Workout Tracker Example"/>
                    <h3 className="workh3">Fitness Tracker</h3>
                </div>
            </div>
        </div>
    )
}
