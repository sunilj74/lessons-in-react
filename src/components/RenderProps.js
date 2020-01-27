import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import { getSourceCodeAction } from '../store/reduxstore';

const Panel = styled.div`
  width: 100%;
  margin: 10px;
  padding: 10px;
`;

const PanelInner = styled.div`
  height: 100px;
  width: 100%;
  border-top-style: solid;
  border-top-width: 3px;
`;

const PanelGreen = styled(PanelInner)`
  border-top-color: darkgreen;
`;

const PanelPink = styled(PanelInner)`
  border-top-color: darkred;
`;

export const MouseTracker = (props) => {
  const [posX, setPosX] = React.useState(0);
  const [posY, setPosY] = React.useState(0);
  return (
    <Panel>
      <div className='stretched'>
        <span>X: {posX}</span>&nbsp;
                <span>Y: {posY}</span>
      </div>
      <div onMouseMove={(e)=>{setPosX(e.clientX); setPosY(e.clientY); }}>
        {props.render({ posX: posX, posY: posY })}
      </div>
    </Panel>
  );
};

export const  RenderProps = () => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
      dispatch(getSourceCodeAction('src/components/RenderProps.js'))

    }, []);
    return (
      <div className='stretched'>
        <MouseTracker render={() => <PanelGreen/>} />
        <MouseTracker render={() => <PanelPink/>} />
      </div>
    );
};
