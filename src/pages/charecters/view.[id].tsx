import { getCharecterById } from "@/features/rickAndMorty";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

export async function Loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  return await getCharecterById(Number(id));
}

export default function View() {
  const navigate = useNavigate();
  const { id, name, species, status, type, gender, image, location, origin } =
    useLoaderData() as Awaited<ReturnType<typeof Loader>>;

  return (
    <div className="space-y-4">
      <button className="btn-primary btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="divider" />
      <h1 className="text-4xl font-bold">Charecter Info</h1>
      <div className="flex max-h-80 gap-4">
        <div className="avatar">
          <div className="h-40 w-40 rounded">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-10">
          <div className="flex flex-col text-2xl">
            <div className="badge">Charecter ID</div>
            {id}
          </div>
          <div className="flex flex-col text-2xl">
            <div className="badge">Name</div>
            {name}
          </div>
          <div className="flex flex-col text-2xl">
            <div className="badge">Gender</div>
            {gender}
          </div>
          <div className="flex flex-col text-2xl">
            <div className="badge">Species</div>
            {species}
          </div>
          <div className="flex flex-col text-2xl">
            <div className="badge">Status</div>
            {status}
          </div>
          <div className="flex flex-col text-2xl">
            <div className="badge">Type</div>
            {type}
          </div>
          <div className="flex flex-col text-2xl">
            <div className="badge">Location</div>
            {location.name}
          </div>
          <div className="flex flex-col text-2xl">
            <div className="badge">Origin</div>
            {origin.name}
          </div>
        </div>
      </div>
    </div>
  );
}
