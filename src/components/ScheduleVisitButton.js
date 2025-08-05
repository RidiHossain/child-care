'use client'

import { Button } from '@/components/Button'
import { useModal } from '@/components/ModalContext'

export function ScheduleVisitButton({ variant = 'accent', size = 'lg', className, children = 'Schedule a Visit', ...props }) {
  const { openModal } = useModal()

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={openModal}
      {...props}
    >
      {children}
    </Button>
  )
} 