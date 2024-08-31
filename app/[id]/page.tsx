'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPages } from '@/store/slices/pageSlice';
import { AppDispatch, RootState } from '@/store/store';
import { PageData } from '@/types';
import AccordionPageComponent from '../components/AccordionPageComponent';
import ContactPageComponent from '../components/ContactPageComponent';
import SimplePageComponent from '../components/SimplePageComponent';
import GridPageComponent from '../components/GridPageComponent';

export default function DynamicPage({ params }: { params: { id: string } }) {
    const dispatch = useDispatch<AppDispatch>();
    const { pages, status } = useSelector((state: RootState) => state.page);

    const pageId = params.id;

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPages());
        }
    }, [status, dispatch]);

    const pageData: PageData | undefined = pages.find((page: PageData) => page.id === pageId);

    // external page outside of switch case
    useEffect(() => {
        if (pageData?.type === 'external-url' && pageData.url) {
            if (typeof window !== 'undefined') {
                window.location.href = pageData.url;
            }
        }
    }, [pageData]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!pageData) {
        return <div>Page not found</div>;
    }

    switch (pageData.type) {
        case 'accordion':
            return <AccordionPageComponent pageData={pageData} />;
        case 'contact':
            return <ContactPageComponent pageData={pageData} />;
        case 'grid':
            return <GridPageComponent pageData={pageData} />;
        case 'simple':
            return <SimplePageComponent pageData={pageData} />;
        default:
            return <div>Page not found</div>;
    }
}
