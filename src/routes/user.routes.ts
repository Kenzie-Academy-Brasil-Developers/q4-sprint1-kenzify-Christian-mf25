import { getAllUser, loginController, registerUserController } from '../controllers/user';
import validateShape from '../middlewares/validateShape.middleware';
import { registerUserShape, loginUser } from '../shapes/user';
import { validateAuth, verifyUserExists } from '../middlewares/user';

const userRoutes = (route: any): void => {
  route.post(
    '/register',
    verifyUserExists,
    validateShape(registerUserShape),
    registerUserController,
  );

  route.post('/login', validateShape(loginUser), loginController);

  route.get('', validateAuth, getAllUser);
};

export default userRoutes;
