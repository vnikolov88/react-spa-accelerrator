import CharecterCard from "@/components/CharecterCard";
import Pagination from "@/components/Pagination";
import { getAllCharecters } from "@/features/rickAndMorty";
import {
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

export async function Loader({ params }: LoaderFunctionArgs) {
  const { currentPage } = params;
  const currentPageNumber = Number(currentPage) || 0;
  return {
    currentPageNumber,
    data: await getAllCharecters(currentPageNumber),
  };
}

export default function Index() {
  const navigate = useNavigate();
  const {
    currentPageNumber,
    data: { info, results },
  } = useLoaderData() as Awaited<ReturnType<typeof Loader>>;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Charecters</h1>
      <Pagination
        className="flex justify-center"
        onChange={(page) => {
          navigate(`/charecters/${page}`);
        }}
        current={currentPageNumber}
        pageSize={20}
        totalItems={info.count}
      />
      {results && (
        <ul className="flex flex-wrap gap-4">
          {results.map(({ id, image, name, status, gender, species, type }) => (
            <li key={id}>
              <CharecterCard
                id={id}
                name={name}
                image={image}
                status={status}
                gender={gender}
                species={species}
                type={type}
                onClick={() => {
                  navigate(`/charecters/view/${id}`);
                }}
              />
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}
