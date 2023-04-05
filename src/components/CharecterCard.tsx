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
    <div className="card w-96 bg-base-100 shadow-xl" onClick={() => onClick()}>
      <figure className="avatar">
        <div className="h-40 w-40 rounded">
          <img src={image} alt={name} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {status !== "unknown" ?? (
            <div className="badge-secondary badge">{status}</div>
          )}
        </h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <div className="badge-info badge-outline badge">{species}</div>
          <div className="badge-accent badge-outline badge">{gender}</div>
        </div>
      </div>
    </div>
  );
}
