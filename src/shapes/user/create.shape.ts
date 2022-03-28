import * as yup from 'yup';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';

const registerUserShape = yup.object().shape({
  password: yup
    .string()
    .required('Password required')
    .transform((pass) => bcrypt.hashSync(pass, 10)),
  username: yup.string().required('Username required '),
  id: yup.string().default(() => v4()),
});

export default registerUserShape;
