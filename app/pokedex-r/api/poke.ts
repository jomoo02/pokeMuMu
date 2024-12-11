import dbConnect from '@/app/_lib/dbConnect';
import PokeV4Model from '@/app/models/PokeV4';
import type { PokedexPoke } from '@/app/models/pokev4.type';

export async function fetchPokedexList() {
  try {
    await dbConnect();

    const query = {};
    const projection = {
      name: 1,
      form: 1,
      no: 1,
      sprite: 1,
      types: 1,
      pokeKey: 1,
      stats: 1,
      order: 1,
      _id: 0,
    };

    const pokeList = await PokeV4Model
      .find(query, projection)
      .sort({ order: 1 })
      .lean<PokedexPoke[]>();

    return pokeList;
  } catch (error) {
    console.error(error);
    return [];
  }
}
