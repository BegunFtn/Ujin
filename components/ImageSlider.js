import Image from "next/image";

const images = [
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
  "/images/slide-4.jpg",
  "/images/slide-5.jpg",
  "/images/slide-6.jpg",
];

export default function ImageSlider() {
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className="
        overflow-hidden
        bg-[#f7f7f7]
        py-10
        transition-colors
        duration-500
        dark:bg-[#111315]
      "
    >
      <div className="mb-7 px-6">
        <div className="mx-auto max-w-[1120px]">
          <p className="text-sm uppercase tracking-[0.2em] text-[#55c4ec]">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold text-black dark:text-white">
            Beautiful Places
          </h2>
        </div>
      </div>

      <div className="slider-wrapper">
        <div className="slider-track">
          {duplicatedImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="
                group
                relative
                h-[220px]
                w-[330px]
                shrink-0
                overflow-hidden
                rounded-[28px]

                md:h-[250px]
                md:w-[380px]
              "
            >
              <Image
                src={src}
                alt={`Travel destination ${index + 1}`}
                fill
                sizes="380px"
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}