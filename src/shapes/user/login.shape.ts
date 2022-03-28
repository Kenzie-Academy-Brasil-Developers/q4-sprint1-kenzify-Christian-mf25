import * as yup from 'yup';

const loginUser = yup.object().shape({
  username: yup.string().required('Username required '),
  password: yup.string().required('Password required'),
});

export default loginUser;
