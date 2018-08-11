import * as React from "react";
import {inject, observer} from "mobx-react";
import {InstanceParams} from './instance-params';
import {EditPreview} from './edit-preview';

@inject('instanceContentStore') @observer
export class EditInstanceContent extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            instanceId: null
        }
    }

    componentDidMount() {
        const params = this.props.match && this.props.match.params || {};
        this.setState({
            instanceId: params.instanceId
        });
    }


    render() {
        return (
            <div className="edit-instance-content-container">
                {this.state.instanceId}
            </div>);

    }
}