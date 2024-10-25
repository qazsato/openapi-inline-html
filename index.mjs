#!/usr/bin/env node
import { program } from 'commander'
import inquirer from 'inquirer'
import fs from 'fs'
import ejs from 'ejs'

const UI = ['stoplight']
const THEME = ['light', 'dark']

// Define CLI options
program
  .option('-i, --input <input>', 'Input OpenAPI JSON file')
  .option('-o, --output <output>', 'Output HTML file name', 'openapi.html')
  .option('--ui <ui>', `Choose UI (${UI.join(', ')})`)
  .option('--title <title>', 'Title of the HTML page', 'OpenAPI Docs')
  .option('--theme <theme>', 'Theme of the HTML page. Choose from light or dark.')
  .parse(process.argv)

async function main() {
  // 1. get CLI options
  const options = program.opts()
  validateOptions(options)

  // 2. if options are not provided, ask user
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'ui',
      message: 'Which UI would you like to use?',
      default: UI[0],
      choices: UI,
      when: !options.ui,
    },
    {
      type: 'list',
      name: 'theme',
      message: 'Choose a theme:',
      default: THEME[0],
      choices: THEME,
      when: !options.theme,
    },
    {
      type: 'input',
      name: 'input',
      message: 'Please provide the path to your OpenAPI JSON file:',
      default: './openapi.json',
      validate: (input) => input.endsWith('.json') || 'File must be a JSON file!',
      when: !options.input,
    },
    {
      type: 'input',
      name: 'output',
      message: 'Output HTML file name:',
      default: 'openapi.html',
      validate: (input) => input.endsWith('.html') || 'File must be an HTML file!',
      when: !options.output,
    }
  ])

  // 3. bundle HTML file based on the UI
  const ui = options.ui || answers.ui
  const theme = options.theme || answers.theme
  const title = options.title || answers.title
  const template = fs.readFileSync(`./resources/${ui}/template.ejs`, 'utf-8')
  const cssContent = fs.readFileSync(`./resources/${ui}/index.css`, 'utf-8')
  const jsContent = fs.readFileSync(`./resources/${ui}/index.js`, 'utf-8')
  const input = options.input || answers.input
  const apiDocs = fs.readFileSync(input, 'utf-8')
  const htmlContent = ejs.render(template, {
    theme,
    title,
    jsContent,
    cssContent,
    apiDocs
  })

  // 4. write the HTML file
  const output = options.output || answers.output
  fs.writeFileSync(output, htmlContent, 'utf-8')
  console.log(`✅ HTML file generated: ${output}`)
}

function validateOptions(options) {
  if (options.ui && !UI.includes(options.ui)) {
    console.error(`Invalid UI (${options.ui}). Please choose from: ${UI.join(', ')}.`)
    process.exit(1)
  }

  if (options.input && !options.input.endsWith('.json')) {
    console.error(`Invalid input file (${options.input}). Must be a JSON file.`)
    process.exit(1)
  }

  if (options.output && !options.output.endsWith('.html')) {
    console.error(`Invalid output file (${options.output}). Must be an HTML file.`)
    process.exit(1)
  }
}

main()