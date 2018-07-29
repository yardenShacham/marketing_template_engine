import * as React from "react";
import {inject, observer} from "mobx-react";
import {SearchViewsSection} from './search-views-section';
import {List} from '../../common/list';
import {confirmAlert} from 'react-confirm-alert';

const ViewDetails = (props) => {
    const {name} = props;
    return <h1>{name}</h1>;
};

const ViewActions = (props) => {
    const {onEdit, onRemove, item} = props;
    return (
        <div>
         <span className="action-item glyphicon glyphicon-edit"
               onClick={() => onEdit ? onEdit(item) : null}>
    </span>
            <div className="separate-item"></div>
            <span className="action-item glyphicon glyphicon-remove"
                  onClick={() => onRemove ? onRemove(item) : null}>
    </span>
        </div>
    )
};

@inject('viewsStore') @observer
export class ViewList extends React.Component<any> {

    constructor(props) {
        super(props);
    }

    tryRemoveView = (viewInfo: any) => {
        const {removeViewInstance} = this.props.viewsStore;
        confirmAlert({
            title: `Remove ${viewInfo.name} View`,
            message: 'Are you sure you want to remove this view ?',
            confirmLabel: 'Ok',
            cancelLabel: 'Cancel',
            onConfirm: () => removeViewInstance(viewInfo.id),
        });
    };

    moveToEditView = ({viewId}) => {
        this.props.history.push(`/views/${viewId}`);
    };

    render() {
        const {searchedViews} = this.props.viewsStore;
        return (
            <div style={{padding: '30px', width: '60%'}}>
                <SearchViewsSection/>
                <List data={searchedViews}
                      getDetailsView={(item) => <ViewDetails item={item}/>}
                      getActionView={
                          (item) => <ViewActions item={item}
                                                 onRemove={this.tryRemoveView}
                                                 onEdit={this.moveToEditView}/>
                      }/>
            </div>);
    }
}