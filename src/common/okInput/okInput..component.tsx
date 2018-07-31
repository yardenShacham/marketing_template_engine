import * as React from "react";

export const OkInput = (props) => {
    const {onChange, onOk} = props;
    return (
        <div className="ok-input-container">
            <input type="text" className="form-control"
                   onChange={(el: any) => onChange(el.target.value)}
                   placeholder="Select view name..."/>
            <span className="glyphicon glyphicon-ok okBtn"
                  onClick={onOk}></span>
        </div>

    );
};