import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getSourceCodeAction } from '../store/reduxstore';

const Button4Source = styled.button`
  padding: 10px;
  background-color: darkgrey;
  font-size: 14px;
  color: darkred;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const SourceButton = ({text, path}) => {
    const dispatch = useDispatch();
    const buttonClick = (e)=>{console.log("path",path);dispatch(getSourceCodeAction(path))};
    return <Button4Source data-testid="sourcebutton" onClick={buttonClick}>{text}</Button4Source>;
}