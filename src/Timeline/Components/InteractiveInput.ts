import { useRef } from 'react';

interface InteractiveInputProps {
    time: number;
    max: number;
    defaultTime: number;
    cb: (n: number) => void;
}

export const InteractiveInput = ({
    time,
    max,
    defaultTime,
    cb
}: InteractiveInputProps) => {
    const isFocusing = useRef(false);
    const [tempVal, setTempVal] = useRef(defaultTime);

    // TODO:
};