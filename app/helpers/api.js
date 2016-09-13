import Frisbee from 'frisbee';

const api = new Frisbee({
  baseURI: 'https://api.vk.com/method',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
});

export default api;
