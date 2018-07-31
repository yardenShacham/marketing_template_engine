import * as React from "react";
import {inject, observer} from "mobx-react";
import {OkInput} from '../../../common/okInput';


@inject('viewsStore') @observer
export class SearchViewsSection extends React.Component<any> {

    state: any;
    refs: any

    constructor(props: any) {
        super(props);
        this.state = {
            showAddViewNameInput: false,
            newViewName: null
        };
    }


    onViewNameChange = (selected: any) => {
        const {updateSearchView} = this.props.viewsStore;
        updateSearchView(selected.value);
    };

    showAddNewViewInput = () => {
        this.setState({
            showAddViewNameInput: true
        })
    };

    addNewView = async () => {
        const {newViewName} = this.state;
        const {addNewView} = this.props.viewsStore;
        await addNewView(newViewName);
        this.setState({
            showAddViewNameInput: false,
            newViewName: ''
        });
    };

    render() {
        const {allViews} = this.props.viewsStore;
        const {showAddViewNameInput} = this.state;
        return (
            <div className="search-view-container">
                <div className="search-container">
                    <div className="search-item">
                        <input type="text" className="form-control"
                               placeholder="Select view name..."/>
                    </div>
                    <button type="button"
                            onClick={this.showAddNewViewInput}
                            className="btn btn-success">
                        <span>Add New View</span>
                    </button>
                </div>
                {
                    showAddViewNameInput &&
                    <div className="add-new-view-container">
                        <OkInput onChange={(value) => this.setState({newViewName: value})}
                                 onOk={this.addNewView}/>
                    </div>
                }

            </div>);
    }
}