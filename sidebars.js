// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 // sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
         
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/basic-crud',
        'tutorials/advanced-queries',
        'tutorials/schema-evolution-in-practice',
        // Add more tutorial pages here
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/architecture',
        'core-concepts/concurrency',
        'core-concepts/compaction',
        'core-concepts/schema-evolution',
        // Add 'core-concepts/time-travel' later
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/main-api', // Will point to docs/api-reference/main-api.mdx
        'api-reference/entity',
        'api-reference/serialization',
        'api-reference/locking',
        'api-reference/compaction',
      ],
    },
  ],
};
export default sidebars;