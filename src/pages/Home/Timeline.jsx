import { BrainCircuit, Globe, Pencil, TvMinimal } from 'lucide-react';

const TimelineEvent = ({ year, title, description, icon: Icon }) => (
    <div className="group flex gap-8 items-start mb-16 last:mb-0">
        {/* Icon Column */}
        <div className="w-20 flex-shrink-0">
            <div className="w-16 h-16 rounded-lg border border-gray-800 p-2.5 flex items-center justify-center transition-colors">
                <Icon className="w-full h-full text-gray-400 group-hover:text-gray-300" />
            </div>
        </div>

        {/* Content Column */}
        <div className="flex-grow relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 w-px h-full bg-gray-500 group-last:h-[40%]" />

            {/* Dot */}
            <div className="absolute left-0 top-[6px] w-2 h-2 bg-gray-700 rounded-full -translate-x-1 group-hover:bg-gray-600" />

            {/* Content */}
            <div className="pl-6">
                <span className="text-sm text-gray-500 font-medium">{year}</span>
                <h3 className="text-2xl font-medium mt-1 transition-colors">
                    {title}
                </h3>
                <p className="text-base mt-2 leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const Timeline = () => {
    const timelineEvents = [
        {
            year: "2019",
            title: "Project Inception",
            description: "Initial conceptualization and foundation of our research methodologies and digital frameworks.",
            illustration: () => (
                <Pencil />
            )
        },
        {
            year: "2020",
            title: "Digital Transformation",
            description: "Adaptation to remote collaboration and development of innovative virtual research platforms.",
            illustration: () => (
                <TvMinimal />
            )
        },
        {
            year: "2021",
            title: "Global Expansion",
            description: "Establishment of international partnerships and deployment of advanced research tools.",
            illustration: () => (
                <Globe />
            )
        },
        {
            year: "2022",
            title: "AI Integration",
            description: "Implementation of machine learning algorithms to enhance data analysis and prediction models.",
            illustration: () => (
                <BrainCircuit />
            )
        },
        {
            year: "2023",
            title: "Breakthrough Innovations",
            description: "Major developments in our core technologies and methodologies, setting new industry standards.",
            illustration: () => (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-medium text-center my-10 lg:my-20">Our Journey</h2>
                <div className="flex flex-col justify-center items-center">
                    {timelineEvents.map((event, index) => (
                        <TimelineEvent
                            key={index}
                            {...event}
                            icon={event.illustration}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;