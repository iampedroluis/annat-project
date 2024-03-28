import magicalsmells from "../img/newin/magicalsmells.jpg";
import gardencollection from "../img/newin/gardencollection.jpg";
import luxury from "../img/newin/luxury.jpg";
import meditation from "../img/newin/meditation.jpg";
import citrus from "../img/newin/citrus.jpg";
import christmascollection from "../img/newin/christmascollection.jpg";
export const NewIn = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col mt-10 text-center w-full mb-20">
            <h1 className="text-5xl font-medium title-font mb-4 text-gray-900">
              New In
            </h1>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded w-full h-[317px] object-cover object-center mb-4 hover:shadow-2xl cursor-pointer "
                  src={magicalsmells}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Magical Smells
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded w-full h-[317px] object-cover object-center mb-4 hover:shadow-2xl cursor-pointer"
                  src={gardencollection}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Garden Collection
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded w-full h-[317px] object-cover object-center mb-4 hover:shadow-2xl cursor-pointer"
                  src={luxury}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Magical Smells
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded w-full h-[317px]  object-cover object-center mb-4 hover:shadow-2xl cursor-pointer"
                  src={meditation}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Meditation
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded w-full h-[317px]  object-cover object-center mb-4 hover:shadow-2xl cursor-pointer"
                  src={citrus}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Citrus
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded w-full h-[317px]  object-cover object-center mb-4 hover:shadow-2xl cursor-pointer"
                  src={christmascollection}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Christmas Collection
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col sm:mx-auto my-10 px-4 align-middle">
        <h1 className="text-6xl mx-auto text-start font-bold title-font mb-8 text-gray-900">
          Discover the New Collections
        </h1>
        <p className="lg:w-3/4 mx-auto leading-relaxed text-base">
          Enter a world of radiance and charm with Annat's new candle
          collections. From the captivating festivity of our 'Christmas
          Collection' to the relaxing serenity of 'Citrus Meditation', each
          llama is a sensory masterpiece. Awaken your senses, transform your
          spaces. Discover the art of lighting with Annat! Ready to explore?
          Turn on the magic now! ✨🕯️ #AnnatGlow
        </p>
      </div>
    </>
  );
};
