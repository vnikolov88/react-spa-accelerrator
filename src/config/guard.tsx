import { matchPath, Navigate, useLocation, useMatches } from "react-router-dom";

import { useAuth } from "@/context";

const PRIVATE = ["/charecters/view/:id"];
const PUBLIC = ["/login"];

export const Guard = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const auth = useAuth();
  const location = useLocation();
  const marches = useMatches();

  const authedOnPublicPath = auth.token && PUBLIC.includes(location.pathname);
  const unAuthedOnPrivatePath =
    !auth.token &&
    PRIVATE.some((path) =>
      marches.some((match) => matchPath(path, match.pathname))
    );

  if (authedOnPublicPath) return <Navigate to="/" replace />;
  if (unAuthedOnPrivatePath)
    return (
      <Navigate
        to={`/login?returnTo=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );

  return <>{children}</>;
};
