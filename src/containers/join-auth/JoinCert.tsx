'use client'

import CertificateBtn from '@/components/CertificateBtn'
import { useState } from 'react'
import AuthModal from './AuthModal'

export default function JoinCert() {
  const [isClicked, setIsClicked] = useState(false)

  const handleIsClicked = (value: boolean) => {
    setIsClicked(value)
  }

  return !isClicked ? (
    <>
      <div className="px-5 py-[15px] bg-[#f8f8f8]">
        <h3 className="text-sm">본인인증</h3>
      </div>
      <CertificateBtn onToggle={handleIsClicked} />
    </>
  ) : (
    <AuthModal />
  )
}
