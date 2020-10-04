import { getChannelMessages, postChannelMessage } from './actions';

export default [
  {
    path: '/channels/:channelId/messages',
    method: 'get',
    handler: getChannelMessages,
  },
  {
    path: '/channels/:channelId/messages',
    method: 'post',
    handler: postChannelMessage,
  },
];
