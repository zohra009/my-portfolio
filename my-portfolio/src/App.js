import React, { Component } from 'react';
import './App.css';
// import "react-mdl/extra/material.js";
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
                {/* <Navigation>
                  
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation> */}
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
