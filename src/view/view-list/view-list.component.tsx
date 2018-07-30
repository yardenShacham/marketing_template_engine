import * as React from "react";
import {inject, observer} from "mobx-react";
import {SearchViewsSection} from './search-views-section';
import {List} from '../../common/list';
import {confirmAlert} from 'react-confirm-alert';

const ViewDetails = (props) => {
    return props.name;
};

const ViewActions = (props) => {
    const {onEdit, onRemove, viewInfo} = props;
    return (
        <React.Fragment>
         <span className="action-item glyphicon glyphicon-edit"
               onClick={() => onEdit ? onEdit(viewInfo) : null}>
    </span>
            <div className="separate-item"></div>
            <span className="action-item glyphicon glyphicon-remove"
                  onClick={() => onRemove ? onRemove(viewInfo) : null}>
    </span>
        </React.Fragment>
    )
};

@inject('viewsStore') @observer
export class ViewList extends React.Component<any> {

    constructor(props) {
        super(props);
    }

    tryRemoveView = ({name, viewId}) => {
        const {removeView} = this.props.viewsStore;
        confirmAlert({
            title: `Remove ${name} View`,
            message: 'Are you sure you want to remove this view ?',
            confirmLabel: 'Ok',
            cancelLabel: 'Cancel',
            onConfirm: () => removeView(viewId),
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
                      getDetailsView={(item) => <ViewDetails {...item}/>}
                      getActionView={
                          (viewInfo) => <ViewActions viewInfo={viewInfo}
                                                     onRemove={this.tryRemoveView}
                                                     onEdit={this.moveToEditView}/>
                      }/>
            </div>);
    }
}