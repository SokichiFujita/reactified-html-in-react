import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import Content from './Content';

class SampleContainer extends Component {
  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navi title="Sample" style={{zIndex:1201, position: 'fixed', top: 0}} />
        <div style={{display: 'flex'}}>
          <Menu style={{width:200, paddingTop:72}} />
          <Content 
            title={this.state.sample.title} 
            subtitle={this.state.sample.subtitle}
            text={this.state.sample.text}
            style={{padding: 20, paddingTop: 72}}
          />
        </div>
      </div>
    );
  }
}

export default Container.create(SampleContainer);
