"use client"

import * as React from 'react';
import { Suspense } from 'react';
import Loading from '../loading';

export default function AboutPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        {/* Your content goes here */}
        <h1>About Page</h1>
      </div>
    </Suspense>
  );
}
