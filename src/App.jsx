import { useState } from "react";
import "./css/App.css";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return <Button type="primary">hi</Button>;
}

export default App;
