/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Travel World
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better Travel
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Welcome to Shahid Ahmed's Travel Tales, your passport to a
                  world of wanderlust and storytelling. I'm Shahid Ahmed, an
                  enthusiastic explorer and storyteller, and this blog is where
                  I share my globetrotting adventures, travel tips, and the
                  compelling stories behind the places I've been.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
            loading="lazy"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://images.unsplash.com/photo-1518109623266-338ba2429e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEFib3V0JTIwVHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Travel has been a life-changing experience for me, shaping not
                  only the way I see the world but also who I am as a person.
                  It's my belief that through sharing these stories, I can
                  ignite the spark of wanderlust in others and encourage
                  meaningful exploration. Every journey is an opportunity to
                  learn, grow, and connect with the world, and I'm excited to
                  have you along for the ride.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3 mt-8">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Inspirational Travel Stories.
                      </strong>
                      Immerse yourself in captivating narratives that transport
                      you to far-off lands and inspire your own adventures.
                      blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Practical Travel Tips.
                      </strong>{" "}
                      Discover valuable insights and advice to help you plan
                      your trips effectively and make the most of your travels.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Community and Connection.
                      </strong>{" "}
                      Join a global community of fellow travelers and
                      enthusiasts, sharing experiences, tips, and the joy of
                      discovering our world together.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Travel isn't just a hobby for me; it's a way of life, a source
                  of endless inspiration, and a bridge that connects us to the
                  beauty of our planet. From the bustling streets of vibrant
                  cities to the tranquility of remote natural landscapes, I've
                  found that every journey reveals a new facet of the world's
                  rich tapestry. Through Shahid Ahmed's Travel Tales, I hope to
                  ignite your own passion for exploration and share the magic of
                  travel that has enriched my life in countless ways.
                </p>
                <p  className="mt-8">
                Travel isn't just a hobby for me; it's a way of life, a source
                  of endless inspiration, and a bridge that connects us to the
                  beauty of our planet. From the bustling streets of vibrant
                  cities to the tranquility of remote natural landscapes, I've
                  found that every journey reveals a new facet of the world's
                  rich tapestry. Through Shahid Ahmed's Travel Tales, I hope to
                  ignite your own passion for exploration and share the magic of
                  travel that has enriched my life in countless ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
