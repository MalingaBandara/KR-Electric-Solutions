import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
const FloatingButton = () => {
  return <a href="https://wa.me/+94716161573" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center" aria-label="Request Service on WhatsApp">
      <MessageCircleIcon size={28} />
      <span className="hidden md:inline ml-2 font-medium">Request Service</span>
    </a>;
};
export default FloatingButton;