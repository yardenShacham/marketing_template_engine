import * as React from "react";
import {inject, observer} from "mobx-react";
import {SearchViewsSection} from './search-views-section';
import {List} from '../../common/list';
import {Loader} from '../../common/loader';
import {Input} from '../../common/input';
import {ViewActions} from './view-actions';
import {confirmAlert} from 'react-confirm-alert';


const ViewDetails = (props) => {
    const {viewInfo, isEditMode, onNameChange, isLoading} = props;
    return isLoading ? <Loader/> : isEditMode ?
        <Input initValue={viewInfo.name} onChange={(value) => onNameChange(viewInfo.viewId, value)}/> :
        <div className="details">
            <span className="viewName">{viewInfo.name}</span>
            <br/>
            <span className="totalInstances">Total Instances - {viewInfo.totalInstances || 0}</span>
            {
                viewInfo.hasHtmlTemplate && <div>
                    <span style={{fontSize: '30px'}} className="fab fa-html5"></span>
                </div>
            }
        </div>;
};

@inject('viewsStore') @observer
export class ViewList extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            isEditMode: {},
            isUpdating: {},
            updateViewsName: {}
        };
    }

    componentDidMount() {
        const {viewsStore} = this.props;
        viewsStore.getAllViews();
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
    openEditMode = ({viewId}) => {
        const newState = {
            isEditMode: this.getUpdateObject(viewId, "isEditMode", true),
            isUpdatingName: this.getUpdateObject(viewId, "isUpdatingName", false)
        };
        this.setState(newState);
    };

    getUpdateObject = (viewId, propName, newValue) =>
        Object.assign({}, this.state[propName], {
            [viewId]: newValue
        });

    updateViewName = async ({viewId}) => {
        const {updateViewsName} = this.state;
        const {viewsStore} = this.props;

        this.setState({
            isUpdating: this.getUpdateObject(viewId, "isUpdating", true)
        });
        await viewsStore.updateViewName(viewId, updateViewsName[viewId]);
        this.setState({
            isEditMode: this.getUpdateObject(viewId, "isUpdating", false),
            isUpdating: this.getUpdateObject(viewId, "isUpdatingName", false)
        });
    };

    appendHtmlTemplate = async ({viewId, html}) => {
        const {viewsStore} = this.props;
        this.setState({
            isUpdating: this.getUpdateObject(viewId, "isUpdating", true)
        });
        await viewsStore.appendHtmlTemplate(viewId, html);
        this.setState({
            isUpdating: this.getUpdateObject(viewId, "isUpdating", false)
        });
    };

    updateStateViewName = (viewId, value) => {
        this.setState({updateViewsName: Object.assign(this.state.updateViewsName, {[viewId]: value})})
    };

    render() {
        const {searchedViews, isLoading} = this.props.viewsStore;
        const {isEditMode, isUpdating} = this.state;
        return (
            <div style={{padding: '30px', width: '60%'}}>
                <SearchViewsSection/>
                {
                    isLoading ? <Loader/> :
                        searchedViews && searchedViews.length > 0 ?
                            <List data={searchedViews}
                                  getDetailsView={(item) => <ViewDetails
                                      isEditMode={isEditMode[item.viewId]}
                                      isLoading={isUpdating[item.viewId]}
                                      onNameChange={this.updateStateViewName}
                                      viewInfo={item}/>}
                                  getActionView={
                                      (viewInfo) => <ViewActions viewInfo={viewInfo}
                                                                 onRemove={this.tryRemoveView}
                                                                 isEditMode={isEditMode[viewInfo.viewId]}
                                                                 openEditMode={this.openEditMode}
                                                                 onEdit={this.updateViewName}
                                                                 appandHtmlTemplate={this.appendHtmlTemplate}/>
                                  }/> :
                            <div className="noResult">No Result</div>
                }
            </div>
        );
    }
}