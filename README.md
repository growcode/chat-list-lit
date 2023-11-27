# \<chat-list>

A simple chat list component that accepts an array of message objects and handle display and scroll behavior. It's expected that chat input and message handling logic would be done in a parent or sibling component.

There are two apps:

- `./demo` (viewable via npm start) uses the component directly in a basic html file.
- `./examples/vue-app` contains a simple Vue example with the component. See the readme in that directory for usage.

## Installation

```bash
npm i
```

## Usage

```html
<script type="module">
  import 'chat-list/chat-list.js';
</script>

<chat-list></chat-list>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
