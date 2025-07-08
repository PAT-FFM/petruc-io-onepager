export default async (req, context) => {
  console.log(context.?geo.?city + " / " + context.?ip);
  console.log(req.?headers);
};
