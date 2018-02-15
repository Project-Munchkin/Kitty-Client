import React from "react";

export default ({name, onClickListener})=>{
    return (
        <div className="button bottom">
            <button onClick={onClickListener}>{name}</button>
        </div>
    )
}