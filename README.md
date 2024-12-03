
# Create Toolpad App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-toolpad-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

Run `npx auth secret` to generate a secret and replace the value in the .env.local file with it.

Add the CLIENT_ID and CLIENT_SECRET from your OAuth provider to the .env.local file.

## Getting Started

First, run the development server: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





Cristina N. Figueroa Rosado
Team K: UPRM Calendar Generator Platform



Database SetUp


Heroku Config Info
Connection information for default credential. Connection info string:

dbname=dq6db7ajaevpu
host=cbhk6rs82poqi7.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com
port=5432
user=u81nmk983vqrv5
password=p4899752666dd731fc935302bcf403ec5e550ea98505e1efe9a8b105f263ad0b0
sslmode=require
Connection URL: postgres://u81nmk983vqrv5:p4899752666dd731fc935302bcf403ec5e550ea98505e1efe9a8b105f263ad0b0@cbhk6rs82poqi7.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dq6db7ajaevpu


Heroku rotates credentials periodically and updates applications where this database is attached.

Host
cbhk6rs82poqi7.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com
Database
dq6db7ajaevpu
User
u81nmk983vqrv5
Port
5432
Password
p4899752666dd731fc935302bcf403ec5e550ea98505e1efe9a8b105f263ad0b0
URI
postgres://u81nmk983vqrv5:p4899752666dd731fc935302bcf403ec5e550ea98505e1efe9a8b105f263ad0b0@cbhk6rs82poqi7.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dq6db7ajaevpu
Heroku CLI
heroku pg:psql postgresql-animated-00710 --app calendaruprm