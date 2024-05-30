import Image from 'next/image'
import React from 'react'
import UNARW from '../../public/unarwanda16X16.png'
import WFUNA from '../../public/wfna-logo.png'
import SDGs from '../../public/SDGs.png'

export const AboutSection = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="flex-shrink-0 flex-grow-0 w-5/12 px-3">
            <div className="flex">
              <Image
                src={WFUNA.src}
                width={900}
                height={50}
                alt="UNA-RWANDA"
                className="w-full"
              />
              {/* <Image
                src={UNARW.src}
                width={100}
                height={80}
                alt="UNA-RWANDA"
                className="w-full"
              /> */}
            </div>
            <Image
              src={SDGs.src}
              width={900}
              height={80}
              alt="UNA-RWANDA"
              className="w-full"
            />
          </div>
          <div className="flex-shrink-0 flex-grow-0 w-7/12 px-3">
            <div className="pl-[30px]">
              <h2 className="mb-[15px] text-[50px] font-bold">Who We are</h2>
              <h4 className="text-[22px] mb-2 font-semibold">Our History</h4>
              <p className="leading-7 text-[15px] text-[#646464]">
                We, the United Nations Association Rwanda, are unwaveringly
                committed to being catalysts for transformative change,
                dedicating ourselves tirelessly to tackling the most urgent
                global issues. Our primary commitment lies in achieving the
                Sustainable Development Goals (SDGs), with a strong focus on
                eradicating poverty, fostering peace, addressing climate change,
                and safeguarding the environment, as we believe these are
                fundamental pillars for a better world. In our pursuit of these
                goals, we are equally dedicated to promoting diversity, equity,
                and inclusion (DEI), recognizing that these values are essential
                for coherence and progress. Through our actions, we aim to
                cultivate a sense of unity, equality, and justice, envisioning a
                world where every person not only survives but thrives,
                contributing meaningfully to a brighter future. We invite you to
                join us on this transformative journey, as together, we strive
                to build a more inclusive and prosperous world for the
                well-being of present and future generations. Let us unite in
                turning our vision of a peaceful and prosperous world into a
                tangible reality. The United Nations Association Rwanda offers a
                range of impactful programs aimed at fostering knowledge
                dissemination, promoting human rights, and fostering peace and
                conflict resolution
              </p>
              <h4 className="text-[22px] mb-2 font-semibold">Our Mission</h4>
              <p className="leading-7 text-[15px] text-[#646464]">
                Our mission is to actively champion and advocate for the aims
                and ideals set forth by the United Nations. Through our
                initiatives and collaborations, we aim to foster a global
                environment where cooperation, understanding, and sustainable
                development thrive
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}