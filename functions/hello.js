export default function handler(request, response) {
    const { name } = process.env;
    response.status(200).json({
        message: "Hello from the serverless function!",
        name
    });
  }