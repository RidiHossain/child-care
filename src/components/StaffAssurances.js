import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import checkmark from '/public/images/illustrations/checkmark.svg'

import { getAllItems } from '@/lib/getItems'

const assurances = [
  'Early childhood education training and experience',
  'Background checks and safety certifications',
  'A love and passion for nurturing children',
  'A commitment to creating a safe, positive environment',
  'Ongoing professional development and training',
]

export const StaffAssurances = () => {
  const featuredStaff = getAllItems('staff').filter(
    (member) => member.data.featured,
  )

  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 xl:grid-cols-11 xl:gap-24">
          {/* Text content */}
          <div className="flex flex-col justify-center lg:order-2 lg:col-span-1 xl:col-span-6">
            <div>
              <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                Your kids are in good hands
              </span>
            </div>
            <h2 className="h2 mt-4 text-purple-900 sm:mt-5">
              Meet our experienced child care team
            </h2>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-purple-800 md:mt-5">
              Our caregivers are dedicated to providing a safe, nurturing environment where your child can learn, play, and grow. Each member of our team is carefully selected, trained, and passionate about early childhood development.
            </p>
            {/* Teacher qualifications box */}
            <div className="relative mt-16 max-w-4xl rounded-xl bg-yellow-100 sm:mt-14">
              <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-600 shadow-md sm:left-10">
                <Icon icon="certificate" className="h-8 w-8 text-purple-50" />
              </span>
              <div className="mt-2 px-4 py-10 sm:px-10 sm:py-12">
                <p className="text-lg font-semibold text-purple-900 sm:text-xl">
                  At Bright Child Care, we pride ourselves on the quality of our caregivers.
                  You can expect the following from our team:
                </p>
                {/* Teacher qualifications list */}
                <ul className="mt-5 space-y-5 text-lg text-purple-800">
                  {assurances.map((assurance, index) => (
                    <li
                      key={`assurance-${index}`}
                      className="flex items-center"
                    >
                      <Image
                        className="mr-3 h-7 w-7 flex-shrink-0"
                        src={checkmark}
                        alt=""
                      />
                      <span>{assurance}</span>
                    </li>
                  ))}
                </ul>
                {/* Link to team section */}
                <Button
                  href="/about#team"
                  variant="accent"
                  size="sm"
                  className="mt-10"
                >
                  Meet the rest of the team
                  <Icon
                    icon="arrowNarrowRight"
                    className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
                    stroke={2}
                  />
                </Button>
              </div>
            </div>
          </div>
          {/* Featured teachers section */}
          <div className="mx-auto grid w-full gap-10 sm:mx-0 sm:max-w-none sm:grid-cols-2 sm:gap-8 lg:order-1 lg:col-span-1 lg:mt-20 lg:gap-4 xl:col-span-5 xl:gap-8">
            {featuredStaff.map((member, index) => (
              <div
                key={`featured-member-${index}`}
                className={clsx(index % 2 == 0 && 'lg:-translate-y-20')}
              >
                <div className="aspect-h-2 aspect-w-3 relative rounded-3xl bg-yellow-50 sm:aspect-h-4 sm:aspect-w-3">
                  <Image
                    className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-md"
                    fill
                    src={member.data.portraitImage}
                    sizes="(min-width: 1280px) 15.6rem, (min-width: 1024px) 20.8vw, (min-width: 640px) 17rem, 100vw"
                    alt={member.data.name}
                  />
                </div>
                <div className="mt-3.5 pl-2 text-lg sm:pl-0 sm:text-center">
                  <p className="font-semibold tracking-wide text-purple-800">
                    {member.data.name}
                  </p>
                  <p className="text-base font-medium text-purple-600">
                    {member.data.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
