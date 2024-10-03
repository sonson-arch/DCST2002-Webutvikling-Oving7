import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { Component } from 'react-simplified';
import { Alert, Card, Form, Button } from './widgets';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v2';

class Home extends Component {
  source = '';
  exitStatus: number | null = null;
  stdout = '';
  stderr = '';

  render() {
    return (
      <>
        <Card title="app.js">
          <Form.Textarea
            value={this.source}
            onChange={(event) => (this.source = event.currentTarget.value)}
            rows={4}
          />
          <Button.Success
            onClick={() => {
              axios
                .post<{ exitStatus: number; stdout: string; stderr: string }>('/run', {
                  language: 'js',
                  source: this.source,
                })
                .then((response) => {
                  this.exitStatus = response.data.exitStatus;
                  this.stdout = response.data.stdout;
                  this.stderr = response.data.stderr;
                })
                .catch((error: Error) => Alert.danger('Could not run app.js: ' + error.message));
            }}
          >
            Run
          </Button.Success>
        </Card>
        <Card title="Standard output">{this.stdout}</Card>
        <Card title="Standard error">{this.stderr}</Card>
        <Card title={'Exit status: ' + (this.exitStatus ?? '')}></Card>
      </>
    );
  }
}

let root = document.getElementById('root');
if (root)
  createRoot(root).render(
    <>
      <Alert />
      <Home />
    </>,
  );
