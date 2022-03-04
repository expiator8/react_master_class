import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

// react-router-dom ver < 6.0
// function Router() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/:coinId">
//           <Coin />
//         </Route>
//         <Route path="/">
//           <Coins />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
