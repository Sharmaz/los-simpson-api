import http from 'http';

const PORT = process.env.PORT || 3000;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Los Simpson\n');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
