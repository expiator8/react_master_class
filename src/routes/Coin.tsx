import { useParams } from "react-router-dom";

// react-router-dom ver < 6.0
// interface RouterParams {
//   coinId: string;
// }

// function Coin() {
//   const { coinId } = useParams<RouterParams>();
//   console.log(coinId);
//   return <h1>Coin</h1>;
// }

function Coin() {
  const { coinId } = useParams();
  console.log(coinId);
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
