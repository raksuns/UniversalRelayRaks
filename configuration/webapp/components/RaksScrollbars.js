import React, { createClass } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/customization.md
export default createClass({

	displayName: 'RaksScrollbars',

	getInitialState() {
		return {
			top: 0
		};
	},

	handleUpdate(values) {
		const { top } = values;
		this.setState({ top });
	},

	renderView({ style, ...props }) {
		const { top } = this.state;
		const viewStyle = {
		};
		return (
			<div
				className="box"
				style={{ ...style, ...viewStyle }}
				{...props}/>
		);
	},

	renderThumb({ style, ...props }) {
		const { top } = this.state;
		const thumbStyle = {
			backgroundColor: `rgb(183, 183, 183)`
		};
		return (
			<div
				style={{...thumbStyle }} className="thumb-vertical"
				{...props}/>
		);
	},

	renderTrack({style, ...props }) {
		const trackStyle = {
			position: 'absolute',
			width: 8,
			right: 2,
			bottom: 2,
			top: 2,
		};
		return (
			<div style={{ ...style, ...trackStyle }} {...props}/>
		);
	},

	render() {
		return (
			<Scrollbars
				renderView={this.renderView}
				renderTrackVertical={this.renderTrack}
				renderThumbVertical={this.renderThumb}
				onUpdate={this.handleUpdate}
				{...this.props}/>
		);
	}
});