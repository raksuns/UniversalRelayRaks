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
import {fade} from 'material-ui/utils/colorManipulator'

var a50 = exports.red50 = '#FFEBEE';
var a100 = exports.red100 = '#FFCDD2';
var a200 = exports.red200 = '#EF9A9A';
var a300 = exports.red300 = '#E57373';
var a400 = exports.red400 = '#EF5350';
var a500 = exports.red500 = '#ce3176'; // Pink Yarrow.
var a600 = exports.red600 = '#E53935';
var a700 = exports.red700 = '#D32F2F';
var a800 = exports.red800 = '#B71C1C';
var a900 = exports.red900 = '#DA4C2E';

var aA100 = exports.redA100 = '#FF8A80';
var aA200 = exports.redA200 = '#FF5252';
var aA400 = exports.redA400 = '#FF1744';
var aA700 = exports.redA700 = '#D50000';

// wordpress : 272 * 47
// inbox : 232 = 208 * 40, subheader : 208 * 24, header : 100% * 56


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
		disabledColor: fade(darkBlack, 0.3),
		pickerHeaderColor: blue500,
	},

	appBar: {
		color: "#F44336",
		textColor: "#ffffff",
		height: 64,
		titleFontWeight: 400,
	},
	avatar: {
		color: "#ffffff",
		backgroundColor: "rgb(188, 188, 188)",
		borderColor: "#ffffff"
	},
	badge: {
		color: "#ffffff",
		textColor: "rgba(0, 0, 0, 0.87)",
		primaryColor: "#F44336",
		primaryTextColor: "#ffffff",
		secondaryColor: "#e040fb",
		secondaryTextColor: "#ffffff",
		fontWeight: 500
	},
	bottomNavigation: {
		backgroundColor: "#ffffff",
		unselectedColor: "rgba(0, 0, 0, 0.54)",
		selectedColor: "#F44336",
		height: 56,
		unselectedFontSize: 12,
		selectedFontSize: 14
	},
	button: {
		minWidth: 88,
		iconButtonSize: 48
	},
	card: {
		titleColor: "rgba(0, 0, 0, 0.87)",
		subtitleColor: "rgba(0, 0, 0, 0.54)",
		fontWeight: 500
	},
	cardMedia: {
		color: "rgba(255, 255, 255, 0.87)",
		overlayContentBackground: "rgba(0, 0, 0, 0.54)",
		titleColor: "rgba(255, 255, 255, 0.87)",
		subtitleColor: "rgba(255, 255, 255, 0.54)"
	},
	cardText: {
		textColor: "rgba(0, 0, 0, 0.87)"
	},
	checkbox: {
		boxColor: "rgba(0, 0, 0, 0.87)",
		checkedColor: "#F44336",
		requiredColor: "#F44336",
		disabledColor: "rgba(0, 0, 0, 0.3)",
		labelColor: "rgba(0, 0, 0, 0.87)",
		labelDisabledColor: "rgba(0, 0, 0, 0.3)"
	},
	chip: {
		backgroundColor: "rgb(224, 224, 224)",
		deleteIconColor: "rgba(0, 0, 0, 0.26)",
		textColor: "rgba(0, 0, 0, 0.87)",
		fontSize: 14,
		fontWeight: 400,
		shadow: "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12)"
	},
	datePicker: {
		color: "#F44336",
		textColor: "#ffffff",
		calendarTextColor: "rgba(0, 0, 0, 0.87)",
		selectColor: "#D32F2F",
		selectTextColor: "#ffffff",
		calendarYearBackgroundColor: "#ffffff"
	},
	dialog: {
		titleFontSize: 22,
		bodyFontSize: 16,
		bodyColor: "rgba(0, 0, 0, 0.6)"
	},
	dropDownMenu: {
		accentColor: "#e0e0e0"
	},
	enhancedButton: {
		tapHighlightColor: "rgba(0, 0, 0, 0)"
	},
	flatButton: {
		color: "rgba(0, 0, 0, 0)",
		buttonFilterColor: "#999999",
		disabledTextColor: "rgba(0, 0, 0, 0.3)",
		textColor: "rgba(0, 0, 0, 0.87)",
		primaryTextColor: "#F44336",
		secondaryTextColor: "#e040fb",
		fontSize: 14,
		fontWeight: 500
	},
	floatingActionButton: {
		buttonSize: 56,
		miniSize: 40,
		color: "#F44336",
		iconColor: "#ffffff",
		secondaryColor: "#e040fb",
		secondaryIconColor: "#ffffff",
		disabledTextColor: "rgba(0, 0, 0, 0.3)",
		disabledColor: "rgb(224, 224, 224)"
	},
	gridTile: {
		textColor: "#ffffff"
	},
	icon: {
		color: "#ffffff",
		backgroundColor: "#F44336"
	},
	inkBar: {
		backgroundColor: "#e040fb"
	},
	drawer: {
		color: "#ffffff"
	},
	listItem: {
		nestedLevelDepth: 18,
		secondaryTextColor: "rgba(0, 0, 0, 0.54)",
		leftIconColor: "#757575",
		rightIconColor: "#757575"
	},
	menu: {
		backgroundColor: "#ffffff",
		containerBackgroundColor: "#ffffff"
	},
	menuItem: {
		dataHeight: 24,
		height: 40,
		hoverColor: "rgba(0, 0, 0, 0.1)",
		padding: 8,
		selectedTextColor: "#e040fb",
		rightIconDesktopFill: "#757575"
	},
	menuSubheader: {
		padding: 24,
		borderColor: "#e0e0e0",
		textColor: "#F44336"
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.54)"
	},
	paper: {
		color: "rgba(0, 0, 0, 0.87)",
		backgroundColor: "#ffffff",
		zDepthShadows: [
			"0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12)",
			"0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)",
			"0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)",
			"0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)",
			"0 19px 60px rgba(0, 0, 0, 0.3), 0 15px 20px rgba(0, 0, 0, 0.22)"
		]
	},
	radioButton: {
		borderColor: "rgba(0, 0, 0, 0.87)",
		backgroundColor: "#ffffff",
		checkedColor: "#F44336",
		requiredColor: "#F44336",
		disabledColor: "rgba(0, 0, 0, 0.3)",
		size: 24,
		labelColor: "rgba(0, 0, 0, 0.87)",
		labelDisabledColor: "rgba(0, 0, 0, 0.3)"
	},
	raisedButton: {
		color: "#ffffff",
		textColor: "rgba(0, 0, 0, 0.87)",
		primaryColor: "#F44336",
		primaryTextColor: "#ffffff",
		secondaryColor: "#e040fb",
		secondaryTextColor: "#ffffff",
		disabledColor: "rgb(229, 229, 229)",
		disabledTextColor: "rgba(0, 0, 0, 0.3)",
		fontSize: 14,
		fontWeight: 500
	},
	refreshIndicator: {
		strokeColor: "#e0e0e0",
		loadingStrokeColor: "#F44336"
	},
	ripple: {
		color: "rgba(0, 0, 0, 0.87)"
	},
	slider: {
		trackSize: 2,
		trackColor: "rgba(0, 0, 0, 0.54)",
		trackColorSelected: "#F44336",
		handleSize: 12,
		handleSizeDisabled: 8,
		handleSizeActive: 18,
		handleColorZero: "rgba(0, 0, 0, 0.54)",
		handleFillColor: "#ffffff",
		selectionColor: "#F44336",
		rippleColor: "#F44336"
	},
	snackbar: {
		textColor: "#ffffff",
		backgroundColor: "rgba(0, 0, 0, 0.87)",
		actionColor: "#e040fb"
	},
	subheader: {
		color: "rgba(0, 0, 0, 0.54)",
		fontWeight: 500
	},
	stepper: {
		backgroundColor: "transparent",
		hoverBackgroundColor: "rgba(0, 0, 0, 0.06)",
		iconColor: "#F44336",
		hoveredIconColor: "#616161",
		inactiveIconColor: "#9e9e9e",
		textColor: "rgba(0, 0, 0, 0.87)",
		disabledTextColor: "rgba(0, 0, 0, 0.26)",
		connectorLineColor: "#bdbdbd"
	},
	svgIcon: {
		color: "rgba(0, 0, 0, 0.87)"
	},
	table: {
		backgroundColor: "#ffffff"
	},
	tableFooter: {
		borderColor: "#e0e0e0",
		textColor: "#F44336"
	},
	tableHeader: {
		borderColor: "#e0e0e0"
	},
	tableHeaderColumn: {
		textColor: "#F44336",
		height: 56,
		spacing: 24
	},
	tableRow: {
		hoverColor: "#FFCDD2",
		stripeColor: "rgba(249, 161, 154, 0.4)",
		selectedColor: "#e0e0e0",
		textColor: "rgba(0, 0, 0, 0.87)",
		borderColor: "#e0e0e0",
		height: 48
	},
	tableRowColumn: {
		height: 48,
		spacing: 24
	},
	tabs: {
		backgroundColor: "#F44336",
		textColor: "rgba(255, 255, 255, 0.7)",
		selectedTextColor: "#ffffff"
	},
	textField: {
		textColor: "rgba(0, 0, 0, 0.87)",
		hintColor: "rgba(0, 0, 0, 0.3)",
		floatingLabelColor: "rgba(0, 0, 0, 0.3)",
		disabledTextColor: "rgba(0, 0, 0, 0.3)",
		errorColor: "#f44336",
		focusColor: "#F44336",
		backgroundColor: "transparent",
		borderColor: "#e0e0e0"
	},
	timePicker: {
		color: "#ffffff",
		textColor: "#F44336",
		accentColor: "#F44336",
		clockColor: "rgba(0, 0, 0, 0.87)",
		clockCircleColor: "rgba(0, 0, 0, 0.07)",
		headerColor: "#2196f3",
		selectColor: "#D32F2F",
		selectTextColor: "#ffffff"
	},
	toggle: {
		thumbOnColor: "#F44336",
		thumbOffColor: "#FFCDD2",
		thumbDisabledColor: "#e0e0e0",
		thumbRequiredColor: "#F44336",
		trackOnColor: "rgba(244, 67, 54, 0.5)",
		trackOffColor: "rgba(0, 0, 0, 0.54)",
		trackDisabledColor: "rgba(0, 0, 0, 0.54)",
		labelColor: "rgba(0, 0, 0, 0.87)",
		labelDisabledColor: "rgba(0, 0, 0, 0.3)",
		trackRequiredColor: "rgba(244, 67, 54, 0.5)"
	},
	toolbar: {
		color: "rgba(0, 0, 0, 0.54)",
		hoverColor: "rgba(0, 0, 0, 0.87)",
		backgroundColor: "rgb(242, 194, 199)",
		height: 56,
		titleFontSize: 20,
		iconColor: "rgba(0, 0, 0, 0.4)",
		separatorColor: "rgba(0, 0, 0, 0.175)",
		menuHoverColor: "rgba(0, 0, 0, 0.1)"
	},
	tooltip: {
		color: "#ffffff",
		rippleBackgroundColor: "#616161"
	},
	zIndex: {
		menu: 1000,
		appBar: 1100,
		drawerOverlay: 1200,
		drawer: 1300,
		dialogOverlay: 1400,
		dialog: 1500,
		layer: 2000,
		popover: 2100,
		snackbar: 2900,
		tooltip: 3000
	},
}

