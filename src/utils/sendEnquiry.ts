// utils/sendEnquiry.ts

export interface EnquiryData {
  name: string;
  contact: string;
  message: string;
  room?: string; // optional, for specific room enquiry
}

/**
 * Opens WhatsApp chat with a prefilled message.
 * @param data Enquiry data including optional room info
 */
export function sendEnquiry(data: EnquiryData) {
  const { name, contact, message, room } = data;

  // Replace with your WhatsApp number (international format, no + or 00)
  const whatsappNumber = '919553355118';

  // Build the WhatsApp message
  const whatsappMessage = `
Hello! I would like to make an enquiry${room ? ` for room: ${room}` : ''}.

Name: ${name}
Contact: ${contact}
Message: ${message}
  `.trim(); // Remove leading/trailing whitespace

  // Encode for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Open WhatsApp only on client-side
  if (typeof window !== 'undefined') {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  }
}
