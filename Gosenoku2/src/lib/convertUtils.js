import React from 'react';
import request from 'superagent';
import { Image } from 'react-native';
import Expo from 'expo';
import getBlobImg from './getBlobImg';

const BASE_URL = 'https://api.gosen-oku-en.tokyo';

export function convertText(text, callback) {
  request
    .post(`${BASE_URL}/gosenoku_text/text`)
    .send({ body: text })
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err) throw err;

      console.log('GET(text): ' + res.body.body);

      callback(res.body.body);
    });
}

export async function convertImg(img, callback) {
  const result = await fetch(`${BASE_URL}/gosenoku_image/img`, {
    method: 'POST',
    body: getBlobImg(img, 'file'),
    header: { 'content-type': 'multipart/form-data' }
  });

  const path = JSON.parse(result._bodyInit).path

  console.log('GET(image): ' + `${BASE_URL}/${path.slice(16)}`);

  callback(`${BASE_URL}/${path.slice(16)}`);
};
