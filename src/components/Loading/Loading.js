import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { Container } from './styles';

export default function Loading() {
    useEffect(() => {
        NProgress.configure({ easing: 'ease', speed: 1000 });
        NProgress.start();

        return () => {
            NProgress.done();
        }
    });

    return (
        <Container />
    );
}
