import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <div className="mb-4">
      <button
        className="flex justify-between w-full bg-gray-100 hover:bg-gray-200 p-3 rounded-lg"
        onClick={toggleAccordion}
      >
        <span className="font-medium">{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="bg-white p-4 rounded-lg mt-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: '1. What is Farm Connect?',
      answer: 'Farm Connect is an agricultural technology platform designed to help farmers manage their farms more efficiently. It provides tools and services to improve crop management, access market information, and connect with experts and resources in the agriculture industry.'
    },
    {
      question: '2. How do I get started with Farm Connect?',
      answer: 'To get started with Farm Connect, you can sign up for an account on our website or through our mobile app. Once you have an account, you can begin by adding your farm details and exploring the various features and services available.'
    },
    {
      question: '3. Is Farm Connect available in my region?',
      answer: 'Farm Connect aims to serve farmers worldwide. Our platform is accessible in many regions, but availability may vary. We are continually expanding our reach, so please check our website or contact our support team to confirm availability in your specific area.'
    },
    {
      question: '4. How can Farm Connect help me increase my crop yields?',
      answer: 'Farm Connect offers features such as crop monitoring, weather alerts, and recommended farming practices. By utilizing these tools, you can make informed decisions about planting, irrigation, and pest control, ultimately leading to improved crop yields.'
    },
    {
      question: '5. Can I access market prices for my crops through Farm Connect?',
      answer: 'Yes, you can. Farm Connect provides real-time market information, including crop prices and demand in your area. This information can help you determine the best time and place to sell your produce for the highest possible profit.'
    },
    {
      question: '6. What kind of support is available to Farm Connect users?',
      answer: 'Farm Connect offers various levels of support. You can access technical support for platform-related issues, seek assistance with crop management from our agricultural experts, and even access financial services like microloans and insurance through our partners.'
    },
    {
      question: '7. How is my data protected on Farm Connect?',
      answer: 'We take data privacy and security seriously. Farm Connect employs industry-standard security measures to protect your data. We do not share your personal information with third parties without your consent. You can learn more about our data privacy practices in our Privacy Policy.'
    },
    {
      question: '8. Can I use Farm Connect on my mobile phone?',
      answer: 'Yes, Farm Connect is accessible on both web and mobile platforms. We have a user-friendly mobile app available for download, making it convenient for you to manage your farm and access our services on the go.'
    },
    {
      question: '9. How do I update my farm information on Farm Connect?',
      answer: 'You can easily update your farm information by logging into your Farm Connect account and navigating to the profile or settings section. From there, you can edit and save your farm details as needed.'
    },
    {
      question: '10. What should I do if I have suggestions or feedback for Farm Connect?',
      answer: 'We value your feedback and suggestions. Please feel free to reach out to our support team or use the feedback feature within the platform to share your ideas, report issues, or provide input on how we can improve Farm Connect.'
    }
    
    // Add more FAQ items here
  ];

  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (index) => {
    const updatedAccordions = [...openAccordions];
    if (updatedAccordions.includes(index)) {
      const indexToRemove = updatedAccordions.indexOf(index);
      updatedAccordions.splice(indexToRemove, 1);
    } else {
      updatedAccordions.push(index);
    }
    setOpenAccordions(updatedAccordions);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="my-4 py-4">
                      <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">Frequently Asked Questions</h2>
                      
                      <div className='flex justify-center'>
                          <div className='w-24 border-b-4 border-green-900'></div>
                      </div>
                      </div>
      <h1 className="text-2xl font-semibold mb-4">Below are some of the questions and answers for your reference</h1>
      <div>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openAccordions.includes(index)}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
