import "./works.css"
import Fitness from "../../assets/fitness.JPG"

export default function Works() {

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "example",
            title: "Example",
        },
        {
            id: "example",
            title: "Example",
        },
        {
            id: "example",
            title: "Example",
        },
        {
            id: "example",
            title: "Example",
        },
    ];

    return (
        <div className="works" id="worksid">
            <h1 className="workh1">Portfolio</h1>
            <ul className="workul">
                <li className="workli">Example</li>
                <li className="workli">Example</li>
                <li className="workli">Example</li>
                <li className="workli">Example</li>
                <li className="workli">Example</li>
            </ul>
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
