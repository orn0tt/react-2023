import { useEffect, useState } from "react";

function Hora() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div>
      <h1>Hora Atual:</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Hora;
