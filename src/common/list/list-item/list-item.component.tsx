import * as React from 'react'

export const ListItem = (props: any) => {
    const {detailsView, actionView} = props;
    return (
        <div className="list-item">
            <div className="details" style={{padding: '10px'}}>
                {detailsView}
            </div>
            <div className="actions">
                {actionView}
            </div>
        </div>);
};

/*
const a = <div>
    <span className="action-item glyphicon glyphicon-edit"
          onClick={() => onEdit ? onEdit(viewInfo) : null}>
    </span>
    <div className="separate-item"></div>
    <span className="action-item glyphicon glyphicon-remove"
          onClick={() => onRemove ? onRemove(viewInfo) : null}>
    </span>
</div>*/
