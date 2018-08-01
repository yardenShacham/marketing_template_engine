import * as React from "react";

export const ViewActions = ({onRemove, onEdit, openEditMode, viewInfo, isEditMode}) => {
    return (
        <React.Fragment>
            {
                isEditMode ? <span className="action-item glyphicon glyphicon-ok"
                                   onClick={() => onEdit ? onEdit(viewInfo) : null}/> :
                    <span className="action-item glyphicon glyphicon-edit"
                          onClick={() => openEditMode ? openEditMode(viewInfo) : null}/>
            }
            <div className="separate-item"></div>
            <span className="action-item glyphicon glyphicon-remove"
                  onClick={() => onRemove ? onRemove(viewInfo) : null}/>
        </React.Fragment>
    );
};

