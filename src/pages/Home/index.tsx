import { Card } from "../../components/Card";
import { data } from "../../data";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export { Home };
