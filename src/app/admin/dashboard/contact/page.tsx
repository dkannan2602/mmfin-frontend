'use client';

import { Suspense } from 'react';
import { RefreshCw } from 'lucide-react';
import ContactList from './ContactList';

export default function ContactDashboard() {
  return (
    <Suspense
      fallback={
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Contact Messages</h2>
              <p className="text-gray-600 mt-2">Manage and respond to customer inquiries</p>
            </div>
            <button disabled className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed">
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>
          <div className="space-y-4">
            <div className="h-32 bg-gray-200 animate-pulse rounded-lg" />
            <div className="h-64 bg-gray-200 animate-pulse rounded-lg" />
          </div>
        </div>
      }
    >
      <ContactList />
    </Suspense>
  );
}
