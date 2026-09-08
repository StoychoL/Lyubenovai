/* Bilingual copy for the whole page. The `en` half mirrors the markup exactly,
   so index.html and this file can never drift apart. Tech names (Claude, n8n,
   LangGraph, MCP, RAG, MLflow, DVC, scikit-learn) stay English in both. */
(function () {
  const DICT = {
    en: {
      meta: {
        title: "Stoycho Lyubenov — AI Automation Consultant",
        description:
          "Stoycho Lyubenov builds personalised AI workflows, automations and agents around how your business actually runs. Claude, n8n and Google Workspace native.",
      },

      nav: {
        home: "Home",
        about: "About me",
        services: "Services",
        process: "Process",
        webbuild: "Web build",
        toolkit: "Toolkit",
        contact: "Contact",
      },

      sidebar: {
        role: "AI Automation<br />Consultant",
        name: "Stoycho<br />Lyubenov",
        connect: "Connect with",
        language: "Language",
        menu: "Open menu",
      },

      hero: {
        eyebrow: "Hey there, I'm",
        first: "Stoycho",
        last: "Lyubenov",
        tagline:
          "Building personalised AI workflows, automations and agents around how your business actually runs.",
        status: "Available for new projects",
        cta: "Book a Discovery Call",
        meta: "10 yrs sales · 5 yrs AI & web · London",
      },

      about: {
        label: "About",
        title:
          "I turn manual, repetitive work into AI systems that run themselves — built for your business, not from a template.",
        stat1: "Years in sales",
        stat2: "Years in AI",
        stat5: "Years building websites",
        stat3: "Stage delivery process",
        stat4: "Managed support",
        copy1:
          "I'm Stoycho, a 33-year-old AI automation consultant based in London. I spent ten years in sales before moving into the AI sector, where for the last five years I've been designing and shipping workflows, automations and agents of every shape.",
        copy2:
          "That sales background matters: I talk in terms of revenue, hours saved and ROI — not model benchmarks. I'm obsessive about detail, and every workflow and agent I build is personalised to how your business actually operates.",
        copy3:
          "I also design and build websites from scratch — sitemap and wireframes, the words and the order they're read in, the colour and type system, the motion, and the performance, SEO and accessibility work that makes it production-ready. This site is one of them.",
        cardLabel: "How I work",
        cardList: [
          "Claude, n8n and Google Workspace as the core stack",
          "Websites designed and built end to end, wireframe to launch",
          "Working prototypes in a sandbox — not slide decks",
          "Every integration point mapped before code is written",
          "Ongoing optimisation once you're live",
        ],
        cardLink: "See the process",
      },

      services: {
        label: "Services",
        title: "Core expertise",
        web: {
          tag: "New",
          title: "Website Design & Build",
          body: "Complete websites designed and built from scratch — sitemap and wireframes, the copy and the order it's read in, the colour and type system, the motion, and the optimisation that makes it production-ready. No templates, no page builders.",
          chips: [
            "Wireframing",
            "Information architecture",
            "UX copywriting",
            "Colour & type systems",
            "Design tokens",
            "Motion design",
            "Core Web Vitals",
            "SEO",
            "Accessibility (WCAG)",
            "Responsive build",
            "Deployment",
          ],
        },
        s1: {
          title: "Workflow Automation",
          body: "End-to-end business processes automated with n8n and your Google services — triggered, routed and reported without a human in the loop.",
          chips: ["n8n pipelines", "Google Workspace", "API integrations", "Scheduling & triage"],
        },
        s2: {
          title: "AI Agents & Orchestration",
          body: "Agents that call tools, remember context and coordinate with each other — designed with proven agentic patterns.",
          chips: ["Function calling", "Multi-agent systems", "LangGraph", "MCP", "Agent memory"],
        },
        s3: {
          title: "LLM Apps & RAG",
          body: "Chat and search over your own documents with retrieval that actually finds the right answer.",
          chips: ["Prompt engineering", "Embeddings", "Vector databases", "Document chunking", "Advanced retrieval"],
        },
        s4: {
          title: "LLMOps & Evaluation",
          body: "Deployed, monitored and measured — so you know your AI is working, not just running.",
          chips: ["Deployment & CI/CD", "Observability", "LLM-as-a-judge", "RAG & agent evals", "Benchmarking"],
        },
        s5: {
          title: "ML Foundations",
          body: "Classic machine learning where it beats an LLM — with proper pipelines, tracking and production monitoring.",
          chips: ["scikit-learn", "Data quality", "MLflow", "DVC", "Production monitoring"],
        },
        s6: {
          title: "Safety, Guardrails & Governance",
          body: "AI you can trust in front of customers — with security, bias checks and governance frameworks built in.",
          chips: ["Responsible AI", "LLM security", "Guardrails", "Data ethics", "Governance"],
        },
      },

      process: {
        label: "Process",
        title: "Every project runs through four stages",
        stage: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"],
        p1: {
          title: "Discovery Audit",
          body: "We deep-dive into your manual workflows to find high-ROI automation opportunities — forensic clarity on where AI delivers maximum leverage.",
        },
        p2: {
          title: "Architecture Mapping",
          body: "We design a custom blueprint connecting Claude, n8n and your Google services — mapping every integration point before a line of code is written.",
        },
        p3: {
          title: "Rapid Prototype & Build",
          body: "A functional system is deployed in a sandbox for testing. You see working systems fast — not slide decks and promises.",
        },
        p4: {
          title: "Launch & Managed Support",
          body: "We integrate into your live environment and provide ongoing optimisation. Your automations run 24/7 — and so does our commitment.",
        },
      },

      webbuild: {
        label: "Web build",
        title: "From blank page to production",
        lead: "When the project is a website, this is what happens inside those four stages — seven steps, in this order, every time.",
        step: ["Step 01", "Step 02", "Step 03", "Step 04", "Step 05", "Step 06", "Step 07"],
        w1: {
          title: "Discovery & Sitemap",
          body: "Who the site is for, what it has to make them do, and every page and section needed to get there. The information architecture is agreed before anything is drawn.",
        },
        w2: {
          title: "Wireframes",
          body: "Layout and hierarchy in greyscale — what sits where, what comes first, what each screen weighs. Structure is settled while it's still cheap to change.",
        },
        w3: {
          title: "Copy & Information Style",
          body: "What each section actually says, in what order, in what voice. Every line is checked for clarity and scannability, because a beautiful page that doesn't explain itself has failed.",
        },
        w4: {
          title: "Colour & Visual System",
          body: "A palette with real contrast ratios, a type scale, spacing tokens and reusable components — a system, not a set of one-off screens.",
        },
        w5: {
          title: "Motion & Interaction",
          body: "Scroll reveals, micro-interactions and transitions that direct attention rather than perform. Everything degrades cleanly for reduced-motion and low-power devices.",
        },
        w6: {
          title: "Optimisation",
          body: "Core Web Vitals, compressed assets, responsive behaviour on real devices, SEO metadata, and accessibility — contrast, focus states, semantics and keyboard paths.",
        },
        w7: {
          title: "Launch & Production",
          body: "Built, deployed, analytics wired up and handed over with documentation — then iterated on with real numbers instead of opinions.",
        },
      },

      toolkit: {
        label: "Toolkit",
        title: "Everything I work with",
        g1: {
          title: "LLMs & RAG",
          count: "8 areas",
          chips: [
            "LLM fundamentals",
            "Prompt engineering for devs",
            "Working with LLM APIs",
            "Embeddings & semantic search",
            "Vector databases",
            "Retrieval augmented generation",
            "Document processing & chunking",
            "Advanced retrieval",
          ],
        },
        g2: {
          title: "Integration, Agents & Orchestration",
          count: "10 areas",
          chips: [
            "Function calling & tool use",
            "Structured outputs & validation",
            "LLM apps with frameworks",
            "Agent fundamentals",
            "Agentic design patterns",
            "Orchestration with LangGraph",
            "Multi-agent systems",
            "Agent memory & state",
            "Agentic RAG",
            "Model Context Protocol (MCP)",
          ],
        },
        g3: {
          title: "Ops & Evaluation",
          count: "10 areas",
          chips: [
            "LLMOps fundamentals",
            "Serving open source models",
            "Deploying LLM applications",
            "Observability & monitoring",
            "CI/CD for LLM applications",
            "Evaluation fundamentals",
            "LLM-as-a-judge",
            "RAG evaluation",
            "Evaluating AI agents",
            "Benchmarking models",
          ],
        },
        g4: {
          title: "ML Foundations",
          count: "7 areas",
          chips: [
            "ML fundamentals & metrics",
            "scikit-learn pipelines & training",
            "Data engineering & quality",
            "Experiment tracking with MLflow",
            "Data versioning with DVC",
            "Deployment & CI/CD",
            "Monitoring ML in production",
          ],
        },
        g5: {
          title: "Safety & Ethics",
          count: "5 areas",
          chips: [
            "Responsible AI practices",
            "Data ethics & bias",
            "LLM security & risk",
            "Guardrails",
            "AI governance & frameworks",
          ],
        },
        g6: {
          title: "Web Design & Front-end",
          count: "9 areas",
          chips: [
            "Wireframing & prototyping",
            "Information architecture",
            "UX copywriting & tone",
            "Colour & type systems",
            "Design tokens & components",
            "Motion & micro-interactions",
            "Performance & Core Web Vitals",
            "Accessibility (WCAG)",
            "SEO & metadata",
          ],
        },
      },

      why: {
        title: "Let's automate the work that's slowing you down.",
        cta: "Start a project",
        label: "Why work with me?",
        pills: [
          "ROI-first",
          "Sales-trained communicator",
          "Working prototypes, not decks",
          "Websites built from scratch",
          "Claude + n8n + Google native",
          "24/7 managed support",
          "Detail-obsessed",
          "Bespoke, never templated",
          "Runs in your live environment",
        ],
      },

      contact: {
        label: "Contact",
        title: "Tell me what's slowing you down",
        name: "Full name",
        email: "Email address",
        company: "Company / website",
        interest: "What are you interested in?",
        options: [
          "Website Design & Build",
          "Workflow Automation",
          "AI Agents & Orchestration",
          "LLM Apps & RAG",
          "LLMOps & Evaluation",
          "ML Foundations",
          "Safety, Guardrails & Governance",
          "Not sure yet",
        ],
        message: "Tell me about your project",
        placeholder: "Share your goals, the manual work you'd like gone, and any deadlines.",
        submit: "Send your message",
        subject: "Project enquiry",
        status: {
          invalid: "Please fill in your name, email and a short message.",
          mailto: "Opening your email client…",
          sending: "Sending…",
          ok: "Thanks — I'll get back to you within one working day.",
          error: "Something went wrong. Email me directly at {email}.",
        },
      },

      footer: {
        copy: "© 2026 Stoycho Lyubenov. All rights reserved.",
        big: "Stoycho Lyubenov",
      },
    },

    bg: {
      meta: {
        title: "Стойчо Любенов — консултант по AI автоматизация",
        description:
          "Стойчо Любенов изгражда персонализирани AI работни процеси, автоматизации и агенти, съобразени с това как реално работи вашият бизнес. Claude, n8n и Google Workspace.",
      },

      nav: {
        home: "Начало",
        about: "За мен",
        services: "Услуги",
        process: "Процес",
        webbuild: "Уеб изграждане",
        toolkit: "Инструменти",
        contact: "Контакт",
      },

      sidebar: {
        role: "Консултант по<br />AI автоматизация",
        name: "Стойчо<br />Любенов",
        connect: "Свържете се",
        language: "Език",
        menu: "Отвори менюто",
      },

      hero: {
        eyebrow: "Здравейте, аз съм",
        first: "Стойчо",
        last: "Любенов",
        tagline:
          "Изграждам персонализирани AI работни процеси, автоматизации и агенти, съобразени с това как реално работи вашият бизнес.",
        status: "Свободен за нови проекти",
        cta: "Запишете консултация",
        meta: "10 г. продажби · 5 г. AI и уеб · Лондон",
      },

      about: {
        label: "За мен",
        title:
          "Превръщам ръчната, повтаряща се работа в AI системи, които работят сами — създадени за вашия бизнес, не по шаблон.",
        stat1: "Години в продажби",
        stat2: "Години в AI",
        stat5: "Години в уеб разработка",
        stat3: "Етапа на изпълнение",
        stat4: "Управлявана поддръжка",
        copy1:
          "Аз съм Стойчо, 33-годишен консултант по AI автоматизация, базиран в Лондон. Прекарах десет години в продажби, преди да премина в AI сектора, където през последните пет години проектирам и пускам в реална работа процеси, автоматизации и агенти от всякакъв вид.",
        copy2:
          "Този опит в продажбите има значение: говоря на езика на приходите, спестените часове и възвръщаемостта — не на бенчмаркове. Обсебен съм от детайла и всеки процес и агент, който изграждам, е съобразен с това как точно оперира вашият бизнес.",
        copy3:
          "Освен това проектирам и изграждам уебсайтове от нулата — карта на сайта и wireframes, текстовете и редът, в който се четат, системата от цветове и типография, анимациите и работата по бързина, SEO и достъпност, която прави сайта готов за продукция. Този сайт е един от тях.",
        cardLabel: "Как работя",
        cardList: [
          "Claude, n8n и Google Workspace като основа",
          "Уебсайтове, проектирани и изградени изцяло — от wireframe до старт",
          "Работещи прототипи в тестова среда — не презентации",
          "Всяка точка на интеграция е картографирана преди първия ред код",
          "Постоянна оптимизация след стартирането",
        ],
        cardLink: "Вижте процеса",
      },

      services: {
        label: "Услуги",
        title: "Основна експертиза",
        web: {
          tag: "Ново",
          title: "Дизайн и изграждане на уебсайтове",
          body: "Цялостни уебсайтове, проектирани и изградени от нулата — карта на сайта и wireframes, текстовете и редът, в който се четат, системата от цветове и типография, анимациите и оптимизацията, която прави сайта готов за продукция. Без шаблони и конструктори.",
          chips: [
            "Wireframes",
            "Информационна архитектура",
            "UX копирайтинг",
            "Цветови и типографски системи",
            "Дизайн токени",
            "Дизайн на анимации",
            "Core Web Vitals",
            "SEO",
            "Достъпност (WCAG)",
            "Адаптивна разработка",
            "Внедряване",
          ],
        },
        s1: {
          title: "Автоматизация на процеси",
          body: "Бизнес процеси от край до край, автоматизирани с n8n и вашите Google услуги — задействани, насочени и отчетени без човешка намеса.",
          chips: ["n8n процеси", "Google Workspace", "API интеграции", "Планиране и сортиране"],
        },
        s2: {
          title: "AI агенти и оркестрация",
          body: "Агенти, които използват инструменти, помнят контекст и се координират помежду си — проектирани с доказани агентни модели.",
          chips: ["Function calling", "Многоагентни системи", "LangGraph", "MCP", "Памет на агенти"],
        },
        s3: {
          title: "LLM приложения и RAG",
          body: "Чат и търсене във вашите собствени документи с извличане, което наистина намира верния отговор.",
          chips: ["Prompt engineering", "Ембединги", "Векторни бази данни", "Разделяне на документи", "Разширено извличане"],
        },
        s4: {
          title: "LLMOps и оценка",
          body: "Внедрено, наблюдавано и измерено — за да знаете, че вашият AI работи, а не просто се изпълнява.",
          chips: ["Внедряване и CI/CD", "Наблюдаемост", "LLM-as-a-judge", "Оценка на RAG и агенти", "Бенчмаркинг"],
        },
        s5: {
          title: "Основи на машинното обучение",
          body: "Класическо машинно обучение там, където превъзхожда LLM — с изрядни процеси, проследяване и мониторинг в реална среда.",
          chips: ["scikit-learn", "Качество на данните", "MLflow", "DVC", "Мониторинг в продукция"],
        },
        s6: {
          title: "Безопасност, ограничения и управление",
          body: "AI, на който можете да разчитате пред клиентите си — с вградени сигурност, проверки за пристрастия и рамки за управление.",
          chips: ["Отговорен AI", "LLM сигурност", "Guardrails", "Етика на данните", "Управление"],
        },
      },

      process: {
        label: "Процес",
        title: "Всеки проект минава през четири етапа",
        stage: ["Етап 1", "Етап 2", "Етап 3", "Етап 4"],
        p1: {
          title: "Одит и откриване",
          body: "Навлизаме в детайли във вашите ръчни процеси, за да открием възможности за автоматизация с висока възвръщаемост — пълна яснота къде AI носи максимална полза.",
        },
        p2: {
          title: "Архитектурна карта",
          body: "Проектираме персонализиран план, който свързва Claude, n8n и вашите Google услуги — картографирайки всяка точка на интеграция преди първия ред код.",
        },
        p3: {
          title: "Бърз прототип и разработка",
          body: "Работеща система се внедрява в тестова среда. Виждате реални системи бързо — не презентации и обещания.",
        },
        p4: {
          title: "Стартиране и поддръжка",
          body: "Интегрираме решението във вашата реална среда и осигуряваме постоянна оптимизация. Вашите автоматизации работят 24/7 — както и нашият ангажимент.",
        },
      },

      webbuild: {
        label: "Уеб изграждане",
        title: "От празна страница до продукция",
        lead: "Когато проектът е уебсайт, ето какво се случва вътре в тези четири етапа — седем стъпки, в този ред, всеки път.",
        step: ["Стъпка 01", "Стъпка 02", "Стъпка 03", "Стъпка 04", "Стъпка 05", "Стъпка 06", "Стъпка 07"],
        w1: {
          title: "Проучване и карта на сайта",
          body: "За кого е сайтът, какво трябва да ги накара да направят и всички страници и секции, нужни за това. Информационната архитектура се одобрява, преди да е нарисувано каквото и да било.",
        },
        w2: {
          title: "Wireframes",
          body: "Оформление и йерархия в сиви тонове — какво къде стои, какво идва първо, каква е тежестта на всеки екран. Структурата се решава, докато промяната още е евтина.",
        },
        w3: {
          title: "Текстове и информационен стил",
          body: "Какво точно казва всяка секция, в какъв ред и с какъв тон. Всеки ред се проверява за яснота и четимост, защото красива страница, която не се обяснява сама, не е свършила работа.",
        },
        w4: {
          title: "Цветове и визуална система",
          body: "Палитра с реални съотношения на контраст, типографска скала, токени за отстояния и компоненти за многократна употреба — система, а не поредица от единични екрани.",
        },
        w5: {
          title: "Анимации и взаимодействие",
          body: "Появявания при скрол, микро-взаимодействия и преходи, които насочват вниманието, вместо да се перчат. Всичко се снижава чисто при намалено движение и слаби устройства.",
        },
        w6: {
          title: "Оптимизация",
          body: "Core Web Vitals, компресирани ресурси, адаптивно поведение на реални устройства, SEO метаданни и достъпност — контраст, фокус състояния, семантика и навигация с клавиатура.",
        },
        w7: {
          title: "Стартиране и продукция",
          body: "Изграден, внедрен, с настроена аналитика и предаден с документация — след което се подобрява спрямо реални числа, а не мнения.",
        },
      },

      toolkit: {
        label: "Инструменти",
        title: "Всичко, с което работя",
        g1: {
          title: "LLM и RAG",
          count: "8 области",
          chips: [
            "Основи на LLM",
            "Prompt engineering за разработчици",
            "Работа с LLM API-та",
            "Ембединги и семантично търсене",
            "Векторни бази данни",
            "Retrieval augmented generation",
            "Обработка и разделяне на документи",
            "Разширено извличане",
          ],
        },
        g2: {
          title: "Интеграции, агенти и оркестрация",
          count: "10 области",
          chips: [
            "Function calling и инструменти",
            "Структурирани изходи и валидация",
            "LLM приложения с фреймуърци",
            "Основи на агентите",
            "Агентни дизайн модели",
            "Оркестрация с LangGraph",
            "Многоагентни системи",
            "Памет и състояние на агенти",
            "Агентен RAG",
            "Model Context Protocol (MCP)",
          ],
        },
        g3: {
          title: "Операции и оценка",
          count: "10 области",
          chips: [
            "Основи на LLMOps",
            "Хостване на отворени модели",
            "Внедряване на LLM приложения",
            "Наблюдаемост и мониторинг",
            "CI/CD за LLM приложения",
            "Основи на оценяването",
            "LLM-as-a-judge",
            "Оценка на RAG",
            "Оценка на AI агенти",
            "Бенчмаркинг на модели",
          ],
        },
        g4: {
          title: "Основи на машинното обучение",
          count: "7 области",
          chips: [
            "Основи и метрики на ML",
            "scikit-learn процеси и обучение",
            "Инженеринг и качество на данните",
            "Проследяване на експерименти с MLflow",
            "Версиониране на данни с DVC",
            "Внедряване и CI/CD",
            "Мониторинг на ML в продукция",
          ],
        },
        g5: {
          title: "Безопасност и етика",
          count: "5 области",
          chips: [
            "Практики за отговорен AI",
            "Етика на данните и пристрастия",
            "LLM сигурност и рискове",
            "Guardrails",
            "Управление и рамки за AI",
          ],
        },
        g6: {
          title: "Уеб дизайн и Front-end",
          count: "9 области",
          chips: [
            "Wireframes и прототипи",
            "Информационна архитектура",
            "UX копирайтинг и тон",
            "Цветови и типографски системи",
            "Дизайн токени и компоненти",
            "Анимации и микро-взаимодействия",
            "Бързина и Core Web Vitals",
            "Достъпност (WCAG)",
            "SEO и метаданни",
          ],
        },
      },

      why: {
        title: "Нека автоматизираме работата, която ви забавя.",
        cta: "Започнете проект",
        label: "Защо да работите с мен?",
        pills: [
          "Възвръщаемостта на първо място",
          "Комуникация от продажбите",
          "Работещи прототипи, не презентации",
          "Сайтове, изградени от нулата",
          "Claude + n8n + Google",
          "Поддръжка 24/7",
          "Обсебен от детайла",
          "Изцяло по мярка, никога по шаблон",
          "Работи във вашата реална среда",
        ],
      },

      contact: {
        label: "Контакт",
        title: "Разкажете ми какво ви забавя",
        name: "Име и фамилия",
        email: "Имейл адрес",
        company: "Компания / уебсайт",
        interest: "От какво се интересувате?",
        options: [
          "Дизайн и изграждане на уебсайтове",
          "Автоматизация на процеси",
          "AI агенти и оркестрация",
          "LLM приложения и RAG",
          "LLMOps и оценка",
          "Основи на машинното обучение",
          "Безопасност, ограничения и управление",
          "Още не съм сигурен",
        ],
        message: "Разкажете ми за вашия проект",
        placeholder: "Споделете целите си, ръчната работа, от която искате да се освободите, и всякакви срокове.",
        submit: "Изпратете съобщение",
        subject: "Запитване за проект",
        status: {
          invalid: "Моля, попълнете име, имейл и кратко съобщение.",
          mailto: "Отваряме вашия имейл клиент…",
          sending: "Изпращане…",
          ok: "Благодаря — ще се свържа с вас в рамките на един работен ден.",
          error: "Нещо се обърка. Пишете ми директно на {email}.",
        },
      },

      footer: {
        copy: "© 2026 Стойчо Любенов. Всички права запазени.",
        big: "Стойчо Любенов",
      },
    },
  };

  const STORE_KEY = "lang";
  const LANGS = Object.keys(DICT);
  let current = "en";

  /* "about.cardList" -> DICT[lang].about.cardList */
  function lookup(lang, key) {
    return key.split(".").reduce((node, part) => (node == null ? undefined : node[part]), DICT[lang]);
  }

  function t(key, vars) {
    let value = lookup(current, key);
    if (value === undefined) value = lookup("en", key);
    if (typeof value !== "string") return value;
    if (!vars) return value;
    return value.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? vars[name] : m));
  }

  function readStored() {
    try {
      return localStorage.getItem(STORE_KEY);
    } catch {
      return null;
    }
  }

  function writeStored(lang) {
    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch {
      /* private mode — the choice just won't persist */
    }
  }

  function apply(lang) {
    current = LANGS.includes(lang) ? lang : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (typeof value === "string") el.textContent = value;
    });

    /* A few strings carry a <br /> the layout depends on */
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = t(el.dataset.i18nHtml);
      if (typeof value === "string") el.innerHTML = value;
    });

    /* Lists are keyed once and their <li> children rebuilt */
    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
      const items = t(el.dataset.i18nList);
      if (!Array.isArray(items)) return;
      el.textContent = "";
      items.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        el.appendChild(li);
      });
    });

    document.querySelectorAll("[data-i18n-options]").forEach((el) => {
      const items = t(el.dataset.i18nOptions);
      if (!Array.isArray(items)) return;
      const index = el.selectedIndex;
      el.textContent = "";
      items.forEach((text) => {
        const option = document.createElement("option");
        option.textContent = text;
        el.appendChild(option);
      });
      if (index > -1) el.selectedIndex = index;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      el.setAttribute("content", t(el.dataset.i18nContent));
    });

    document.title = t("meta.title");
    document.documentElement.lang = current;

    document.querySelectorAll(".langswitch button[data-lang]").forEach((btn) => {
      const on = btn.dataset.lang === current;
      btn.setAttribute("aria-pressed", String(on));
      btn.classList.toggle("is-active", on);
    });

    document.dispatchEvent(new CustomEvent("i18n:applied", { detail: { lang: current } }));
  }

  function setLang(lang) {
    if (!LANGS.includes(lang) || lang === current) return;
    writeStored(lang);
    apply(lang);
  }

  const fromUrl = new URLSearchParams(location.search).get("lang");
  const initial = LANGS.includes(fromUrl) ? fromUrl : readStored();

  window.i18n = { t, apply, setLang, get lang() { return current; } };

  document.querySelectorAll(".langswitch button[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  apply(LANGS.includes(initial) ? initial : "en");
})();
