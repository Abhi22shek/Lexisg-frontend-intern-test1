import { FileText } from 'lucide-react'
import React from 'react'

const EmptyState = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
      <div className="text-center">
        <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Ready to Assist
        </h3>
        <p className="text-gray-600">
          Enter your legal query above to receive detailed analysis with citations.
        </p>
      </div>
    </div>
  )
}

export default EmptyState