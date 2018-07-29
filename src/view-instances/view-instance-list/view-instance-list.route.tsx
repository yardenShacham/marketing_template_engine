import * as React from 'react';
import {Route} from "react-router";
import {ViewInstanceList} from './view-instance-list.component';

export const route = <Route exact path="/view-instances" render={(props) => <ViewInstanceList {...props} />}/>
