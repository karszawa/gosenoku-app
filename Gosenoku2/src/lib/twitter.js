// import twitter from 'twitter';
// import fs from 'react-native-fs';
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
      const data = await fetch(url);

      this.mediaUpdate(data, (media_id) => {
        this.statusesUpdate(text, media_id);
      });
    } else {
      // fs.readFile(img, (error, data) => {
      //   if(error) throw error;
      //
      //   this.mediaUpdate(data, (media_id) => {
      //     this.statusesUpdate(text, media_id);
      //   });
      // });
    }
  }

  statusesUpdate(text, media_ids) {
    // this.client.post('statuses/update', { status: text, media_ids: media_ids }, (error, tweet, response) => {
    //   if(error) throw error;
    //
    //   console.log(tweet)
    // });
    request
      .post(`${BASE_URL}/gosenoku_twitter/statuses_update`)
      .send({ status: text, media_ids: media_ids })
      .set('Accept', 'application/json')
      .end((error, res) => {
        if(error) throw error;

        alert('Posted!');
      });
  }

  async mediaUpdate(data, callback) {
    // this.client.post('media/upload', { media: data }, (error, tweet, response) => {
    //   if(error) throw error;
    //
	  //   console.log(tweet);
	  //   console.log(response);
    //
    //   callback(JSON.parse(response.body).media_id);
    // });

    const result = await fetch(`${BASE_URL}/gosenoku_twitter/media_update`, {
      method: 'POST',
      body: getBlobImg(img, 'file'),
      header: { 'content-type': 'multipart/form-data' }
    });

    callback(result.media_id);

    // request
    //   .post(`${BASE_URL}/gosenoku_twitter/media_update`)
    //   .send({ file: data })
    //   .set('Accept', 'application/json')
    //   .end((error, res) => {
    //     if(error) throw error;
    //
    //     callback(res);
    //   });
  }
}
