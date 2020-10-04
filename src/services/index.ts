import channelRoutes from './channel/routes';
import messagesRoutes from './messages/routes';
import otherRoutes from './others/routes';

export default [...channelRoutes, ...messagesRoutes, ...otherRoutes];
