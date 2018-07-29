import * as React from "react";
import {inject, observer} from "mobx-react";

@inject('viewsStore') @observer
export class EditStaticViewInstance extends React.Component<any> {


    constructor(props: any) {
        super(props);

    }


    render() {
        return (
            <div className="edit-view-container">
                <h1>hi from edit static view instance</h1>
            </div>);
    }
}