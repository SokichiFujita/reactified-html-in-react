import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Button from 'material-ui/Button';
import SampleActionCreator from '../actions/SampleActionCreators'
import axios from 'axios';
import { Parser } from 'html-to-react'
import convert from 'htmr'
import Children from 'react-children-utilities';

class Content extends Component {
  handleClick = (e) => {
    SampleActionCreator.action002();
  }

  state = {
    page: null
  }

  componentDidMount () {
    const parser = new Parser()
    const res = axios.get('/hn.html').then(x => {
      const data_htmr = convert(x.data);
      const filtered_htmr = Children.deepMap(data_htmr, x => {
        if ( typeof x === "object" 
          && ( x.type !== 'img'
            || x.props.className !== 'hnuser'
            || x.props.className !== 'score'
            || x.props.href !== 'news')
          || (typeof x !== "object")
        ) {
          return x;
        }
      });

      const data_html_to_react = parser.parse(x.data);
      const filtered_html_to_react = Children.deepMap(data_html_to_react, x => {
        if ( typeof x === "object" 
          && ( x.type !== 'img'
            || x.props.className !== 'hnuser'
            || x.props.className !== 'score'
            || x.props.href !== 'news') 
          || (typeof x !== "object")
        ) {
          return x;
        }
      });

      this.setState({
        page: filtered_html_to_react
      });
    });
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.state.page}
        <Button onClick={this.handleClick}>Try Flux</Button>
      </div>
    );
  }
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Content;
