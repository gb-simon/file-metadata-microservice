const Express = require('express');
const multer = require('multer');
require('dotenv').config();

const app = Express();
const storage = multer.memoryStorage();
const upload = multer({ storage });
const port = process.env.PORT || 8000;

app.set('view engine', 'pug');
app.use(Express.static(`${__dirname}/public`));
app.get('/', (req, res) => {
  res.render('index');
});
app.post('/upload', upload.single('file0'), function (req, res) {
  if (!req.file) res.sendStatus(400);
  else res.json({ size: req.file.size });
});

app.listen(port, () => console.log(`server listening on port ${port}`));

module.exports = app;
