import mongoose from 'mongoose';
import type { Evolution } from './evolution.type';

const EvolutionScema = new mongoose.Schema<Evolution>({
  maxWidth: Number,
  maxDepth: Number,
  chain: Array,
  pokeKeyList: Array,
  id: Number,
});

EvolutionScema.index({ pokeKeyList: 1 });

const EvolutionModel = mongoose.models?.Evolution || mongoose.model<Evolution>('Evolution', EvolutionScema);

export default EvolutionModel;
