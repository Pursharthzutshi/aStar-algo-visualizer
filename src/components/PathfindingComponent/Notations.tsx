import "../PathfindingComponent/Notations.css"

function Notations() {

    return (
        <div className="notations-container">
            <div className="notations-div">
                <div className="cell-notation"></div>
                <p>Start Node</p>
            </div>
            <div className="notations-div">
                <div className="cell-notation"></div>
                <p>End Node</p>
            </div>
            <div className="notations-div">
                <div className="cell-notation"></div>
                <p>Optimized Path</p>
            </div>
            <div className="notations-div">
                <div className="cell-notation"></div>
                <p>Walkable Cells</p>
            </div>
            <div className="notations-div">
                <div className="cell-notation"></div>
                <p>Blocked Cells</p>
            </div>
        </div>
    );
}

export default Notations;