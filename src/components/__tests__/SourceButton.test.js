import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom";
import renderer, {cleanup} from "react-test-renderer";
import { SourceButton } from '../SourceButton';

afterEach(()=>cleanup);

it("source button renders successfully", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<SourceButton text='test' />, div);
});

it("renders button correctly", ()=>{
    const { getByTestId } = render(<SourceButton text="TestButton" />);
    expect(getByTestId("sourcebutton")).toHaveTextContent("TestButton");
})

it("renders button correctly", () => {
  const { getByTestId } = render(<SourceButton text="AnotherTestButton" />);
  expect(getByTestId("sourcebutton")).toHaveTextContent("AnotherTestButton");
});

it("matches snapshot", ()=>{
    const tree = renderer.create(<SourceButton text="Snapshot"/>).toJSON();
    expect(tree).toMatchSnapshot();

});
