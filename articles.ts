// import axios from 'axios';
import fs from 'fs';

const articles = [
  'RU-037c78a058ab492abbe1ab42d4e42321',
  'EN-82f109578b5b470ea0800f38d5b09fe4',
];

(async () => {
  for (let a = 0; a < articles.length; a++) {
    const article = articles[a];
    // axios.get(`https://notion-api.splitbee.io/v1/page/${article}`).then(({ data }) => {
    //   fs.writeFileSync(`${__dirname}/public/${article}.json`, JSON.stringify(data));
    // });
  }
})();
