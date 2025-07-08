export default async (req, context) => {
  console.log(context.geo.city + " / " + context.ip + " / " + req.headers.get("User-Agent"));
};

export const config = { path: "/hello" };
