import {  useEffect } from 'react';

export const useOutsideClick = (ref, handler) => {


    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            handler();
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    },[ref]);
};


//
// import { useState, useEffect, useRef } from 'react';
//
// export const useOutsideClick = (initialValue) => {
//     const [isActive, setIsActive] = useState(initialValue);
//     const ref = useRef(null);
//
//     const handleClick = (e) => {
//         if (ref.current && !ref.current.contains(e.target)) {
//             setIsActive(false);
//         }
//     };
//
//     useEffect(() => {
//         document.addEventListener("mousedown", handleClick);
//         return () => {
//             document.removeEventListener("mousedown", handleClick);
//         };
//     });
//
//     return { ref, isActive, setIsActive };
// };

