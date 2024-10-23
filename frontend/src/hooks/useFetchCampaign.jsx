
import { useEffect, useState } from "react";

//fetch the data of the campaign and return the response object  --> custom hook
const useFetchCampaign = () => {
    let [camps, setCamps] = useState(null);
    useEffect(() => {
      const getCampaign = async () => {
        const res = await fetch("http://localhost:3012/camp/info", {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        });
  
        const parsedRes = await res.json();
        setCamps(parsedRes);
      };
      getCampaign();
    }, []);


  return camps;
  
}

export default useFetchCampaign;
