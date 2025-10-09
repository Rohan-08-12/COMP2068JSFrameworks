// LAB03 Node.js Simple Calculator using Connect
// Name: Rohan Rohan

const connect = require('connect');
const http = require('http');
const app = connect();

// Handle /lab2 route
app.use('/lab3', (req, res) => {
  // Parse the full URL to access query parameters
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Extract query params
  const method = (url.searchParams.get('method') || '').toLowerCase();
  const x = parseFloat(url.searchParams.get('x'));
  const y = parseFloat(url.searchParams.get('y'));

  // Validate inputs
  if (!method || isNaN(x) || isNaN(y)) {
    res.end(
      'Error: Missing or invalid parameters.\nExample: /lab2?method=add&x=16&y=4'
    );
    return;
  }

  let result;
  let symbol;

  // Perform the math operation
  switch (method) {
    case 'add':
      result = x + y;
      symbol = '+';
      break;
    case 'subtract':
      result = x - y;
      symbol = '-';
      break;
    case 'multiply':
      result = x * y;
      symbol = '*';
      break;
    case 'divide':
      if (y === 0) {
        res.end('Error: Division by zero is not allowed.');
        return;
      }
      result = x / y;
      symbol = '/';
      break;
    default:
      res.end(
        'Error: Invalid method. Use one of: add, subtract, multiply, divide.'
      );
      return;
  }

  // Display result
  res.end(`${x} ${symbol} ${y} = ${result}`);
});

// Optional: Root route for help
app.use('/', (req, res) => {
  res.end(
    'LAB03 Node.js Simple Calculator\n' +
      'Use this format:\n' +
      '/lab2?method=add|subtract|multiply|divide&x=16&y=4\n' +
      'Examples:\n' +
      '/lab2?method=add&x=16&y=4\n' +
      '/lab2?method=subtract&x=16&y=4\n' +
      '/lab2?method=multiply&x=16&y=4\n' +
      '/lab2?method=divide&x=16&y=4\n'
  );
});

// Start the server
const PORT = 3000;
http.createServer(app).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
