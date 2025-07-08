import React from "react";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";
import LegalAnswer from "./LegalAnswer";
import CitationSection from "./CitationSection";


const ResponseSection = ({ response, isLoading }) => {
  if (isLoading) {
    return <LoadingState />;
  }

  if (!response) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      <LegalAnswer answer={response.answer} />
      <CitationSection citations={response.citations} />
    </div>
  );
};

export default ResponseSection;