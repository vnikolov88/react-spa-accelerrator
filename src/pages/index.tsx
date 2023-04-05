import { Button, Card, Col, DatePicker, Divider, Result, Row } from "antd";

export const Loader = () => "Route loader";
export const Action = () => "Route action";
export const Catch = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong. But no worries we caught it."
    extra={
      <Button type="primary" href="/">
        Go Back
      </Button>
    }
  />
);

function App() {
  return (
    <main>
      <section className="p-4">
        <h1 className="text-center text-2xl font-bold text-blue-400">
          Welcome to the React + TypeScript + TailwindCSS + Ant Design Starter
        </h1>
      </section>
      <Divider />
      <section>
        <article className="space-x-4 p-4">
          <DatePicker.RangePicker />
          <DatePicker.QuarterPicker />
          <DatePicker.MonthPicker
            placeholder="Crash the app"
            status="error"
            onOpenChange={() => {
              throw Error("test");
            }}
          />
        </article>
        <article className="p-4">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </article>
      </section>
    </main>
  );
}

export default App;
