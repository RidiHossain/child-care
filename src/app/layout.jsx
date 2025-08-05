import '@/styles/tailwind.css'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'

import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { ModalProvider } from '@/components/ModalContext'
import { ScheduleVisitModal } from '@/components/ScheduleVisitModal'

import { getAllItems, getItemData } from '@/lib/getItems'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Bright Child Care - Licensed BC Child Care Center',
  description:
    'At Bright Child Care, we provide licensed BC child care in a safe, nurturing environment where children learn, play, and grow. Our ECE-certified caregivers create a loving atmosphere that promotes early childhood development.',
}

export default function RootLayout({ children }) {
  const allPrograms = getAllItems('programs')
  // Filter and sort programs in specific order: infant, toddler, preschool, multi-age
  const programOrder = ['infant', 'toddler-program', 'preschool', 'elementary-school']
  const programs = allPrograms
    .filter(program => programOrder.includes(program.slug))
    .sort((a, b) => programOrder.indexOf(a.slug) - programOrder.indexOf(b.slug))
  const contact = getItemData('contact', 'global')

  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <ModalProvider>
          <Header programs={programs} contact={contact} />
          {children}
          <CallToAction />
          <Footer programs={programs} contact={contact} />
          <ScheduleVisitModal />
        </ModalProvider>
      </body>
    </html>
  )
}
