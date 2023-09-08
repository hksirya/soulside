import Doctor from "./Doctors";

const doctorData = [
  {
    name: "Dr. Laura Kasper, Psychologist",
    advice:
      "Expert in group therapy, with 20+ years experience. Teaches group and individual therapy as Adjunct Clinical Assistant Faculty at Stanford Medical School.",
    logo: "https://static.wixstatic.com/media/d00286_a7fab564fbdd4b139943e844c9b23660~mv2.jpeg/v1/crop/x_6,y_0,w_387,h_400/fill/w_210,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/laura%20kasper.jpeg",
  },
  {
    name: "Dr. Anna Glezer, MD",
    advice:
      "Practicing physician and Associate Professor at UCSF. Trained at Harvard/UCSF. Board certified in adult and forensic psychiatry and Past President of the Northern California Psychiatric Society.",
    logo: "https://static.wixstatic.com/media/d00286_6e70f3888f094d168f7bd2ef49c210d3~mv2.png/v1/fill/w_216,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/glezer.png",
  },
  {
    name: "Meg Bower, RN/MSN",
    advice:
      "Clinical Director & Nurse-Midwife. MPH with specialisation in perinatal Mental Health. 20+ years experience in group facilitation in clinical and sub-clinial settings.",
    logo: "https://static.wixstatic.com/media/d00286_e42576dc15e2467bada674e21f635a98~mv2.jpg/v1/crop/x_387,y_0,w_2984,h_3000/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/meg-portrait-berkeley-49.jpg",
  },
];

const OurDoctor = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center mt-20 mb-20 space-y-4">
        <div className="flex font font-poppins text-3xl md:text-4xl font-bold text-black text-center">
          From our Clinical Experts
        </div>
        <div className="flex font-poppins text-xl md:text-xl font-md text-gray-400 text-center max-w-4xl">
          Our team brings together decades of experience in group therapy,
          psychiatry, and community. Soulside is the safe and meaningful space
          we wish we had for our own journeys. We want to make this support
          accessible to everyone who needs it.
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0 mb-20">
        {doctorData.map((doctor, index) => (
          <Doctor
            key={index}
            name={doctor.name}
            advice={doctor.advice}
            logo={doctor.logo}
          />
        ))}
      </div>
    </>
  );
};

export default OurDoctor;
