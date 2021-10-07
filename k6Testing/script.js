import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '15s', target: 1000 },
    { duration: '30s', target: 1000 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1000']
  }
};

export default () => {
  http.get('http://127.0.0.1:3000/qa/questions?product_id=1000011');
  sleep(1);
};


// 'http://127.0.0.1:3000/qa/questions/3518963/answers'
// 'http://127.0.0.1:3000/qa/questions?product_id=1000011'