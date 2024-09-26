import React, { useCallback, useState } from 'react';
import { PlayheadStoreState, usePlayheadStore } from './Stores/usePlayheadStore';

export const PlayControls = () => {
    // TODO: implement time <= maxTime
    // const time = usePlayheadStore(state => state.time);
    const setTime = usePlayheadStore(state => state.setTime);
    // const max = usePlayheadStore(state => state.max);
    const setMax = usePlayheadStore(state => state.setMax);
    const [tempTime, setTempTime] = useState(0);
    const [tempMax, setTempMax] = useState(2000);

    const onTimeChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setTempTime(Number(e.target.value));
        },
        [tempTime, setTempTime]
    );

    const onMaxChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setTempMax(Number(e.target.value));
        },
        [tempMax, setTempMax]
    );

    return (
        <div
            className="flex items-center justify-between border-b border-r border-solid border-gray-700
 px-2"
            data-testid="play-controls"
        >
            <fieldset className="flex gap-1">
                Current
                <input
                    className="bg-gray-700 px-1 rounded"
                    type="number"
                    data-testid="current-time-input"
                    min={0}
                    max={2000}
                    step={10}
                    value={tempTime}
                    onChange={onTimeChange}
                />
            </fieldset>
            -
            <fieldset className="flex gap-1">
                <input
                    className="bg-gray-700 px-1 rounded"
                    type="number"
                    data-testid="duration-input"
                    min={100}
                    max={2000}
                    step={10}
                    defaultValue={2000}
                    value={tempMax}
                    onChange={onMaxChange}
                />
                Duration
            </fieldset>
        </div>
    );
};
