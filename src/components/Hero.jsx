import styles from "../style";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col mb-20 ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Let's talk about your{" "}
            <span className="text-gradient">emotional health</span>{" "}
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Find your group. Get better together.
        </p>

        <div className="flex flex-1 mt-5">
          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-10 rounded-lg font-poppins">
            Get Started for Free
          </button>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src="https://static.wixstatic.com/media/d00286_7ebf575f798548ba861653f750022edb~mv2.png/v1/fill/w_473,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LinkedIn%20group%20photo%207.png"
          alt="phone"
          className="w-[75%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[75%] h-[75%] right-10 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
