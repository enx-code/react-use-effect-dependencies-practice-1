import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

//App.js
export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });
  console.log(dataType);

  // Write code here.
  useEffect(() => {
    if (dataType === "") {
      setData(null);
      return;
    }
    fetch(`https://swapi-new.herokuapp.com/api/${dataType}/`)
      .then((res) => res.json())
      .then((apiData) => setData(apiData));
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}