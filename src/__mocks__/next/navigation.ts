export const useRouter = jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    pathname: "/mock-path",
    query: {},
}));

export const usePathname = jest.fn(() => "/mock-path");

export const useSearchParams = jest.fn(() => ({
    get: jest.fn(),
    toString: jest.fn(() => "?mock=query"),
}));

export const useParams = jest.fn(() => ({ id: "mock-id" }));

export const redirect = jest.fn();
export const notFound = jest.fn();
