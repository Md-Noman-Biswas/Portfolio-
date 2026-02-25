import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Message received.' }, { status: 200 });
}
