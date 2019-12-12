## Expensify-App
A hobby project that helps users to keep track of all their expenses at one place. A user can add their expenses , edit and delete it. It also gives them options to filter, sort, add their expenses.

Deployed on Heroku: https://react-expensify-pravin.herokuapp.com


## Requirements
* Node
* Git

## Common Setup
Clone the repo and install the dependencies.
```bash
git clone https://github.com/prwinkmr/expensify-app.git
cd expensify-app
```
```bash
npm install
```
## Setup environment variables
Create two files in the root directory ```.env.development``` and ```.env.test```  and fill up the following content from the firebase config. If possible create separate databases for testing and development. 
```
FIREBASE_API_KEY = AIzaSyAOtKfy8dww54_doy
FIREBASE_AUTH_DOMAIN = <your-app>.firebaseapp.com
FIREBASE_DATABASE_URL = https://<your-app>.firebaseio.com
FIREBASE_PROJECT_ID = expensify-test-3123
FIREBASE_STORAGE_BUCKET = 
FIREBASE_MESSAGING_SENDER_ID = 32972940
FIREBASE_APP_ID = 1:329045f3e57cbeeb
```
For Production add the above key-value pairs as environment variables.

## Start Development Server
**Start dev-server**
```bash
npm run dev-server
```
*Open [http://localhost:8080](http://localhost:8080)*

**Start Express server**
```bash
npm run build:dev
npm start
```
*Open [http://localhost:3000](http://localhost:3000)*

## Start Production Server
**Start Express server**
```bash
npm run build:prod
npm start
```
*Open [http://localhost:3000](http://localhost:3000)*

## Testing
```bash
npm test
```

