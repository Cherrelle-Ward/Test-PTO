import Calendar from "../Calendar";

interface MyProps {
  thisMonth: Date;
  range: any;
  setRange: any;
}

const Booking = ({ thisMonth, range, setRange }: MyProps) => {
  return (
    <div>
      <h2>Book PTO</h2>
      {<Calendar thisMonth={thisMonth} range={range} setRange={setRange} />}
    </div>
  );
};

export default Booking;
