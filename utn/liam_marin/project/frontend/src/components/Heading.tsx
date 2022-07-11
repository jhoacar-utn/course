import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h2">;

function Heading({ className, ...rest }: HeadingProps) {
  return (
    <h1
      {...rest}
      className={`text-2xl mt-6 mb-4${className ? " " + className : ""}`}
    />
  );
}

export default Heading;
