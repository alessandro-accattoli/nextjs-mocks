export const NextRequest = jest.fn().mockImplementation((url: string) => ({
    url,
    headers: new Map(),
    cookies: {
        get: jest.fn((key: string) => ({ name: key, value: `mock-${key}` })),
        set: jest.fn(),
        delete: jest.fn(),
    },
    nextUrl: { pathname: "/mock-path", searchParams: new URLSearchParams() },
}));

export const NextResponse = {
    json: jest.fn((data: any, init?: ResponseInit) => ({
        type: "json",
        body: data,
        init,
    })),
    redirect: jest.fn((url: string, status: number = 307) => ({
        type: "redirect",
        url,
        status,
    })),
    revalidate: jest.fn((path: string) => ({
        type: "revalidate",
        path,
    })),
};

export const userAgent = jest.fn(() => ({
    isBot: false,
    browser: "mock-browser",
}));
