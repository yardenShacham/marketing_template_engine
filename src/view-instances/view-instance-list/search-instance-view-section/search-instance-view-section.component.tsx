import * as React from "react";
import {inject, observer} from "mobx-react";
import Select from 'react-select';
import {Input} from '../../../common/input';
import {OkInput} from '../../../common/okInput';


@inject('viewInstancesStore') @observer
export class SearchInstanceViewSection extends React.Component<any> {

    state: any;
    refs: any;

    constructor(props: any) {
        super(props);
        this.state = {
            newInstanceName: ""
        };
    }

    onSelectedViewChange = ({value}) => {
        const {selectView} = this.props.viewInstancesStore;
        selectView(value);
    };

    showAddNewViewInput = () => {
        this.setState({
            showAddViewNameInput: true
        })
    };

    searchViewInstances = (value) => {
        const {searchViewInstances} = this.props.viewInstancesStore;
        searchViewInstances(value);
    };

    createNewInstance = async () => {
        const {newInstanceName, selectedView} = this.state;
        const {createNewInstance} = this.props.viewInstancesStore;
        await createNewInstance(selectedView, newInstanceName);
        this.setState({
            showAddViewNameInput: false,
            newViewName: ''
        });
    };

    render() {
        const {viewNames, selectedView} = this.props.viewInstancesStore;
        const {showAddViewNameInput} = this.state;
        return (
            <div className="search-view-container">
                <div className="search-container">
                    <div className="search-item">
                        <Select
                            options={viewNames.map((e: any) => {
                                return {
                                    value: e.id,
                                    label: e.name
                                };
                            })}
                            value={selectedView}
                            placeholder="Select view name..."
                            onChange={this.onSelectedViewChange}/>
                    </div>
                    <div className="search-item">
                        <Input type="text" placeholder="Select view name..."
                               onChange={this.searchViewInstances}/>
                    </div>
                    <button type="button"
                            onClick={this.showAddNewViewInput}
                            className="btn btn-success">
                        <span>Add Instance</span>
                    </button>
                </div>
                {
                    showAddViewNameInput &&
                    <div className="add-new-view-container">
                        <OkInput onChange={(value) => this.setState({newInstanceName: value})}
                                 onOk={this.createNewInstance}/>
                    </div>
                }
            </div>);
    }
}