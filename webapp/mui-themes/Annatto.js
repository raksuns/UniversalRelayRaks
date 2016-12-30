/* @flow weak */

import {
  blue500,
  blue700,
  blueGrey100,
  blueGrey500,
  darkBlack,
  grey300,
  lightBlack,
  purpleA200,
  white
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'

var base1 = "#DA4C2E";
var base2 = "#94061e";
var base3 = "#75131A";
var base4 = "#633131";
var base5 = "#296299";

var a50 = exports.red50 = '#FFEBEE';
var a100 = exports.red100 = '#FFCDD2';
var a200 = exports.red200 = '#EF9A9A';
var a300 = exports.red300 = '#E57373';
var a400 = exports.red400 = '#EF5350';
var a500 = exports.red500 = '#F44336';
var a600 = exports.red600 = '#E53935';
var a700 = exports.red700 = '#D32F2F';
var a800 = exports.red800 = '#B71C1C';
var a900 = exports.red900 = '#DA4C2E';

var aA100 = exports.redA100 = '#FF8A80';
var aA200 = exports.redA200 = '#FF5252';
var aA400 = exports.redA400 = '#FF1744';
var aA700 = exports.redA700 = '#D50000';



export default {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopLeftNavMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
  palette: {
    primary1Color: a500,
    primary2Color: a700,
    primary3Color: lightBlack,
    accent1Color: purpleA200,
    accent2Color: a100,
    accent3Color: a500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade( darkBlack, 0.3 ),
    pickerHeaderColor: blue500,
  },
  avatar: {
    borderColor: white,
  },
}
