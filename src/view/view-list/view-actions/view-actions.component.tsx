import * as React from "react";

const UploadFile = ({onChange, className, icon}) => <React.Fragment>
    <input className={`fileInput ${className}`}
           id="htmlUpload"
           type="file"
           onChange={(e) => onChange(e)}/>
    <div className="action-item">
        <label className={`fab fa-${icon}`} htmlFor="htmlUpload"/>
    </div>
</React.Fragment>

export const ViewActions = ({onRemove, onAppendHtmlTemplate, onAppendStyles, onAppendJs, onEdit, openEditMode, viewInfo, isEditMode}) => {
    const uploadFile = (e) => {
        e.preventDefault();
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = (file) => {
                const {result} = file.target;
                if (result)
                    resolve(result);
                else
                    reject("file is not valid");
            };
            reader.readAsText(file)
        })
    };
    const uploadHtmlTemplate = (e) => {
        uploadFile(e).then((result) => {
            onAppendHtmlTemplate({
                viewId: viewInfo.viewId,
                html: result
            });
        });
    };
    const uploadStyles = (e) => {
        uploadFile(e).then((result) => {
            onAppendStyles({
                viewId: viewInfo.viewId,
                styles: result
            });
        });
    };

    const uploadJs = (e) => {
        uploadFile(e).then((result) => {
            onAppendJs({
                viewId: viewInfo.viewId,
                js: result
            });
        });
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
            <UploadFile onChange={uploadHtmlTemplate} icon="html5" className="html"/>
            <div className="separate-item"></div>
            <UploadFile onChange={uploadStyles} icon="css3" className="styles"/>
            <div className="separate-item"></div>
            <UploadFile onChange={uploadJs} icon="js" className="js"/>
            <span className="action-item glyphicon glyphicon-remove"
                  onClick={() => onRemove ? onRemove(viewInfo) : null}/>
        </React.Fragment>
    );
};

