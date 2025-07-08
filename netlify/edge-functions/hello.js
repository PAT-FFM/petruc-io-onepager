export default async (req, context) => {
  if (req.url && (req.url == "https://petruc.io/" || req.url == "https://petruc.io/impressum")) {
    console.log(req.url + " from " + context.geo.city + " / " + context.ip + " with " + req.headers.get("User-Agent"));
  }
};

export const config = { path: "/*" };
