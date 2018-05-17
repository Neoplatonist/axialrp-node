Server Side Rendering with Create React App
===========================================

__NOTE: This project is currently following the guidelines of the [Open-Gaming License (OGL)](http://dnd.wizards.com/articles/features/systems-reference-document-srd) that Wizards of the Coast kindly provides.__

This is v2.1 version of [Ben Lu's react app](https://github.com/ayroblu/ssr-cra-v2.1), checkout his article [here](https://medium.com/@benlu/ssr-with-create-react-app-v2-1-ee83fb767327).

Currently this app uses a javascript file as it's database for quick prototyping. This is located in src/pages/db.js . Eventually we will port this over to mongoDB or postgresql's json.

### For first time setup.
```bash
yarn install
```

### UI ReactJS Development
```bash
yarn start
```

### NodeJS + ReactJS Server Side Rendering
__NOTES: Currently does not work since I need to fix the SSR. Please use Development for now.__
#### Development
```bash
yarn build
yarn start:dev:server
```
#### Production
```bash
yarn build
yarn start:prod:server
```

Limitations
-----------
1. In development, you can't run server rendering. So to use server rendering, you have to run a build, making sure all the files are in the correct place before actually being able to view server side code
2. You need to run Create React App + Server seperately, especially for database related things, you need both, I could run concurrently, however, I like the nice output and followability you get from two seperate run processes
3. A lot of code is repeated or just kinda messy. There's a lot of states, and these need to be handled both server side and client side so they're duplicated.

D&D CharGen - DB Design with GraphQL + ReactJS
