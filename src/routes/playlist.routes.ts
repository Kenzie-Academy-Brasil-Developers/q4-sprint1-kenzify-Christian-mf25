import validateShape from '../middlewares/validateShape.middleware';
import { validateAuth, permissionMiddleware } from '../middlewares/user';
import { playlistShape } from '../shapes/playlist';
import { deletePlaylistController, updatePlaylistController } from '../controllers/playlist';

const playlistRoutes = (route: any): void => {
  route.put(
    '/playlist',
    validateAuth,
    permissionMiddleware,
    validateShape(playlistShape),
    updatePlaylistController,
  );

  route.delete('/playlist', validateAuth, permissionMiddleware, deletePlaylistController);
};

export default playlistRoutes;
