import { Router } from 'express';
import { version } from '../../package.json';

export default ({ config, db }) => {
  const api = Router();


  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  api.get('/hello', (req, res) => {
    res.json({ greeting: "world" });
  });

  return api;
}
