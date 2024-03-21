'use client'

import { type ElementRef, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import styles from './search.module.css'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    <div className={styles['modal-backdrop']}>
      <dialog ref={dialogRef} className={styles.modal} onClose={onDismiss}>
        {children}
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label, react/button-has-type */}
        <button onClick={onDismiss} className={styles['close-button']} />
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  )
}
