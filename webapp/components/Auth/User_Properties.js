/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {RequiresAuthenticationNotice} from './RequiresAuthentication.js';


class User_Properties extends React.Component {
	static contextTypes = {
	};

	constructor(props, context) {
		super(props, context);
	}

	_handleUpdate = () => {
	};

	render() {
		if (this.props.Viewer.User_IsAnonymous)
			return <RequiresAuthenticationNotice />; // Anonymous users do not get to have a profile
		else
			return (
				<Card>
					<CardHeader
						title="User profile"
					/>
					<CardText>
						<TextField
							value={ this.props.Viewer.User_AccountName }
							floatingLabelText="Account Name (read only)"
							fullWidth={ true }
						/>
						<TextField
							ref="User_DisplayName"
							defaultValue={ this.props.Viewer.User_DisplayName }
							floatingLabelText="Display Name"
							fullWidth={ true }
						/>
						<TextField
							ref="User_Email"
							defaultValue={ this.props.Viewer.User_Email }
							floatingLabelText="Email"
							fullWidth={ true }
						/>
						<TextField
							ref="User_PhoneNumberMobile"
							defaultValue={ this.props.Viewer.User_PhoneNumberMobile }
							floatingLabelText="Mobile Phone #"
							fullWidth={ true }
						/>
						<div>
							<RaisedButton
								label="Update"
								secondary={true}
								onTouchTap={ ( ) => this._handleUpdate( ) }
							/>
						</div>
					</CardText>
				</Card>
			);
	}
}

export default User_Properties;
