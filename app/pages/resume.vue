<script setup>
definePageMeta({ layout: false })

const { locale, t, toggle } = useLocale()

useSeoMeta({ title: computed(() => t('resume.seoTitle')) })

const cvData = {
  de: {
    name: 'Paula Alemany Gotor',
    title: 'Software-Entwicklerin',
    contact: {
      email: 'pau9ale@gmail.com',
      emailHref: 'mailto:pau9ale@gmail.com',
      github: 'github.com/pauliecodes',
      githubHref: 'https://github.com/pauliecodes',
      portfolio: 'paulie.codes',
      portfolioHref: 'https://paulie.codes/',
      phone: '0172 6123509',
      location: ['Flensburg, Deutschland', 'Umzugsbereit (Raum Hamburg)'],
    },
    profile:
      'Frontend-Entwicklerin mit Schwerpunkt auf Vue 3, TypeScript und skalierbarer Frontend-Architektur. Ich verantworte das Frontend eines Greenfield-Projekts eigenständig, von der Architektur und Standards über Tooling bis zur CI/CD-Pipeline. Als Accessibility Officer treibe ich unternehmensweite Barrierefreiheits-Standards voran.',
    experience: [
      {
        role: 'Software-Entwicklerin',
        company: 'CODIN IT GmbH',
        period: 'Seit 01/2025',
        bullets: [
          { text: 'Frontend-Entwicklung in mehreren Projekten, von der Modernisierung historisch gewachsener Anwendungen bis zum eigenverantwortlichen Aufbau neuer Systeme' },
          { label: 'Greenfield-Projekt (Lead)', text: 'Technische Gesamtverantwortung für das Frontend (Vue 3, Vite, TypeScript): Architektur, Tooling und Standards eigenständig konzipiert und umgesetzt' },
          { text: 'Aufbau und Betrieb der CI/CD-Pipeline inklusive Deployment auf Azure' },
          { text: 'Definition und technische Durchsetzung projektweiter Standards, u. a. Feature-Isolation über eslint-plugin-boundaries, automatisierte Pre-Commit-Checks (ESLint, Prettier, Vitest) sowie einheitliche TypeScript- und Vue-Konventionen' },
          { label: 'Legacy-Modernisierung', text: 'Schrittweise Migration einer bestehenden Vue-2-Anwendung von der Options API auf Vue 3 mit Composition API sowie kontinuierliche Einführung von Frontend-Standards in einer über Jahre gewachsenen Codebase' },
          { text: 'Fachliche Anleitung eines weiteren Frontend-Entwicklers sowie Sicherstellung der Code-Qualität durch regelmäßige Peer-Reviews' },
          { label: 'Accessibility Officer', text: 'Aufbau unternehmensweiter Barrierefreiheits-Standards, Entwicklung interner Audit-Prozesse, Tools, Dokumentation und Workshops' },
          { text: 'Weiterentwicklung und Wartung von Backend-Services (Java, Spring Boot), inklusive komplexer Datenvisualisierungen' },
        ],
      },
      {
        role: 'Software-Entwicklerin',
        company: 'Bartels-Langness Handelsgesellschaft mbH & Co. KG',
        period: '09/2024 – 10/2024',
        bullets: [
          { text: 'Full-Stack-Entwicklung einer Web-Anwendung mit TypeScript, Next.js, React, TanStack Query und Node.js' },
          { text: 'Backend-Anbindung über PayloadCMS' },
          { text: 'Agile Entwicklung nach SCRUM' },
        ],
      },
      {
        role: 'Softwareentwicklerin (Ausbildung)',
        company: 'lambda9 GmbH',
        period: '08/2021 – 07/2024',
        bullets: [
          { label: 'Abschlussprojekt (01/2024 – 06/2024)', text: 'Eigenständige Konzeption und Entwicklung eines Nextcloud-Plugins zur digitalen Dokumentensignatur. Full-Stack mit Vue.js und PHP, inklusive Integration eines bestehenden Unternehmensprodukts über Schnittstellen und umfassender technischer Dokumentation.' },
          { label: 'Internationalisierung (01/2023 – 07/2023)', text: 'Architektonische Erweiterung einer bestehenden Anwendung um eine skalierbare i18n-Infrastruktur im Kotlin-Frontend, inklusive Analyse und Anpassung der bestehenden Codebase' },
          { text: 'Kontinuierliche Mitarbeit an diversen Softwareprojekten: Entwicklung neuer Features, systematische Fehleranalyse und Bugfixing sowie schnelle Einarbeitung in fremde Codebases' },
          { text: 'Praktische Erfahrung in agilen Entwicklungsprozessen' },
        ],
      },
    ],
    education: [
      {
        degree: 'Ausbildung zur Fachinformatikerin für Anwendungsentwicklung',
        institution: 'Eckener-Schule (Flensburg) / lambda9 GmbH',
        period: '08/2021 – 07/2024',
        bullets: [
          { text: 'Mehrfach beste Projekte und Klausuren (1,0)' },
          { text: 'Ø 2,0 Berufsschule' },
        ],
      },
    ],
    skills: [
      'Vue.js 3, Nuxt, TypeScript, JavaScript',
      'Frontend-Architektur, Component Libraries, State Management',
      'HTML & CSS, Tailwind, UnoCSS, Bootstrap',
      'Testing (Vitest), CI/CD, Azure, Git, Docker',
      'Barrierefreiheit (WCAG, semantisches HTML, ARIA, Accessibility Tree)',
      'React, Next.js',
      'Java, Spring Boot, Kotlin, PHP, Laravel, Symfony',
      'SQL & PostgreSQL',
    ],
    languages: [
      { name: 'Spanisch', level: 'Muttersprache' },
      { name: 'Katalanisch', level: 'Muttersprache' },
      { name: 'Deutsch', level: 'Fließend' },
      { name: 'Englisch', level: 'Verhandlungssicher, C1' },
    ],
    certificates: [
      'Accessibility-Kurs, Sara Soueidan (laufend)',
      'Barrierefreiheits-Workshop, Gehirngerecht',
      'Certificate in Advanced English, Cambridge University — 2018',
    ],
  },
  en: {
    name: 'Paula Alemany Gotor',
    title: 'Software Developer',
    contact: {
      email: 'pau9ale@gmail.com',
      emailHref: 'mailto:pau9ale@gmail.com',
      github: 'github.com/pauliecodes',
      githubHref: 'https://github.com/pauliecodes',
      portfolio: 'paulie.codes',
      portfolioHref: 'https://paulie.codes/',
      phone: '0172 6123509',
      location: ['Flensburg, Germany', 'Open to relocation (Hamburg area)'],
    },
    profile:
      'Frontend developer focused on Vue 3, TypeScript, and scalable frontend architecture. I independently own the frontend of a greenfield project, from architecture and standards to tooling and CI/CD pipeline. As Accessibility Officer, I drive company-wide accessibility standards.',
    experience: [
      {
        role: 'Software Developer',
        company: 'CODIN IT GmbH',
        period: 'Since 01/2025',
        bullets: [
          { text: 'Frontend development across multiple projects, from modernising legacy applications to independently building new systems from scratch' },
          { label: 'Greenfield Project (Lead)', text: 'Full technical ownership of the frontend (Vue 3, Vite, TypeScript): architecture, tooling, and standards designed and implemented independently' },
          { text: 'Set up and operate the CI/CD pipeline including deployment on Azure' },
          { text: 'Defined and technically enforced project-wide standards, including feature isolation via eslint-plugin-boundaries, automated pre-commit checks (ESLint, Prettier, Vitest), and consistent TypeScript and Vue conventions' },
          { label: 'Legacy Modernisation', text: 'Incremental migration of an existing Vue 2 application from Options API to Vue 3 with Composition API, and ongoing introduction of frontend standards into a codebase grown over years' },
          { text: 'Technical guidance of another frontend developer and code quality assurance through regular peer reviews' },
          { label: 'Accessibility Officer', text: 'Built company-wide accessibility standards, developed internal audit processes, tools, documentation and workshops' },
          { text: 'Continued development and maintenance of backend services (Java, Spring Boot), including complex data visualisations' },
        ],
      },
      {
        role: 'Software Developer',
        company: 'Bartels-Langness Handelsgesellschaft mbH & Co. KG',
        period: '09/2024 – 10/2024',
        bullets: [
          { text: 'Full-stack development of a web application using TypeScript, Next.js, React, TanStack Query and Node.js' },
          { text: 'Backend integration via PayloadCMS' },
          { text: 'Agile development using SCRUM' },
        ],
      },
      {
        role: 'Software Developer (Apprenticeship)',
        company: 'lambda9 GmbH',
        period: '08/2021 – 07/2024',
        bullets: [
          { label: 'Final Project (01/2024 – 06/2024)', text: 'Independent design and development of a Nextcloud plugin for digital document signing. Full-stack with Vue.js and PHP, including integration of an existing company product via APIs and comprehensive technical documentation.' },
          { label: 'Internationalisation (01/2023 – 07/2023)', text: 'Architectural extension of an existing application with a scalable i18n infrastructure in the Kotlin frontend, including analysis and adaptation of the existing codebase' },
          { text: 'Ongoing contribution to various software projects: new feature development, systematic bug analysis and fixing, and quick onboarding into unfamiliar codebases' },
          { text: 'Practical experience in agile development processes' },
        ],
      },
    ],
    education: [
      {
        degree: 'Apprenticeship as IT Specialist in Application Development',
        institution: 'Eckener-Schule (Flensburg) / lambda9 GmbH',
        period: '08/2021 – 07/2024',
        bullets: [
          { text: 'Multiple top-rated projects and exams (grade 1.0)' },
          { text: 'Ø 2.0 vocational school' },
        ],
      },
    ],
    skills: [
      'Vue.js 3, Nuxt, TypeScript, JavaScript',
      'Frontend architecture, component libraries, state management',
      'HTML & CSS, Tailwind, UnoCSS, Bootstrap',
      'Testing (Vitest), CI/CD, Azure, Git, Docker',
      'Accessibility (WCAG, semantic HTML, ARIA, accessibility tree)',
      'React, Next.js',
      'Java, Spring Boot, Kotlin, PHP, Laravel, Symfony',
      'SQL & PostgreSQL',
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Catalan', level: 'Native' },
      { name: 'German', level: 'Fluent' },
      { name: 'English', level: 'Professional, C1' },
    ],
    certificates: [
      'Accessibility Course, Sara Soueidan (ongoing)',
      'Accessibility Workshop, Gehirngerecht',
      'Certificate in Advanced English, Cambridge University — 2018',
    ],
  },
}

const cv = computed(() => cvData[locale.value])
</script>

<template>
  <div class="cv-root">
    <div class="cv-container font-sans text-gray-900">
      <!-- Nav bar: back link + language toggle, hidden in print -->
      <div class="no-print cv-topbar">
        <a href="/" class="text-gray-400 hover:text-gray-900 transition-colors text-sm">{{ t('resume.navBack') }}</a>
        <button
            @click="toggle"
            aria-label="Toggle language"
            class="text-sm font-medium transition-colors"
        >
          <span :class="locale === 'en' ? 'text-gray-900' : 'text-gray-400'">EN</span>
          <span class="text-gray-300" style="margin: 0 2px;">|</span>
          <span :class="locale === 'de' ? 'text-gray-900' : 'text-gray-400'">DE</span>
        </button>
      </div>

      <!-- Header -->
      <header class="cv-section flex flex-row items-start justify-between gap-6 pb-6 mb-8">
        <div>
          <h1 class="text-3xl font-serif font-medium text-gray-900 leading-none">{{ cv.name }}</h1>
          <p class="text-xs text-gray-500 mt-2 tracking-widest uppercase">{{ cv.title }}</p>
        </div>
        <div class="text-sm space-y-1 text-right">
          <div v-for="line in cv.contact.location" :key="line" class="text-gray-600">{{ line }}</div>
          <div class="text-gray-600">{{ cv.contact.phone }}</div>
          <div><a :href="cv.contact.emailHref" class="text-gray-600" target="_blank" rel="noopener noreferrer">{{ cv.contact.email }}</a></div>
          <div><a :href="cv.contact.githubHref" class="text-gray-600" target="_blank" rel="noopener noreferrer">{{ cv.contact.github }}</a></div>
          <div><a :href="cv.contact.portfolioHref" class="text-gray-600" target="_blank" rel="noopener noreferrer">{{ cv.contact.portfolio }}</a></div>
        </div>
      </header>

      <!-- Two-column body -->
      <div class="cv-body grid grid-cols-[1fr_2fr] gap-6">
        <!-- Sidebar -->
        <aside class="cv-sidebar border-r border-gray-200 pr-6">
          <section class="cv-section mb-8">
            <h2 class="cv-section-heading">{{ t('resume.sections.languages') }}</h2>
            <ul class="space-y-3">
              <li v-for="lang in cv.languages" :key="lang.name" class="text-sm">
                <div class="font-medium text-gray-900">{{ lang.name }}</div>
                <div class="text-xs text-gray-400">{{ lang.level }}</div>
              </li>
            </ul>
          </section>

          <section class="cv-section mb-8">
            <h2 class="cv-section-heading">{{ t('resume.sections.skills') }}</h2>
            <ul class="space-y-1.5">
              <li v-for="(skill, i) in cv.skills" :key="i" class="text-sm text-gray-700 leading-snug">
                {{ skill }}
              </li>
            </ul>
          </section>

          <section class="cv-section">
            <h2 class="cv-section-heading">{{ t('resume.sections.certificates') }}</h2>
            <ul class="space-y-2.5">
              <li v-for="(cert, i) in cv.certificates" :key="i" class="text-sm text-gray-700 leading-snug">
                {{ cert }}
              </li>
            </ul>
          </section>
        </aside>

        <!-- Main content -->
        <main>
          <section class="cv-section mb-8">
            <h2 class="cv-section-heading">{{ t('resume.sections.profile') }}</h2>
            <p class="text-sm text-gray-700 leading-relaxed font-serif">{{ cv.profile }}</p>
          </section>

          <section class="mb-8">
            <h2 class="cv-section-heading">{{ t('resume.sections.experience') }}</h2>
            <div v-for="job in cv.experience" :key="job.company" class="cv-job-entry mb-5 last:mb-0">
              <div class="flex items-baseline justify-between gap-2">
                <span class="font-semibold text-sm text-gray-900">{{ job.role }}</span>
                <span class="text-xs text-gray-400 shrink-0">{{ job.period }}</span>
              </div>
              <p class="text-xs text-gray-500 mb-2">{{ job.company }}</p>
              <ul class="space-y-1.5 list-disc list-outside ml-4">
                <li v-for="(bullet, i) in job.bullets" :key="i" class="text-sm text-gray-700 leading-relaxed">
                  <template v-if="bullet.label">
                    <span class="font-semibold">{{ bullet.label }}:</span>
                    {{ bullet.text }}
                  </template>
                  <template v-else>{{ bullet.text }}</template>
                </li>
              </ul>
            </div>
          </section>

          <section class="cv-section">
            <h2 class="cv-section-heading">{{ t('resume.sections.education') }}</h2>
            <div v-for="edu in cv.education" :key="edu.institution" class="cv-job-entry">
              <div class="flex items-baseline justify-between gap-2">
                <span class="font-semibold text-sm text-gray-900">{{ edu.degree }}</span>
                <span class="text-xs text-gray-400 shrink-0">{{ edu.period }}</span>
              </div>
              <p class="text-xs text-gray-500 mb-2">{{ edu.institution }}</p>
              <ul class="space-y-1.5 list-disc list-outside ml-4">
                <li v-for="(bullet, i) in edu.bullets" :key="i" class="text-sm text-gray-700">
                  {{ bullet.text }}
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
@page {
  size: A4;
  margin: 15mm;
}

@media screen {
  .cv-root {
    background-color: #fafafa;
    min-height: 100vh;
  }

  .cv-container {
    background-color: white;
    max-width: 800px;
    margin: 0 auto 60px;
    padding: 40px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  }
}

.cv-section {
  break-inside: avoid;
}

.cv-job-entry {
  break-inside: avoid;
}

.cv-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.cv-section-heading {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #9ca3af;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
  break-after: avoid;
}

@media print {
  .cv-root,
  .cv-container {
    background-color: white;
    padding: 0;
  }

  .no-print {
    display: none;
  }

  .cv-body {
    display: block;
  }

  .cv-sidebar {
    float: left;
    width: 31%;
    box-sizing: border-box;
  }

  .cv-body > main {
    margin-left: 35%;
  }

  .cv-job-entry {
    break-inside: auto;
  }
}
</style>
