import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// interface nameState {
//   name: string;
// }

// interface RouteState {
//   state: nameState;
// }
interface IRouteState {
  state: {
    name: string;
  };
}

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation() as IRouteState;
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [priceinfo, setPriceInfo] = useState({});
  useEffect(() => {
    // const infoData = fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // const priceData = fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading.."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
