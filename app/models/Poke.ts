import mongoose from 'mongoose';
import type { Poke } from './poke.type';

const PokeV3Scema = new mongoose.Schema<Poke>({
  sprite: String,
  name: Object,
  types: Array,
  form: String,
  stats: Object,
  order: Number,
  abilities: Array,
  breeding: Object,
  detail: Object,
  pokeKey: String,
  no: Number,
  id: Number,
  pokedexNumbers: Array,
});

const PokeV3Model = mongoose.models?.PokeV3 || mongoose.model<Poke>('PokeV3', PokeV3Scema);

export default PokeV3Model;
