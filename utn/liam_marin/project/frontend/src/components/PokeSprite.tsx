import type { ComponentPropsWithoutRef } from "react";

interface PokeSpriteProps extends Omit<ComponentPropsWithoutRef<"img">, "src"> {
  spriteId: number;
}

function PokeSprite({ spriteId, ...rest }: PokeSpriteProps) {
  return (
    <img
      {...rest}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteId}.png`}
    />
  );
}

export default PokeSprite;
