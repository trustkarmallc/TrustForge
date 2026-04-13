export type Sentiment = 'Positive' | 'Neutral' | 'Negative';

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  sentiment: Sentiment;
  suggestedResponses: string[];
}

export const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    rating: 5,
    date: '2023-10-12',
    text: 'Absolutely fantastic experience! The staff was incredibly welcoming and the service was top-notch. Highly recommend to anyone looking for quality.',
    sentiment: 'Positive',
    suggestedResponses: [
      "Hi Sarah! Thank you so much for the 5-star review. We're thrilled you had a fantastic experience and hope to see you again soon!",
      "Dear Sarah, your kind words mean the world to our team. Thank you for highly recommending us!"
    ]
  },
  {
    id: '2',
    author: 'Michael Chang',
    rating: 2,
    date: '2023-10-10',
    text: 'The product is okay, but the customer support was very slow to respond to my inquiries. Waited over 48 hours for a simple answer.',
    sentiment: 'Negative',
    suggestedResponses: [
      "Hi Michael, we sincerely apologize for the delay in our response. We are currently experiencing high volume but are working hard to improve our response times. Please let us know if your issue was fully resolved.",
      "Dear Michael, thank you for your feedback. We're sorry we didn't meet your expectations for support speed. We've shared this with our team to ensure we do better next time."
    ]
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    rating: 4,
    date: '2023-10-08',
    text: 'Good overall, but a bit pricey for what you get. Still, the quality is undeniable.',
    sentiment: 'Positive',
    suggestedResponses: [
      "Hi Emily, thank you for the 4-star review! We're glad you enjoyed the quality of our service. We appreciate your feedback on pricing and always strive to provide the best value.",
      "Thanks for the review, Emily! We're happy to hear the quality stood out to you."
    ]
  },
  {
    id: '4',
    author: 'David Smith',
    rating: 1,
    date: '2023-10-05',
    text: 'Terrible experience. The item arrived broken and getting a refund has been a nightmare. Will not be returning.',
    sentiment: 'Negative',
    suggestedResponses: [
      "Hi David, we are so sorry to hear about your experience and the broken item. This is not our standard. Please email us directly at support@example.com with your order number so we can process your refund immediately.",
      "Dear David, please accept our deepest apologies. We want to make this right. Could you please reach out to our management team directly at 555-0192?"
    ]
  },
  {
    id: '5',
    author: 'Jessica Taylor',
    rating: 3,
    date: '2023-10-02',
    text: 'It was just okay. Nothing special, but it got the job done. Probably wouldn\'t go out of my way to come back.',
    sentiment: 'Neutral',
    suggestedResponses: [
      "Hi Jessica, thank you for your honest feedback. We're always looking for ways to turn an 'okay' experience into a great one. If you have any specific suggestions, we'd love to hear them!",
      "Thanks for visiting, Jessica. We appreciate your review and hope we might have the chance to wow you in the future."
    ]
  },
  {
    id: '6',
    author: 'Robert Wilson',
    rating: 5,
    date: '2023-09-28',
    text: 'Best in the city! I\'ve tried all the competitors and nobody comes close to this level of detail and care.',
    sentiment: 'Positive',
    suggestedResponses: [
      "Wow, thank you Robert! 'Best in the city' is a huge compliment. We're so grateful for your support and can't wait to serve you again.",
      "Hi Robert, thank you for the glowing review! Our team works hard to provide that level of detail, and we're thrilled you noticed."
    ]
  },
  {
    id: '7',
    author: 'Amanda Lewis',
    rating: 2,
    date: '2023-09-25',
    text: 'The location is convenient, but the staff seemed completely uninterested in helping me find what I needed.',
    sentiment: 'Negative',
    suggestedResponses: [
      "Hi Amanda, we are very sorry to hear that our staff did not provide the helpful service you deserve. We are addressing this feedback with our team immediately. We hope you'll give us another chance.",
      "Dear Amanda, thank you for bringing this to our attention. Providing excellent service is our priority, and we clearly missed the mark here. We apologize for the inconvenience."
    ]
  }
];
