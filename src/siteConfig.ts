export const siteConfig = {
  brand: 'B&R stays',
  whatsappNumber: '918369516813',
  whatsappMessage:
    "Hi B&R stays! I'm interested in booking your Karjat stay. Could you please share the availability, pricing, and booking details?",
  location: {
    label: 'Karjat, Maharashtra',
    description:
      'Tucked into the greener, quieter side of Karjat. The precise location is shared privately during your booking conversation.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Karjat%2C%20Maharashtra',
  },
  // Keep only amenities confirmed by the host.
  amenities: [
    {
      title: 'Thoughtful interiors',
      description: 'A calm, considered space designed to help you settle in and slow down.',
      icon: 'spark',
    },
    {
      title: 'A cozy place to rest',
      description: 'A private, comfortable setting made for quiet mornings and easy evenings.',
      icon: 'bed',
    },
    {
      title: 'Warm ambience',
      description: 'Soft light, natural textures, and a welcoming mood from day into night.',
      icon: 'sun',
    },
    {
      title: 'Space to unwind',
      description: 'Room to pause, reconnect, and enjoy unhurried time in good company.',
      icon: 'leaf',
    },
  ],
  faqs: [
    {
      question: 'How can I check availability?',
      answer:
        'Send us your preferred dates on WhatsApp. We’ll personally confirm whether the stay is available.',
    },
    {
      question: 'How do I confirm a booking?',
      answer:
        'Booking steps and payment details will be shared with you directly on WhatsApp after availability is confirmed.',
    },
    {
      question: 'What are the check-in and check-out timings?',
      answer: '[Host to add confirmed check-in and check-out timings.]',
    },
    {
      question: 'What is included in the stay?',
      answer: '[Host to add the complete, confirmed list of inclusions and amenities.]',
    },
    {
      question: 'What is the cancellation policy?',
      answer: '[Host to add the confirmed cancellation and refund policy.]',
    },
    {
      question: 'Is parking available?',
      answer: '[Host to confirm parking availability and any relevant instructions.]',
    },
    {
      question: 'How do I get the location?',
      answer:
        'The precise property location and arrival guidance are shared privately during your booking conversation.',
    },
  ],
} as const

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
