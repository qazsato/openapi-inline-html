# openapi-static-html

Generate inline HTML documentation from OpenAPI spec.

## Feature

1. 📗 Single HTML File
2. 🌙 Use Dark Theme

One of the key benefits of `openapi-static-html` is its portability. By generating a single, self-contained HTML file, all required assets (CSS, JavaScript, and OpenAPI data) are embedded directly in the document. This makes it easy to:

1. **Share** the file as a single, standalone document without additional dependencies.
2. **Host** the file on any server or serve it locally, with no need for additional resources or configurations.
3. **Distribute** the file via email or other methods, knowing that it will display consistently across environments.

This portability makes `openapi-static-html` ideal for situations where reliable, standalone documentation is required.

## How to use

```bash
npx openapi-static-html -i openapi.json
```

## CLI Options

| command       | default        | description                                        |
| ------------- | -------------- | -------------------------------------------------- |
| --input (-i)  |                | Input OpenAPI JSON file path                       |
| --output (-o) | "openapi.html" | Output HTML file name                              |
| --ui          | "stoplight"    | Choose UI (stoplight)                              |
| --theme       | "light"        | Theme of the HTML page. Choose from light or dark. |
| --title       | "OpenAPI Docs" | Title of the HTML page                             |

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
