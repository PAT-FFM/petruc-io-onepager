export default async (req, context) => {
  console.log(context.geo.city + " / " + context.ip + " / " + req.headers.get("User-Agent"));
  return new URL(req.url);
};

export const config = { path: "/*" };
