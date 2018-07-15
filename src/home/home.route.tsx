import * as React from 'react';
import {Route} from "react-router";
import {Home} from './home.component';

export const route = <Route path="/home" render={(props) => <Home {...props} />}/>
