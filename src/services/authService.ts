import axios from "axios";

const postLogin = (credentials: { email: string; password: string }) => {
  const response = axios.post(
    "http://calsoftone-1869940870.ap-south-1.elb.amazonaws.com/user/loginUser",
    credentials,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

export default postLogin;
