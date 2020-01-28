import { getChannel, patchChannel, postChannel } from './actions';

export default [
  {
    path: '/channels',
    method: 'get',
    handler: getChannel,
  },
  {
    path: '/channels/:id',
    method: 'patch',
    handler: patchChannel,
  },
  {
    path: '/channels',
    method: 'post',
    handler: postChannel,
  },
];
