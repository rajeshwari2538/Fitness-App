import React, { useState } from 'react';
import { faqs } from '../utils/data'; 

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(id === openId ? null : id);
  };

  return (
    <div className="max-w-6xl mt-20 w-[95%] mx-auto">
      <h2 className="text-xl text-white font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.id} className="text-neutral-400 border border-neutral-600 rounded-lg p-4 cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
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
