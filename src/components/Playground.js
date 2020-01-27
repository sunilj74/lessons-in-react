import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HOC from './HOC';
import {RenderProps} from './RenderProps';

const Playground = (props: any) => {
    return (
        <>
            <Switch>
                <Route path="/hoc">
                    <HOC />
                </Route>
                <Route path="/renderprops">
                    <RenderProps />
                </Route>
            </Switch>
        </>
    );
}

export {Playground };
