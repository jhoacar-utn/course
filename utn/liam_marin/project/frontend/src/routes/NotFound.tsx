import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import PokeSprite from "../components/PokeSprite";

function NotFound() {
  return (
    <div className="overflow-auto max-w-prose mx-auto px-4">
      <PokeSprite
        className="inline-block float-right border rounded-lg mt-6"
        spriteId={0}
      />
      <Heading>Not Found</Heading>
      <Paragraph>Maybe you wanted to enter a different page...? </Paragraph>
    </div>
  );
}

export default NotFound;
