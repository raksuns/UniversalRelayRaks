/* @flow weak */

import React from 'react'
import {createRoutes, IndexRoute, Route} from 'react-router'

import Chrome from '../webapp/components/Chrome';
import Compendium from '../webapp/components/Compendium/Compendium';
import Ensayo_List from '../webapp/components/Ensayo/Ensayo_List';
import Ensayo_Screen from '../webapp/components/Ensayo/Ensayo_Screen';
import Ensayo_PublicItem from '../webapp/components/Ensayo/Ensayo_PublicItem';
import Ensayo_PublicListing from '../webapp/components/Ensayo/Ensayo_PublicListing';
import ForceLogin from '../webapp/components/ForceLogin/ForceLogin';
import HomeScreen from '../webapp/components/HomeScreen';
import MUI_Icons from '../webapp/components/Mui/MUI_Icons';
import MUI_Icons_CountryFlags from '../webapp/components/Mui/MUI_Icons_CountryFlags';
import MUI_Icons_CreditCards from '../webapp/components/Mui/MUI_Icons_CreditCards';
import MUI_Home from '../webapp/components/Mui/MUI_Home';
import ToDo_List from '../webapp/components/Todos/ToDo_List';
import ToDo_Screen from '../webapp/components/Todos/ToDo_Screen';
import Translaticiarum_List from '../webapp/components/Translaticiarum/Translaticiarum_List';
import Translaticiarum_Grid from '../webapp/components/Translaticiarum/Translaticiarum_Grid';
import Translaticiarum_Screen from '../webapp/components/Translaticiarum/Translaticiarum_Screen';
import User_Properties from '../webapp/components/Auth/User_Properties';
import User_UpdatePassword from '../webapp/components/Auth/User_UpdatePassword';

export default createRoutes(
	<Route path="/" component={Chrome}>

		<IndexRoute component={HomeScreen}/>

		<Route path="compendium">
			<IndexRoute component={Compendium}/>
		</Route>

		<Route path="ensayo">
			<IndexRoute component={Ensayo_PublicListing}/>
			<Route path="item">
				<Route path=":id" component={Ensayo_PublicItem}/>
			</Route>
			<Route path="edit" component={Ensayo_Screen}>
				<IndexRoute component={Ensayo_List}/>
			</Route>
		</Route>

		<Route path="todo" component={ToDo_Screen}>
			<IndexRoute component={ToDo_List}/>
			<Route path=":status" component={ToDo_List}/>
		</Route>

		<Route path="translaticiarum">
			<IndexRoute component={Translaticiarum_Grid}/>
			<Route path="edit" component={Translaticiarum_Screen}>
				<IndexRoute component={Translaticiarum_List}/>
			</Route>
		</Route>

		<Route path="force_login">
			<IndexRoute component={ForceLogin}/>
		</Route>

		<Route path="mui">
			<IndexRoute component={MUI_Home}/>
			<Route path="icons" component={MUI_Icons}/>
			<Route path="icons_country_flags" component={MUI_Icons_CountryFlags}/>
			<Route path="icons_credit_cards" component={MUI_Icons_CreditCards}/>
		</Route>

		<Route path="user">
			<IndexRoute component={User_Properties}/>
			<Route path="update_password" component={User_UpdatePassword}/>
		</Route>

	</Route>
)
