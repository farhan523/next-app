// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.ip)
  const userIp = req.headers['x-forwarded-for'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.status(200).json({ ip: userIp });
}
