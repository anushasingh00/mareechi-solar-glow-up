
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}

export const createWhatsAppMessage = (formData: ContactFormData): string => {
  return `Hello! I'd like to get a free solar quote.

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}

${formData.message ? `*Additional Message:*\n${formData.message}` : ''}

Please provide me with a personalized solar energy quote. Thank you!`;
};

export const openWhatsApp = (message: string): void => {
  const whatsappNumber = '+918765432109';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const validateRequiredFields = (formData: ContactFormData): boolean => {
  return !!(formData.name && formData.email && formData.phone && formData.location);
};
