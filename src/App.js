import Homepage from "./Cmp/Homepage/Homepage";
import Signup from "./Cmp/Signup/Signup";
import Login from "./Cmp/Login/Login";
import NotFound from "./Cmp/NotFound/NotFound";

import {
  BrowserRouter as MyRouter,
  Routes,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{
  const design = (
    <>
      <MyRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MyRouter>
    </>
  );
  return design;
}

export default App;