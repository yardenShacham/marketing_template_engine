import * as React from "react";
import {inject, observer} from "mobx-react";
import Select from 'react-select';


@inject('viewsStore') @observer
export class EditView extends React.Component<any> {


    constructor(props: any) {
        super(props);

    }


    render() {
        return (
            <div className="edit-view-container">
                <h1>hi from edit view </h1>
            </div>);
    }
}