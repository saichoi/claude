// Language content data
const translations = {
    ko: {
        'intro-prefix': '나는',
        name: '최다혜',
        role1: '풀스택 개발자',
        role2: '일본 시장 전문가',
        role3: 'AI 기술 학습자',
        intro: '일본 기업 대상 소프트웨어 개발을 수행하는 일본계 IT 기업에서 근무하고 있습니다. 현재 육아휴직 기간 동안 AI 기술과 최신 개발 트렌드를 꾸준히 학습하며 역량을 확장하고 있습니다. 변화를 즐기며 새로운 기술을 실무에 연결할 수 있는 개발자로 성장하고자 합니다.',
        'btn-email': '이메일',
        'about-title': '소개',
        'about-text': '안녕하세요. 저는 풀스택 개발자로서 일본 기업을 대상으로 하는 소프트웨어 개발에 참여해 왔습니다. 현재 육아휴직 기간을 활용하여 AI 기술과 최신 개발 트렌드에 대해 지속적으로 학습하고 있으며, 이를 통해 더욱 성장된 개발자가 되기 위해 노력하고 있습니다.',
        'skills-title': '기술 스택',
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-devops': 'Database & DevOps',
        'projects-title': '포트폴리오',
        'project1-title': '일본 도매 시스템',
        'project1-desc': '일본 기업을 대상으로 한 도매 시스템 개발 및 운영',
        'project2-title': '관리 시스템',
        'project2-desc': '기업 내부 관리 및 운영 시스템 개발',
        'project3-title': '웹 플랫폼',
        'project3-desc': '사용자 친화적인 웹 플랫폼 구축',
        'project4-title': 'WordPress 사이트',
        'project4-desc': '맞춤 WordPress 테마 및 플러그인 개발',
        'contact-title': '연락처',
        'made-date': '2026-05-31 제작'
    },
    en: {
        'intro-prefix': 'I am',
        name: 'Dahye Choi',
        role1: 'Full Stack Developer',
        role2: 'Japan Market Expert',
        role3: 'AI Technology Learner',
        intro: 'I work at a Japan-based IT company developing software for Japanese businesses. During my parental leave, I am continuously learning AI technologies and the latest development trends to expand my skills. I aspire to be a developer who enjoys change and can connect new technologies to practical applications.',
        'btn-email': 'Email',
        'about-title': 'About Me',
        'about-text': 'Hello, I am a full stack developer who has participated in software development projects targeting Japanese businesses. Currently, I am utilizing my parental leave to continuously learn about AI technologies and the latest development trends, striving to become a more skilled developer through these efforts.',
        'skills-title': 'Skills',
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-devops': 'Database & DevOps',
        'projects-title': 'Projects',
        'project1-title': 'Japan Wholesale System',
        'project1-desc': 'Developed and maintained wholesale system for Japanese businesses',
        'project2-title': 'Management System',
        'project2-desc': 'Developed internal management and operational systems',
        'project3-title': 'Web Platform',
        'project3-desc': 'Built user-friendly web platform',
        'project4-title': 'WordPress Website',
        'project4-desc': 'Developed custom WordPress themes and plugins',
        'contact-title': 'Get In Touch',
        'made-date': 'Made on 2026-05-31'
    },
    ja: {
        'intro-prefix': '私は',
        name: 'チェ・だへ',
        role1: 'フルスタック開発者',
        role2: '日本市場専門家',
        role3: 'AI技術学習者',
        intro: '日本企業向けソフトウェア開発を行う日本系IT企業に勤務しています。現在、育児休暇期間中にAI技術と最新の開発トレンドを継続的に学習し、スキルを拡張しています。変化を楽しみ、新しい技術を実務に結びつけることができる開発者として成長することを目指しています。',
        'btn-email': 'メール',
        'about-title': '自己紹介',
        'about-text': 'こんにちは。私はフルスタック開発者として、日本企業向けのソフトウェア開発プロジェクトに携わってきました。現在、育児休暇期間を活用して、AI技術と最新の開発トレンドについて継続的に学習し、より優れた開発者になるために努力しています。',
        'skills-title': 'スキル',
        'skills-frontend': 'フロントエンド',
        'skills-backend': 'バックエンド',
        'skills-devops': 'データベース & DevOps',
        'projects-title': 'ポートフォリオ',
        'project1-title': '日本卸売システム',
        'project1-desc': '日本企業向けの卸売システムの開発と運用',
        'project2-title': '管理システム',
        'project2-desc': '企業内部の管理および運用システムの開発',
        'project3-title': 'Webプラットフォーム',
        'project3-desc': 'ユーザーフレンドリーなWebプラットフォームの構築',
        'project4-title': 'WordPressサイト',
        'project4-desc': 'カスタムWordPressテーマとプラグインの開発',
        'contact-title': 'お問い合わせ',
        'made-date': '2026-05-31 制作'
    }
};

// Typing animation words
const typingWords = {
    ko: ['풀스택 개발자', '일본 시장 전문가', 'AI 기술 학습자'],
    en: ['Full Stack Developer', 'Japan Market Expert', 'AI Technology Learner'],
    ja: ['フルスタック開発者', '日本市場専門家', 'AI技術学習者']
};

let currentLanguage = 'ko';
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;
let isAnimating = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageButtons();
    initializeLanguage();
});

// Language button setup
function setupLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.dataset.lang;
            changeLanguage(lang);
        });
    });
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;

    // Stop any running typing animation
    stopTyping();

    // Update active button - remove active from all, add to selected
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(btn => {
        btn.classList.add('active');
    });

    // Update all text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Reset and restart typing animation
    typingIndex = 0;
    charIndex = 0;
    isDeleting = false;
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        typingElement.textContent = '';
    }
    startTypingAnimation();
}

// Stop typing animation
function stopTyping() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
    isAnimating = false;
}

// Initialize with default language
function initializeLanguage() {
    changeLanguage('ko');
}

// Typing animation
function startTypingAnimation() {
    if (isAnimating) {
        stopTyping();
    }

    isAnimating = true;
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    // Save current language to avoid closure issues
    const animationLanguage = currentLanguage;
    let localTypingIndex = 0;
    let localCharIndex = 0;
    let localIsDeleting = false;

    function type() {
        // Check if language has changed
        if (currentLanguage !== animationLanguage) {
            isAnimating = false;
            return;
        }

        const words = typingWords[animationLanguage];
        const currentWord = words[localTypingIndex % words.length];

        if (!localIsDeleting) {
            typingElement.textContent = currentWord.substring(0, localCharIndex + 1);
            localCharIndex++;

            if (localCharIndex === currentWord.length) {
                localIsDeleting = true;
                typingTimeout = setTimeout(type, 2000);
                return;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, localCharIndex);
            localCharIndex--;

            if (localCharIndex === 0) {
                localIsDeleting = false;
                localTypingIndex++;
                typingTimeout = setTimeout(type, 500);
                return;
            }
        }

        typingTimeout = setTimeout(type, localIsDeleting ? 50 : 80);
    }

    type();
}

// Intersection Observer for fade-in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});
