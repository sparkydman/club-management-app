# club-management-app
A club management application with node/postgres.
User can create club and become admin of the club. 
Admin invites user through email and can remove member

### Instructions
Rename the .env.example to .env and fill the variables apropriately
`
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
DATABASE_URL=
SMTP_HOST=
SMTP_PORT= 
SMTP_USER=
SMTP_PASS=
`

`cd frontend` and `npm install` to install frontend dependence.
`npm start` starts frontend

`cd ...` and `npm install` to install backend dependence.
`npm run dev` I used nodemon globally for monitoring app changes

