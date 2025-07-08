import { FileText } from 'lucide-react'
import React from 'react'
import CitationItem from './CitationItem'

const CitationSection = ({citations}) => {
  return (
    <div className='bg-white rounded-lg shadow-sm border borde-gray-200'>
        <div className='px-6 py-4 border border-b-gray-200 '>
            <h3 className='text-lg font-semibold text-gray-900 flex items-center'>
                <FileText className='w-4 h-4 mr-2' />
                {citations.text}
            </h3>
        </div>
         <div className="px-6 py-4">
        <div className="space-y-4">
          {citations.map((citation, index) => (
            <CitationItem key={index} citation={citation} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CitationSection