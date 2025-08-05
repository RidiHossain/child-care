import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import dotsGrid from '/public/images/illustrations/dots-large-grid.svg'
import arrow from '/public/images/illustrations/arrow-right-over.svg'

const linkColors = [
  'bg-purple-50',
  'bg-yellow-200',
  'bg-rose-50',
  'bg-teal-50',
  'bg-blue-50',
]

const links = [
  {
    label: 'Community',
    href: '#0',
    description: 'Join the parent-teacher group chat',
    icon: 'messages',
  },
  {
    label: 'Child Care Checklist',
    href: '#0',
    description: 'Confidently choose the best program for your child',
    icon: 'listCheck',
  },
  {
    label: 'Meal Program',
    href: '#0',
    description: 'Learn about our healthy food program',
    icon: 'meat',
  },
  {
    label: 'Covid Response',
    href: '#0',
    description: "Learn what we're doing to keep your child safe",
    icon: 'virus',
  },
  {
    label: 'School Gallery',
    href: '/gallery',
    description: 'View our school gallery',
    icon: 'photo',
  },
]

export const ParentsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-25 to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Background decorations */}
      <Image
        src={dotsGrid}
        alt=""
        className="absolute right-0 top-12 h-auto w-72 transform opacity-25 lg:opacity-40"
        priority
      />
      <Image
        src={dotsGrid}
        alt=""
        className="absolute -left-36 bottom-36 h-auto w-72 transform opacity-40"
        priority
      />
      {/* Container */}
      <div className="mx-auto max-w-xl lg:grid lg:max-w-screen-xl lg:grid-cols-12 lg:gap-8">
        {/* Section header text */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <div>
            <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
              Now enrolling for preschool
            </span>
          </div>
          <div className="relative">
            <h1 className="h1 mt-4 max-w-xl text-purple-900 sm:mt-5 lg:max-w-none">
              Stay in the loop
            </h1>
            {/* Arrow to links */}
            <Image
              src={arrow}
              className="absolute -top-3 hidden w-14 rotate-12 transform md:-right-8 md:w-32 xl:block"
              alt=""
            />
          </div>
          <p className="mt-3 max-w-2xl text-xl leading-loose text-purple-800 sm:mt-4">
            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
            porta. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi.
          </p>
          {/* Enroll CTA*/}
          <div className="mt-10 font-semibold lg:mt-12">
            <p className="text-purple-800">Not enrolled in our school?</p>
            <Button href="#0" size="sm" className="mt-2 sm:mt-3">
              Enroll today
              <Icon
                icon="arrowNarrowRight"
                className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
              />
            </Button>
          </div>
        </div>
        {/* Important parent links container */}
        <div className="relative mt-12 sm:mt-16 lg:col-span-7 lg:mt-0 xl:pl-12">
          {/* Important links */}
          <div className="relative mx-auto w-full auto-rows-fr sm:grid sm:grid-cols-4 sm:gap-6 md:max-w-3xl lg:max-w-lg lg:grid-cols-2 lg:gap-5">
            {links.slice(0, 5).map((link, index) => (
              <Link
                href={link.href}
                key={`parent-link-${index}`}
                className={clsx(
                  'group flex w-full transform flex-col justify-center rounded-2xl p-8 shadow-lg duration-300 ease-in-out hover:scale-105 sm:col-span-2 lg:col-span-1',
                  index > 0 && 'mt-6 sm:mt-0',
                  index % 2 == 1 && 'lg:translate-y-28',
                  index == 4 && 'sm:col-start-2',
                  linkColors[index % 5],
                )}
              >
                {/* Link description */}
                <div className="flex-1">
                  <Icon
                    icon={link.icon}
                    className="h-10 w-10 text-purple-700"
                  />

                  <p className="mt-4 text-xl font-semibold text-purple-900">
                    {link.label}
                  </p>
                  <p className="mt-2 text-sm text-purple-800">
                    {link.description}
                  </p>
                </div>
                <div className="mt-6 flex w-full justify-end">
                  <Icon
                    icon="chevronsRight"
                    className="h-6 w-6 text-purple-500 duration-300 ease-in-out hover:text-purple-600 group-hover:animate-horizontal-bounce"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
