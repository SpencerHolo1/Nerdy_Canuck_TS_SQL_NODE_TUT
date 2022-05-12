import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';

const NAMESPACE = 'Server';
const router = express();

/** Logging the request */
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
});

/** Parse the request. This allows us to send nested JSON to our API */
router.use(bodyParser.urlencoded({ extended: false }));
/** Allows us to not have to use 'json.parse' or 'json.stringify' on the React side of things. We just take care of that here */
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if ((req.method = 'OPTIONS')) {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE');
    }
});
