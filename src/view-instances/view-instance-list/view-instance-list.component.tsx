import * as React from "react";
import {inject, observer} from "mobx-react";
import {SearchInstanceViewSection} from './search-instance-view-section';
import {List} from '../../common/list';
import {confirmAlert} from 'react-confirm-alert';

const ViewInstanceDetails = ({name}) => {
    return name;
};

const ViewInstanceActions = (props) => {
    const {onEdit, onEditStatic, onRemove, item} = props;
    return (
        <div>
         <span className="action-item glyphicon glyphicon-preview"
               onClick={() => onEdit ? onEdit(item) : null}>
         </span>
            <div className="separate-item"></div>
            <span className="action-item glyphicon glyphicon-edit"
                  onClick={() => onEditStatic ? onEditStatic(item) : null}>
            </span>
            <div className="separate-item"></div>
            <span className="action-item glyphicon glyphicon-remove"
                  onClick={() => onRemove ? onRemove(item) : null}>
            </span>
        </div>
    )
};

@inject('viewInstancesStore') @observer
export class ViewInstanceList extends React.Component<any> {

    constructor(props: any) {
        super(props);
        const {viewInstancesStore} = this.props;

    }

    tryRemoveViewInstance = ({name, viewInstanceId}) => {
        const {removeViewInstance} = this.props.viewsStore;
        confirmAlert({
            title: `Remove ${name} View`,
            message: 'Are you sure you want to remove this view ?',
            confirmLabel: 'Ok',
            cancelLabel: 'Cancel',
            onConfirm: () => removeViewInstance(viewInstanceId),
        });
    };

    moveToEditViewInstance = ({viewInstanceId}) => {
        this.props.history.push(`/view-instances/${viewInstanceId}`);
    };

    moveToStaticEditViewInstance = ({viewInstanceId}) => {
        this.props.history.push(`/view-instances/${viewInstanceId}`);
    };

    render() {
        const {searchedViewInstances} = this.props.viewInstancesStore;
        return (
            <div style={{padding: '30px', width: '60%'}}>
                <SearchInstanceViewSection/>
                <List data={searchedViewInstances}
                      getDetailsView={(item) => <ViewInstanceDetails item={item}/>}
                      getActionView={
                          (item) => <ViewInstanceActions item={item}
                                                         onRemove={this.tryRemoveViewInstance}
                                                         onEdit={this.moveToEditViewInstance}
                                                         onEditStatic={this.moveToStaticEditViewInstance}/>
                      }/>
            </div>
        );
    }
}