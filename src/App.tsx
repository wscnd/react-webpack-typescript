import { ClickCounter } from "./ClickCounter";
import IMAGE from "./react.png";
import "./styles.css";

export const App = () => {
  return (
    <>
      <h1>React Typescript Webpack Template</h1>
      <h2>
        {process.env.NODE_ENV}: {process.env.name}
      </h2>
      <img src={IMAGE} alt={"React Logo"} width="300" height="200" />
      <ClickCounter />
    </>
  );
};
