import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css'; // We'll update this CSS file next

// --- Hero Section ---
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.png" alt="yourdb Logo" className={styles.heroLogo} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>The Intelligent Python Database</p>
        <p className={styles.heroTagline}>Persist complex Python objects directly, without the boilerplate.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/quick-start">
            Get Started (5min) ⏱️
          </Link>
          <Link
            className={clsx('button button--outline button--secondary button--lg', styles.githubButton)}
            to={siteConfig.themeConfig.navbar.items.find(item => item.label === 'GitHub')?.href || '#'}>
            View on GitHub <span aria-label="star" role="img">⭐</span>
          </Link>
        </div>

        <p className={styles.pypiLinkContainer}>
          <Link
            href="https://pypi.org/project/yourdb/" // <-- Your PyPI Link
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className={styles.pypiLink}
          >
            📦 Available on PyPI
          </Link>
          {/* You can add a version badge here later if you want */}
        </p>
        
      </div>
    </header>
  );
}

// --- Key Features Section ---
function HomepageFeatures() {
    // Icons can be added here later if desired (e.g., using FontAwesome or SVGs)
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--4')}>
              <div className="text--center padding-horiz--md">
                <h3>🚀 Object-Native</h3>
                <p>Stop translating your data model. Store and retrieve native Python class instances directly. Your objects <i>are</i> the database.</p>
              </div>
            </div>
            <div className={clsx('col col--4')}>
              <div className="text--center padding-horiz--md">
                <h3>🧬 Hybrid Schema Evolution</h3>
                <p>Effortlessly evolve your data models over time with automatic on-the-fly upgrades and optional safe eager migration. No more risky `ALTER TABLE`.</p>
              </div>
            </div>
            <div className={clsx('col col--4')}>
              <div className="text--center padding-horiz--md">
                <h3>⚡ Fast & Thread-Safe</h3>
                <p>Built on a log-structured engine for rapid writes and an in-memory cache for fast reads. Robust writer-preference locking ensures concurrency safety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

// --- NEW SECTION: Why YourDB? ---
function WhyYourDB() {
    return (
        <section className={styles.whySection}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <h2 className="text--center">Why Choose yourdb?</h2>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '2rem' }}>
                    <div className={clsx('col col--6')}>
                        <h4>🐍 Pythonic & Developer-Friendly</h4>
                        <p>Designed from the ground up for Python developers. Work with the objects you already have. The API is intuitive and gets out of your way.</p>
                    </div>
                    <div className={clsx('col col--6')}>
                        <h4>🛡️ Safe & Resilient</h4>
                        <p>The append-only log ensures crash safety – your data files won't corrupt. Automatic compaction keeps things efficient. Built-in versioning makes schema changes painless.</p>
                    </div>
                    <div className={clsx('col col--6')}>
                        <h4>💡 Simple & Zero-Dependency</h4>
                        <p>Pure Python. No external servers to install or manage. Perfect for serverless, edge functions, desktop apps, or simplifying your stack for small to medium projects.</p>
                     </div>
                     <div className={clsx('col col--6')}>
                        <h4>📈 Built for the Future</h4>
                         <p>The log-structured architecture naturally supports advanced features like Time-Travel Queries (coming soon!) and auditing, making `yourdb` adaptable for future needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- NEW SECTION: Use Cases ---
function UseCases() {
    return (
        <section className={styles.useCasesSection}>
            <div className="container">
                 <h2 className="text--center">Ideal Use Cases</h2>
                 <ul className={styles.useCaseList}>
                    <li>Rapid Prototyping & MVPs</li>
                    <li>Serverless Functions (AWS Lambda, etc.) & Edge Computing</li>
                    <li>Caching Layers for APIs and Applications</li>
                    <li>Desktop Applications needing simple persistence</li>
                    <li>Storing Application State or Configuration</li>
                    <li>Educational tool for learning database internals</li>
                 </ul>
            </div>
        </section>
    );
}


// --- Main Homepage Component ---
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // Use site title for the main page, adjust description
      title={`${siteConfig.title} - The Intelligent Python Database`}
      description="A modern, developer-friendly, object-native database built in pure Python. Handles schema evolution, concurrency, and persistence seamlessly.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <WhyYourDB />
        <UseCases />
        {/* We can add a "Get Involved" section here later */}
      </main>
    </Layout>
  );
}