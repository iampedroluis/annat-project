import img1as from "../img/img1as.jpg";
import img2as from "../img/img2as.jpg";
import bannerus from "../img/bannerus.png";
import candleflowers from "../img/candleflowers.jpg";

export const AboutUs = () => {
  return (
    <>
      <section className="">
        <div className="container  mx-auto flex flex-wrap">
          <div className=" mx-auto">
            <div className="flex flex-wrap w-full  my-10 " id="us">
              <img
                alt="gallery"
                className="w-full object-cover  object-center w-[1045px] h-[518px]"
                src={img1as}
              />
            </div>
          </div>
          <div className="w-full mx-auto my-8 flex justify-center">
            <div className="container px-5 md:px-20">
              <h1 className="text-9xl font-semibold italic">US</h1>
              <p className="font-light">
                We explore the art of intimate connection with the essence of
                each individual, unearthing the richness of their personal story
                through seemingly insignificant but powerful details. Each
                aroma, each color and each object are like paintbrushes that
                outline the uniqueness of a person and reveal the unique
                narrative that lies within. We immerse ourselves in the search
                for these visual and olfactory treasures, looking for those
                glimpses that reveal the authenticity of each being.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <img src={bannerus} alt="" className="w-full  object-cover " />
        </div>
        <div className="w-full mx-auto my-40 flex justify-center ">
          <div className="container px-5 md:px-20 ">
            <h1 className="text-5xl italic font-bold mb-10">
              Design as Artistic Translation:
            </h1>
            <p className="font-light">
              In the space we share, these elements are more than decorations;
              They are fragments of identity, small chapters of stories that are
              intertwined in the dance of design. It is in the delicacy of these
              details that we find the spark that ignites our creativity.
              Designing them is more than a task; It is an act of artistic
              translation, a bridge between the tangible and the immaterial
              world.
            </p>
          </div>
        </div>
        <div className=" flex px-5 md:px-24  md:flex-row flex-col items-center bg-[#EDEDED]">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-10 ">
            <h1 className="title-font sm:text-6xl text-5xl mb-8 font-semibold text-gray-900 italic mt-8  ">
              Exploring the Depths of Individuality:
            </h1>
            <p className="mb-8 leading-relaxed">
              On our creative journey, we are transported through the magic of
              visual and sensory expression. Each design choice is a journey
              that takes us beyond surface aesthetics, exploring the depths of
              individuality and reflecting a unique story. The creation of these
              elements is not simply an exercise in technical skill, but an
              emotional commitment to the mission of making each piece an
              authentic mirror that reflects the essence and personal style of
              the other person.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5">
            <img
              className="object-cover object-center rounded w-[551px] h-[486px] "
              alt="hero"
              src={candleflowers}
            />
          </div>
        </div>
        <div className="relative min-h-screen">
          <img src={img2as} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center text-white text-center">
            <div className="ml-10 mb-20 text-left">
              <h1 className="text-8xl md:text-9xl">From the Invisible</h1>
              <h1 className="text-5xl md:text-9xl">
                to the <span className="italic">tangible</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
