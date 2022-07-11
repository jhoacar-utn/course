import { ComponentPropsWithoutRef } from "react";

type ParagraphProps = ComponentPropsWithoutRef<"p">;

function Paragraph({ className, ...rest }: ParagraphProps) {
  return <p {...rest} className={`mb-4${className ? " " + className : ""}`} />;
}

export default Paragraph;
