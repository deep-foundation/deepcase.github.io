import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "deep-address": 'Moscow, Bolshaya Sukharevskaya Square, 16/18с1, entrance 4',
      "deep-meeting": 'We recommend to arrange a meeting in the public channels of our Discord',
      "points--no-more-refactoring": "Without Refactoring",
      "points--supports-all-code": "Supports all languages and stacks",
      "points--flexible-system": "A fluid system of rights and permissions",
      "points--launch-anywhere": "An environment that can launch anywhere",
      "points--all-stages-on-single-platform": "All stages of development from a single app",
      "points--backend": "Ready to use architectural Back-end framework.",
      "points--data-management": "A Ready Storage and Data Management Environment",
      "points--business-logic": "Business logic and scripting in a single place",

      "points--no-more-refactoring--description": "Thanks to the minimal unit of essence - a link, the reaction code isn't tied to the API, but to associative events (insert/update/delete), which react both to the events of the selected types of links and to the events of the links enabled via the selector. This allows you to create associative packages containing associative dialects tied with behaviors in any language.",
      "points--supports-all-code--description": "Deep.Links orchestrates executable code in docker and soon in lxc containers. A simple adapter published as a docker image allows you to create an environment for your language and technological stack. Additionally, the executable code is simply written into the associative memory within the associative packages, which are properly connected to the links that describe the rules for code execution and isolation.",
      "points--flexible-system--description": "Any interaction with Deep is carried out on behalf of any Link, by means of JWT authorization tokens. The associative system of rules makes it easy to test if one link has the permission to perform some action over another, that will be depicted as a third link. Rules use associative selectors to specify the ranges and criteria under which the rule applies. This makes it a functional permission system.",
      "points--launch-anywhere--description": "If you have a docker on your system, Deep.Links can be deployed automatically in a Mac/Linux/Windows environment by following the provided instructions. Orchestration and scaling are provided.",
      "points--all-stages-on-single-platform--description": "Our Deep.Case product is available as a web application that is deployed automatically along with Deep.Links, as well as a stand-alone application for Mac/Linux/Windows/iOS/Android. The client handler(s) is an associative extension of the interface.",
      "points--backend--description": "Our Deep.Links product can independently control ports and routers, bind handlers to them in any programming language and already represent a full-fledged environment for essence storage and permission management.",
      "points--data-management--description": "Associative memory can be used to describe any data model. To work with the link ranges, a system of trees is provided, which means that you don't have to make infinite traverse/joins in the structure. You are able to perceive the tree-like memory structures as flat, already indexed space, where the relationships are pre-considered.",
      "points--business-logic--description_title": "The associative package contains:",
      "points--business-logic--description--point_1": "Links that declare the types of Links that the package will operate with (as dialects).",
      "points--business-logic--description--point_2": "Code async handlers executed in the back-end that are dedicated to specific types of Links, with only their types of links known in advance.",
      "points--business-logic--description--point_3": "The client handlers code, which expands the Deep.Case interface, does not prevent it from being used while building your apps, for example our Deep.NextJS solution for building cross-platform applications like Deep.Case itself.",

      'iframe--install': 'Install',
      'join-us-on-discord': 'Join us on discord',

      'talks-form-write-to-us': 'Write to us',
      'talks-form--feel_free_to_write': 'Feel free to write to the #talks channel in the Discord',
      'talks-form-how-to-get-on-our-podcast': 'Want to be on our podcast? Go to Discord channel <Kbd>#hi</Kbd>',
      'talks-form-aria-label': 'Podcast recording',

      'podcast-invitation': 'Podcast invitation',
      'podcast-invitation--dragon_cave': 'DRAGON CAVE',
      'podcast-invitation--description': 'Do you want to challenge the dragon in the cave that protects the portal to the depths?',
      'podcast-invitation--all_record': 'Everything is recorded',
      'podcast-invitation--podcast_published': "It's up to you to decide if the recording will be published.",
      'podcast-invitation--podcast_available_for_crew': "Recordings will remain available only to the Deep.Foundation crew",
      'podcast-invitation--button_enter_the_cave': 'Enter the cave',
      'podcast-invitation--your_name': 'What is your name, mortal?',
      'podcast-invitation--your_phone': 'Phone',
      'podcast-invitation--your_email': 'Email',
      'podcast-invitation--greatest_achievement': 'What is your greatest achievement?',
      'podcast-invitation--legendary_event': 'Name of the legendary event',
      'podcast-invitation--podcast_name': 'Podcast name, can be left blank',
      'podcast-invitation--button_call_the_dragon': 'Call the dragon',


      'flag-title--operational-environment': 'Operational environment',
      'flag-description--operational-environment': 'Blurring the line between your desktop and your mind-space',
      'flag-article--operational-environment': "Imagine an abstract space in which, at first, only actions with links are possible. With Deep.Case you can be immersed in the data as if it's an extension of your own thoughts. Anchor links around you and configure their behavior. Deep.Case can be utilized by analysts as a data workspace or as a space for assembly. Project management and status monitoring are also viable options. This is an extendable environment built on d3/threejs/AFrame.",

      'flag-title--new-programming-paradigm': 'A brand-new programming paradigm',
      'flag-description--new-programming-paradigm': 'We have built a Meta language free of semantic predisposition',
      'flag-article--new-programming-paradigm': "On one hand, Deep is a system that embodies the idea of Data Driven Development because it is built upon an associative data space. At the same time, the data is split into atomic elements and is represented as a minimal unit of essence - the associative link. This allows to depict any semantic, logical and abstract constructs in a single dialect for memory operations. Instead of creating a perfect language or a perfect database, Deep is an ideal associative environment with an interchangeable core. This means that it can contain a multitude of competing implementations of databases and API access languages.",

      'flag-title--all-languages': 'Any and all languages and stacks',
      'flag-description--all-languages': 'You can write your ExecutionProvider for any programming language',
      'flag-article--all-languages': "In Deep the code is stored in Links is capable of processing data events. For instance, it is possible to process events triggered by Links of a certain type as well as utilizing strict selectors from an array of trees via a WHERE-like syntax with support of join and/or traverse mechanics. The code can be written in any language compatible with any ExecutionProvider which is available as the DockerImage for our standard GQL API. And the code will be launched in its DockerImage that is linked to this ExecutionProvider in the database. Official in-transaction handler support will be added soon, as well as systems that will enable to run code on remote devices, including microcontrollers.",

      'flag-title--semantic-system': 'A semantic System of Rights',
      'flag-description--semantic-system': "The system that's right for you",
      'flag-article--semantic-system': "No longer are you forced to describe the business logic and restrictions with code. Now you can just define only the operation symbols you need, attach a subject-object-action system using a where-like syntax that will analyze the context upon completing an operation or a rights check. You will always know if there are rules allowing the execution of a single action or any operation using a GQL inquiry. This will keep business logic completely separate from coding decisions.",

      'intro--developer--title': 'Developer',
      'intro--developer--questions': 'ask questions',
      'intro--developer--research_channel': 'get your Deep research channel',
      'intro--business--title': 'Business',
      'intro--business--start_business': 'start business with Deep',
      'intro--business--need_team': 'need a team',
      'intro--write': 'write',
      'intro--in': 'in',
      'intro--channel': 'channel',
      'intro--contact': 'depth will contact you',

      'article-read': 'read',
      'article-open-link-in-new-tab': 'open link in a new tab',

      'guild--description': 'A community of followers of the cult of depth (Deep), formed around the products of the Deep.Foundation ecosystem',

      'guild--community': 'community',
      'guild--': '',
      'guild--cult': 'cult',
      'guild--depth': 'Depth',
      'guild--around': 'around',
      'guild--ecosystem': 'ecosystem',
      'guild--products': 'products',

      'guild--main-tasks-main': 'Main',
      'guild--main-tasks-tasks': 'goals',
      'guild--main-tasks-first': 'Promotion of the cult of Deep and our values: trust, openness and efficiency.',
      'guild--main-tasks-second': 'Building a system of ranks and rewards to encourage community members.',
      'guild--values': 'Values',
      'guild--publicity': 'Publicity',
      'guild--binary_trust': 'Binary trust',
      'guild--atomic_responsibility': 'Atomic responsibility',
      'guild--counseling': 'Counseling',
      'guild--geography': 'The cult of depth has neither geographical nor thinking boundaries. Anyone who shares our values can become one of us.',

      'posts-header': 'Articles',
      'posts-read': 'read',

      'podcasts-header': 'Podcasts',
    }
  },
  ru: {
    translation: {
      "deep-address": 'Москва, Большая Сухаревская площадь, 16/18с1, подъезд 4',
      "deep-meeting": 'Рекомендуем договориться о встрече в публичных каналах нашего Discord',
      "points--no-more-refactoring": "Без рефакторинга",
      "points--supports-all-code": "Поддержка любых языков и стеков",
      "points--flexible-system": "Гибкая система правил и прав",
      "points--launch-anywhere": "Среда, запускающаяся везде",
      "points--all-stages-on-single-platform": "Вся разработка ведется в одном приложении",
      "points--backend": "Готовый к использованию архитектурный back-end framework",
      "points--data-management": "Готовая среда хранения и работы с данными",
      "points--business-logic": "Бизнес-логика и сценарии в одном месте",

      "points--no-more-refactoring--description": "Благодаря минимальной единице смысла - связи, код реакций привязывается не к API, а к ассоциативным событиям insert/update/delete, реагирующим, как на события связей выбранных типов, так и на события связей, входящих в селектор связей. Это позволяет создавать Ассоциативные пакеты содержащие диалект с привязанными поведениями на любом языке.",
      "points--supports-all-code--description": "Deep.Links оркестрирует выполняемый код в docker, а вскоре и в lxc контейнерах. Адаптер, опубликованный как docker image, позволяет создать свое окружение для своего языка и стека технологий. При этом выполняемый код пишется в ассоциативной памяти внутри ассоциативных пакетов, соединенный со связями, описывающими правила выполнения и изоляции кода, заранее ограниченный системой прав Deep.",
      "points--flexible-system--description": "Любое взаимодействие с Deep осуществляется от имени некоторой связи, по средствам JWT токенов авторизации. Ассоциативная система правил позволяет легко проверять право одной связи выполнять над другой некоторое действие. Правила используют ассоциативные селекторы для указания диапазонов и критериев, при которых правило применимо. Готовая универсальная правовая система.",
      "points--launch-anywhere--description": "При наличии docker в системе, Deep.Links можно следуя инструкции развернуть в Mac/Linux/Windows среде автоматически. Оркестрация и масштабирование предусмотрены.",
      "points--all-stages-on-single-platform--description": "Deep.Case доступен как web-приложение, разворачиваемое автоматически вместе с Deep.Links, а так же как автономное приложение для Mac/Linux/Windows/iOS/Android. Интерфейс ассоциативно расширяем благодаря client handler(ам).",
      "points--backend--description": "Deep.Links может самостоятельно контролировать порты и роуты, привязывать к ним handlers на любых языках программирования и уже представлять собой полноценную среду для хранения смысла и управления правами.",
      "points--data-management--description": "С помощью ассоциативной памяти можно описать любые модели данных. Для работы с диапазонами связей предусмотрена система деревьев, позволяя не делать бесконечные travers/join по структуре, а воспринимать древовидные структуры в памяти как плоское, уже проиндексированное пространство, где отношения заранее учтены.",
      "points--business-logic--description_title": "В рамках ассоциативного пакета содержится:",
      "points--business-logic--description--point_1": "Связи, объявляющие типы связей, которыми, как диалектами, будет оперировать пакет.",
      "points--business-logic--description--point_2": "Код async handler(ов), выполняемый на back-end, привязанный к типам связей, заранее знающий только свои типы связей.",
      "points--business-logic--description--point_3": "Код client handler(ов), как расширяющий интерфейс Deep.Case, так и использовать, подключая, в коде своих React-приложений.",

      'iframe--install': 'Установить',

      'join-us-on-discord': 'Присоединяйтесь к нам в дискорд',

      'talks-form-write-to-us': 'Напишите нам',
      'talks-form--feel_free_to_write': 'Смело пишите в канал #talks в Discord',
      'talks-form-how-to-get-on-our-podcast': 'Хотите попасть к нам на подкаст? Заходите в Discord на канал <Kbd>#hi</Kbd>',
      'talks-form-aria-label': 'Запись на подкаст',

      'podcast-invitation': 'Приглашение на подкаст',
      'podcast-invitation--dragon_cave': 'ПЕЩЕРА ДРАКОНА',
      'podcast-invitation--description': 'Ты хочешь бросить вызов дракону в пещере защищающей портал в глубины?',
      'podcast-invitation--all_record': 'Всё записывается',
      'podcast-invitation--podcast_published': 'Тебе решать, будет ли опубликована запись',
      'podcast-invitation--podcast_available_for_crew': 'Записи останутся доступны только для экипажа Deep.Foundation',
      'podcast-invitation--button_enter_the_cave': 'Войти в пещеру',
      'podcast-invitation--your_name': 'Твое имя, смертный?',
      'podcast-invitation--your_phone': 'Телефон',
      'podcast-invitation--your_email': 'Почта',
      'podcast-invitation--greatest_achievement': 'Ваше величайшее деяние?',
      'podcast-invitation--legendary_event': 'Название легендарного события',
      'podcast-invitation--podcast_name': 'Имя подкаста, можно оставить пустым',
      'podcast-invitation--button_call_the_dragon': 'Позвать дракона',


      'flag-title--operational-environment': 'Операционное пространство',
      'flag-description--operational-environment': 'Больше нет разницы между вашим рабочим столом и пространством вашего мышления',
      'flag-article--operational-environment': 'Представьте себе некоторое абстрактное пространство, в котором возможны, изначально, только операции со связями. С Deep.Case можно находится внутри данных так, будто бы они дополняют ваше собственное мышление, закреплять связи в пространстве вокруг себя и автоматизировать их поведение. Пространство Deep.Case может быть использовано аналитиками, как рабочее пространство для данных или как пространство сборки, администрирования, использования и мониторинга состояния проекта. Это расширяемая среда, построенная на d3/threejs/AFrame.',

      'flag-title--new-programming-paradigm': 'Новая парадигма программирования',
      'flag-description--new-programming-paradigm': 'Мы реализовали язык без семантической и смысловой предрасположенности',
      'flag-article--new-programming-paradigm': 'С одной стороны, Deep - это система, реализующая идеи Data Driven Development, так как в центре внимания - ассоциативное хранимое пространство данных. С другой стороны, эти данные атомарны и представлены минимальной единицей хранения смысла - ассоциативной связью, что позволяет описывать ею любые семантические, смысловые, логические, абстрактные и т. д. конструкции в едином диалекте операций над памятью. Вместо того чтобы создавать идеальный язык или идеальную базу данных, Deep - это идеальная среда доступа к ассоциативному подходу, с подменяемым ядром. Это значит в ней может быть использовано множество разных конкурирующих реализаций баз данных и языковых api доступа.',

      'flag-title--all-languages': 'Любые языки и стеки',
      'flag-description--all-languages': 'Вы можете написать ExecutionProvider для любых языков программирования',
      'flag-article--all-languages': 'В Deep код хранится в связях может обработать то или иное событие. Например, можно реагировать на события как у связей конкретного типа, так и указывая строгие селекторы по диапазонам деревьев с WHERE-like синтаксисом и поддержкой join/traverse механик. Код может быть написан на любом языке, для которого создан ExecutionProvider - это Docker Image согласно нашему стандартному API, в рамках которого запускается код, связанный с ним в базе. Очень скоро мы добавим официальную поддержку in-transaction обработчиков, а также системы для запуска кода на удаленных машинах, в т. ч. на микроконтроллерах.',

      'flag-title--semantic-system': 'Семантическая система прав',
      'flag-description--semantic-system': 'Всегда именно та система прав, которую вы хотите',
      'flag-article--semantic-system': 'Больше не нужно описывать программным кодом бизнес-логику и ограничения. Теперь можно описать символы операций, которые вам нужны в вашем деле, и привязать к ним правила subject (кому) на object (на какие предметы) и action (на какое действие), используя для описания WHERE-like синтаксис, позволяющий семантически анализировать ситуацию в момент попытки произведения операции или проверки права. Всегда можно узнать: есть ли правила, разрешающие выполнение некоторого action или иной операции, выполнив gql-запрос. Это позволяет полностью вынести бизнес-логику из программных решений.',

      'intro--developer--title': 'Разработчику',
      'intro--developer--questions': 'задать вопросы',
      'intro--developer--research_channel': 'получить свой канал исследования глубины',
      'intro--business--title': 'Бизнесу',
      'intro--business--start_business': 'запустить бизнес с Deep',
      'intro--business--need_team': 'найти команду',
      'intro--write': 'пишите',
      'intro--in': 'в',
      'intro--channel': 'канал',
      'intro--contact': 'глубина вступит с вами в контакт',

      'article-read': 'читать',
      'article-open-link-in-new-tab': 'открыть ссылку в новой вкладке',

      'guild--description': 'Kомьюнити последователей культа глубины (Deep), формирующееся вокруг продуктов экосистемы Deep.Foundation',

      'guild--community': 'Сообщество',
      'guild--': 'последователей',
      'guild--cult': 'культа',
      'guild--depth': 'глубины',
      'guild--around': 'вокруг',
      'guild--ecosystem': 'экосистемы',
      'guild--products': 'продуктов',

      'guild--main-tasks-main': 'Основные',
      'guild--main-tasks-tasks': 'задачи',
      'guild--main-tasks-first': 'Популяризация культа глубины (Deep) и наших ценностей: доверие, открытость, эффективность.',
      'guild--main-tasks-second': 'Выстраивание системы рангов и вознаграждений, чтобы поощрять участников комьюнити.',
      'guild--values': 'Ценности',
      'guild--publicity': 'Публичность',
      'guild--binary_trust': 'Бинароное доверие',
      'guild--atomic_responsibility': 'Атомарная ответственность',
      'guild--counseling': 'Консультирование',
      'guild--geography': 'Культ глубины не имеет ни географических, ни границ мышления. Любой, разделяющий наши ценности может стать одним из нас.',

      'posts-read': 'читать',
      'posts-header': 'Статьи',

      'podcasts-header': 'Подкасты',
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "ru",
    // lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

i18n.changeLanguage('en', (err, t) => {
  if (err) return console.log('something went wrong loading', err);
  t('key'); // -> same as i18next.t
});

// using Promises
i18n
  .changeLanguage('en')
  .then((t) => {
    t('key'); // -> same as i18next.t
  });

  

export default i18n;