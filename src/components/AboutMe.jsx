function AboutMe() {
  return (
    <>
      <div className="mt-10 mx-5 md:py-16">
        <div className="md:flex md:mx-20">
          <div className="md:w-1/2">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297962/AboutMe_xu1rc0.svg"
              alt="ME"
            />
          </div>
          <div className="md:ml-20 md:w-1/2">
            <div className="py-5">
              <h1 className="text-2xl md:text-5xl">
                About <span className="font-sans font-extrabold pl-2">Me</span>
              </h1>
            </div>
            <div>
              <p className="mb-5 mt-5 text-gray-700 text-base md:text-2xl">
                I&apos;m a passionate, self-proclaimed designer who specializes
                in full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="mb-5 mt-5 text-gray-700 text-base md:text-2xl">
                I began my journey as a web developer in 2015, and since then,
                I&apos;ve continued to grow and evolve as a developer, taking on
                new challenges and learning the latest technologies along the
                way. Now, in my early thirties, 7 years after starting my web
                development journey, I&apos;m building cutting-edge web
                applications using modern technologies such as Next.js,
                TypeScript, Nestjs, Tailwindcss, Supabase, and much more.
              </p>
              <p className="mb-5 mt-5 text-gray-700 text-base md:text-2xl">
                When I&apos;m not in full-on developer mode, you can find me
                hovering around on Twitter or on Indie Hacker, witnessing the
                journey of early startups or enjoying some free time. You can
                follow me on Twitter where I share tech-related bites and build
                in public, or you can follow me on GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
