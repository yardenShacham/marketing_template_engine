import * as React from "react";
import {inject, observer} from "mobx-react";

@observer
export class Home extends React.Component<any> {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Welcome to Marketing Template Cms</h1>
            </div>);
    }
}