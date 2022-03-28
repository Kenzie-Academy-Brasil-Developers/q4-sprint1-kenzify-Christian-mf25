const checkBodyLenServices = (body: any): void => {
  const key: string[] = Object.keys(body);

  if (key.length > 1) {
    return body;
  }

  return body[key[0]][0];
};

export default checkBodyLenServices;
