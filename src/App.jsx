'use strict';

import React, { Component } from 'react';

import '../styles/bootstrap.min.css';
import '../styles/cssUtils.styl';
import '../styles/app.styl';

class Index extends Component {
	render() {
		const p = this.props;
	  	return p.children;
  	}
};

export default Index;