import winston from 'winston';
import path from 'path';

const loggerPath = process.env.LOGGER_PATH || 'logger';

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
  transports: [new winston.transports.Console()],
});

if (process.env.NODE_ENV === 'production') {
  logger.add(new winston.transports.File({ filename: path.resolve(loggerPath, 'error.log'), level: 'error' }));
  logger.add(new winston.transports.File({ filename: path.resolve(loggerPath, 'server.log') }));
}

export default logger;
