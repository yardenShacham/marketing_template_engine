import * as React from "react";
import {inject, observer} from "mobx-react";
import {EditViewStaticFields} from './view-static-fields';
import {EditPreview} from './edit-preview';

@inject('viewsStore') @observer
export class EditView extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            currentViewInstanceId: null
        }
    }

    componentDidMount() {
        const params = this.props.match && this.props.match.params || {}
        const {getViewInstanceId, getViewTemplate} = this.props.viewsStore;
        getViewInstanceId(params.id);
        getViewTemplate();
        this.setState({
            currentViewInstanceId: params.id
        });
    }

    onSave = (fields) => {
        const {updateViewInstance} = this.props.viewsStore;
        const {currentViewInstanceId} = this.state;
        updateViewInstance(currentViewInstanceId, fields);
    };

    render() {
        const {currentViewInstance, currentViewTemplate} = this.props.viewsStore;
        return (
            <div className="edit-view-container">
                <h1 className="title">Edit View</h1>
                <div className="view-worksapce-container">
                    <EditViewStaticFields save={this.onSave} viewInfo={currentViewInstance}/>
                    <EditPreview viewTemplate={currentViewTemplate} viewInfo={currentViewInstance}/>
                </div>
            </div>);

    }
}