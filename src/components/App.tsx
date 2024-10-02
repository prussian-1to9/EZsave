import React from 'react';
import styled from 'styled-components'
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const StyledHeader = styled(Header)`
  text-align: center;
  color: #fff;
  height: 64px;
  padding-inline: 48px;
  line-height: 64px;
  background-color: #4096ff;
`;
const StyledContent = styled(Content)`
  text-align: center;
  min-height: 120px;
  line-height: 120px;
  color: #fff;
  background-color: #0958d9;
`;

const StyledSider = styled(Sider)`
  text-align: center;
  line-height: 120px;
  color: #fff;
  background-color: #1677ff;
  width: 25%;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  color: #fff;
  background-color: #4096ff;
`;

const StyledLayout = styled(Layout)`
  border-radius: 8px;
  overflow: hidden;
  width: calc(50% - 8px);
  max-width: calc(50% - 8px);
`;

const App: React.FC = () => (
  <Flex gap="middle" wrap>
    <StyledLayout>
      <StyledHeader>Header</StyledHeader>
      <StyledContent>Content</StyledContent>
      <StyledFooter>Footer</StyledFooter>
    </StyledLayout>

    <StyledLayout>
      <StyledHeader>Header</StyledHeader>
      <Layout>
        <StyledSider>
          Sider
        </StyledSider>
        <StyledContent>Content</StyledContent>
      </Layout>
      <StyledFooter>Footer</StyledFooter>
    </StyledLayout>

    <StyledLayout>
      <StyledHeader>Header</StyledHeader>
      <Layout>
        <StyledContent>Content</StyledContent>
        <StyledSider>
          Sider
        </StyledSider>
      </Layout>
      <StyledFooter>Footer</StyledFooter>
    </StyledLayout>

    <StyledLayout>
      <StyledSider>
        Sider
      </StyledSider>
      <Layout>
        <StyledHeader>Header</StyledHeader>
        <StyledContent>Content</StyledContent>
        <StyledFooter>Footer</StyledFooter>
      </Layout>
    </StyledLayout>
  </Flex>
);

export default App;