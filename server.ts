import app from './src/index';

import logger from './config/logger';

const PORT = process.env.PORT || 3000;

const main = async () => {
  await app.listen(PORT, () => {
    logger.info(`The app is running on port ${PORT}`);
  });
};

main();
