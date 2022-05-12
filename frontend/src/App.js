import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Employees} from "./pages/Employees";
import {EmployeeDetails} from "./pages/EmployeeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employees/>} />
      </Routes>
    </BrowserRouter>
  )
}

export {App};
