import * as React from 'react';
import {Route} from "react-router";
import {EditStaticViewInstance} from './edit-static-view-instance.component';

export const route = <Route exact path="/views:viewInstanceId/static" render={(props) => <EditStaticViewInstance {...props} />}/>
