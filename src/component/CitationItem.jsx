import { ExternalLink } from 'lucide-react'
import React from 'react'

const CitationItem = ({citation, index}) => {
  return (
    <div className='border-l-4 border--gray-300 pl-4'>
        <p className='text-gray-700 mb-2 italic'>"{citation.text}"</p>
        <div className='flex items-center justify-between'>
             <span className="text-sm text-gray-600 font-medium">
                Source: {citation.source}
            </span>

            <a
                href={citation.link}
                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                <ExternalLink className="w-4 h-4 mr-1" />
                View Document
        </a>
        </div>
    </div>
  )
}

export default CitationItem