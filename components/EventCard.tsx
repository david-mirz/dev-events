'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import posthog from 'posthog-js';

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

const EventCard = ({image, title, slug, location, date, time} : Props) => {
    const handleEventCardClick = () => {
        // Track event card click with event details
        posthog.capture('event_card_clicked', {
            event_title: title,
            event_slug: slug,
            event_location: location,
            event_date: date,
            event_time: time,
        });
    };

    return (
        <Link href={`/events/${slug}`} id={"event-card"} onClick={handleEventCardClick}>
            <Image src={image} alt={"Event Card"} width={410} height={300} />
            <p className={"title"}>{title}</p>
            <div className={"flex flex-row gap-2"}>
                <Image src={"/icons/pin.svg"} alt={"location icon"} width={14} height={14} />
                <p>{location}</p>
            </div>
            <div className={"datetime"}>
                <div>
                    <Image src={"/icons/calendar.svg"} alt={"calendar icon"} width={14} height={14} />
                    <p>{date}</p>
                </div>
                <div>
                    <Image src={"/icons/clock.svg"} alt={"clock icon"} width={14} height={14} />
                    <p>{time}</p>
                </div>
            </div>

        </Link>
    );
};

export default EventCard;