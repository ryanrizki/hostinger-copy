// Shared by the signup form and functions/api/signup.ts (ADR 0005).
export type Field = 'name' | 'email' | 'website' | 'agree';
export type Errors = Partial<Record<Field, string>>;

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

function isHttpUrl(s: string) {
  try {
    return ['http:', 'https:'].includes(new URL(s).protocol);
  } catch {
    return false;
  }
}

export function validateSignup(input: Record<string, unknown>): Errors {
  const errors: Errors = {};
  const name = str(input.name);
  const email = str(input.email);
  const website = str(input.website);

  if (name.length < 2 || name.length > 100) errors.name = 'Nama wajib diisi, 2 sampai 100 karakter.';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'Masukkan email yang valid, contoh: nama@domain.com.';
  if (website && (website.length > 200 || !isHttpUrl(website)))
    errors.website = 'Masukkan URL lengkap, contoh: https://blogku.com.';
  if (input.agree !== true) errors.agree = 'Centang persetujuan untuk melanjutkan.';

  return errors;
}
