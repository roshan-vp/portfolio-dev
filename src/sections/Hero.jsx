import React from "react";
import Button from "../components/Button";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero">
      <div class="hero-grid"></div>
      <div class="hero-glow-1"></div>
      <div class="hero-glow-2"></div>

      <div className="flex w-53 h-9 bg-[#12121C] border rounded-tl-md rounded-tr-md border-[#1E1E26] pl-5 items-center gap-2">
        <div className="bg-[#F95D55] h-2.5 w-2.5 rounded-full"></div>
        <div className="bg-[#FEBC2E] h-2.5 w-2.5 rounded-full"></div>
        <div className="bg-[#28C840] h-2.5 w-2.5 rounded-full"></div>
        <span className="text-xs text-(--muted) pl-2">portfolio.js — ~</span>
      </div>
      <div className="h-60 w-150 [&_div]:pl-7.5 [&_span]:text-[13px] [&_span]:opacity-90 [&_span:first-of-type]:text-(--muted) [&_span:first-of-type]:text-xs [&_span:first-of-type]:opacity-50 bg-[#12121C] pt-7 border-r border-b border-l border-[#1e1e26] rounded-tr-md rounded-br-md rounded-bl-md">
        <div>
          <span>1</span>
          <span className="text-(--muted) pl-5">// Hello, world.</span>
        </div>
        <div>
          <span>2</span>
        </div>
        <div>
          <span>3</span>
          <span className="text-(--accent2) pl-5">const</span>
          <span className="text-(--accent) pl-1.5">developer</span>
          <span className="text-[#c4cfe2]">{" = {"}</span>
        </div>
        <div>
          <span>4</span>
          <span className="text-(--accent2) pl-10">name:</span>
          <span className="pl-2 text-[#34D399]">'Roshan VP'</span>
          <span className="text-[#c4cfe2]">,</span>
        </div>
        <div>
          <span>5</span>
          <span className="text-(--accent2) pl-10">role:</span>
          <span className="pl-2 text-[#34D399]">'Full-Stack Developer'</span>
          <span className="text-[#c4cfe2]">,</span>
        </div>
        <div>
          <span>6</span>
          <span className="text-(--accent2) pl-10">passion:</span>
          <span className="pl-2 text-[#34D399]">
            'Building things that matter'
          </span>
          <span className="text-[#c4cfe2]">,</span>
        </div>
        <div>
          <span>7</span>
          <span className="text-(--accent2) pl-10">status:</span>
          <span className="pl-2 text-[#34D399]">'open_to_opportunities'</span>
        </div>
        <div>
          <span>8</span>
          <span className="pl-5 text-[#c4cfe2]">{"};"}</span>
        </div>
      </div>
      <h1 className="hero-title mt-15">
        Build. <br />
        Ship. <br />
        <span className="outline">Repeat</span>
        <span className="accent">.</span>
      </h1>
      <div className="flex justify-betweenborder-b border-(--muted) pb-20">
        <div className="flex-1">
          <p className="text-(--muted) text-sm/7">
            <span className="text-(--text)">Full-Stack Developer</span> working
            across frontend and backend systems. Develops scalable applications
            using MERN stack while applying strong foundations in algorithms and
            system logic.
          </p>

          <div className="flex gap-4 mt-5">
            <Button
              text={<span className="z-30 flex items-center gap-2">./view_work <MoveUpRight size={16} /></span>}
              className={
                "button flex bg-(--accent) px-5 rounded text-sm text-black py-2.75 hover:translate-y-0.5 transition duration-300"
              }
              id='btn'
            />
            <Button
              text={"./contact_me"}
              className={
                "button border rounded py-2.75 px-5 border-[#1E1E21] text-(--muted) text-sm hover:font-bold hover:text-(--text) transition duration-300 z-30"
              }
            />
          </div>
        </div>
        <div className="flex-2 text-right [&_p]:text-xs [&_span]:text-(--accent) [&_p]:text-(--muted) mt-25 [&_p]:mb-2">
          <p>
            Based in <span>Kerala, India</span>
          </p>
          <p>
            Open to <span>work</span>
          </p>
          <p>
            since <span>2025</span>
          </p>
        </div>
      </div>
    </section>
  );
}
