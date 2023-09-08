import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col max-w-2xl">
      <h2 className="font-poppins font-bold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        $250 therapy sessions can't be the only answer!
      </h2>
      <p
        className={`font-poppins font-normal text-[#DCDCDC] text-[20px] leading-[30.8px] max-w-[470px] mt-5`}
      >
        We founded Soulside for sustainable, affordable, targeted support with
        long-term results
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
