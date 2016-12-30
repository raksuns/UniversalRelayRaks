/* @flow weak */
/* eslint react/prop-types: 0 */

import React, { PropTypes } from 'react'
import Relay from 'react-relay'
import IconButton from 'material-ui/IconButton';
import {List, ListItem, makeSelectable} from 'material-ui/List'
import { translate } from 'react-i18next';

const SelectableList = makeSelectable(List);

const itemStyles = {
	borderRadius: 2,
	color: '#212121',
	fontWeight: 'bold',
};

const innerDivStyle = {
	paddingBottom: 12,
	paddingTop: 12
};

@translate(['common'])
class NavMenu extends React.Component {
	static propTypes = {
		t: PropTypes.func,
	}

	render() {
		const { t } = this.props;
		let nestedItems_Misc = [
			<ListItem primaryText={t('navmenu.home')} style={itemStyles} innerDivStyle={innerDivStyle} value="/"/>,
			<ListItem primaryText="Compendium" style={itemStyles} innerDivStyle={innerDivStyle} value="/compendium"/>,
		]
		if (!this.props.Viewer.User_IsAnonymous) {
			nestedItems_Misc.push(<ListItem primaryText="User Profile" style={itemStyles} innerDivStyle={innerDivStyle} value="/user"/>)
			nestedItems_Misc.push(<ListItem primaryText="Force Login" style={itemStyles} innerDivStyle={innerDivStyle} value="/force_login"/>)
		}

		return (
			<SelectableList
				style={{
					padding: '8px 12px 8px',
				}}
				className="sidenav"
				value={ this.props.value }
				onChange={ this.props.onChange }>
				<ListItem
					style={itemStyles} innerDivStyle={innerDivStyle}
					primaryText="Ensayo"
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText="View" style={itemStyles} innerDivStyle={innerDivStyle} value="/ensayo" />,
						<ListItem primaryText="Edit" style={itemStyles} innerDivStyle={innerDivStyle} value="/ensayo/edit" />,
          			] }/>
				<ListItem
					style={itemStyles}
					primaryText="To Do"
					primaryTogglesNestedList={true} innerDivStyle={innerDivStyle}
					nestedItems={ [
						<ListItem primaryText="All" style={itemStyles} innerDivStyle={innerDivStyle} value="/todo" />,
						<ListItem primaryText="Active" style={itemStyles} innerDivStyle={innerDivStyle} value="/todo/active" />,
						<ListItem primaryText="Completed" style={itemStyles} innerDivStyle={innerDivStyle} value="/todo/completed" />,
					  ] }/>
				<ListItem
					style={itemStyles} innerDivStyle={innerDivStyle}
					primaryText="Translaticiarum"
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText="Grid" style={itemStyles} innerDivStyle={innerDivStyle} value="/translaticiarum" />,
						<ListItem primaryText="List" style={itemStyles} innerDivStyle={innerDivStyle} value="/translaticiarum/edit" />,
					]}/>
				<ListItem
					style={itemStyles} innerDivStyle={innerDivStyle}
					primaryText="Material-UI"
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText="Home" style={itemStyles} innerDivStyle={innerDivStyle} value="/mui" />,
						<ListItem primaryText="Library Icons" style={itemStyles} innerDivStyle={innerDivStyle} value="/mui/icons" />,
						<ListItem primaryText="Country Flags" style={itemStyles} innerDivStyle={innerDivStyle} value="/mui/icons_country_flags" />,
						<ListItem primaryText="Credit Cards" style={itemStyles} innerDivStyle={innerDivStyle} value="/mui/icons_credit_cards" />,
					] }/>
				<ListItem
					style={itemStyles} innerDivStyle={innerDivStyle}
					primaryText="Misc"
					primaryTogglesNestedList={true}
					nestedItems={ nestedItems_Misc }
				/>
			</SelectableList>
		)
	}
}

export default Relay.createContainer(NavMenu, {
	fragments: {
		Viewer: () => Relay.QL`
			fragment on Viewer {
				User_IsAnonymous,
			}
		`,
	},
})
