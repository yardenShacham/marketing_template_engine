import * as React from "react";
import {inject, observer} from "mobx-react";
import {getNewIdState} from '../../utils/react-state-managment';
import {SearchViewsSection} from './search-views-section';
import {List} from '../../common/list';
import {Loader} from '../../common/loader';
import {Input} from '../../common/input';
import {ViewActions} from './view-actions';
import {confirmAlert} from 'react-confirm-alert';


const ViewDetails = (props) => {
    const {viewInfo, isEditMode, onNameChange, isLoading} = props;
    return isLoading ? <Loader/> : isEditMode ?
        <Input initValue={viewInfo.name} onChange={(value) => onNameChange && onNameChange(viewInfo.viewId, value)}/> :
        <div className="details">
            <span className="viewName">{viewInfo.name}</span>
            <br/>
            <span className="totalInstances">Total Instances - {viewInfo.totalInstances || 0}</span>
            {
                (viewInfo.hasHtmlTemplate || viewInfo.hasStyles || viewInfo.hasJs) && <div>
                    {viewInfo.hasHtmlTemplate &&
                    <span style={{fontSize: '30px', marginRight: '15px'}} className="fab fa-html5"></span>}
                    {viewInfo.hasStyles &&
                    <span style={{fontSize: '30px', marginRight: '15px'}} className="fab fa-css3"></span>}
                    {viewInfo.hasJs&&
                    <span style={{fontSize: '30px', marginRight: '15px'}} className="fab fa-js"></span>}
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
            isEditMode: getNewIdState(this.state, viewId, "isEditMode", true),
            isUpdatingName: getNewIdState(this.state, viewId, "isUpdatingName", false)
        };
        this.setState(newState);
    };


    updateViewName = async ({viewId}) => {
        const {updateViewsName} = this.state;
        const {viewsStore} = this.props;

        this.setState({
            isUpdating: getNewIdState(this.state, viewId, "isUpdating", true)
        });
        await viewsStore.updateViewName(viewId, updateViewsName[viewId]);
        this.setState({
            isEditMode: getNewIdState(this.state, viewId, "isEditMode", false),
            isUpdating: getNewIdState(this.state, viewId, "isUpdating", false)
        });
    };

    appendHtmlTemplate = async ({viewId, html}) => {
        const {viewsStore} = this.props;
        this.setState({
            isUpdating: getNewIdState(this.state, viewId, "isUpdating", true)
        });
        await viewsStore.appendHtmlTemplate(viewId, html);
        this.setState({
            isUpdating: getNewIdState(this.state, viewId, "isUpdating", false)
        });
    };

    appendStyles = async ({viewId, styles}) => {
        const {viewsStore} = this.props;
        this.setState({
            isUpdating: getNewIdState(this.state, viewId, "isUpdating", true)
        });
        await viewsStore.appendStyles(viewId, styles);
        this.setState({
            isUpdating: getNewIdState(this.state, viewId, "isUpdating", false)
        });
    };

    appendJs = async ({viewId, js}) => {
        const {viewsStore} = this.props;
        this.setState({
            isUpdating: getNewIdState(this.state, viewId, "isUpdating", true)
        });
        await viewsStore.appendJs(viewId, js);
        this.setState({
            isUpdating: getNewIdState(this.state, viewId, "isUpdating", false)
        });
    };


    updateStateViewName = (viewId, value) => {
        this.setState({updateViewsName: getNewIdState(this.state, viewId, "updateViewsName", value)})
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
                                                                 onAppendStyles={this.appendStyles}
                                                                 onAppendJs={this.appendJs}
                                                                 onAppendHtmlTemplate={this.appendHtmlTemplate}/>
                                  }/> :
                            <div className="noResult">No Result</div>
                }
            </div>
        );
    }
}