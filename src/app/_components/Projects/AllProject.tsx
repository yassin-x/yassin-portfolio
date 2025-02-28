"use client";

import { Carousel } from "antd";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export type ProjectsType = {
  title: string;
  description: string;
  previewLink: string;
  codeLink: string;
  images: string[];
};

export default function AllProjects({
  projects,
}: {
  projects: ProjectsType[];
}) {
  return (
    <AnimatePresence mode="wait">
      {projects.map((project) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col max-w-md gap-4 p-4 bg-primary/10 rounded-lg"
        >
          <div className="w-full">
            <Carousel autoplay autoplaySpeed={3000} dots={false} arrows>
              {project.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image}
                  alt={`${project.title}`}
                  width={400}
                  height={700}
                  priority
                  loading="eager"
                  className="rounded-lg object-cover w-full h-full"
                />
              ))}
            </Carousel>
          </div>

          <div className="flex flex-col items-start px-2 gap-4">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-sm text-accent max-w-md">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-4 px-2">
            <ProjectLink href={project.previewLink} title="Preview">
              <LinkIcon className="w-8 h-8" />
            </ProjectLink>
            <ProjectLink href={project.codeLink} title="GitHub Link">
              <FaGithub className="w-8 h-8" />
            </ProjectLink>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

const ProjectLink = ({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    title={title}
    className="text-accent hover:text-primary transition-colors duration-300 ease-in-out"
  >
    {children}
  </Link>
);
