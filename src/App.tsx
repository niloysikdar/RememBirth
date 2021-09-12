import { data } from "./data";

const App = () => {
  return (
    <div>
      {data.map((item) => (
        <h2>{item.name}</h2>
      ))}
    </div>
  );
};

export { App };
