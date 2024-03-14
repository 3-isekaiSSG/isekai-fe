/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client'

// eslint-disable-next-line import/no-extraneous-dependencies
import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginForm() {
  const { data: session } = useSession()
  if (session)
    return (
      <>
        <h1>Kakao</h1>

        <p
          onClick={() => signIn('kakao')}
          className="cursor-pointer w-32 h-12 bg-yellow-500 text-white text-center leading-12 rounded-md"
        >
          kakao login
        </p>
        <p onClick={() => signOut()}>sign out</p>
      </>
    )
}
