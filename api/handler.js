import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the server handler
const serverPath = join(__dirname, '../dist/server/server.js');
const serverModule = await import(serverPath);
const handler = serverModule.default || serverModule;

export default async (req, res) => {
  try {
    // Convert Node request to fetch request
    const url = new URL(req.url, `http://${req.headers.host}`);

    const fetchRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    const response = await handler(fetchRequest);

    // Send response
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    res.send(await response.text());
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
