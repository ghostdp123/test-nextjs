import { neon } from '@neondatabase/serverless'

export default async function Page() {
  const sql = neon(`${process.env.DATABASE_URL}`)
  const comments = await sql`SELECT * FROM comments`
  // console.log(comments)
  return (
    <div>
      hello page 01
      { comments.map((item) => <div key={item.id}>{item.comment}</div>) }
    </div>
  )
}