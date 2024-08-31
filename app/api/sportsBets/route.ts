import { NextResponse } from 'next/server';
import sportsBets from '@/data/sportsBets.json';

export async function GET() {
    return NextResponse.json(sportsBets);
}
