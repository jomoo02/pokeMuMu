import { fetchSearchPoke } from './search-poke';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const inputText = searchParams.get('input-text') || '';
  const data = await fetchSearchPoke(inputText);

  return Response.json(data);
}
