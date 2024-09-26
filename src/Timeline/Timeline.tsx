import { useRef, useState } from 'react';
import { Playhead } from './Playhead';
import { Ruler } from './Ruler';
import { TrackList } from './TrackList';
import { KeyframeList } from './KeyframeList';
import { PlayControls } from './PlayControls';
import { useScrollSyncByX, useScrollSyncByY } from '../utils/hooks/useScrollSync';

export const Timeline = () => {
    const trackListRef = useRef<HTMLDivElement>(null);
    const keyframeListRef = useRef<HTMLDivElement>(null);
    const rulerRef = useRef<HTMLDivElement>(null);
    useScrollSyncByY(trackListRef, keyframeListRef);
    useScrollSyncByX(rulerRef, keyframeListRef);

    return (
        <div
            className="relative h-[300px] w-full grid grid-cols-[300px_1fr] grid-rows-[40px_1fr]
    bg-gray-800 border-t-2 border-solid border-gray-700"
            data-testid="timeline"
        >
            <PlayControls />
            <Ruler ref={rulerRef} />
            <TrackList ref={trackListRef} />
            <KeyframeList ref={keyframeListRef} />
            <Playhead />
        </div>
    );
};
