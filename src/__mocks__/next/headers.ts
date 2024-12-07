export const headers = jest.fn(() => ({
    get: jest.fn((key: string) => `mock-${key}`),
    entries: jest.fn(() => new Map([["content-type", "mock-content-type"]])),
}));

export const cookies = jest.fn().mockResolvedValue({
    get: jest.fn((key: string) => ({ name: key, value: `mock-${key}` })),
    set: jest.fn(),
    delete: jest.fn(),
});
