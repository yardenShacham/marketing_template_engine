import * as React from "react";
import {inject, observer} from "mobx-react";
import ReactHtmlParser from 'react-html-parser';
import {appInjector} from '../core/appInjector';
import {appServices} from "../consts/appServices";

@inject('instanceContentStore', 'viewInstancesStore') @observer
export class EditInstanceContent extends React.Component<any, any> {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        const {instanceContentStore, viewInstancesStore} = this.props;
        const params = this.props.match && this.props.match.params || {};
        instanceContentStore.getInstanceHtmlContent(viewInstancesStore.selectedView, params.instanceId);
        appInjector.get(appServices.viewService).getViewStyles(viewInstancesStore.selectedView).then((viewStyles) => {
            appInjector.get(appServices.styleService).loadDynamicStyles(viewStyles, "viewStyles");
        });
    }


    render() {
        const {instanceHtmlContent} = this.props.instanceContentStore;
        return (
            <div className="edit-instance-content-container">
                {instanceHtmlContent && ReactHtmlParser(instanceHtmlContent)}
            </div>);

    }
}