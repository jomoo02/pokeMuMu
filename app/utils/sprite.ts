function getHomePokeSpriteSrc(sprite: string) {
  const src = `https://raw.githubusercontent.com/jomoo02/poke_sprites/refs/heads/main/home/${sprite}.png`;

  return src;
}

export {
  getHomePokeSpriteSrc,
};
