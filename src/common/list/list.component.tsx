import * as React from "react";
import {ListItem} from './list-item';

export class List extends React.Component<any> {

    componentDidMount() {
    }

    render() {
        const {data, getDetailsView, getActionView} = this.props;
        return (
            <div className="list-container">
                {
                    data ? data.map((item: any, i: number) =>
                        <ListItem key={i}
                                  detailsView={getDetailsView(item)}
                                  actionView={getActionView(item)}/>
                    ) : null
                }
            </div>);
    }
}