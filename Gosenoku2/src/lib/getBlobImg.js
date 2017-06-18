export default function getBlobImg(localUri, formName) {
  const filename = localUri.split('/').pop();

  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image`;

  const formData = new FormData();

  formData.append(formName, { uri: localUri, name: filename, type });

  return formData;
}
