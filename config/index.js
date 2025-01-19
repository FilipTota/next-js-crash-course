const dev = process.env.NODE_ENV !== "production";
console.log("process.env.NODE_ENV :>> ", process.env.NODE_ENV);

export const server = dev ? "http://localhost:3000" : "https://yourwebsite.com";
