import * as React from "react";
import {inject, observer} from "mobx-react";
import Select from 'react-select';


@inject('viewsStore') @observer
export class SearchViews extends React.Component<any> {

    state: any;
    refs: any

    constructor(props: any) {
        super(props);
        this.state = {
            selectedView: null
        };
        props.viewsStore.getViewNames();
    }


    onViewNameChange = (selected: any) => {
        const {getAllViewInstances} = this.props.viewsStore;
        this.setState({
            selectedView: selected.value
        }, () => getAllViewInstances(selected.value));
    };

    componentDidMount() {
        document.body.addEventListener('keyup', this.searchOnEnter);
    };

    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.searchOnEnter);
    };

    searchOnEnter = (e: any) => {
        if (e.keyCode === 13) {
            this.startSearch();
        }
    };

    startSearch = () => {
        const {searchViews} = this.props.viewsStore;
        searchViews(this.refs.viewNameOrId.value);
    };

    render() {
        const {viewNames} = this.props.viewsStore;
        return (
            <div className="insert-entity-container">
                <div className="search-item">
                    <Select
                        options={viewNames.map((e: any) => {
                            return {
                                value: e.id,
                                label: e.name
                            };
                        })}
                        value={this.state.selectedView}
                        placeholder="Select view name..."
                        onChange={this.onViewNameChange}/>
                </div>
                <div className="search-item">
                    <input type="text" className="form-control"
                           ref="viewNameOrId"
                           placeholder="Select view name..."/>
                </div>
                <button type="button"
                        onClick={this.startSearch}
                        className="btn btn-success">
                    <span>Search</span>
                </button>
            </div>);
    }
}