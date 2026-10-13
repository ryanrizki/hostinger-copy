import { validateSignup } from '../../src/lib/validate';

export const onRequestPost = async ({ request }: { request: Request }) => {
  if (Number(request.headers.get('content-length')) > 10_000) return new Response(null, { status: 413 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ errors: {} }, { status: 400 });
  }
  if (!body || typeof body !== 'object') return Response.json({ errors: {} }, { status: 400 });

  const errors = validateSignup(body as Record<string, unknown>);
  if (Object.keys(errors).length) return Response.json({ errors }, { status: 400 });

  // ponytail: mock, nothing stored. Add a KV/D1 binding when signups must persist.
  return Response.json({ ok: true });
};
