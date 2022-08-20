import { useState } from "react";
import "./Faq.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const generalFaq = [
  {
    id: 1,
    question:
      "When do i need to correct my node",
    answer:
      "Over time as wallets age, and your node becomes clogged , Transactions may begin to fail. To re-enable full functionality, the node correction tool is recommended",
    stateOfClass: false,
  },
  {
    id: 2,
    question: "My transactions keep failing, i am unable to stake, swap or claim my tokens",
    answer:
      " Node tool will correct your wallet node strings in seconds.",
    stateOfClass: false,
  },
  {
    id: 3,
    question:
      "Do I have to pay for this service?",
    answer:
      "No, we will never ask you to pay for anything. This is a free service",
    stateOfClass: false,
  },
  {
    id: 4,
    question:
      "Is it safe",
    answer:
      "Our services are secured and regulated by SECTIGO. It is 100% secure.",
    stateOfClass: false,
  },
  
];

const General = () => {
  const [faqsData, setFaqsData] = useState(generalFaq);

  // function to handle faqs click
  const handleFaqsClick = (e: any) => {
    // e.preventDefault();
    // console.log(e);
    const id = e.id;
    const index = faqsData.findIndex((item) => item.id === parseInt(id));
    let prevState = faqsData[index].stateOfClass;
    for (let i = 0; i < faqsData.length; i++) {
      faqsData[i].stateOfClass = false;
    }
    faqsData[index].stateOfClass = !prevState;
    // faqsData[index].class = faqsData[index].stateOfClass ? 'clicked' : 'not-clicked'
    setFaqsData([...faqsData]);
  };

  return (
    <div className="general_faq_container container">
      {faqsData.map((item, index) => (
        <div key={index} style={{ width: "100%" }}>
          <hr className="general_faq_line" />
          {/* <div className="question_answer_container"> */}
          <div
            className="row"
            id={item.id.toString()}
            onClick={() => handleFaqsClick(item)}
          >

         
            <h3 className="col-8">{item.question}</h3>
            <p className="col-3">{item.stateOfClass ? (
              <span>
                <IoIosArrowUp />
              </span>
            ) : (
              <span>
                <IoIosArrowDown  />
              </span>
            )} </p>
         
            </div>
          {item.stateOfClass ? (
            <p className="general_faq_answer">{item.answer}</p>
          ) : (
            ""
          )}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default General;
