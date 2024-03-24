import { FeedWrapper } from '@/components/feedwrapper'
import { StickyWrapper } from '@/components/stickywrapper'
import React from 'react'
import { Header } from './header';
import { UserProgress } from '@/components/userprogress';
import { getUserProgress } from '@/db/queries';

export const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const [ userProgress ] = await Promise.all([userProgressData])
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickyWrapper>
            <UserProgress 
                activeCourse={{ title: "Spanish", imageSrc: "/es.svg"}}
                hearts={5}
                points={100}
                hasActiveSubscription={false} />
        </StickyWrapper>
        <FeedWrapper>
            <Header title="Spanish" />
        </FeedWrapper>
    </div>
  );
};
