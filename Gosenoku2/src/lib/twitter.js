import request from 'superagent';
import getBlobImg from './getBlobImg';

const BASE_URL = 'https://api.gosen-oku-en.tokyo';

export default class Twitter {
  async post(text, img) {
    if(img == null) {
      this.statusesUpdate(text);
      return;
    }

    if(img.startsWith('https://')) {
      this.mediaUpdate(img, (media_id) => {
        this.statusesUpdate(text, media_id);
      });
    } else {
      alert("画像が指定されてないよ！");
    }
  }

  statusesUpdate(text, media_ids) {
    request
      .post(`${BASE_URL}/gosenoku_twitter/statuses_update`)
      .send({ status: text, media_ids: media_ids })
      .set('Accept', 'application/json')
      .end((error, res) => {
        if(error) throw error;

        alert('投稿完了!');
      });
  }

  async mediaUpdate(url, callback) {
    const result = await fetch(`${BASE_URL}/gosenoku_twitter/media_upload_by_url`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    });

    console.log('POST(mediaUpdate): ' + result._bodyText);

    if(result._bodyText) {
      callback(result._bodyText);
    }
  }
}
