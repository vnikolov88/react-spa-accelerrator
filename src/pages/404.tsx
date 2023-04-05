export default function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">
            The page you are looking for does not exist. You may have mistyped
            the
          </p>
          <a className="btn-primary btn" href="/">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
