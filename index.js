const express = require('express');
const app = express();
const ytdl = require('ytdl-core');

app.use(express.static('public'));

app.listen(4000, () => {
  console.log('Server Works !!! At port 4000');
});

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/download', (req, res) => {
  var URL = req.query.URL;
  // const URL = 'https://www.youtube.com/watch?v=ZnmEfn4t6pM';

  ytdl
    .getInfo(URL)
    .then(info => {
      // console.log(info.title);
      res.header('Content-Disposition', `attachment; filename="video.mp4"`);
      return Promise.resolve(info);
    })
    .then(info => {
      ytdl.downloadFromInfo(info).pipe(res);
    });
});
