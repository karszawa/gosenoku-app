import twitter from 'twitter';
import fs from 'react-native-fs';

export default class Twitter {
  constructor() {
    this.client = new twitter({
      consumer_key: '4DAvEFuBIROGOd1NnDPC4Ycc7',
      consumer_secret: 'kGgAyrL1YTGDNR8soBIzor4in2wagiUisCqxrM7agWOksa17Ir',
      access_token_key: '431604453-KR1OrdJzrMs4kHlpz4zkJxfM6ZIpdlIMazZw6cl6',
      access_token_secret: 'ph7u22sjptf51K2UDTkFF9zZ3p5gkDe2yJQSQlOXthc9n',
    });
  }

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
      fs.readFile(img, (error, data) => {
        if(error) throw error;

        this.mediaUpdate(body, (media_id) => {
          this.statusesUpdate(text, media_id);
        });
      });
    }
  }

  statusesUpdate(text, media_ids) {
    this.client.post('statuses/update', { status: text, media_ids: media_ids }, (error, tweet, response) => {
      if(error) throw error;

      console.log(tweet)
    });
  }

  mediaUpdate(data, callback) {
    this.client.post('media/upload', { media: data }, (error, tweet, response) => {
      if(error) throw error;

	    console.log(tweet);
	    console.log(response);

      callback(JSON.parse(response.body).media_id);
    });
  }
}
