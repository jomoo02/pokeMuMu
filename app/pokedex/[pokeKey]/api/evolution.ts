import dbConnect from '@/app/_lib/dbConnect';
import EvolutionModel from '@/app/models/Evolution';
import type { Evolution } from '@/app/models/evolution.type';

export async function fetchPokeEvolution(pokeKey: string) {
  try {
    await dbConnect();

    const query = { pokeKeyList: pokeKey };
    const projection = { _id: 0 };

    const evolution = await EvolutionModel
      .findOne(query, projection)
      .lean<Evolution>();

    return evolution;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchPokeEvolutionAll() {
  try {
    await dbConnect();

    const query = { };
    const projection = { _id: 0 };

    const evolution = await EvolutionModel
      .find(query, projection)
      .sort({ id: 1 })
      .lean<Evolution[]>();

    return evolution;
  } catch (error) {
    console.error(error);
    return null;
  }
}