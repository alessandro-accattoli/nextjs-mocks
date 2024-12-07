# Next.js Mocks
Mocked modules of Next.js for unit testing with Jest.

#### Mocked modules
- `next/navigation`
- `next/headers`
- `next/cache`
- `next/server`

### How to use

- Copy the folder `__mocks__` into `src` folder of your Next.js project
- Edit the `jest.config.ts` of your project adding the `moduleNameMapper` like the one of this repo for mock the Next.js modules
- Enjoy ;)

### Examples

Inside the `__tests__` folder there are some example on how to test Next.js functions like `redirect`.
