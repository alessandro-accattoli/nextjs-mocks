export const NextRequest = jest.fn().mockImplementation((url: string) => ({
    url,
    headers: new Map(),
    cookies: {
        get: jest.fn((key: string) => ({ name: key, value: `mock-${key}` })),
        set: jest.fn(),
        delete: jest.fn(),
    },
    nextUrl: {
        pathname: "/mock-path",
        searchParams: new URLSearchParams(),
        toString: jest.fn().mockImplementation(() => url)
    },
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
    next: jest.fn()
};

export const userAgent = jest.fn(() => ({
    isBot: false,
    browser: "mock-browser",
}));
