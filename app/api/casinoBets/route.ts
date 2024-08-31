import { NextResponse } from 'next/server';
import casinoBets from '@/data/casinoBets.json';

export async function GET() {
    return NextResponse.json(casinoBets);
}
