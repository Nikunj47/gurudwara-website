// // import { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// import AnnouncementSection from '@/components/homepage/AnnouncementSection';
// import DevotionalSection from '@/components/homepage/DevotionalSection';
// import DirectionSection from '@/components/homepage/DirectionSection';
// import DownloadAppSection from '@/components/homepage/DownloadAppSection';
// import EventSection from '@/components/homepage/EventSection';
// import HeroSection from '@/components/homepage/HeroSection';
// import LinkSection from '@/components/homepage/LinkSection';
// import SubscribeSection from '@/components/homepage/SubscribeSection';
// import WelcomeSection from '@/components/homepage/WelcomeSection';
// import WorshipExperienceSection from '@/components/homepage/WorshipExperienceSection';
// import WorshipSection from '@/components/homepage/WorshipSection';
// import AppLayout from '@/components/layout/AppLayout';
// import { YOUTUBE_API_KEY, YOUTUBE_UPLOAD_KEY } from '@/functions/environmentVariables';
// import { sendCatchFeedback } from '@/functions/feedback';
// import { useAppDispatch } from '@/store/hooks';
// import { setVideoLoading, setVideos } from '@/store/slices/youtubeVideos';
// import axios from 'axios';
// import { useEffect } from 'react';
//
// export default function Home() {
//   const dispatch = useAppDispatch();
//   const getYoutubeChannelVideos = async () => {
//     dispatch(setVideoLoading(true));
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&part=snippet&playlistId=${YOUTUBE_UPLOAD_KEY}&maxResults=10`
//       );
//       dispatch(
//         setVideos({
//           videos: response.data.items,
//           nextPageToken: response.data.nextPageToken,
//           prevPageToken: response.data.prevPageToken,
//         })
//       );
//     } catch (error) {
//       sendCatchFeedback(error);
//     } finally {
//       dispatch(setVideoLoading(false));
//     }
//   };
//
//   useEffect(() => {
//     getYoutubeChannelVideos();
//   }, []);
//
//   return (
//     <AppLayout>
//       <HeroSection />
//       <WelcomeSection />
//       <LinkSection />
//       <DevotionalSection />
//       <WorshipSection />
//       <WorshipExperienceSection />
//       <DownloadAppSection />
//       <EventSection />
//       <AnnouncementSection />
//     </AppLayout>
//   );
// }


import React from 'react';
import Head from 'next/head';

// Define a simple style object for Sikhism-related colors
const pageStyles = {
    display: 'flex',
    flexDirection: 'column' as 'column', // Added type assertion for flexDirection
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF', // White background
    color: '#000000', // Black text for contrast, can be changed
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as 'center', // Added type assertion for textAlign
    padding: '20px',
};

const titleStyles = {
    color: '#FF9933', // Saffron color for the title
    fontSize: '3em',
    marginBottom: '0.5em',
};

const subtitleStyles = {
    color: '#005BBB', // Blue color for the subtitle/coming soon message
    fontSize: '2em',
    marginBottom: '1em',
};

const iconStyles = {
    maxWidth: '150px', // Adjust as needed
    marginBottom: '1em',
};

const ComingSoonPage = () => {
    return (
        <>
            <Head>
                <title>Guru Tegh Bahadur Sahib - Coming Soon</title>
                <meta name="description" content="Our Gurudwara website is under construction and will be launching soon!" />
                <link rel="icon" href="/public/gurudwaraLogo.jpeg" /> {/* You can update this path */}
            </Head>
            <div style={pageStyles}>
                 {/*Optional: Add an icon for the Gurudwara */}
                 {/*<img src="/public/gurudwaraLogo.jpeg" alt="Gurudwara Icon" style={iconStyles} />*/}

                <h1 style={titleStyles}>Guru Tegh Bahadur Sahib</h1>
                <p style={subtitleStyles}>Website Coming Soon</p>
                {/*<p>We are working hard to bring you a new online experience. Please check back later!</p>*/}
            </div>
        </>
    );
};

export default ComingSoonPage;