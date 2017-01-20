/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react'
import Relay from 'react-relay'

import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import { ListItem } from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'

import ToDo_updateStatusMutation from '../../../units/urb-example-todo/relay/ToDo_updateStatusMutation'
import ToDo_deleteMutation from '../../../units/urb-example-todo/relay/ToDo_deleteMutation'
import ToDo_updateRenameMutation from '../../../units/urb-example-todo/relay/ToDo_updateRenameMutation'

import ToDo_Properties from './ToDo_Properties'

class ToDo_Item extends React.Component {

  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  }

  _handle_updateHandler_ToDo = ( ToDo_properties ) => {

    this.context.relay.commitUpdate(
      new ToDo_updateRenameMutation( { ToDo: this.props.ToDo, ...ToDo_properties } )
    )
  }

  _handle_onCheck_Completed = ( event, ToDo_Complete ) => {

    this.context.relay.commitUpdate(
      new ToDo_updateStatusMutation( {
        ToDo_Complete,
        ToDo: this.props.ToDo,
        Viewer: this.props.Viewer,
      } )
    )
  }

  _handleTextInputSave( ToDo_Text ) {

    this.context.relay.commitUpdate(
      new ToDo_updateRenameMutation( { ToDo: this.props.ToDo, ToDo_Text } )
    )
  }

  _ToDo_delete() {

    this.context.relay.commitUpdate(
      new ToDo_deleteMutation( { ToDo: this.props.ToDo, Viewer: this.props.Viewer } )
    )
  }

  _handle_onItemTouchTap = ( e, item ) => {

    switch( item.ref ) {
      case 'edit':
        this.refs.ToDo_Properties._handle_Open()
        break
      case 'delete':
        this._ToDo_delete()
        break
      default:
        break
    }
  }

  render() {

    let rightIconMenu = (
      <IconMenu
       iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
       onItemTouchTap={ this._handle_onItemTouchTap }
      >
       <MenuItem ref="edit" value={ 0 }>Edit</MenuItem>
       <MenuItem ref="delete" value={ 1 }>Delete</MenuItem>
     </IconMenu>
    )

    return(
      <div>
        <ListItem
          primaryText={ this.props.ToDo.ToDo_Text }
          leftCheckbox={
            <Checkbox
              defaultChecked={ this.props.ToDo.ToDo_Complete }
              onCheck={ this._handle_onCheck_Completed }
            />
          }
          rightIconButton={ rightIconMenu }
        />
        <ToDo_Properties
          ref="ToDo_Properties"
          ToDo_Text={ this.props.ToDo.ToDo_Text }
          updateHandler={ this._handle_updateHandler_ToDo }
        />
      </div>
    )
  }
}

export default Relay.createContainer( ToDo_Item, {
  fragments: {
    ToDo: () => Relay.QL `
      fragment on ToDo {
        ToDo_Complete,
        id,
        ToDo_Text,
        ${ToDo_updateStatusMutation.getFragment('ToDo')},
        ${ToDo_deleteMutation.getFragment('ToDo')},
        ${ToDo_updateRenameMutation.getFragment('ToDo')},
      }
    `,
    Viewer: () => Relay.QL `
      fragment on Viewer {
        ${ToDo_updateStatusMutation.getFragment('Viewer')},
        ${ToDo_deleteMutation.getFragment('Viewer')},
      }
    `,
  },
} )
