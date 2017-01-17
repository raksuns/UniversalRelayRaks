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
import Subheader from 'material-ui/Subheader';

const SelectableList = makeSelectable(List);

const itemStyles = {
	borderRadius: 2,
	color: '#616161',
	fontWeight: 'normal', // backgroundColor: 'rgba(0,0,0,0.05)'
};
const divStyle = {
	padding: 0
};

const headerStyle = {
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
		let nestedItems_Misc = [];
		if (!this.props.Viewer.User_IsAnonymous) {
			nestedItems_Misc.push(<ListItem primaryText="User Profile" style={itemStyles} innerDivStyle={subItemStyle} value="/user"/>);
			nestedItems_Misc.push(<ListItem primaryText="Force Login" style={itemStyles} innerDivStyle={subItemStyle} value="/force_login"/>);
		}

		return (
			<RaksScrollbars universal className="nav-root" ref="scrollbars">
			<SelectableList
				style={{
					padding: 0,
				}}
				className="side-nav"
				value={ this.props.value }
				onChange={ this.props.onChange }>
				<Subheader>{t('contact')}</Subheader>
				<ListItem primaryText={t('contact')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/" />
				<ListItem primaryText={t('contact_all')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo" />
				<ListItem primaryText={t('favorite')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />
				<ListItem primaryText={t('show_tag')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/compendium" />
				<ListItem primaryText={t('indexed')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />
				<ListItem primaryText={t('today_regist')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/user" />
				<ListItem primaryText={t('add_contact')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/force_login" />
				<ListItem primaryText={t('upload_excel')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />
				<ListItem primaryText={t('download_excel')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />
				<ListItem primaryText={t('contact_guide')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />
				<ListItem primaryText={t('contact_config')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />
				<ListItem primaryText={t('tag_manager')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/ensayo/edit" />
				<Divider />
				<Subheader>{t('story')}</Subheader>
				<ListItem primaryText={t('story_all')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/todo" />
				<ListItem primaryText={t('favorite')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/active" />
				<ListItem primaryText={t('show_tag')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/completed" />
				<ListItem primaryText={t('indexed')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/completed" />
				<ListItem primaryText={t('today_regist')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/completed" />
				<ListItem primaryText={t('my_story')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/todo/completed" />
				<Divider />
				<Subheader>{t('schedule')}</Subheader>
				<ListItem primaryText={t('schedule_t')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />
				<ListItem primaryText={t('google_calendar_connect')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />
				<Divider />
				<Subheader>{t('message')}</Subheader>
				<ListItem primaryText={t('send_message')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/mui/icons" />
				<ListItem primaryText={t('sent_message')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/mui/icons_credit_cards" />
				<ListItem primaryText={t('reserved_message')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/mui/icons_credit_cards" />
				<Divider />
				<Subheader>{t('cscenter')}</Subheader>
				<ListItem primaryText={t('notice')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />
				<ListItem primaryText={t('intro')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />
				<ListItem primaryText={t('helper')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />
				<ListItem primaryText={t('faq')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />
				<ListItem primaryText={t('qna')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />
				<ListItem primaryText={t('facebook')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />
				<ListItem primaryText={t('blog')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />
				<ListItem primaryText={t('cafe')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />
				<ListItem primaryText={t('policy1')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />
				<ListItem primaryText={t('policy2')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />
				<Divider />
				<Subheader>{t('configure')}</Subheader>
				<ListItem primaryText={t('recommend')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum/edit" />
				<ListItem primaryText={t('keyboard')} leftIcon={<ContentMail />} style={itemStyles} innerDivStyle={subItemStyle} value="/translaticiarum" />

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
