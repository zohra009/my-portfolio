import React, { Component } from 'react';
import './App.css';
// import "react-mdl/extra/material.js";
import {
    Drawer,
    Navigation,
    Header,
    Layout,
    Content
  } from "react-mdl";


class App extends Component {

  render() {
    return (
      <div className="demo-big-content">
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
                <div className="page-content" />
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
