import { MoveRight } from 'lucide-react'


export default function Cards() {

    const cards = [
        {
            subtitle: "01 - Experience",
            title: "Freelance Full-Stack Developer",
            description: "Crafted dynamic web applications for diverse clients, leveraging React, Node.js, and MongoDB to deliver tailored solutions that drive business growth and enhance user engagement.",
            subDesc: "2025 - Present"
        },
        {
            subtitle: "02 - Philosophy",
            title: "Continuous Learning",
            description: "Dedicated to staying current with the latest technologies and best practices, I believe in the power of continuous learning and adaptation.",
            subDesc: "Clean code Advocate"
        },
        {
            subtitle: "03 - Education",
            title: "BCA - Computer Applications, Self Taught Developer",
            description: "Continuous learner: courses, papers, open source contributions.",
            subDesc: "3+ Projects",
        }
    ]

  return (
    <div>
        {cards.map((card, index) => (
            <div key={index} className='m-1 bg-[#15152784] p-8 [&_p]:text-xs flex flex-col gap-3 [&_p]:text-(--muted) hover:border-l-3 hover:overflow-auto hover:border-(--accent) hover:bg-[#181824a6] border-transparent border-l-3 rounded-lg transition-all duration-300'>
                <p>{card.subtitle}</p>
                <h2 className='text-base text-(--text) font-bold'>{card.title}</h2>
                <p>{card.description}</p>
                <span className='flex gap-2 text-xs text-(--accent)'><MoveRight size={16} />{card.subDesc}</span>
            </div>
        ))}
    </div>
  )
}
