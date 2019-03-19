const express = require('express');
const app = express();
const ytdl = require('ytdl-core');

app.listen(4000, () => {
  console.log('Server Works !!! At port 4000');
});

app.get('/download', (req, res) => {
  // var URL = req.query.URL;
  const URL = 'https://www.youtube.com/watch?v=ZnmEfn4t6pM';
  // console.log(URL);
  res.header('Content-Disposition', 'attachment; filename="test.mp4"');
  ytdl.getInfo(URL, (err, info) => {
    ytdl.downloadFromInfo(info).pipe(res);
  });
});
