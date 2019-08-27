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
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="big-content">
        <Layout>
            <Header className="header-color" title="Zohra's Portfolio" scroll>
                <Navigation>
                  
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Zohra's Portfolio">
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
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
