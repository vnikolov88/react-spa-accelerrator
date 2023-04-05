type Props = {
  className: string;
  onChange: (page: number) => void;
  totalItems: number;
  current: number;
  pageSize?: number;
};

export default function Pagination(props: Props) {
  const { className, onChange, totalItems, current, pageSize = 20 } = props;
  const numberOfPages = Math.ceil(totalItems / pageSize);

  const suroundingPages = 3;

  const pages = Array.from({ length: numberOfPages }).map((_, index) => {
    const page = index + 1;
    if (
      page === 1 ||
      page === numberOfPages ||
      (page >= current - suroundingPages && page <= current + suroundingPages)
    ) {
      return (
        <button
          className={`btn-md btn ${page! === current ? "btn-active" : ""}`}
          onClick={() => onChange(page!)}
        >
          {page!}
        </button>
      );
    }
    if (
      page === current - (suroundingPages + 1) ||
      page === current + (suroundingPages + 1)
    ) {
      return <span className="btn-ghost btn-md btn">...</span>;
    }
    return undefined;
  });

  return <div className={`btn-group ${className}`}>{pages}</div>;
}
