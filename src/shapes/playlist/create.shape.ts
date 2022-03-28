import * as yup from 'yup';

const playlistShape = yup.object().shape({
  genres: yup.array().of(yup.string()).required(),
  listenedByMe: yup.number().default(() => 0),
  releasedDate: yup.date().required(),
  duration: yup
    .string()
    .matches(/^[0-6]?[0-9][:][0-6][0-9]$/)
    .required(),
  title: yup.string().required(),
});

export default playlistShape;
