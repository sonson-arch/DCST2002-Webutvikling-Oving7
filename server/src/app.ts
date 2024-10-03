import express from 'express';
import router from './router';
import path from 'path';

/**
 * Express application.
 */
const app = express();

app.use(express.json());

// Serve static files from the client/public directory
app.use(express.static(path.join(__dirname, '../../client/public')));

// Since API is not compatible with v1, API version is increased to v2
app.use('/api/v2', router);

export default app;
