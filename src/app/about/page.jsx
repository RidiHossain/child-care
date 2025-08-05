import { AboutHero } from '@/components/AboutHero'
import { AlternatingFeatures } from '@/components/AlternatingFeatures'
import { Staff } from '@/components/Staff'
import { Values } from '@/components/Values'

export const metadata = {
  title: 'About us - Bright Child Care',
  description:
    "Learn about Bright Child Care's mission, philosophy, and dedicated team. Explore our commitment to providing safe, nurturing child care and supporting each child's development.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* Gradient background transition */}
      <div className="h-32 w-full bg-gradient-to-b from-purple-25 to-white sm:h-40 lg:h-44" />

      <AlternatingFeatures />
      <Staff />
      <Values />
    </>
  )
}
