import * as React from 'react';
import {Route} from "react-router";
import {EditView} from './edit-view.component';

export const route = <Route exact path="/views:viewId" render={(props) => <EditView {...props} />}/>
