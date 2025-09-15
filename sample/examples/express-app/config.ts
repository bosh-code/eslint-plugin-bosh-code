/* eslint-disable n/no-process-env */
import dotenv from 'dotenv';
import moduleAlias from 'module-alias';
import path from 'node:path';

// Check the env
const NODE_ENV = (process.env.NODE_ENV ?? 'development');

// Configure "dotenv"
const result = dotenv.config({
  path: path.join(__dirname, `./config/.env.${NODE_ENV}`),
});
if (result.error) {
  throw result.error;
}

// Configure moduleAlias
if (__filename.endsWith('js')) {
  moduleAlias.addAlias('@src', __dirname + '/dist');
}
