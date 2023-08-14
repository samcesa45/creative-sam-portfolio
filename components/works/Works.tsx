"use client";
import SectionWrapper from "../section_wrapper/SectionWrapper";
import { styles } from "@/styles";
import { projects } from "@/constants";
import { Tilt } from "react-tilt";
import Image, { StaticImageData } from "next/image";
import { github } from "@/assets";

const Works = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay=""
          className="mt-3 text-[#222222] dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="flex mt-20 flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

type Props = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string | StaticImageData;
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  image,
  source_code_link,
  tags,
  description,
}: Props) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
      <Tilt className="bg-black-100 p-5 rounded-2xl sm:w-[300px] w-full">
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              # {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};
