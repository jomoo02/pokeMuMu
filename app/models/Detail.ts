import mongoose from 'mongoose';
import type { Detail } from './detail.type';

const DetailV3Scema = new mongoose.Schema<Detail>({
  pokeKey: String,
  chainIndex: Number,
  forms: Array,
  speciesName: Object,
  moves: Array,
});

const DetailV3Model = mongoose.models?.DetailV3 || mongoose.model<Detail>('DetailV3', DetailV3Scema);

export default DetailV3Model;
