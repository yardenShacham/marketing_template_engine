import * as React from "react";
import {inject, observer} from "mobx-react";
import {getNewIdState, getNewEditModeState} from '../../utils/react-state-managment';
import {SearchInstanceViewSection} from './search-instance-view-section';
import {List} from '../../common/list';
import {Loader} from '../../common/loader';
import {OkInput} from '../../common/okInput';
import {confirmAlert} from 'react-confirm-alert';
import {asFlat} from "mobx";

const ViewInstanceDetails = (props) => {
    const {instance, isEditMode, openEditMode, onUpdateName, onUpdateRoute, isLoading} = props;
    const {viewInstanceId, name, route, styles, js} = instance;
    return isLoading ? <Loader/> :

        <React.Fragment>
            {
                isEditMode && isEditMode.name ? <OkInput initValue={name}
                                                         onOk={(newInstanceName) => onUpdateName && onUpdateName({
                                                             viewInstanceId,
                                                             newInstanceName
                                                         })}/> :
                    <React.Fragment>
                        <span className="viewName">{name}</span>
                        <span className="edit-action glyphicon glyphicon-edit"
                              onClick={() => openEditMode ? openEditMode(instance, "name") : null}/>
                    </React.Fragment>
            }
            <br/>
            {
                isEditMode && isEditMode.route ? <OkInput initValue={route}
                                                          onOk={(newRoute) => onUpdateRoute && onUpdateRoute({
                                                              viewInstanceId,
                                                              newRoute
                                                          })}/> :
                    <React.Fragment>
                        <span className="totalInstances">Route - {route}</span>
                        <span className="edit-action glyphicon glyphicon-globe"
                              onClick={() => openEditMode ? openEditMode(instance, "route") : null}/>
                    </React.Fragment>
            }
            {
                (js || styles) &&
                <div className="">
                    {styles && <span style={{fontSize: '30px'}} className="fab fa-css3"></span>}
                    {js && <span style={{fontSize: '30px'}} className="fab fa-js"></span>}
                </div>
            }
        </React.Fragment>;
};


const ViewInstanceActions = (props) => {
    const {onEditDynamic, onRemove, openUploadModal, instance} = props;
    return (
        <React.Fragment>
            <span title="update or add js" className="action-item fab fa-js"
                  onClick={() => openUploadModal ? openUploadModal(instance, {isJs: true}) : null}/>
            <div className="separate-item"></div>
            <span title="update or add css" className="action-item fab fa-css3"
                  onClick={() => openUploadModal ? openUploadModal(instance, {isCss: true}) : null}/>
            <div className="separate-item"></div>
            <span title="Edit Instance Content" className="action-item glyphicon glyphicon-edit"
                  onClick={() => onEditDynamic ? onEditDynamic(instance) : null}/>
            <div className="separate-item"></div>
            <span title="remove instance" className="action-item glyphicon glyphicon-remove"
                  onClick={() => onRemove ? onRemove(instance) : null}/>
        </React.Fragment>
    )
};

@inject('viewInstancesStore') @observer
export class ViewInstanceList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isEditMode: {name: false, route: false},
            isUpdating: {}
        };
    }

    tryRemoveViewInstance = ({name, viewInstanceId}) => {
        const {viewInstancesStore} = this.props;
        confirmAlert({
            title: `Remove ${name} View`,
            message: 'Are you sure you want to remove this view ?',
            confirmLabel: 'Ok',
            cancelLabel: 'Cancel',
            onConfirm: () => viewInstancesStore.removeViewInstance(viewInstanceId),
        });
    };

    moveToEditViewInstance = ({viewInstanceId}) => {
        this.props.history.push(`/view-instances/${viewInstanceId}`);
    };

    openEditMode = ({viewInstanceId}, propName) => {
        const newState = {
            isEditMode: getNewEditModeState(this.state, viewInstanceId, propName, true),
            isUpdating: getNewIdState(this.state, viewInstanceId, "isUpdating", false)
        };
        this.setState(newState);
    };

    openUploadModal = ({viewInstanceId}, {isJs, isCss}) => {
        if (isJs) {

        }
        else if (isCss) {

        }
    };

    updateRoute = async ({viewInstanceId, newRoute}) => {
        const {viewInstancesStore} = this.props;

        this.setState({
            isUpdating: getNewIdState(this.state, viewInstanceId, "isUpdating", true)
        });
        await viewInstancesStore.updateRoute(viewInstanceId, newRoute);
        this.setState({
            isEditMode: getNewIdState(this.state, viewInstanceId, "route", false),
            isUpdating: getNewIdState(this.state, viewInstanceId, "isUpdating", false)
        });
    };

    updateViewInstanceName = async ({viewInstanceId, newInstanceName}, propName) => {
        const {viewInstancesStore} = this.props;

        this.setState({
            isUpdating: getNewIdState(this.state, viewInstanceId, "isUpdating", true)
        });
        await viewInstancesStore.updateInstanceName(viewInstanceId, newInstanceName);
        this.setState({
            isEditMode: getNewIdState(this.state, viewInstanceId, propName, false),
            isUpdating: getNewIdState(this.state, viewInstanceId, "isUpdating", false)
        });
    };

    async componentDidMount() {
        const {viewInstancesStore} = this.props;
        await viewInstancesStore.getViewNames();
        viewInstancesStore.selectView();
    }

    render() {
        const {searchedViewInstances, isLoading} = this.props.viewInstancesStore;
        const {isEditMode, isUpdating} = this.state;
        return (
            <div style={{padding: '30px', width: '60%'}}>
                <SearchInstanceViewSection/>
                {
                    isLoading ? <Loader/> :
                        searchedViewInstances && searchedViewInstances.length > 0 ?
                            <List data={searchedViewInstances}
                                  getDetailsView={(instance) => <ViewInstanceDetails
                                      isLoading={isUpdating[instance.viewInstanceId]}
                                      isEditMode={isEditMode[instance.viewInstanceId]}
                                      openEditMode={this.openEditMode}
                                      onUpdateName={this.updateViewInstanceName}
                                      onUpdateRoute={this.updateRoute}
                                      instance={instance}/>}
                                  getActionView={
                                      (instance) => <ViewInstanceActions
                                          instance={instance}
                                          onEditDynamic={this.moveToEditViewInstance}
                                          openUploadModal={this.openUploadModal}
                                          onRemove={this.tryRemoveViewInstance}
                                      />
                                  }/> : <div className="noResult">No Result</div>
                }
            </div>
        );
    }
}