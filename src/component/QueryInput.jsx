import { Loader2, Send } from "lucide-react";
import React from "react";

const QueryInput = ({ query, setQuery, onSubmit, onClear, isLoading, hasResponse }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
      <div>
        <label htmlFor="legal-query" className="block text-sm font-medium text-gray-700 mb-3">
          Legal Query
        </label>
        <textarea
          id="legal-query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your legal question or describe your case..."
          className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 resize-none text-gray-900 placeholder-gray-500"
          disabled={isLoading}
        />
        <div className="mt-4 flex justify-between">
          <div>
            {hasResponse && (
              <button
                type="button"
                onClick={onClear}
                disabled={isLoading}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Clear Results
              </button>
            )}
          </div>
          <button
            onClick={onSubmit}
            disabled={isLoading || !query.trim()}
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Query
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};


export default QueryInput;
