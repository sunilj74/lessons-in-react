import React from 'react';
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';
import { Playground } from "./Playground";
import { MENUDATA } from '../data/menudata';
import SourceCode from './SourceCode';
import { SourceButton } from './SourceButton';


const UL = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;

const LI = styled.li`
  padding: 10px;
  font-size: larger;
  background-color:#888;
  border-bottom: 1px solid #aaa;
  margin-right: 5px;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: black;
`;

export const Menu = ({ menuItems }) => {
  const items = menuItems.map((item, i) => {
    return (
      <LI key={i}>
        <Anchor to={item.path} >{item.text}</Anchor>
      </LI>
    );
  });

  return (
    <UL>{items}</UL>
  )

};

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;
    height: 100%;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: top;
  align-content: start;
  background-color: #999;
  padding: 10px 5px;
`;

const Panel = styled.div`
  display: flex;
  flex: 2;
  background-color: #eee;
  padding: 0px 20px; 
`;


const Source = styled.div`
  display: flex;
  flex: 3;
  background-color: #aaa;
  padding: 0px 20px; 
`;


class Layout extends React.Component<{}> {
  render() {
      return (
        <LayoutContainer>
          <SideBar>
            <Menu menuItems={MENUDATA}></Menu>
            <SourceButton text="Redux" path="src/store/reduxstore.js" />
            <SourceButton text="Redux-Component" path="src/components/SourceCode.js" />
            <SourceButton text="Jest" path="src/components/__tests__/SourceButton.test.js" />
            <Playground />
          </SideBar>
          <Source>
            <SourceCode />
          </Source>
        </LayoutContainer>
      );

  }

}
export { Layout }
