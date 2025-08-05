import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/Icon'
import { getAllItems } from '@/lib/getItems'

export const Staff = () => {
  const allStaff = getAllItems('staff')
  const director = allStaff.find(member => member.data.role === 'Executive Director')

  return (
    <section id="team">
      {/* Purple background section with integrated content */}
      <div className="bg-purple-600 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Director image */}
            <div className="order-2 lg:order-1">
              <div className="mx-auto max-w-md lg:max-w-lg">
                <div className="relative w-80 h-80 mx-auto overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={director.data.image}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 25rem, (min-width: 640px) 20rem, 100vw"
                    alt={director.data.name}
                  />
                </div>
                
                {/* Director info below image */}
                <div className="mt-6 text-center">
                  <p className="font-semibold text-xl text-white">
                    {director.data.name}
                  </p>
                  <p className="text-purple-100 font-medium mt-1">
                    {director.data.role}
                  </p>
                  {/* Social links */}
                  <div className="flex justify-center space-x-3 mt-4">
                    {director.data.social.map((socialLink, j) => (
                      <Link
                        key={`director-social-link-${j}`}
                        href={socialLink.href}
                      >
                        <Icon
                          icon={socialLink.name}
                          className="h-5 w-5 text-purple-100 transition ease-in-out hover:text-white"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="h2 text-white">
                Meet our Director
              </h3>
              <p className="mt-5 text-xl leading-relaxed text-purple-50">
                Our Executive Director leads our child care center with passion and dedication, ensuring the highest standards of care and education for every child in our programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
