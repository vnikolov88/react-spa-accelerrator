import { DatePicker } from "antd";

export const Loader = () => "Route loader";
export const Action = () => "Route action";
export const Catch = () => <div>Route errorrrrrr</div>;

function App() {
  return (
    <main>
      <h1 className="text-2xl text-blue-400">Hello Vite + React!</h1>
      <DatePicker.RangePicker />
    </main>
  );
}

export default App;
