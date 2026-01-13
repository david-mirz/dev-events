import React from 'react';
import {useIntersection} from "next/dist/client/use-intersection";
import ExploreBtn from "@/components/ExploreBtn";
import NavBar from "@/components/NavBar";
import EventCard from "@/components/EventCard";
import { events } from '@/lib/constants';


const Home = () => {
    return (


        <section>
            <h1 className='text-center'>The hub for dev events</h1>
            <p className='text-center mt-5'>Hackathons, meetups, conferences</p>

            <ExploreBtn/>

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>
                <ul className="events">
                    {events.map((event) => (
                        <li>
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
};

export default Home;