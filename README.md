# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Running Unit Tests

To run the unit tests, run the following command:

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

## Environment Variables

This project uses the following environment variables:

### `NEXT_PUBLIC_DEFAULT_LANGUAGE`

- Description: The default language of the application.
- Type: string

### `NEXT_PUBLIC_COUNTRIES_API`

- Description: The URL of the API that provides countries data.
- Type: string

## Out of Scope Functionalities

### Tailwind Component Library and Global Styles

- Description: This application does not include a component library or global styles written in Tailwind CSS.

### UI Testing with Storybook

- Description: This application does not include UI testing with Storybook.

### Integration Testing

- Description: This application does not include integration tests.

### Nicer UI

- Description: While the UI is functional, it is not designed to be aesthetically pleasing or visually appealing. This is out of scope for this project.
