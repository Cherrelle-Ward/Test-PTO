import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
//date
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

//components
import Header from "./components/Header";
import Nav from "./components/navbar/Nav";
import Summary from "./components/pages/Summary";
import Booking from "./components/pages/Booking";
import Approvals from "./components/pages/Approvals";
import Footer from "./components/Footer";

const App = () => {
  // date
  const thisMonth: Date = new Date();
  const defaultSelected: DateRange = {
    from: thisMonth,
    to: addDays(thisMonth, 2),
  };
  const [range, setRange]: any = useState<DateRange | undefined>(
    defaultSelected
  );

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route
            path="/book"
            element={
              <Booking
                thisMonth={thisMonth}
                range={range}
                setRange={setRange}
              />
            }
          />
          <Route path="/approvals" element={<Approvals />} />
        </Routes>
      </Router>
      <Header />

      <Footer />
    </div>
  );
};

export default App;
