import { HomeHero } from '@/components/HomeHero'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { StaffAssurances } from '@/components/StaffAssurances'
import { Faqs } from '@/components/Faqs'

import { getAllItems } from '@/lib/getItems'

export const metadata = {
  title: 'Bright Child Care - Licensed BC Child Care Center',
  description:
    'At Bright Child Care, we provide licensed BC child care in a safe, nurturing environment where children learn, play, and grow. Our ECE-certified caregivers create a loving atmosphere that promotes early childhood development.',
}

export default function HomePage() {
  const faqs = getAllItems('faqs')

  return (
    <>
      <HomeHero />
      {/* Gradient background transition */}
      <div className="h-40 w-full bg-gradient-to-b from-purple-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <StaffAssurances />
      <FeaturedPrograms />
      <Faqs faqs={faqs} />
    </>
  )
}
