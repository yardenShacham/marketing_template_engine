import * as React from 'react';
import {Route} from "react-router";
import {EditView} from './edit-view.component';

export const route = <Route path="/views/:id" render={(props) => <EditView {...props} />}/>
