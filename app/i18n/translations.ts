export const translations = {
  en: {
    // Home
    'home.greeting': "Hi, I'm Paula.",
    'home.tagline1': 'Software developer. Fan of Open Source.',
    'home.tagline2': 'Passionate about building tools that help others.',
    'home.work': 'Working at',
    'home.oss': 'Contributing to',
    'home.ossAfter': '',
    'home.location': 'Based in Flensburg, Germany',
    'home.bio1': "I've always loved building and creating. Programming has been my way to put all my ideas into something tangible since I was a teenager and got my first laptop.",
    'home.bio2a': 'Recently, I made the decision to put my imposter syndrome aside and start contributing to Open Source. I started with ',
    'home.bio2b': ', an amazing project that really inspired and motivated me, with a community that immediately welcomed me.',
    'home.bio3': "When I am not programming, I enjoy going on walks and runs. I am also a big aviation nerd, and I love gaming, movies, shows and books/comics. Oh, and I love musicals. Hamilton is incredible.",
    'home.bio4': "This is my corner of the internet — a place to write about what I'm learning, building, and thinking about.",

    // Blog index
    'nav.resume': 'Resume',

    // Blog index
    'blog.subtitle': "Thoughts, learnings, and things I'm building.",
    'blog.error': 'Could not load posts. Please try again later.',
    'blog.empty': 'No posts yet. Check back soon!',

    // Blog post
    'post.back': '← Back to blog',
    'post.error.heading': 'Something went wrong',
    'post.error.body': 'Could not load this post.',
    'post.backLink': 'Back to blog',
    'post.notFound': 'Post not found',

    // Resume
    'resume.seoTitle': 'Paula | Resume',
    'resume.navBack': '← Home',
    'resume.sections.profile': 'Profile',
    'resume.sections.experience': 'Work Experience',
    'resume.sections.education': 'Education',
    'resume.sections.skills': 'Tech Skills',
    'resume.sections.languages': 'Languages',
    'resume.sections.certificates': 'Further Education',
  },
  de: {
    // Home
    'home.greeting': 'Hallo, ich bin Paula.',
    'home.tagline1': 'Software-Entwicklerin. Open-Source-Fan.',
    'home.tagline2': 'Ich liebe es, Tools zu bauen, die anderen helfen.',
    'home.work': 'Arbeitet bei',
    'home.oss': 'Trägt zu',
    'home.ossAfter': ' bei',
    'home.location': 'Wohnhaft in Flensburg, Deutschland',
    'home.bio1': 'Ich war schon immer sehr gerne kreativ. Programmieren ist mein Weg, seit ich als Teenager meinen ersten Laptop bekam, alle meine Ideen in etwas Reales umzusetzen.',
    'home.bio2a': 'Vor Kurzem habe ich entschieden, mein Impostor-Syndrom beiseite zu legen und aktiv zu Open Source beizutragen. Ich habe mit ',
    'home.bio2b': ' angefangen, ein tolles Projekt, das mich wirklich inspiriert und motiviert hat, mit einer Community, die mich sofort willkommen geheißen hat.',
    'home.bio3': 'Wenn ich nicht programmiere, gehe ich gern spazieren und laufen. Ich bin außerdem ein großer Luftfahrt-Nerd und liebe Gaming, Filme, Serien und Bücher/Comics. Ach ja, und ich liebe Musicals. Hamilton ist unglaublich.',
    'home.bio4': 'Das ist mein kleines Stück Internet. Hier schreibe ich über das, was ich gerade lerne, baue und denke.',

    // Blog index
    'nav.resume': 'Lebenslauf',

    // Blog index
    'blog.subtitle': 'Gedanken, Erkenntnisse und Dinge, die ich baue.',
    'blog.error': 'Beiträge konnten nicht geladen werden. Bitte versuche es später erneut.',
    'blog.empty': 'Noch keine Beiträge. Schau bald wieder vorbei!',

    // Blog post
    'post.back': '← Zurück zum Blog',
    'post.error.heading': 'Etwas ist schiefgelaufen',
    'post.error.body': 'Dieser Beitrag konnte nicht geladen werden.',
    'post.backLink': 'Zurück zum Blog',
    'post.notFound': 'Beitrag nicht gefunden',

    // Resume
    'resume.seoTitle': 'Paula | Lebenslauf',
    'resume.navBack': '← Startseite',
    'resume.sections.profile': 'Profil',
    'resume.sections.experience': 'Berufserfahrung',
    'resume.sections.education': 'Bildungsweg',
    'resume.sections.skills': 'Tech Skills',
    'resume.sections.languages': 'Sprachen',
    'resume.sections.certificates': 'Weiterbildung',
  },
} as const

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
