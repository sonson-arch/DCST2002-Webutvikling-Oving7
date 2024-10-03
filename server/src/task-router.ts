import express from 'express';
import taskService from './task-service';
import childProcess from 'child_process';

/**
 * Express router containing task methods.
 */
const router = express.Router();

// New route for running code in a Docker container
router.post('/run', (req, res) => {
  if (typeof req.body.language == 'string' && typeof req.body.source == 'string') {
    let stdout = '';
    let stderr = '';
    const process = childProcess.spawn('docker', [
      'run',
      '--rm',
      'node:latest', // Use the official Node.js image
      'node',
      '-e',
      req.body.source,
    ]);
    process.stdout.on('data', (data) => {
      stdout += data;
    });
    process.stderr.on('data', (data) => {
      stderr += data;
    });
    process.on('close', (exitStatus: number) => {
      res.send({ exitStatus: exitStatus, stdout: stdout, stderr: stderr });
    });
  } else res.status(400).send('Missing properties');
});

export default router;
