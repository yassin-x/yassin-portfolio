"use client";

import MainHeading from "@/components/MainHeading";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import AllProject, { ProjectsType } from "./AllProject";

export default function Projects() {
  const [projectsSee, setProjects] = useState<ProjectsType[]>([]);

  const htmlProjects: ProjectsType[] = [
    {
      title: "Demo App",
      description: "This is my first learning project in HTML and CSS",
      previewLink: "https://yassin-x.github.io/first-my-web/",
      codeLink: "https://github.com/yassin-x/first-my-web",
      images: [
        "/assets/1/1.png",
        "/assets/1/2.png",
        "/assets/1/3.png",
        "/assets/1/4.png",
      ],
    },
    {
      title: "Timer App",
      description: "This is my first project after learning JavaScript",
      previewLink: "https://yassin-x.github.io/Timer-App/",
      codeLink: "https://github.com/yassin-x/Timer-App",
      images: ["/assets/2/1.png", "/assets/2/2.png"],
    },
  ];

  const reactProjects: ProjectsType[] = [
    {
      title: "React Demo App",
      description: "This app is built with React.js",
      previewLink: "https://react-app-yassin-ibrahims-projects.vercel.app/",
      codeLink: "https://github.com/yassin-x/React-App",
      images: ["/assets/3/1.png"],
    },
    {
      title: "Chat App",
      description: "This app is built with React.js, Socket.io, and Node.js",
      previewLink: "https://frontend-chat-app-neon.vercel.app/login",
      codeLink: "https://github.com/yassin-x/chat-app",
      images: ["/assets/5/1.png", "/assets/5/2.png"],
    },
  ];

  const nextProjects: ProjectsType[] = [
    {
      title: "My Portfolio Web",
      description: "My portfolio website built with Next.js and Email.js",
      previewLink: "https://yassin.icu/",
      codeLink: "https://github.com/yassin-x/yassin-portfolio",
      images: [
        "/assets/4/1.png",
        "/assets/4/2.png",
        "/assets/4/3.png",
        "/assets/4/4.png",
      ],
    },
    {
      title: "Brother Portfolio",
      description: "This project was created for my brother",
      previewLink: "https://ahmed-portfolio-fawn.vercel.app/",
      codeLink: "https://github.com/yassin-x",
      images: ["/assets/6/1.png"],
    },
    {
      title: "My New Portfolio",
      description: "My new portfolio website built with Next.js",
      previewLink: "https://yassin.icu/",
      codeLink: "https://github.com/yassin-x/yassin-portfolio",
      images: ["/assets/7/1.png", "/assets/7/2.png"],
    },
  ];

  useEffect(() => {
    setProjects([...htmlProjects, ...reactProjects, ...nextProjects]);
  }, []);

  const isSameProjects = (arr1: ProjectsType[], arr2: ProjectsType[]) => {
    return (
      arr1.length === arr2.length &&
      arr1.every((item, index) => item.title === arr2[index].title)
    );
  };

  return (
    <section className="section">
      <div className="container flex flex-col justify-center items-center">
        <div className="text-center">
          <MainHeading title="Projects" subTitle="What I've worked on" />
        </div>
        <div className="flex flex-row gap-2 items-center py-4 md:py-8">
          <Button
            variant="ghost"
            className={
              projectsSee.length ===
              [...htmlProjects, ...reactProjects, ...nextProjects].length
                ? "text-primary"
                : ""
            }
            onClick={() =>
              setProjects([...htmlProjects, ...reactProjects, ...nextProjects])
            }
          >
            All
          </Button>
          <Button
            variant="ghost"
            className={
              isSameProjects(projectsSee, htmlProjects) ? "text-primary" : ""
            }
            onClick={() => setProjects(htmlProjects)}
          >
            HTML & CSS
          </Button>
          <Button
            variant="ghost"
            className={
              isSameProjects(projectsSee, reactProjects) ? "text-primary" : ""
            }
            onClick={() => setProjects(reactProjects)}
          >
            REACT JS
          </Button>
          <Button
            variant="ghost"
            className={
              isSameProjects(projectsSee, nextProjects) ? "text-primary" : ""
            }
            onClick={() => setProjects(nextProjects)}
          >
            NEXT JS
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AllProject projects={projectsSee} />
        </div>
      </div>
    </section>
  );
}
