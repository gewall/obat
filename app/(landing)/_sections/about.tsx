import React from "react";
import SectionsLayout from "../_components/SectionsLayout";
import Typograph from "@/components/ui/typograph";
import Link from "next/link";

const About = () => {
  return (
    <SectionsLayout id="about" className="my-12 md:my-24">
      <div className="flex-1">
        <Typograph variant="Sub-Header" className="text-cyan-400">
          About Me
        </Typograph>
        <div className="flex md:flex-row flex-col gap-6 md:gap-24">
          <div className="flex-1 text-justify">
            <Typograph variant="Text" className="my-4">
              Hi, I&apos;m <span className="font-semibold">Algi Nugraha</span>,
              an Informatics student at Universitas Majalengka and a passionate
              <span className="font-semibold"> Game Developer</span>. After
              starting my career as a freelance web and mobile programmer, I
              found my true calling in creating immersive games. I&apos;m
              dedicated to crafting engaging gameplay and compelling stories
              that bring joy to players worldwide.
            </Typograph>
          </div>
          <div className="flex-1 ">
            <Typograph variant="Sub-Header">
              <span className="border-l-4 border-sky-400 mr-2" />
              Let&apos;s Be Friend!
            </Typograph>
            <Typograph variant="Text" className="my-4">
              You can find me on these social media.
            </Typograph>
            <div className="flex gap-2">
              <Link
                href="https://twitter.com/@GewallArt"
                aria-label="Twitter"
                className="hover:text-sky-400"
                target="_bkank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.927 0 .386.044.762.127 1.122-4.096-.205-7.725-2.169-10.148-5.144-.425.729-.666 1.575-.666 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.089.627 1.956 2.445 3.379 4.604 3.418-1.684 1.319-3.808 2.105-6.115 2.105-.397 0-.788-.023-1.175-.069 2.179 1.398 4.768 2.211 7.548 2.211 9.054 0 14.002-7.503 14.002-14.002 0-.213-.005-.425-.014-.636.961-.695 1.796-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/gingrham"
                aria-label="Instagram"
                className="hover:text-sky-400"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.97.248 2.417.415a4.92 4.92 0 0 1 1.675 1.006 4.92 4.92 0 0 1 1.006 1.675c.167.447.358 1.247.415 2.417.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.248 1.97-.415 2.417a4.92 4.92 0 0 1-1.006 1.675 4.92 4.92 0 0 1-1.675 1.006c-.447.167-1.247.358-2.417.415-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.248-2.417-.415a4.92 4.92 0 0 1-1.675-1.006 4.92 4.92 0 0 1-1.006-1.675c-.167-.447-.358-1.247-.415-2.417-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.057-1.17.248-1.97.415-2.417a4.92 4.92 0 0 1 1.006-1.675 4.92 4.92 0 0 1 1.675-1.006c.447-.167 1.247-.358 2.417-.415 1.266-.058 1.645-.07 4.85-.07m0-2.163c-3.259 0-3.667.012-4.947.071-1.252.057-2.102.25-2.836.533a6.974 6.974 0 0 0-2.488 1.651 6.974 6.974 0 0 0-1.651 2.488c-.283.734-.476 1.584-.533 2.836-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.057 1.252.25 2.102.533 2.836a6.974 6.974 0 0 0 1.651 2.488 6.974 6.974 0 0 0 2.488 1.651c.734.283 1.584.476 2.836.533 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.252-.057 2.102-.25 2.836-.533a6.974 6.974 0 0 0 2.488-1.651 6.974 6.974 0 0 0 1.651-2.488c.283-.734.476-1.584.533-2.836.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.057-1.252-.25-2.102-.533-2.836a6.974 6.974 0 0 0-1.651-2.488 6.974 6.974 0 0 0-2.488-1.651c-.734-.283-1.584-.476-2.836-.533-1.28-.059-1.688-.071-4.947-.071z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zm0 10.162a3.838 3.838 0 1 1 0-7.676 3.838 3.838 0 1 1 0 7.676zm6.406-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionsLayout>
  );
};

export default About;
