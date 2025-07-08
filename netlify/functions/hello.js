export default async (req: Request) => {
  //const url = new URL("/welcome", req.url);
  //const res = await fetch(url);
  //return someTransformationFunction(res);
  console.log("hallo");
};

export const config = { path: "/hello" };
