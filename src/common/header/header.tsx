import * as React from 'react';
import {Navbar} from './navbar/navbar.component';
import {appInjector} from '../../core/appInjector';
import {inject, observer} from 'mobx-react';
import {NAVBAR_BRANDS} from './navbar-configuration';

@inject('appStore') @observer
export class Header extends React.Component<any> {
    props: any

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Navbar brands={NAVBAR_BRANDS} userDetails="user@domain.com"/>
        );
    }
}

