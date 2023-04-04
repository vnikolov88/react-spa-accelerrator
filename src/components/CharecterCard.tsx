import { Card } from "antd";

type Props = {
  id: number;
  name: string;
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "unknown" | "Female" | "Male" | "Genderless";
  image: string;
  onClick: () => void;
};

export default function CharecterCard(props: Props) {
  const { image, name, status, species, type, gender, onClick } = props;

  return (
    <Card
      hoverable
      onClick={onClick}
      style={{ width: 240 }}
      cover={<img alt="example" src={image} />}
    >
      <Card.Meta title={name} description={status} />
      <Card.Meta title={species} description={type} />
      <p>{gender}</p>
    </Card>
  );
}
