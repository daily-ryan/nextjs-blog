export default function handler(req, res) { //Do Not Fetch an API Route from getStaticProps or getStaticPaths, https://nextjs.org/learn/basics/api-routes/api-routes-details
  res.status(200).json({ text: 'Hello' });

  // from client can post to this api. api can directly write to db
}