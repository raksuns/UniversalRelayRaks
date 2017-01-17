import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

var app = express();

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

mongoose.connect('mongodb://localhost:27017/local');

var server = app.listen(8888, () => {
    console.log('Listening port ', server.address().port);
});
