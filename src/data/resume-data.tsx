import {
  IMBA,
} from "@/images/logos";
import screenshots from "@/images/screenshots"
import { SiTelegram } from '@icons-pack/react-simple-icons';

export const RESUME_DATA = {
  name: "Василий Ковальчук",
  initials: "ВК",
  location: "Москва, Россия",
  locationLink: "https://yandex.ru/maps/geo/moskva/53000094",
  about:
    "Операционный директор, Руководитель проектов, Бизнес-аналитик",
  summary:
    "14 лет опыт работы в IT-интеграторах России.  Люблю IT во всех проявлениях. Склонен к системному подходу и анализу данных. Выбираю обучение через практику. Пропагандирую data-driven и вероятностный подходы в бизнесе (и жизни). Стремлюсь участвовать в сложных и полезных проектах.",
  avatarUrl: "https://cdn4.cdn-telegram.org/file/llz5zRpGQXplhbCn9wVsFHQKHuxAToeMyHNA-MCMn8ggBCZzZTR3Cs-7BAew2mdMRSABubCMjWtTPLDlNGRz7qV6C3fIawNjgMR8O95ka0ZzIR07M4jQk4nBHhcweOkyZ3HsihhK-LQvVvdhplVVniexCfO4OoXLcT94T0oiIqbBrP_EvdKtl7L7NAgUsfd6FngdsklbLAf0dY3W3FFLA0Y6IrUm1wYQUE3-VLYVKWvb3za5XmGZvIpp5IAV5Bvncr3bYNl6yIYsk5bFDMpnJKyUt0E14vrM8HsSQALdL0ONIweoY4sP3V6BQPH1nCrgBOH06hV-JYxIJH5OAimrfQ.jpg",
  contact: {
    email: "v@kov.app",
    tel: "+79052722251",
    social: [
      {
        name: "Telegram",
        url: "https://t.me/mr_kobalt",
        icon: SiTelegram,
      },
    ],
  },
  qualities: [
    "изучаю мануалы, прежде чем спросить",
    "быстро разбираюсь в любой системе",
    "люблю ответственность",
  ],
  skills: [
    "стратегическое планирование",
    "управление проектами",
    "наставничество",
    "взаимодействие с подрядчиками",
    "анализ и визуализация данных",
    "ETL",
    "выстраивание и оптимизация процессов",
    "английский B2"
  ],
  tools: [
    {
      name: "Excel",
      tooltip: "Без прикрас могу назвать себя гуру, вплоть до написания своих макросов, подключения базы через коннектор ODBC, предобработки данных в PowerQuery и их анализу PowerPivot. Ну и сводные, конечно.",
    },
    {
      name: "1С",
      tooltip: "Работаю с 1С уже 10 лет, последние пять занимался внедрением. Конфигурации: КА, Бухгалтерия, Торговля, УНФ.",
    },
    {
      name: "DataLens",
      tooltip: "Последний год внедряем этот BI-инструмент",
    },
    {
      name: "BPMN",
      tooltip: "Практикую визуальное описание процессов в нотации BPMN (предпочитаю Camunda Modeler)",
    },
    {
      name: "Виртуализация",
      tooltip: "Знаком с гипервизорами VMWare, Hyper-V; администрирую свой домашний хост Proxmox",
    },
    {
      name: "Контейнеризация",
      tooltip: "Использую контейнеры Docker/Podman для тестирования и развёртывания сервисов",
    },
    {
      name: "Системы контроля версий",
      tooltip: "Опыт работы c Git",
    },
    {
      name: "Linux (CentOS/CoreOS/Ubuntu)",
      tooltip: "Использую преимущественно семейство Red Hat в силу личных предпочтений и Ubuntu/Debian в силу распространённости",
    },
    {
      name: "PowerShell/Bash",
      tooltip: "Хотя бы раз в день заглядываю в консоль",
    },
    {
      name: "Regex",
      tooltip: "Всегда приходит на помощь, когда Ctrl+H не справляется",
    },
    {
      name: "SQL",
      tooltip: "Базовые знания языка, использовал в основном для подготовки данных к экспорту между системами",
    },
    {
      name: "Python (Pandas, NumPy)",
      tooltip: "Базовые знания языка и библиотек, написание небольших скриптов и ботов",
    },
    {
      name: "VS Code",
      tooltip: "Предпочитаю его из-за удобства использования, расширяемости и относительного быстродействия"
    },
  ],
  work: [
    {
      company: "ИМБА",
      link: "https://imba-it.ru",
      badges: ["ИТ-интеграция", "ИБ"],
      title: "Заместитель генерального директора по операционной деятельности",
      logo: IMBA,
      start: "2019",
      end: "2024",
      description: "Построили бизнес в высококонкурентной сфере ИТ-интеграции. Начали с простого боксмувинга серверного оборудования, привлекли сильные команды в области инфраструктуры, ИБ, мультимедиа, инженерных систем (СКС, СКУД, СВН и т.п.) и реализовывали сложные проекты по внедрению и консалтингу в этих сферах. Работали в том числе и зарубежом.",
      responsibility: "Отвечал за организацию работы бэкофиса, в т.ч. внутреннего IT. По мере развития компании делегировал зоны ответственности выделенным специалистам. Последние 2 года занимался описанием и регламентацией бизнес-процессов, доработкой бизнес-приложений 1С:КА/Битрикс24 и формированием управленческой отчётности, как встроенными средствами, так и BI-инструментами. В мою команду входили бизнес-аналитик/руководитель проектов, сеньор 1С/DevOps, джун 1С/Битрикс, оператор базы данных 1С.",
      achievements: [
        "Команда с 1 до 80 человек за 3 года работы",
        "Оборот с 0 до ~2 млрд. руб. за 3 года работы"
      ],
      quit: [
        "Текущая стратегия бизнеса не предполагает значительных изменений в работе бэкофиса, но лишь эволюционные доработки систем. Мне же интересны большие и сложные проекты, предполагающие кардинальные изменения подходов к работе.",
        "Желание непосредственно влиять на продукт компании"
      ]
    },
    {
      company: "4х4",
      link: "https://4by4.ru",
      badges: ["ИТ-Интеграция", "ЦОД"],
      title: "Менеджер по продажам",
      logo: undefined,
      start: "2014",
      end: "2018",
      description:
        "ИТ-интегратор, занимался контейнерными ЦОД, ИБ-консалтингом, поставками ИТ-оборудования медицинским организациям. Пришли командой из другого интегратора и за 4 года кратно увеличили продажи компании. В 2019 год костяк команды покинул компанию, основав ИМБА ИТ, после чего выручка кратно сократилась.",
      responsibility:
        "Работа с новыми и существующими заказчиками: пресейл, оформление и сопровождение проектов, закрытие",
      achievements: [
        "Увеличили выручку со 187 млн. руб. в 2014 году до 742 млн. руб. в 2019 году",
        "Добились получения золотого партнёрского статуса HP Inc./HPE",
      ],
      quit: [
        "Как продавец достиг своего потолка",
        "Желание сменить направление деятельности",
      ]
    },
  ],
  projects: [
    {
      title: "Отчётность в DataLens",
      techStack: ["Яндекс.Облако", "DataLens", "Битрикс24", "1С", "SQL", "Bash"],
      description_short:
        "Сбор, преобразование и очистка данных из баз Битрикс24 и 1С в DataLens",
      description: "",
      problems: [
        "отчётность в Битрикс24 сильно ограничена возможностями системы без существенных доработок разработчиками",
        "отчётность 1С, хотя и мощная, не удобна для пользователей не работающих в 1С каждый день",
        "мастер-данные по плану продаж хранятся в Битрикс24, а данные по факту - в 1С; отчеты же требовались в том числе и единые"
      ],
      result: [
        "\"реверсинжинирили\" базу Битрикс24 для определения нужных полей и связей таблиц",
        "написали скрипты для наполнения аналитической базы данных, в которую выгружался только минимально необходимый набор данных",
        "разработали дашборды в DataLens для сотрудников и руководителей с необходимым для их работы набором данных и графиков"
      ],
    },
    {
      title: "Система управления продажами",
      techStack: ["Битрикс24"],
      description_short: "Описание бизнес-логики и её реализация в Битрикс24",
      description: "",
      problems: [
        "не могли получать полные, достоверные и своевременные данные для управления продажами",
        "не было инструкций и правил ведения учёта, распределения ответственности и контроля",
        "работали в разрозненных системах и дублировали данные"
      ],
      result: [
        "составили глоссарий, чтобы говорить на одном языке",
        "определили структуру профилей целевых клиентов",
        "описали этапы взаимодействия с клиентом",
        "для каждого этапа детализировали показатели эффективности, роли, процессы, набор данных и документов",
        "переработали систему премирования сотрудников продаж",
        "разработали отчёты для сотрудников и руководителей",
        "интегрировали Битрикс24 с 1С:КА и сайтом",
        "провели обучение и аттестацию сотрудников",
      ],
      images: screenshots.b24
    },
    {
      title: "Система управления заказами",
      techStack: ["1С:КА", "Диадок", "GitLab", "Zabbix"],
      description_short:
        "Управление заказами, мониторинг и отчёты в 1С:КА",
      description:
        "По мере роста бизнеса приняли решение перейти из облачной 1С:УНФ на более гибкую систему, остановив свой выбор на 1C:КА. К реализации был привлечён подрядчик 1С, в последующем в штат был нанят разработчик 1С. При реализации этого проекта сразу применили подходы CI/CD на базе GitLab, реализованы дымовые тесты, мониторинг базовой работоспособности на Zabbix, бэкапирование силами СУБД",
      problems: [
        "текущая система ограничивала нас в работе пользователей и в её доработке",
        "работа пользователей в системе не была стандартизована",
        "система не могла обеспечить гранулярный доступ к данным, которого требовал бизнес",
      ],
      result: [
        "проработана структура, описание ролей, данных и процессов",
        "настроены отчёты для руководителей и пользователей",
        "настроена сложная система прав доступа к отдельным записям базы (RLS) на основе групп пользователей и их ролей в заказчиках",
        "доработана интеграция сторонних систем, таких как Диадок, 1С:Бухгалтерия",
        "построена поддерживаемая, документированная и расширяемая система",
      ]
    },
    {
      title: "База знаний",
      techStack: [
        "coda.io",
        "low-code",
        "webhook",
        "SAML",
        "HRMS"
      ],
      description_short: "Интерактивная база знаний компании на платформе Coda.io",
      description: "Интерактивная база знаний компании на платформе Coda.io",
      problems: [
        "отсутствие единого источника правды в компании",
        "отсутствие штатных разработчиков, которые бы разрабатывали и адаптировали системы компании в фазе активного роста",
        "потребность в гибкой системе разграничения прав доступа к данным и инструментам"
      ],
      result: [
        "coda.io позволила нам совместить информационные материалы с интерактивными элементами",
        "low-code возможности платформы позволили быстро автоматизировать относительно сложные задачи без глубокой технической экспертизы",
        "удобный интерфейс и простые правила вёрстки документов (markdown-flavored) дали возможность поручить наполнение базы знаний владельцам данных",
        "размещая данные в одном месте мы смогли сократить их дублирование и поддержку",
        "реализовали помимо прочего: внутреннюю базу данных сотрудников; систему фиксации и отслеживания целей сотрудников и компании (OKR); систему заявок на отсутствие в офисе"
      ],
      images: screenshots.coda
    },
    {
      title: "PM-система",
      techStack: [
        "wrike.com",
        "webhook",
        "SAML",
        "BPMN"
      ],
      description_short:
        "Внедрение системы управления проектами",
      description:
        "Внедрение системы управления проектами на платформе Wrike.",
      problems: [
        "не существовало единого пространства для управления проектами и их мониторинга, что усложняло работу менеджмента",
        "каждый проект вёлся обособлено от других, отсутствовала стандартизация, что усложняло перераспределение людей между проектами",
      ],
      result: [
        "проработана структура, описание ролей, данных и процессов",
        "настроены отчёты для руководителей и пользователей",
        "описаны и автоматизированы типовые процессы в проекте, такие как подача заявки на подготовку ТЗ, согласование договора и др.",
      ]
    },
    {
      title: "MS Azure/365",
      techStack: ["Azure AD DS", "Exchange Online", "SharePoint Online", "OneDrive"],
      description_short: "Внедрение облачных сервисов Microsoft Azure",
      description:
        "До СВО мной продвигалась стратегия cloud-first при построении корпоративной инфраструктуры и рабочих инструментов. Microsoft Azure, с его Доменными сервисами и экосистемой связанных продуктов, стал основой инфраструктуры ИМБА с 2020 по 2022 год.",
      problems: [
        "нехватка ресурсов на развитие и поддержку информационных систем",
        "нежелание на тот момент делать капитальные вложения в инфраструктуру (CAPEX)",
        "потребность в современном и гибком решении"
      ],
      result: [
        "мы получили практически из коробки с минимальными трудозатратами работающие службы доменов, каталогов, почты, файлового хранилища, конференцсвязи",
        "широкий набор дополнительных сервисов позволил нам быстро внедрить Microsoft Intune, SSO и др."
      ]
    },
    {
      title: "Сайт компании 4х4",
      techStack: ["WordPress", "Elementor", "Figma", "CSS", "JS"],
      description_short:
        "С маркетологом переписали сайт на WordPress",
      description:
        "Совместно с маркетологом полностью переписали морально устаревший сайт на WordPress.",
      problems: [
        "Админка сайта не позволяла гибко управлять контентом (услуги, новости, статьи)",
        "Для внесения нас сайт любых изменений требовался программист",
        "Дизайн текущего сайта морально устарел и требовал обновления",
        "Бюджет был жёстко ограничен (десятками тысяч, не миллионами и не сотнями)"
      ],
      result: [
        "Для управления контентом выбрали популярную CMS WordPress, дружелюбную к редакторам контента и простую в доработке.",
        "Совместно с маркетологом определили структуру сайта, переработали каталог услуг, переписали текст.",
        "C нуля разработали дизайн сайта и реализовали с помощью визуального редактора Elementor и магии CSS",
        "Подключили и настроили аналитику Яндекс и Google"
      ],
      link: {
        label: "4by4.ru",
        href: "https://4by4.ru",
      },
      images: screenshots.fourbyfour
    },
    {
      title: "Генератор КП",
      techStack: ["Excel", "VBA"],
      description_short: "С учётом разузлования спецификаций и интерактивными функциями",
      description: "Чтобы упростить себе жизнь при обработке ответов закупки, сделал этот инструмент, который пошёл \"в народ\" и даже сейчас используется некоторыми продавцами.",
      problems: [
        "обмен данными между отделами продаж и закупок не был стандартизован",
        "учётная система 1С:Торговля не была приспособлена для работы со сложными продажами, которые раскомплектацию (разборку) закупаемого товара и формирование из него нужного заказчику - проблема разузлования спецификаций"
      ],
      result: [
        "реализована стандартная форма запроса стоимости, со всеми необходимыми в работе закупок и продаж параметрами",
        "решена проблема разборок/сборок (разузлования) спецификаций с помощью правил нумерации позиций спецификации, благодаря которой спецификация для заказчика по выглядело так, как было согласовано с заказчиком, но с учётом стоимости всех затрат пропорционально распределённых по нужным позициям",
        "добавлены интерактивные функции расчёта: скидки, курсы валют (в т.ч. с загрузкой актуальных данных с сайта ЦБ), наценка/маржа",
        "экспорт финальной версии на бланке компании"
      ],
      images: screenshots.excel
    },
  ],
} as const;
