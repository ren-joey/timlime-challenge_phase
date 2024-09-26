import { forwardRef } from 'react';
import { Segment } from './Segment';

export const KeyframeList = forwardRef<HTMLDivElement>((_, ref) => {
    // TODO: implement scroll sync with `Ruler` and `TrackList`

    return (
        <div
            className="px-4 min-w-0 overflow-auto"
            data-testid="keyframe-list"
            ref={ref}
        >
            <Segment />
            <Segment />
            <Segment />
            <Segment />
            <Segment />
            <Segment />
            <Segment />
            <Segment />
            <Segment />
            <Segment />
        </div>
    );
});

KeyframeList.displayName = 'KeyframeList';