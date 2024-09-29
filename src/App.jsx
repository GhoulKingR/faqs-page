import { useState } from 'react';
import bgPatternMobile from './assets/background-pattern-mobile.svg';
import bgPatternDesktop from './assets/background-pattern-desktop.svg';
import iconStar from './assets/icon-star.svg';
import iconPlus from './assets/icon-plus.svg';
import iconMinus from './assets/icon-minus.svg';

function App() {
  const [questions, setQuestions] = useState([
    {
      queston: 'What is Frontend Mentor, and how would it help me',
      answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.',
      collapsed: false
    },
    {
      queston: 'Is Frontend Mentor free',
      answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
      collapsed: true
    },
    {
      queston: 'Can I use Frontend Mentor projects in my portfolio',
      answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      collapsed: true
    },
    {
      queston: "How can I get help if I'm stuck on a Frontend Mentor challenge",
      answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      collapsed: true
    },
  ]);

  return (
    <div className='w-screen'>
      <div className="w-full h-[142.5px] md:h-[167.5px]">
        <img src={bgPatternDesktop} className="hidden md:block w-full relative -z-10" alt="background pattern"/>
        <img src={bgPatternMobile} className="block md:hidden w-full relative -z-10" alt="background pattern"/>
      </div>

      <div className='bg-white mx-[24px] rounded-[8px] p-[24px] my-shadow md:mx-[auto] md:w-[600px] md:rounded-[16px] md:p-[40px]'>
        <h1 className='flex items-center justify-start mb-[24px]'>
          <img src={iconStar} alt='star' className='w-[24px] h-[24px] mr-[24px] md:w-[40px] md:h-[40px]'/>
          <span className='text-[#301534] ws_bold text-[32px] md:text-[56px]'>FAQs</span>
        </h1>

        {questions.map(({queston, answer, collapsed}, index) => {
          const isLast = index === questions.length - 1;
          return <div key={index} className={isLast ? '' : 'pb-[20px] border-b border-b-[#f9f0ff] mb-[20px]'}
            onClick={() => {
              const newQuestions = [...questions];
              newQuestions[index].collapsed = !newQuestions[index].collapsed;
              setQuestions(newQuestions);
            }}
          >
            <div className='flex justify-between items-center cursor-pointer'>
              <div className='text-[#301534] text-[16px] ws_semi_bold md:text-[18px] hover:text-[#AD28EB]'>{queston}?</div>
              <img src={collapsed ? iconPlus : iconMinus} alt="icon" className='w-[30px] h-[30px]' />
            </div>

            {!collapsed && <div className='text-[#8c6991] mt-[24px] cursor-pointer ws_regular leading-[150%] md:text-[16px]'>
              {answer}
            </div>}
          </div>
        })}
      </div>
    </div>
  )
}

export default App
