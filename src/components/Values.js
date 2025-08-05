import Image from 'next/image'

import checkmark from '/public/images/illustrations/checkmark.svg'
import image from '/public/images/stock/values.jpg'

const values = [
  {
    value: 'Safety First',
    description:
      'We maintain the highest standards of safety and security. Our child care center is designed with your child\'s safety in mind, from secure entrances to age-appropriate equipment and constant supervision.',
  },
  {
    value: 'Nurturing Care',
    description:
      'Our caregivers provide warm, loving care that supports each child\'s emotional and social development. We create a secure environment where children feel valued, respected, and encouraged to explore.',
  },
  {
    value: 'Quality Education',
    description:
      'We offer developmentally appropriate learning experiences that prepare children for future success. Our programs focus on early literacy, numeracy, social skills, and creative expression through play-based learning.',
  },
  {
    value: 'Family Partnership',
    description:
      'We believe in strong partnerships with families. We maintain open communication, provide daily updates, and work together to support each child\'s growth and development.',
  },
]

export const Values = () => {
  return (
    <section className="-mt-8 bg-white px-4 sm:mt-0 sm:px-6 sm:py-4 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-3xl lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Section content */}
          <div className="flex flex-col justify-center">
            <h2 className="h2 text-purple-900 sm:text-center lg:text-left">
              Our core values and principles
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-purple-800 sm:text-center md:mt-5 lg:mx-0 lg:text-left">
              At Bright Child Care, our values guide everything we do. We believe in creating a safe, nurturing environment where children can learn, grow, and develop to their full potential. Our commitment to excellence ensures that every child receives the care and attention they deserve.
            </p>
            {/* Values */}
            <div className="mt-10 grid max-w-4xl gap-6 sm:mx-auto sm:grid-cols-2 lg:mx-0 lg:max-w-md lg:grid-cols-1">
              {values.map((item, index) => (
                <div key={`value-${index}`} className="flex">
                  <div className="w-14">
                    <Image src={checkmark} className="h-7 w-7" alt="" />
                  </div>
                  <div className="w-full">
                    <h5 className="flex items-center text-xl font-semibold text-purple-900">
                      {item.value}
                    </h5>
                    <p className="mt-1 text-base text-purple-800">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Section image */}
          <div className="mx-auto mt-16 w-full max-w-xl lg:mx-0 lg:mt-0 lg:max-w-none">
            <div className="aspect-h-4 aspect-w-3 relative">
              <Image
                className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                fill
                src={image}
                sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 50vw, (min-width: 576px) 36rem, 100vw"
                alt="Parent carrying child"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
