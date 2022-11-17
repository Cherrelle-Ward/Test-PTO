//date picker
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface MyProps {
  thisMonth: Date;
  range: any;
  setRange: any;
}

const Calendar = ({ thisMonth, range, setRange }: MyProps) => {
  let label = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      label = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      label = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }
  return (
    <div>
      <DayPicker
        mode="range"
        defaultMonth={thisMonth}
        selected={range}
        footer={label}
        onSelect={setRange}
      />
    </div>
  );
};

export default Calendar;
