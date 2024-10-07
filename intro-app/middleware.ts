import { NextResponse } from 'next/server'

export const middleware = (request) => {
  return NextResponse.redirect(new URL('/home', request.url))
}

export default middleware

export const config = {
  matcher: ['/todos'],
}
