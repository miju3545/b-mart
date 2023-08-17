import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  title?: string;
};
export function IconButton({ icon, title, ...rest }: Props) {
  return (
    <button type="button" {...rest}>
      {icon}
      {title && <p>{title}</p>}
    </button>
  );
}
