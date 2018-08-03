import * as React from "react";

export const ViewActions = ({onRemove, appandHtmlTemplate, onEdit, openEditMode, viewInfo, isEditMode}) => {
    const _handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = (file) => {
            const {result} = file.target;
            appandHtmlTemplate({
                viewId: viewInfo.viewId,
                html: result
            });
        };

        reader.readAsText(file)
    };

    return (
        <React.Fragment>
            {
                isEditMode ? <span className="action-item glyphicon glyphicon-ok"
                                   onClick={() => onEdit ? onEdit(viewInfo) : null}/> :
                    <span className="action-item glyphicon glyphicon-edit"
                          onClick={() => openEditMode ? openEditMode(viewInfo) : null}/>
            }
            <div className="separate-item"></div>
            <input className="fileInput"
                   id="in"
                   type="file"
                   onChange={(e) => _handleImageChange(e)}/>
            <div className="action-item">
                <label className="fab fa-html5" htmlFor="in"
                       onClick={() => appandHtmlTemplate ? appandHtmlTemplate(viewInfo) : null}/>
            </div>
            <div className="separate-item"></div>
            <span className="action-item glyphicon glyphicon-remove"
                  onClick={() => onRemove ? onRemove(viewInfo) : null}/>
        </React.Fragment>
    );
};

