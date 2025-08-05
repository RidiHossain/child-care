import Image from 'next/image'
import { Fragment } from 'react'

import image1 from '/public/images/stock/school-grid-01.jpg'
import image2 from '/public/images/stock/school-grid-02.jpg'
import image3 from '/public/images/stock/school-grid-03.jpg'
import image4 from '/public/images/stock/school-grid-04.jpg'
import image5 from '/public/images/stock/school-grid-05.jpg'

const images = [
  { src: image1, alt: 'Child laughing with teacher' },
  { src: image2, alt: 'Teacher portrait' },
  { src: image3, alt: 'Teacher reading to students' },
  { src: image4, alt: 'Child writing on board with teacher' },
  { src: image5, alt: 'Classroom' },
]

export function AboutHero() {
  return (
    <section className="bg-purple-25 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Page header */}
        <div className="relative">
          <h2 className="h1 mx-auto max-w-3xl text-center text-purple-900">
            Why Bright Child Care
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-purple-800 sm:mt-5">
            At Bright Child Care, we believe every child deserves a nurturing environment where they can learn, play, and grow. Our experienced caregivers create a safe, loving atmosphere that supports each child's unique development.
          </p>
        </div>
        {/* School images grid */}
        <div className="mt-14 grid grid-flow-row-dense grid-cols-2 gap-2 sm:mt-16 sm:grid-cols-3 sm:gap-3 md:gap-4 lg:mt-24 lg:gap-6">
          {images.map((image, index) => (
            <Fragment key={`gallery-image-${index}`}>
              {index % 5 == 1 && (
                <Image
                  className="col-span-2 h-30vw w-full rounded-2xl object-cover object-top lg:h-80"
                  priority={true}
                  alt={image.alt}
                  src={image.src}
                  sizes="(min-width: 1280px) 52.875rem, (min-width: 640px) 66vw, 100vw"
                />
              )}

              {index % 5 != 1 && (
                <Image
                  className="h-30vw w-full rounded-2xl object-cover lg:h-80"
                  alt={image.alt}
                  src={image.src}
                  sizes="(min-width: 1280px) 25.75rem, (min-width: 640px) 33vw, 50vw"
                />
              )}
            </Fragment>
          ))}
        </div>
        {/* About child care center */}
        <div className="prose prose-lg mx-auto mt-14 sm:prose-xl sm:mt-16 lg:mt-24">
          <p>
            Bright Child Care was founded with a simple mission: to provide the highest quality child care in a safe, nurturing environment. We understand that choosing child care is one of the most important decisions parents make, and we take that responsibility seriously.
          </p>
          <p>
            Our child care center serves children from 8 months to 6 years old, offering age-appropriate programs that support each child's development. We maintain small group sizes and low child-to-caregiver ratios to ensure individual attention and care. Our experienced caregivers are passionate about early childhood development and create a loving atmosphere where children feel safe, valued, and encouraged to explore and learn.
          </p>
        </div>
      </div>
    </section>
  )
}
