import * as React from "react";
import {inject, observer} from "mobx-react";
import {SearchViews} from './search-views';
import {ListViews} from './list-views';
import {confirmAlert} from 'react-confirm-alert';

@inject('viewsStore') @observer
export class ViewList extends React.Component<any> {

    tryRemoveViewInstance = (viewInstanceInfo: any) => {
        const {removeViewInstance} = this.props.viewsStore;
        confirmAlert({
            title: `Remove ${viewInstanceInfo.name} View`,
            message: 'Are you sure you want to remove this view ?',
            confirmLabel: 'Ok',
            cancelLabel: 'Cancel',
            onConfirm: () => removeViewInstance(viewInstanceInfo.id),
        });
    };

    moveToEditView = (viewInstanceInfo: any) => {
        this.props.history.push(`/views/${viewInstanceInfo.id}`);
    };

    render() {
        const {searchedViews} = this.props.viewsStore;
        return (
            <div style={{padding: '30px', width: '60%'}}>
                <SearchViews/>
                <ListViews views={searchedViews}
                           onViewEdit={this.moveToEditView}
                           onViewRemoved={this.tryRemoveViewInstance}/>
            </div>);
    }
}