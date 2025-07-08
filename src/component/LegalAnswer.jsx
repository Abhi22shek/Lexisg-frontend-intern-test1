import React from 'react'

const LegalAnswer = ({answer}) => {
  return (
     <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Legal Analysis</h2>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default LegalAnswer