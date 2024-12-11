import dbConnect from '@/app/_lib/dbConnect';
import PokeV4Model from '@/app/models/PokeV4';
import type { Poke } from '@/app/models/pokev4.type';

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
      name: 1,
      order: 1,
      no: 1,
      pokeKey: 1,
      _id: 0,
    };

    const beforePoke = await PokeV4Model
      .findOne({ no: no - 1 }, projection2)
      .lean<Poke>();

    const nextPoke = await PokeV4Model
      .findOne({ no: no + 1 }, projection2)
      .lean<Poke>();

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

// export async function fetchSurroundingPoke(pokeKey: string) {
//   try {
//     await dbConnect();

//     const projection = { _id: 0 };

//     const beforeQuery = { order: { $lt: order }, pokeKey: { $ne: pokeKey } };

//     const beforetOptions = { sort: { order: -1 } };

//     const nextQuery = { order: { $gt: order }, pokeKey: { $ne: pokeKey } };

//     const nextOptions = { sort: { order: 1 } };

//     const beforePoke = await PokeV4Model.findOne(
//       beforeQuery,
//       projection,
//       beforetOptions,
//     ).lean<Poke>();

//     const nextPoke = await PokeV4Model.findOne(
//       nextQuery,
//       projection,
//       nextOptions,
//     ).lean<Poke>();

//     return {
//       before: beforePoke || null,
//       next: nextPoke || null,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       before: null,
//       next: null,
//     };
//   }
// }
