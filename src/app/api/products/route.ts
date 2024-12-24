import db from "@/lib/db"
import { NextResponse } from 'next/server'

export async function GET() {
  const result = await db('SELECT * FROM products')
  return NextResponse.json({
    status: 200,
    body: 'get products success',
    data: result
  })
}