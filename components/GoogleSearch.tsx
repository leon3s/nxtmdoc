import React from 'react';
import Script from 'next/script';

export default function GoogleSearch() {
  return (
    <>
      <Script async src="https://cse.google.com/cse.js?cx=5c4a0cc2eff9d52d2" />
      <div className="gcse-searchresults-only"></div>
    </>
  )
}
