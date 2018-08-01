import * as React from "react";

export class Input extends React.Component<any,any> {

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
        const {placeholder, onChange} = this.props;
        const {value} = this.state;
        return (
            <input type="text" className="form-control input"
                   value={value}
                   onChange={(e: any) => {
                       this.setState({
                           value: e.target.value
                       }, onChange(e.target.value));
                   }}
                   placeholder={placeholder}/>
        );
    }
}