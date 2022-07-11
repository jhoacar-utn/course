import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import PokeSprite from "../components/PokeSprite";

function Home() {
  return (
    <div className="max-w-prose mx-auto px-4">
      <Heading>Home</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        accusamus deleniti adipisci, dolore magnam velit, minus architecto
        obcaecati ipsum laudantium accusantium dolores maiores quo corrupti quia
        nesciunt id vel voluptatem.
      </Paragraph>
      <Heading>Pokémon</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        architecto dignissimos ullam! Accusamus voluptates corrupti voluptas
        distinctio obcaecati. Veniam fuga omnis sit beatae quos veritatis
        pariatur vitae deleniti at temporibus! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iusto et perspiciatis quo repellendus
        reiciendis nam, in ipsum repudiandae deleniti aliquam quaerat impedit,
        nostrum aspernatur cumque adipisci hic quas. Veritatis, dolor!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem unde
        eos alias magni corrupti. Voluptatum amet, omnis, hic suscipit unde
        temporibus iste, esse praesentium ducimus tenetur alias ipsam expedita
        ipsa! Cupiditate quisquam qui debitis eos quod, unde illo dolorem
        blanditiis ut pariatur nulla, hic sunt sed. Veritatis esse cupiditate
        sint, enim necessitatibus optio voluptates sit. Culpa dolorem ex officia
        tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident non ullam obcaecati dolorem laboriosam, vitae ipsum!
        Explicabo, ullam eveniet. Necessitatibus exercitationem asperiores
        quibusdam ipsa, deserunt distinctio eum quae pariatur aspernatur.
      </Paragraph>
      <Heading>Images</Heading>
      <div className="max-w-fit mx-auto grid grid-cols-3 gap-6 border rounded-lg p-4">
        {[...Array(9)].map((_, i) => (
          <PokeSprite className="block" key={i} spriteId={i + 1} />
        ))}
      </div>
    </div>
  );
}

export default Home;
