/* @flow */

import express from 'express'

import logServerRequest from '../server/logServerRequest'
import {version} from '../configuration/package'
import renderOnServer from './renderOnServer'
import {requestLoggerRenderOnServer} from '../server/requestLoggers'
import i18n from './i18n-server';
import i18nMiddleware from 'i18next-express-middleware';

// Read environment
require('dotenv').load();


// Use relative URL for asset path
let assetsPath;
if (process.env.NODE_ENV == 'production')
	assetsPath = `/assets/${version}`;
else {
	const host = process.env.HOST || 4444;
	assetsPath = `http://${host}:8080/${version}`;
}

// Create express router
const app = express();

// Log requests for statically served files
app.use((req, res, next) => logServerRequest(req, res, next, requestLoggerRenderOnServer));

app.use(i18nMiddleware.handle(i18n));

// Serve HTML file, JavaScript bundle and other assets
app.get('/*', (req, res, next) => {
	const locale = req.language;
	const resources = i18n.getResourceBundle(locale, 'common');
	const i18nClient = {locale, resources};

	const i18nServer = i18n.cloneInstance();
	i18nServer.changeLanguage(locale);

	renderOnServer(req, res, next, assetsPath, i18nServer, i18nClient);
});


export default app;
