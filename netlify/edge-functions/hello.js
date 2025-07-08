export default async (req, context) => {
  console.log(req.url + " from " + context.geo.city + " / " + context.ip + " with " + req.headers.get("User-Agent"));
};

export const config = { path: "/*" };
