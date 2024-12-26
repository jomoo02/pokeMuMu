'use server';

import PokeV4Model from '@/app/models/PokeV4';
import dbConnect from '@/app/_lib/dbConnect';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import {
  checkTextLanguageKo,
  checkTextNumberType,
} from '../utils/input-type';

function setQuery(inputText: string) {
  const isNumber = checkTextNumberType(inputText);

  if (isNumber) {
    return { no: Number(inputText) };
  }

  const isTextLanguageKo = checkTextLanguageKo(inputText);

  if (isTextLanguageKo) {
    return { 'name.ko': { $regex: inputText, $options: 'i' } };
  }
  return { 'name.en': { $regex: inputText, $options: 'i' } };
}

export async function fetchSearchPoke(inputText: string) {
  try {
    await dbConnect();

    const query = setQuery(inputText);
    const projection = {
      name: 1,
      sprite: 1,
      types: 1,
      form: 1,
      order: 1,
      stats: 1,
      speciesName: 1,
      pokeKey: 1,
      no: 1,
      _id: 0,
    };

    const result = await PokeV4Model
      .find(query, projection)
      .sort({ order: 1 })
      .lean<PokedexPoke[]>();

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
