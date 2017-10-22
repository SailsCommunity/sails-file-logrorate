/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 */

var winston = require('winston');
require('winston-logrotate');
var moment = require('moment');
var date = moment(moment()).format('YYYY-MM-DD');
var customLogger = new winston.Logger({
    transports: [
        new winston.transports.Rotate({
            file: './log/' + date + '.log', // this path needs to be absolute
            colorize: false,
            timestamp: true,
            json: false,
            size: '100m',
            keep: 5,
            compress: true,
            level: 'silly'
        })
    ]
});
module.exports.log = {

    /***************************************************************************
    *                                                                          *
    * Valid `level` configs: i.e. the minimum log level to capture with        *
    * sails.log.*()                                                            *
    *                                                                          *
    * The order of precedence for log levels from lowest to highest is:        *
    * silly, verbose, info, debug, warn, error                                 *
    *                                                                          *
    * You may also set the level to "silent" to suppress all logs.             *
    *                                                                          *
    ***************************************************************************/

    level: 'silly',
    custom: customLogger

};
