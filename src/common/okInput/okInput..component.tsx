import * as React from "react";

export class OkInput extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    componentDidMount() {
        let {initValue} = this.props;
        this.setState({
            value: initValue
        });
    }

    render() {
        const {onChange, onOk} = this.props;
        const {value} = this.state;
        return (
            <div className="ok-input-container">
                <input type="text" className="form-control"
                       value={value}
                       onChange={(e: any) => {
                           this.setState({
                               value: e.target.value
                           }, onChange && onChange(e.target.value));
                       }}
                       placeholder="Select view name..."/>
                <span className="glyphicon glyphicon-ok okBtn"
                      onClick={() => onOk(value)}></span>
            </div>

        );
    }
}