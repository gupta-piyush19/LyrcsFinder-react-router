import { React, useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [reqTerm, setReqTerm] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    history.push({
      pathname: "/songs",
      state: { reqTerm },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setReqTerm(e.target.value)} />
        <button type="submit">Find Songs</button>
      </form>
    </div>
  );
};

export default Home;
