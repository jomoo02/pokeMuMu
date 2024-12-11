import mongoose from 'mongoose';
import type { Poke } from '@/app/models/pokev4.type';

const PokeV4Scema = new mongoose.Schema<Poke>({
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
  label: String,
  moves: Array,
  speciesName: Object,
  forms: Array,
});

const PokeV4Model = mongoose.models?.PokeV4 || mongoose.model<Poke>('PokeV4', PokeV4Scema);

export default PokeV4Model;
