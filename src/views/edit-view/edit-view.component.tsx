import * as React from "react";
import {inject, observer} from "mobx-react";

@observer
export class EditView extends React.Component<any> {

    componentDidMount() {
    }

    render() {
        const params = this.props.match && this.props.match.params || {};
        const {id} = params;
        return (
            <div>
                <h1>Edit View {id}</h1>
            </div>);
    }
}