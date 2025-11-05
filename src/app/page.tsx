import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <SignedOut>
      <SignUpButton mode='modal'>Sign up</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  )
}

export default Home