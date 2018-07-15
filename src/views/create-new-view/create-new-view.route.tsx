import * as React from 'react';
import {Route} from "react-router";
import {CreateNewView} from './create-new-view.component';

export const route = <Route path="/views/new"  render={(props) => <CreateNewView {...props} />}/>
