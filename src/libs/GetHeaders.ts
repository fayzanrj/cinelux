
const getHeaders = () => {
    return {
        "Content-Type": "application/json",
        accessToken: process.env.USER_API_ACCESS_TOKEN!,
      };
}

export default getHeaders