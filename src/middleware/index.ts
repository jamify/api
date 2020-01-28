import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
  handleLogging,
} from './common';

export default [
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
  handleLogging,
];
