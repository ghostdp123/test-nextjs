import db from "@/lib/db"
import { NextResponse } from 'next/server'

export async function GET() {
  const result = await db('SELECT * FROM products')
    return NextResponse.json({
      code: 0,
      data: result
    })
}