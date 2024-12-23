import db from "@/lib/db"
import { NextResponse } from "next/server"
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  const result = await db('SELECT * FROM products WHERE id = $1', [id])
  return NextResponse.json({
    code: 0,
    data: result[0]
  })
}