import dbConnect from '@/app/_lib/dbConnect';
import PokeV4Model from '@/app/models/PokeV4';
import type { Poke, NavPoke } from '@/app/models/pokev4.type';

export async function fetchPokeWithPokeKey(pokeKey: string) {
  try {
    await dbConnect();

    const query = { pokeKey };
    const projection = { _id: 0 };

    const pokeList = await PokeV4Model
      .find(query, projection)
      .sort({ order: 1 })
      .lean<Poke[]>();

    return pokeList;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchSurroundingPoke(pokeKey: string) {
  try {
    await dbConnect();
    const query = { pokeKey };
    const projection = { no: 1 };

    const poke = await PokeV4Model
      .findOne(query, projection)
      .lean<Poke>();

    if (!poke) {
      return {
        before: null,
        next: null,
      };
    }

    const { no } = poke;

    const projection2 = {
      speciesName: 1,
      no: 1,
      pokeKey: 1,
      _id: 0,
    };

    const beforePoke = await PokeV4Model
      .findOne({ no: no - 1 }, projection2)
      .lean<NavPoke>();

    const nextPoke = await PokeV4Model
      .findOne({ no: no + 1 }, projection2)
      .lean<NavPoke>();

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
