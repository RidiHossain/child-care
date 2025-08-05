import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request) {
  try {
    const formData = await request.json()
    
    // Add timestamp to the submission
    const submission = {
      ...formData,
      submittedAt: new Date().toISOString(),
      id: Date.now().toString()
    }
    
    // Path to the submissions file
    const submissionsPath = path.join(process.cwd(), 'data', 'submissions.json')
    
    // Create data directory if it doesn't exist
    const dataDir = path.dirname(submissionsPath)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    
    // Read existing submissions or create empty array
    let submissions = []
    if (fs.existsSync(submissionsPath)) {
      const fileContent = fs.readFileSync(submissionsPath, 'utf8')
      submissions = JSON.parse(fileContent)
    }
    
    // Add new submission
    submissions.push(submission)
    
    // Write back to file
    fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2))
    
    return NextResponse.json({ success: true, id: submission.id })
  } catch (error) {
    console.error('Error saving submission:', error)
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
  }
} 