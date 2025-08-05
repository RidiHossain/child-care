import fs from 'fs'
import path from 'path'

async function getSubmissions() {
  try {
    const submissionsPath = path.join(process.cwd(), 'data', 'submissions.json')
    
    if (fs.existsSync(submissionsPath)) {
      const fileContent = fs.readFileSync(submissionsPath, 'utf8')
      const submissions = JSON.parse(fileContent)
      return submissions.reverse() // Show newest first
    }
    
    return []
  } catch (error) {
    console.error('Error reading submissions:', error)
    return []
  }
}

export default async function SubmissionsPage() {
  const submissions = await getSubmissions()
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Tour Submissions
            </h1>
            
            {submissions.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <p className="text-lg">No submissions yet</p>
                  <p className="text-sm mt-2">Form submissions will appear here</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {submissions.map((submission) => (
                  <div key={submission.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {submission.firstName} {submission.lastName}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {new Date(submission.submittedAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Parent Information</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Email:</strong> {submission.email}</p>
                          <p><strong>Phone:</strong> {submission.phone || 'Not provided'}</p>
                          <p><strong>Relationship:</strong> {submission.relationship || 'Not specified'}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Child Information</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Name:</strong> {submission.childFirstName} {submission.childLastName}</p>
                          <p><strong>Date of Birth:</strong> {submission.childDOB || 'Not provided'}</p>
                          <p><strong>Requested Start Date:</strong> {submission.requestedStartDate || 'Not specified'}</p>
                        </div>
                      </div>
                    </div>
                    
                    {submission.message && (
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-900 mb-2">Message</h4>
                        <p className="text-sm text-gray-600 whitespace-pre-wrap">{submission.message}</p>
                      </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          Submitted: {new Date(submission.submittedAt).toLocaleString()}
                        </span>
                        <a 
                          href={`mailto:${submission.email}?subject=Schedule Tour Request - ${submission.firstName} ${submission.lastName}`}
                          className="text-sm text-purple-600 hover:text-purple-500"
                        >
                          Reply via Email
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 