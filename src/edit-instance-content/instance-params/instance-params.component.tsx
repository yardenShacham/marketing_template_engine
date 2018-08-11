import * as React from "react";
import {capitalize} from 'lodash';

interface ComponentState {
    fields: any
}

interface ComponentProps {
    viewInfo: any
}

export class InstanceParams extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }
    }

    getViewFields = () => {
        const {viewInfo} = this.props;
        if (viewInfo && viewInfo.content) {
            return Object.keys(viewInfo.content).map((field, i) =>
                <input type="text"
                       key={i}
                       className="form-control"
                       value={this.state.fields[field]}
                       onChange={(newVal: any) => {
                           this.setState({
                               fields: Object.assign(this.state.fields, {
                                   [field]: newVal.target.value
                               })
                           })
                       }}
                       placeholder={`Select ${capitalize(field)}...`}/>);
        }
        return null;
    }

    render() {
        const {save} = this.props;
        const {fields} = this.state;
        return (
            <div className="view-static-fields-container">
                {this.getViewFields()}
                <input type="text" className="form-control"
                       ref="viewNameOrId"
                       placeholder="Select view instance name..."/>
                <input type="text" className="form-control"
                       ref="viewNameOrId"
                       placeholder="add view style..."/>
                <input type="text" className="form-control"
                       ref="viewNameOrId"
                       placeholder="add view behavior..."/>
                <button type="button"
                        onClick={() => save(fields)}
                        className="btn btn-success">
                    <span>Save</span>
                </button>
            </div>
        );
    }
}