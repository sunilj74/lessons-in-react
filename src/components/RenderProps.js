import * as React from 'react';
import styled from "styled-components";

const Panel = styled.div`
  margin: 10px;
  padding: 10px;
`;

const PanelInner = styled.div`
  height: 300px;
  width: 600px;
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
      <div>
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
    return (
      <div>
        <MouseTracker render={() => <PanelGreen/>} />
        <MouseTracker render={() => <PanelPink/>} />
      </div>
    );

};
