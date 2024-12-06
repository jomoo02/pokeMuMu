import dbConnect from '@/app/_lib/dbConnect';
import DetailV3Model from '@/app/models/Detail';
import type { Detail } from '@/app/models/detail.type';

export async function fetchPokeDetailWithPokeKey(pokeKey: string) {
  try {
    await dbConnect();

    const query = { pokeKey };
    const projection = { _id: 0 };

    const detail = await DetailV3Model
      .findOne(query, projection)
      .lean<Detail>();

    return detail;
  } catch (error) {
    console.error(error);
    return null;
  }
}
