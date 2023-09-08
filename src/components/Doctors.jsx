import styles from "../style";

const Doctor = ({ name, logo, advice }) => (
  <section>
    <div
      className={`flex flex-row bg-white rounded-lg cursor-pointer shadow-md p-6 transform transition-transform hover:shadow-xl`}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
        <img
          src={logo}
          alt="star"
          className="w-[100%] h-[100%] object-fill rounded-full"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
          {name}
        </h4>
        <p className="font-poppins font-normal text-gray-600 text-[16px] leading-[24px]">
          {advice}
        </p>
      </div>
    </div>
  </section>
);

export default Doctor;
