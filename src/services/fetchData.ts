import axios from "axios";

const getInfo = async (token: string) => {
  const response = await axios.get(
    "http://calsoftone-1869940870.ap-south-1.elb.amazonaws.com/job?limit=300",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

export default getInfo;
