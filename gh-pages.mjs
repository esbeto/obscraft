import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/esbeto/obscraft', // Update to point to your repository
  user: {
   name: 'Heriberto Cantú', // update to use your name
   email: 'es.beto@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);