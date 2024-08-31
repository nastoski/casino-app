export interface PaymentData {
    id: number;
    dateRequest: string;
    depositAmount: number;
    method: string;
    status: string;
    approvedAt?: string;
    cancelledAt?: string;
    fee: number;
    paymentExtId: string;
    paymentRequest: string;
    paymentResponse: string;
    paymentType: string;
    paymentMethodId: string;
    playerId: string;
}

export type AccordionContent = {
    question: string;
    answer: string;
};

export type PageType = 'accordion' | 'external-url' | 'contact' | 'grid' | 'simple';

export interface PageData {
    id: string;
    type: PageType;
    title: string;
    htmlContent?: string;
    url?: string;
    items?: PageDataItems[];
}

export interface PageDataItems {
    title: string;
    description: string;
    image?: string;
    link?: string;
}