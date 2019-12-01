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

  api.get('/db/url', (req, res) => {
    res.json({ url: `${process.env.DB_HOST}:${process.env.DB_PORT}`});
  });

  api.get('/users', (req, res) => {
    const filter = {};
    
    db.collection('users')
      .find(filter)
      .toArray()
      .then(users => res.json({ users: users }))
      .catch(error => console.log(error));
  });

  return api;
}
