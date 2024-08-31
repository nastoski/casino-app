import { NextResponse } from 'next/server';
import pagesData from '@/data/pagesData.json';

export async function GET() {
    return NextResponse.json(pagesData);
}
