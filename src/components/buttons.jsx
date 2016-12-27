import React from 'react'
const Buttons = (props)=>(
    <div className="btn-group">
        <button className="btn btn-success" id="learnIt"> Learn it! </button>
        <button className="btn btn-danger" id="stop"> Destroy!</button>
        <button className="btn btn-info"> Update!</button>
    </div>
);

export default Buttons;