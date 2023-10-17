const getFileNameFromUri = uri => {
  const pos = uri.lastIndexOf('/');
  fileName = uri.slice(pos + 1);
  return fileName;
};

export default getFileNameFromUri;
