export default function handler(request, response) {
  const { name } = process.env;
  setTimeout(() => {
    response.status(200).json({
      message: "Hello from the serverless function!",
      name,
    });
  }, 10000);
}
