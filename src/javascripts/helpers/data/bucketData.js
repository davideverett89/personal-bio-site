import firebase from 'firebase/app';
import 'firebase/storage';

import apiKeys from '../apiKeys.json';

const { storageBucket } = apiKeys.firebaseKeys;

const downloadResume = () => {
  const resumeReference = firebase.storage().refFromURL(`gs://${storageBucket}/David-Everett-Resume.pdf`);
  resumeReference.getDownloadURL()
    .then((url) => window.open(url, '_blank'))
    .catch((err) => {
      console.error(err);
      // eslint-disable-next-line default-case
      switch (err.code) {
        case 'storage/object-not-found':
          break;
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
      }
    });
};

export default { downloadResume };
