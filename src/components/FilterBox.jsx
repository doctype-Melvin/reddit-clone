import React from "react";

export default function FilterBox() {
    return (
        <div className="filterBox">
            <div className="filterBtn">
                    <img className="filterIcon" src="best.png" />
                <span className="filterText">Best</span>
            </div>
            <div className="filterBtn">
                    <img className="filterIcon" src="hot.png" />
                <span className="filterText">Hot</span>
            </div>
            <div className="filterBtn">
                    <img className="filterIcon" src="new.png" />
               <span className="filterText">New</span>
            </div>
            <div className="filterBtn">
                    <img className="filterIcon" src="top.png" />
                <span className="filterText">Top</span>
            </div>
        </div>
    )
}