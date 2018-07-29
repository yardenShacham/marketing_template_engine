import * as React from 'react';
import {Route} from "react-router";
import {ViewList} from './view-list.component';

export const route = <Route exact path="/views" render={(props) => <ViewList {...props} />}/>
