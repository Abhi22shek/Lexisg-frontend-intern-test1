import React, { useState } from 'react'
import './index.css'
import Header from './component/Header'
import QueryInput from './component/QueryInput';
import ResponseSection from './component/ResponseSection';

function App() {
    const [query, setQuery] = useState('');
    const [response,setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);  


    const clearResult = () => {
        setQuery('');
        setResponse(null);
        setIsLoading(false);
  };

    const handleSubmit = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    
    setTimeout(() => {
      setResponse({
         answer:
        'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
      citations: [
        {
          text:
            'As the age of the deceased at the time of accident was held to be about 54–55 years...',
          source: 'Dani_Devi_v_Pritam_Singh.pdf',
          link:
            'https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz',
        },
      ],
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        <QueryInput 
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          hasResponse={response !== null}
          onClear={clearResult}
        />
        
        <ResponseSection 
          response={response}
          isLoading={isLoading}
        />
      </main>
    </div>
  )
}

export default App
