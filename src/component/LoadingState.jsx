import { Loader2 } from 'lucide-react'
import React from 'react'

const LoadingState = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-500" />
        <p className="text-gray-600">Analyzing your legal query...</p>
      </div>
    </div>
  )
}

export default LoadingState