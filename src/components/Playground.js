import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HOC from './HOC';
import {RenderProps} from './RenderProps';
import { MyForm } from './MyForm';
import { RefField } from './RefField';

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
          <Route path="/form">
            <MyForm />
          </Route>
          <Route path="/reffield">
            <RefField />
          </Route>
        </Switch>
      </>
    );
}

export {Playground };
