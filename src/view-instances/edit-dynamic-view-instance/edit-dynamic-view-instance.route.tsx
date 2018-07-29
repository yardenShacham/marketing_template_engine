import * as React from 'react';
import {Route} from "react-router";
import {EditDynamicViewInstance} from './edit-dynamic-view-instance.component';

export const route = <Route path="/view-instances/:viewInstanceId" render={(props) => <EditDynamicViewInstance {...props} />}/>
