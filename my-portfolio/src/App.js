import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import * as ReactMDL from 'react-mdl';


class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="big-content">
        <Layout>
            <Header title="Hello World" scroll>
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="content" />
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
