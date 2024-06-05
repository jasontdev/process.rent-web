import {useEffect, useState} from "react";

function App() {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/agreement/12345');
      const payload = await response.text();
      setUserId(payload);
    })();
  }, []);

  return (
    <>
      {userId}
    </>
  )
}

export default App
