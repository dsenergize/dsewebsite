import React from 'react';

// This component wraps the content of standard pages.
// It adds padding to the top (pt-16) to push the content down below the fixed navbar.
// It also centers the content and applies horizontal padding to match your site's style.
const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='pt-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;