export type eventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: eventItem[] = [
    {
        image: "/images/event1.png",
        title: "Java",
        slug: "java",
        location: "Haifa",
        date: "01-01-2026",
        time: "09:00",
    },
    {
        image: "/images/event2.png",
        title: "React",
        slug: "react",
        location: "Tel-Aviv",
        date: "03-01-2026",
        time: "10:00",
    },
    {
        image: "/images/event3.png",
        title: "C++",
        slug: "C++",
        location: "Caesarea",
        date: "07-01-2026",
        time: "19:00",
    },
    {
        image: "/images/event4.png",
        title: "MongoDB",
        slug: "mongodb",
        location: "Jerusalem",
        date: "08-01-2026",
        time: "20:00",
    },
    {
        image: "/images/event5.png",
        title: "Java-Spring",
        slug: "java-spring",
        location: "Akko",
        date: "09-01-2026",
        time: "17:00",
    },
    {
        image: "/images/event6.png",
        title: "Docker",
        slug: "docker",
        location: "Kiryat Yam",
        date: "14-01-2026",
        time: "10:00",
    },

]