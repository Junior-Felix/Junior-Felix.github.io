import { Datetime } from "./Datetime";

interface Props {
  title: string;
  pubDatetime: Date;
  modDatetime: Date | null | undefined;
  description: string;
  href: string;
  secHeading?: boolean;
}
export function Card({
  title,
  pubDatetime,
  modDatetime,
  description,
  href,
  secHeading,
}: Props) {
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p>{description}</p>
    </li>
  );
}
