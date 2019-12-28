import React from 'react'


function InputSec(props){
    return(
        <div className="input-sec">
            <div className="input-area">
                <form onSubmit={props.HandleSubmit}>
                    <input type='text' placeholder="shorten a link here" ref={props.TextRef} required/>
                    <button type="submit">Shorten It!</button>
                </form>
            </div>
            <div className="list-area">
                <ul>
                    {props.List}
                </ul>
            </div>
        </div>
    )
}
export default InputSec