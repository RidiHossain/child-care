'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import { useModal } from '@/components/ModalContext'

export function ScheduleVisitModal() {
  const { isModalOpen, closeModal } = useModal()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    relationship: '',
    childFirstName: '',
    childLastName: '',
    childDOB: '',
    requestedStartDate: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send form data to Resend API
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        
        // Reset form after a short delay
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            relationship: '',
            childFirstName: '',
            childLastName: '',
            childDOB: '',
            requestedStartDate: '',
            message: ''
          })
          setSubmitStatus(null)
          closeModal()
        }, 4000)
      } else {
        const errorData = await response.json()
        console.error('API error:', errorData)
        setSubmitStatus('error')
      }
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      relationship: '',
      childFirstName: '',
      childLastName: '',
      childDOB: '',
      requestedStartDate: '',
      message: ''
    })
    setSubmitStatus(null)
  }

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <Icon icon="x" className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Icon icon="calendar" className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                      Schedule a Visit
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please fill out the form below and we'll contact you to schedule your visit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Icon icon="checkmark" className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                          Thank you! Your visit request has been submitted successfully.
                        </h3>
                        <p className="mt-2 text-sm text-green-700">
                          We'll contact you within 3-5 business days to schedule your visit.
                        </p>
                        <p className="mt-1 text-xs text-green-600">
                          If you don't hear from us within 5 business days, please contact us directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Icon icon="x" className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          There was an error submitting your request.
                        </h3>
                        <p className="mt-2 text-sm text-red-700">
                          Please try again or contact us directly at ridihossain52@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">
                      Relationship to Child
                    </label>
                    <select
                      name="relationship"
                      id="relationship"
                      value={formData.relationship}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                    >
                      <option value="">Select relationship</option>
                      <option value="parent">Parent</option>
                      <option value="guardian">Guardian</option>
                      <option value="grandparent">Grandparent</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="childFirstName" className="block text-sm font-medium text-gray-700">
                        Child's First Name
                      </label>
                      <input
                        type="text"
                        name="childFirstName"
                        id="childFirstName"
                        value={formData.childFirstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="childLastName" className="block text-sm font-medium text-gray-700">
                        Child's Last Name
                      </label>
                      <input
                        type="text"
                        name="childLastName"
                        id="childLastName"
                        value={formData.childLastName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="childDOB" className="block text-sm font-medium text-gray-700">
                        Child's Date of Birth
                      </label>
                      <input
                        type="date"
                        name="childDOB"
                        id="childDOB"
                        value={formData.childDOB}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="requestedStartDate" className="block text-sm font-medium text-gray-700">
                        Requested Start Date
                      </label>
                      <input
                        type="date"
                        name="requestedStartDate"
                        id="requestedStartDate"
                        value={formData.requestedStartDate}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      placeholder="Tell us about your child care needs..."
                    />
                  </div>

                  <div className="mt-5 sm:mt-4 flex justify-end space-x-3">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={resetForm}
                      disabled={isSubmitting}
                    >
                      Reset
                    </Button>
                    <Button
                      type="submit"
                      variant="accent"
                      size="sm"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} 