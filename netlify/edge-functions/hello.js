export default async (req, context) => {
  console.log(context.geo.city + "/" + context.ip);
};
export const config = { path: "/hello" };
