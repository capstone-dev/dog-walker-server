const winston = require('winston');
const winstoneDaily = require('winston-daily-rotate-file');
const {createLogger, format, transports} = require('winston');
const path = require('path');

const infoLogFile = path.join(__dirname, '../log/info', '/%DATE%-logfile.log')
const exceptionLogFilen = path.join(__dirname, '../log/exception', '/%DATE%-logfile.log')

const tsFormat = format.combine(
    format.timestamp({
        format: 'YYYY-MM-DD HH:mm' // Optional for choosing your own timestamp format.
    }),
    format.json()
)
const logger = winston.createLogger({
    transports:
        [new (winston.transports.Console)({
            level: 'info',
            format: tsFormat,
            colorize: true,
            json: false,
            showLevel: true
        }),
            new (winstoneDaily)({
                level: 'debug',
                filename: infoLogFile,
                format: tsFormat,
                datePattern: 'YYYY-MM-DD',
                prepend: true,
                maxsize: 1000000,
                maxFiles: 100,
                json: false,
                showLevel: true
            })
        ],
    exceptionHandlers: [
        new (winston.transports.Console)({
            level: 'error',
            format: tsFormat,
            colorize: true,
            json: false,
            showLevel: true
        }),
        new (winstoneDaily)({
            level: 'debug',
            filename: exceptionLogFilen,
            format: tsFormat,
            datePattern: 'YYYY-MM-DD',
            prepend: true,
            maxsize: 1000000,
            maxFiles: 100,
            json: false,
            showLevel: true
        })
    ]
});

module.exports=logger;