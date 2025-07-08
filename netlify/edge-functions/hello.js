export default async (req, context) => {
  console.log(context.geo.city + " / " + context.ip + " / " + req.headers.get("User-Agent"));
  return new Response("Hello, World!", {
    headers: { "content-type": "text/html" }
  });
};

export const config = { path: "/hello" };
