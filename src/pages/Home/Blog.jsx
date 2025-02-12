import { User } from "lucide-react";

const BlogCard = ({ category, title, excerpt, author, readTime, image }) => (
    <div className="shadow-xl rounded-lg overflow-hidden transition-colors duration-300">
        <div className="aspect-[16/9] relative overflow-hidden bg-gray-800">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gray-900/80 rounded-full text-xs text-gray-300">
                    {category}
                </span>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-medium mb-2">
                {title}
            </h3>
            <p className="text-sm mb-4 line-clamp-2">
                {excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-2"><User />{author}</span>
                <span>{readTime} min read</span>
            </div>
        </div>
    </div>
);

const Blog = () => {
    const blogs = [
        {
            category: "Roman Empire",
            title: "Hidden Treasures of Pompeii",
            excerpt: "Exploring newly excavated artifacts from the ancient Roman city, revealing intimate details of daily life before the eruption.",
            author: "Prof. Marco Bianchi",
            readTime: 12,
            image: "https://hms.harvard.edu/sites/default/files/2024-11/cryptoporticus%20750.jpg"
        },
        {
            category: "Roman Empire",
            title: "The Lost Legion of Rome",
            excerpt: "New evidence suggests the fate of the mysterious Ninth Legion may have been discovered in northern Britain.",
            author: "Dr. Sarah Chen",
            readTime: 15,
            image: "https://i0.wp.com/militaryhistorynow.com/wp-content/uploads/2021/03/Column_of_Marcus_Aurelius_-_detail1-1.jpg?ssl=1"
        },
        {
            category: "Roman Empire",
            title: "Secrets of Roman Concrete",
            excerpt: "Modern analysis reveals the unprecedented durability of Roman maritime structures and their innovative engineering.",
            author: "Prof. James Morton",
            readTime: 10,
            image: "https://assets.newatlas.com/dims4/default/f61b1da/2147483647/strip/true/crop/2000x1333+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fde%2F77%2Fb125ff97461ca31ce97e0d799a68%2Fdepositphotos-167433136-l.jpg"
        },
        {
            category: "Ancient Technology",
            title: "Roman Water Systems",
            excerpt: "Investigating the sophisticated engineering behind Rome's vast network of aqueducts and water distribution.",
            author: "Dr. Elena Santos",
            readTime: 8,
            image: "https://cms-imgp.jw-cdn.org/img/p/102014404/E/art/102014404_E_cnt_2_xl.jpg"
        },
        {
            category: "Daily Life",
            title: "Roman Fashion Unveiled",
            excerpt: "Recent textile discoveries provide new insights into the clothing and social status symbols of ancient Romans.",
            author: "Prof. Laura Smith",
            readTime: 14,
            image: "https://www.historyhit.com/app/uploads/2021/11/Ancient-Roman-Tunics-and-Outfits.jpg"
        },
        {
            category: "Architecture",
            title: "The Forums of Rome",
            excerpt: "Digital reconstruction reveals the grandeur of Roman forums in their original glory using latest archaeological data.",
            author: "Dr. Michael Park",
            readTime: 11,
            image: "https://cdn.britannica.com/77/187677-138-73F32D16/buildings-Rome-Roman-Forum.jpg?w=800&h=450&c=crop"
        },
        {
            category: "Culture",
            title: "Roman Theatre Masks",
            excerpt: "Newly discovered theatrical artifacts shed light on performance traditions in ancient Roman entertainment.",
            author: "Prof. Isabella Romano",
            readTime: 9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTqpcK6f9UIHb2gSr2mkN_zT2PUAFRujuEg&s"
        },
        {
            category: "Military",
            title: "Legion Equipment Evolution",
            excerpt: "Tracing the development of Roman military equipment through archaeological findings across the empire.",
            author: "Dr. Robert Klaus",
            readTime: 13,
            image: "https://i.redd.it/ge5auu4slswz.jpg"
        },
        {
            category: "Society",
            title: "Villa Life Revealed",
            excerpt: "Recent excavations of Roman villas provide insights into the lifestyle of the ancient Roman elite.",
            author: "Prof. Maria Garcia",
            readTime: 16,
            image: "https://cdna.artstation.com/p/assets/images/images/077/881/178/large/giuseppe-berardi-villa-romana-rio-verde.jpg?1720605846"
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-medium text-center my-10 lg:my-20">Latest Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;