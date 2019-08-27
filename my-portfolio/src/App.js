import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import {
    Navigation,
    Header,
    Drawer,
    Layout,
    Content
  } from "react-mdl";


class App extends Component {

  render() {
    return (
      <div className="big-content">
        <Layout>
            <Header title="Hello World" scroll>
                <Navigation>
                  
                    <a href="/">About Me</a>
                    <a href="/">Landing</a>
                    <a href="/">Resume</a>
                    <a href="/">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                
                    <a href="/">About Me</a>
                    <a href="/">Landing</a>
                    <a href="/">Resume</a>
                    <a href="/">Link</a>
                </Navigation>
            </Drawer>
            <Content>
              <div className="content" />
              <Main />
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
