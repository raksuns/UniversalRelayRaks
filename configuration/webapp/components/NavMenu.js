/* @flow weak */
/* eslint react/prop-types: 0 */

import React, { PropTypes } from 'react'
import Relay from 'react-relay'
import IconButton from 'material-ui/IconButton';
import {List, ListItem, makeSelectable} from 'material-ui/List'
import { translate } from 'react-i18next';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentMail from 'material-ui/svg-icons/content/mail';
import Divider from 'material-ui/Divider';
import RaksScrollbars from './RaksScrollbars';
import muiThemeable from 'material-ui/styles/muiThemeable';

const SelectableList = makeSelectable(List);

const itemStyles = {
	borderRadius: 2,
	color: '#212121',
	fontWeight: 'bold',
};

const subItemStyle = {
	fontSize: 14,
};


@translate(['common'])
class NavMenu extends React.Component {
	static propTypes = {
		t: PropTypes.func,
	};

	render() {
		const { t } = this.props;
		let nestedItems_Misc = [
			<ListItem primaryText={t('contact')} style={itemStyles} innerDivStyle={subItemStyle} value="/"/>,
			<ListItem primaryText={t('story')} style={itemStyles} innerDivStyle={subItemStyle} value="/compendium"/>,
		];
		if (!this.props.Viewer.User_IsAnonymous) {
			nestedItems_Misc.push(<ListItem primaryText="User Profile" style={itemStyles} innerDivStyle={subItemStyle} value="/user"/>)
			nestedItems_Misc.push(<ListItem primaryText="Force Login" style={itemStyles} innerDivStyle={subItemStyle} value="/force_login"/>)
		}

		return (
			<RaksScrollbars universal className="nav-root" ref="scrollbars" style={{ width: 232 }}>
			<SelectableList
				style={{
					padding: 0,
				}}
				className="side-nav"
				value={ this.props.value }
				onChange={ this.props.onChange }>
				<ListItem
					style={itemStyles}
					primaryText={t('contact')}
					leftIcon={<ContentInbox />}
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText={t('contact_all')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo" />,
						<ListItem primaryText={t('favorite')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('show_tag')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('indexed')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('today_regist')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('add_contact')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('upload_excel')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('download_excel')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('contact_guide')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('contact_config')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
						<ListItem primaryText={t('tag_manager')} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />,
          			] }/>
				<ListItem
					style={itemStyles}
					primaryText={t('story')}
					leftIcon={<ContentInbox />}
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText={t('story_all')} style={itemStyles} innerDivStyle={subItemStyle} value="/todo" />,
						<ListItem primaryText={t('favorite')} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/active" />,
						<ListItem primaryText={t('show_tag')} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/completed" />,
						<ListItem primaryText={t('indexed')} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/completed" />,
						<ListItem primaryText={t('today_regist')} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/completed" />,
						<ListItem primaryText={t('my_story')} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/completed" />,
					  ] }/>
				<ListItem
					style={itemStyles}
					primaryText={t('schedule')}
					leftIcon={<ContentInbox />}
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText={t('schedule_t')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />,
						<ListItem primaryText={t('google_calendar_connect')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />,
					]}/>
				<ListItem
					style={itemStyles}
					primaryText={t('message')}
					leftIcon={<ContentInbox />}
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText={t('message')} style={itemStyles} innerDivStyle={subItemStyle} value="/mui" />,
						<ListItem primaryText={t('send_message')} style={itemStyles} innerDivStyle={subItemStyle} value="/mui/icons" />,
						<ListItem primaryText={t('sent_message')} style={itemStyles} innerDivStyle={subItemStyle} value="/mui/icons_credit_cards" />,
						<ListItem primaryText={t('recv_message')} style={itemStyles} innerDivStyle={subItemStyle} value="/mui/icons_credit_cards" />,
					] }/>
				<ListItem
					style={itemStyles}
					primaryText={t('cscenter')}
					leftIcon={<ContentInbox />}
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText={t('notice')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />,
						<ListItem primaryText={t('intro')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />,
						<ListItem primaryText={t('helper')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />,
						<ListItem primaryText={t('faq')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />,
						<ListItem primaryText={t('qna')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />,
						<ListItem primaryText={t('facebook')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />,
						<ListItem primaryText={t('blog')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />,
						<ListItem primaryText={t('cafe')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />,
						<ListItem primaryText={t('policy1')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />,
						<ListItem primaryText={t('policy2')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />,
					]}/>
				<ListItem
					style={itemStyles}
					primaryText={t('configure')}
					leftIcon={<ContentInbox />}
					primaryTogglesNestedList={true}
					nestedItems={ [
						<ListItem primaryText={t('recommend')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />,
						<ListItem primaryText={t('keyboard')} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />,
					]}
				/>
			</SelectableList>
			</RaksScrollbars>
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
