import winston from 'winston';
import path from 'path';

const loggerOptions = (fileName: String) => ({
  filename: path.resolve(process.env.LOGGER_PATH || 'logger', `${fileName}.log`),
  handleExceptions: true,
  json: true,
  maxsize: 5242880,
  maxFiles: 5,
  exitOnError: false,
});

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.label({ label: 'server' }),
    winston.format.simple(),
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.printf(({
      level, message, label, timestamp,
    }) => ` (${timestamp}) [${label}:${level}] ${message}`),
  ),
  transports: [new winston.transports.Console({ silent: process.env.NODE_ENV === 'test' })],
});

const stream = {
  write: (message: string) => logger.info(message),
};

if (process.env.NODE_ENV === 'production') {
  logger.add(new winston.transports.File({ ...loggerOptions('error'), level: 'error' }));
  logger.add(new winston.transports.File({ ...loggerOptions('server') }));
}

export { logger, stream };
