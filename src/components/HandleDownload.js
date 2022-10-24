import axios from 'axios';
import fileDownload from 'js-file-download';

const HandleDownload = (url, filename) => {
  axios
    .get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename);
    });
};

export default HandleDownload;
