import dbConnect from '@/app/_lib/dbConnect';
import PokeV3Model from '@/app/models/Poke';
import type { Poke } from '@/app/models/poke.type';

export async function fetchPokeWithPokeKey(pokeKey: string) {
  try {
    await dbConnect();

    const query = { pokeKey };
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

export async function fetchSurroundingPoke(pokeKey: string, order: number) {
  try {
    await dbConnect();

    const projection = { _id: 0 };

    const beforeQuery = { order: { $lt: order }, pokeKey: { $ne: pokeKey } };

    const beforetOptions = { sort: { order: -1 } };

    const nextQuery = { order: { $gt: order }, pokeKey: { $ne: pokeKey } };

    const nextOptions = { sort: { order: 1 } };

    const beforePoke = await PokeV3Model.findOne(
      beforeQuery,
      projection,
      beforetOptions,
    ).lean<Poke>();

    const nextPoke = await PokeV3Model.findOne(
      nextQuery,
      projection,
      nextOptions,
    ).lean<Poke>();

    return {
      before: beforePoke || null,
      next: nextPoke || null,
    };
  } catch (error) {
    console.error(error);
    return {
      before: null,
      next: null,
    };
  }
}
