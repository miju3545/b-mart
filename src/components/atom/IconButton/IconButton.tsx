import Link from "next/link";
import { CSSProperties, HTMLAttributes } from "react";

type Props = {
  icon: React.ReactNode;
  title?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
};
export function IconButton({ icon, title, href, style, ...rest }: Props) {
  return (
    <>
      {href !== undefined ? (
        <Link href={href} style={style} {...rest}>
          {icon}
          {title && <p>{title}</p>}
        </Link>
      ) : (
        <button type="button" style={style} {...rest}>
          {icon}
          {title && <p>{title}</p>}
        </button>
      )}
    </>
  );
}
