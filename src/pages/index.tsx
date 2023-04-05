export const Loader = () => "Route loader";
export const Action = () => "Route action";
export const Catch = () => (
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">An error occurred</h1>
        <p className="py-6">
          This page is not available. Please check the URL and try again.
        </p>
        <a className="btn-primary btn" href="/">
          Go home
        </a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <main>
      <section className="p-4">
        <h1 className="text-center text-2xl font-bold text-blue-400">
          Welcome to the React + TypeScript + TailwindCSS + Ant Design Starter
        </h1>
      </section>
      <hr />
      <section>
        <article className="space-x-4 p-4"></article>
        <article className="p-4"></article>
      </section>
    </main>
  );
}

export default App;
