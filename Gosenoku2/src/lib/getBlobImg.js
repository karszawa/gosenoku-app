export default function getBlobImg(localUri, formName) {
  // ImagePicker saves the taken photo to disk and returns a local URI to it
  let filename = localUri.split('/').pop();

  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  // Upload the image using the fetch and FormData APIs
  let formData = new FormData();
  // Assume "photo" is the name of the form field the server expects
  formData.append(formName, { uri: localUri, name: filename, type });

  return formData;
}
