import request from 'superagent';

const BASE_URL = 'https://api.gosen-oku-en.tokyo';

export function convertText(text, callback) {
  request
    .post(`${BASE_URL}/text`)
    .send({ body: text })
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err) {
        alert(err);
        return;
      }

      callback(res.body);
    });
}

export function convertImg(img, callback) {
  request
    .post(`${BASE_URL}/img`)
    .send({ jpg: img })
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err) {
        alert(err);
        return;
      }

      callback(img);
    })
};
