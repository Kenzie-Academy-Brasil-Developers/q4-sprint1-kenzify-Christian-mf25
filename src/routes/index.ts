import express from 'express';

import userRoutes from './user.routes';
import playlistRoutes from './playlist.routes';

const routes = (route: any) => {
  route.use(express.json());

  playlistRoutes(route);
  userRoutes(route);
};

export default routes;
