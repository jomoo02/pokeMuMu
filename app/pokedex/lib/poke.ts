import dbConnect from '@/app/_lib/dbConnect';
import PokeV3Model from '@/app/models/Poke';
import type { Poke } from '@/app/models/poke.type';

export async function fetchPokeList() {
  try {
    await dbConnect();

    const query = {};
    const projection = { _id: 0 };

    const pokeList = await PokeV3Model
      .find(query, projection)
      .sort({ order: 1 })
      .lean<Poke[]>();

    return pokeList;
  } catch (error) {
    console.error(error);
    return [];
  }
}
