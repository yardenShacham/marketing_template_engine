import * as React from 'react';
import {Route} from "react-router";
import {EditInstanceContent} from './edit-instance-content.component';

export const route = <Route path="/view-instances/:viewId/:instanceId"
                            render={(props) => <EditInstanceContent {...props} />}/>
