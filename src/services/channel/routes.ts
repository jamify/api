import { getChannel } from './actions';

export default [
  {
    path: '/channel',
    method: 'get',
    handler: getChannel,
  },
];
