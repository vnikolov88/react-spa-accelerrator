import { getCharecterById } from "@/features/rickAndMorty";
import { Button, Descriptions } from "antd";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function Loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  return await getCharecterById(Number(id));
}

export default function View() {
  const { id, name, species, status, type, gender, image, location, origin } =
    useLoaderData() as Awaited<ReturnType<typeof Loader>>;

  return (
    <div className="flex gap-4">
      <img src={image} alt={name} />
      <Descriptions title="Charecter Info">
        <Descriptions.Item label="Charecter ID">{id}</Descriptions.Item>
        <Descriptions.Item label="Name">{name}</Descriptions.Item>
        <Descriptions.Item label="Gender">{gender}</Descriptions.Item>
        <Descriptions.Item label="Species">{species}</Descriptions.Item>
        <Descriptions.Item label="Status">{status}</Descriptions.Item>
        <Descriptions.Item label="Type">{type}</Descriptions.Item>
        <Descriptions.Item label="location">{location.name}</Descriptions.Item>
        <Descriptions.Item label="Origin">{origin.name}</Descriptions.Item>
      </Descriptions>
      <Button type="primary">Go Back</Button>
    </div>
  );
}
