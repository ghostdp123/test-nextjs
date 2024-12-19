import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

const sql = neon(`${process.env.DATABASE_URL}`)

export async function GET() {
  const result = await sql('SELECT * FROM comments')
  return NextResponse.json({
    code: 0,
    data: result
  })
}

export async function POST(request: Request) {
  const { comment } = await request.json()
  const result = await sql('INSERT INTO comments (comment) VALUES ($1)', [comment])
  if (result) {
    return NextResponse.json({
      code: 0
    })
  } else {
    return NextResponse.json({
      code: -1
    })
  }
}

export async function PUT(request: Request) {
  const { comment } = await request.json()
  const result = await sql('UPDATE comments SET comment = $1 WHERE id = 3', [comment])
  if (result) {
    return NextResponse.json({
      code: 0
    })
  } else {
    return NextResponse.json({
      code: -1
    })
  }
}

export async function DELETE(request: Request) {
  const searchParams = new URL(request.url).searchParams
  const id = searchParams.get('id')
  const result = await sql('DELETE FROM comments WHERE id = $1', [id])
  if (result) {
    return NextResponse.json({
      code: 0
    })
  } else {
    return NextResponse.json({
      code: -1
    })
  }
}