import {useState, useEffect} from "react";

/**
 * Real url ->https://platform.antares.id:8443/~/antares-cse/antares-id/WaterTankMonitoring/test1/la
 * Proxy url ->http://localhost:8010/proxy/~/antares-cse/antares-id/WaterTankMonitoring/test1/la
*/

const url = "https://platform.antares.id:8443/~/antares-cse/antares-id/WaterTankMonitoring/test1/la";
const config = {
  method : "GET",
  headers: {
    'X-M2M-Origin' : 'bc164da433b9bf84:0bd7e2f026c8ce80',
    'Content-Type' : 'application/json;ty=4',
    'Accept' : 'application/json'
  }
};

function GetData()
{
  const [Data, setData] = useState([0]);

  const dataFetching = async () => {
    const raw = await fetch(url, config);
    const data = await raw.json();
    setData(data["m2m:cin"].con);
    console.log('success :', data["m2m:cin"].con)
  }

  dataFetching();
  useEffect(() => {
    const autoRefresh = setInterval(dataFetching,5000);
    return () => clearInterval(autoRefresh)
  });

  const objData = JSON.parse(Data);

  return objData
}

export default GetData