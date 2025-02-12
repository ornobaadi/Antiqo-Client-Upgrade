import { BrainCircuit, Globe, Pencil, TvMinimal } from 'lucide-react';

const TimelineEvent = ({ index, title, description, icon: Icon }) => (
    <div className="group relative flex gap-6 items-start mb-12 last:mb-0">
        {/* Icon Container */}
        <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
            </div>
            {/* Number */}
            <span className="absolute -top-1 -right-1 text-xs text-gray-500">
                {index}
            </span>
        </div>

        {/* Content */}
        <div className="flex-1 pt-1.5">
            <h3 className="text-lg font-medium text-gray-200 mb-2">
                {title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const Timeline = () => {
    const timelineEvents = [
        {
            title: "Project Inception",
            description: "Initial conceptualization and foundation of our research methodologies and digital frameworks.",
            icon: Pencil
        },
        {
            title: "Digital Transformation",
            description: "Adaptation to remote collaboration and development of innovative virtual research platforms.",
            icon: TvMinimal
        },
        {
            title: "Global Expansion",
            description: "Establishment of international partnerships and deployment of advanced research tools.",
            icon: Globe
        },
        {
            title: "AI Integration",
            description: "Implementation of machine learning algorithms to enhance data analysis and prediction models.",
            icon: BrainCircuit
        },
        {
            title: "Breakthrough Innovations",
            description: "Major developments in our core technologies and methodologies, setting new industry standards.",
            icon: () => (
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth={1.5} 
                    className="w-6 h-6"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" 
                    />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 bg-gray-900">
            <div className="container max-w-3xl mx-auto px-6">
                <div className="space-y-2 mb-16 text-center">
                    <h2 className="text-3xl font-medium text-gray-100">
                        Our Journey
                    </h2>
                    <p className="text-gray-400">
                        Timeline of our key milestones and achievements
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute top-0 left-6 w-px h-full bg-gray-800/50 transform -translate-x-1/2" />
                    
                    {/* Timeline events */}
                    <div className="relative">
                        {timelineEvents.map((event) => (
                            <TimelineEvent
                                key={event.title}
                                
                                {...event}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;