export const getErrorMsg = (paths, path, msg) => {
  const index = paths.indexOf(path);
  return msg[index];
};
