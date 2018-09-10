import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import Content from './Content';

class TopContainer extends Component {
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
        <div style={{display: 'flex'}}>
          <Menu style={{width:200}} />
          <Content 
            title={this.state.sample.title} 
            subtitle={this.state.sample.subtitle}
            text={this.state.sample.text}
            style={{width:'100%'}}
          />
        </div>
      </div>
    );
  }
}

export default Container.create(TopContainer);
