import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Menu from '../Menu/Menu';
import MenuEN from '../../languages/components/Menu/Menu';

export default function MenuHolder() {
    let location = useLocation();
    const [lang, setLang] = useState(false);

    function usePageViews() {
        useEffect(() => {
            const url = location.pathname;
            const checkLangUrl = url.includes("/en");

            if(checkLangUrl) {
              setLang(true);
            }
        }, [location]);
    }

    usePageViews();
    return (
        <>
            { lang ? <MenuEN /> : <Menu /> }
        </>
    );
}
