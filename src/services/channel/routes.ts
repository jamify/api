import { getChannel, postChannel } from './actions';

export default [
  {
    path: '/channel',
    method: 'get',
    handler: getChannel,
  },
  {
    path: '/channel',
    method: 'post',
    handler: postChannel,
  },
];
