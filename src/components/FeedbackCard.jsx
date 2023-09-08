const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col bg-white rounded-lg shadow-md p-6 transform transition-transform  hover:shadow-lg px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card cursor-pointer z-[1]">
    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
      "{name}"
    </h4>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <p className="font-poppins font-bold text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
