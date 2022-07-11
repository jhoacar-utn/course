import Heading from "./Heading";
import Paragraph from "./Paragraph";

function Footer() {
  return (
    <div className="border-t mt-12 px-4">
      <footer className="container lg:flex justify-around gap-6 mx-auto">
        <section className="flex-1">
          <Heading>Github</Heading>
          <Paragraph>
            This website's code is hosted on GitHub, go check it out!
          </Paragraph>
          <a
            className="block w-fit border rounded-lg border-gray-900 hover:bg-gray-100 active:bg-gray-200 px-3 py-1"
            href="https://github.com/jhoacar-utn/course/tree/master/utn/liam_marin/project"
          >
            Visit GitHub
          </a>
        </section>
        <section className="flex-1">
          <Heading>Copyright (?)</Heading>
          <Paragraph>
            Permission to use, copy, modify, and/or distribute this software for
            any purpose with or without fee is hereby granted, provided that the
            above copyright notice and this permission notice appear in all
            copies.
          </Paragraph>
        </section>
        <section className="flex-1">
          <Heading>Placeholder</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            inventore eveniet doloremque odio, nesciunt, temporibus fugit
            exercitationem ut labore porro nihil ipsa voluptas aut ipsam. Minus
            facere enim corrupti impedit!
          </Paragraph>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
