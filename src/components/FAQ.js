import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How often should I exercise?",
      answer: "The optimal frequency for exercise depends on your goals and fitness level. A general guideline is to aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, along with muscle-strengthening exercises on two or more days. However, it's essential to listen to your body and adjust accordingly."
    },
    {
      id: 2,
      question: "What time of day is best to work out?",
      answer: "The best time to work out depends on your personal preferences and schedule. Some people prefer to exercise in the morning to kickstart their day, while others find it beneficial to work out in the afternoon or evening to relieve stress and unwind. Ultimately, the most important thing is to find a time that works for you and allows you to stay consistent with your exercise routine."
    },
    {
      id: 3,
      question: "How long should my workouts be?",
      answer: "The ideal duration of your workouts depends on your fitness goals and schedule. Aim for at least 30 minutes of moderate-intensity exercise most days of the week, or shorter, more intense workouts if time is limited. Remember, consistency is key, so choose a duration that you can maintain regularly."
    },
    {
      id: 4,
      question: "Do I need to warm up before my workouts?",
      answer: "Yes, warming up before workouts is important to prepare your body for exercise and reduce the risk of injury. A proper warm-up increases blood flow to your muscles, improves flexibility, and enhances performance. Spend 5-10 minutes doing light aerobic exercises like jogging or cycling, followed by dynamic stretches to loosen up your muscles and joints. This helps to gradually elevate your heart rate and prepare your body for more intense activity."
    },
    {
      id: 5,
      question: "Should I do strength training, cardio or both?",
      answer: "For overall fitness, it's beneficial to incorporate both strength training and cardio into your routine. Strength training builds muscle and improves strength, while cardio enhances heart health and burns calories. Finding the right balance between the two depends on your goals and preferences."
    },
    {
      id: 6,
      question: "Should I lift weights for strength training?",
      answer: "Yes, lifting weights is an effective form of strength training that helps build muscle mass, increase strength, and improve overall physical performance. It offers numerous benefits, including boosting metabolism, enhancing bone density, and promoting better posture. Incorporating weightlifting into your fitness routine can help you achieve your strength and fitness goals effectively."
    }
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(id === openId ? null : id);
  };

  return (
    <div className="max-w-6xl mt-20 mx-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="col-span-2 mb-4">
          <h2 className="text-xl text-white font-semibold mb-2">Frequently Asked Questions</h2>
        </div>
        {faqs.map((faq) => (
          <div key={faq.id} className="text-gray-300 border rounded-lg p-4 cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
            <div className="flex justify-between items-center">
              <div className="font-semibold">{faq.question}</div>
              <div className='text-[2rem] font-bold'>{openId === faq.id ? '-' : '+'}</div>
            </div>
            {openId === faq.id && <div className="mt-2">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
