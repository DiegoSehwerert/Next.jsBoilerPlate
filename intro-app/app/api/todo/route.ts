import { NextResponse } from 'next/server'
import db from '@/utils/db'
import { data } from 'autoprefixer'

export const GET = async (req: Request, res: Response) => {
  const todos = await db.todo.findMany({})
  return NextResponse.json({ data: todos })
}

export const POST = async (req: Request, res: Response) => {
  const data = await req.json()
  await db.todo.create({
    data: {
      content: data.content,
    },
  })
  return NextResponse.json({ message: data })
}
