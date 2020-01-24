import { healthCheck, wildcard } from './actions';

export default [
  {
    path: '/ping',
    method: 'get',
    handler: healthCheck,
  },
  {
    path: '*',
    method: 'get',
    handler: wildcard,
  },
];
