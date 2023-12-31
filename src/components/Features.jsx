import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row p-6 cursor-pointer rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () => (
  <section id="features" className={`${layout.section} mt-20 mb-20`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find connection, healing, and evidence-based care in group
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get below the surface, and tackle the toughest emotions
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Features;
