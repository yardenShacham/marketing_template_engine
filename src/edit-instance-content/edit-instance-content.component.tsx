import * as React from "react";
import {inject, observer} from "mobx-react";
import ReactHtmlParser from 'react-html-parser';
import {appInjector} from '../core/appInjector';
import {appServices} from "../consts/appServices";
import {loadIntractionableComponents} from './IntractionableHelper';

@inject('instanceContentStore') @observer
export class EditInstanceContent extends React.Component<any, any> {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        const {instanceContentStore} = this.props;
        const params = this.props.match && this.props.match.params || {};
        instanceContentStore.getInstanceHtmlContent(params.viewId, params.instanceId);

        appInjector.get(appServices.viewService).getViewStyles(params.viewId).then((viewStyles) => {
            appInjector.get(appServices.styleService).loadDynamicStyles(viewStyles, "viewStyles");
            setTimeout(loadIntractionableComponents, 500);
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