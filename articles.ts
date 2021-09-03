import axios from 'axios';
import fs from 'fs';

axios.get('https://notion-api.splitbee.io/v1/page/RU-037c78a058ab492abbe1ab42d4e42321').then(({ data }) => {
  fs.writeFileSync(`${__dirname}/public/RU-037c78a058ab492abbe1ab42d4e42321.json`, JSON.stringify(data));
});