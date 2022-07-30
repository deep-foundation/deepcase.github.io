import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "deep-address": 'Moscow, Bolshaya Sukharevskaya Square, 16/18с1, entrance 4',
      "deep-meeting": 'We recommend to arrange a meeting in the public channels of our Discord',
      "points--no-more-refactoring": "no more refactoring",
      "points--supports-all-code": "supports all code languages and stacks",
      "points--flexible-system": "a flexible system of permissions and rights",
      "points--launch-anywhere": "an environment that can be launched anywhere",
      "points--all-stages-on-single-platform": "all stages of development on a single platform",
      "points--backend": "a fully operational backend engine",
      "points--data-management": "a ready to use storage and data management environment",
      "points--business-logic": "business logistics and scripting in one space",


      'iframe--install': 'Install',
      'join-us-on-discord': 'Join us on discord',

      'talks-form-write-to-us': 'Write to us',
      'talks-form-how-to-get-on-our-podcast': 'Want to be on our podcast? Go to Discord channel <Kbd>#hi</Kbd>',
      'talks-form-aria-label': 'Podcast recording',


      'flag-title--operational-environment': 'Operational environment',
      'flag-description--operational-environment': 'Blurring the line between your desktop and your mind-space',
      'flag-article--operational-environment': "Imagine an abstract space in which, at first, only actions with links are possible. With Deep.Case you can be immersed in the data as if it's an extension of your own thoughts. Anchor links around you and configure their behavior. Deep.Case can be utilized by analysts as a data workspace or as a space for assembly. Project management and status monitoring are also viable options. This is an extendable environment built on d3/threejs/AFrame.",

      'flag-title--new-programming-paradigm': 'A brand-new programming paradigm',
      'flag-description--new-programming-paradigm': 'We have built a Meta language free of semantic predisposition',
      'flag-article--new-programming-paradigm': "On one hand, Deep is a system that embodies the idea of Data Driven Development because it is built upon an associative data space. At the same time, the data is split into atomic elements and is represented as a minimal unit of essence - the associative link. This allows to depict any semantic, logical and abstract constructs in a single dialect for memory operations. Instead of creating a perfect language or a perfect database, Deep is an ideal associative environment with an interchangeable core. This means that it can contain a multitude of competing implementations of databases and API access languages.",

      'flag-title--all-languages': 'Any and all languages and stacks',
      'flag-description--all-languages': 'You can write your ExecutionProvider for any programming language',
      'flag-article--all-languages': "In Deep the code is stored in Links and is capable of processing data events. For instance, it is possible to process events triggered by Links of a certain type as well as utilizing strict selectors from an array of trees via a WHERE-like syntax with support of join and/or traverse mechanics. The code can be written in any language compatible with any ExecutionProvider which is available as the DockerImage for our standard GQL API. And the code will be launched in its DockerImage that is linked to this ExecutionProvider in the database. Official in-transaction handler support will be added soon, as well as systems that will enable to run code on remote devices, including microcontrollers.",

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
      "points--launch-anywhere": "Среда запускающаяся везде",
      "points--all-stages-on-single-platform": "Вся разработка ведется в одном приложении",
      "points--backend": "Готовый к использованию backend",
      "points--data-management": "Готовая среда хранения и работы с данными",
      "points--business-logic": "Бизнес логика и сценарии в одном месте",

      'iframe--install': 'Установить',

      'join-us-on-discord': 'Присоединяйтесь к нам в дискорд',

      'talks-form-write-to-us': 'Напишите нам',
      'talks-form-how-to-get-on-our-podcast': 'Хотите попасть к нам на подкаст? Заходите в Discord на канал <Kbd>#hi</Kbd>',
      'talks-form-aria-label': 'Запись на подкаст',


      'flag-title--operational-environment': 'Операционное пространство',
      'flag-description--operational-environment': 'Больше нет разницы между вашим рабочим столом и пространством вашего мышления',
      'flag-article--operational-environment': 'Представьте себе некоторое абстрактное пространство, в котором возможны, изначально, только операции со связями. С Deep.Case можно находится внутри данных так, будто бы они дополняют ваше собственное мышление, закреплять связи в пространстве вокруг себя и автоматизировать их поведение. Пространство Deep.Case может быть использовано аналитиками, как рабочее пространство для данных или как пространство сборки, администрирования, использования и мониторинга состояния проекта. Это расширяемая среда, построенная на d3/threejs/AFrame.',

      'flag-title--new-programming-paradigm': 'Новая парадигма программирования',
      'flag-description--new-programming-paradigm': 'Мы реализовали язык без семантической и смысловой предрасположенности',
      'flag-article--new-programming-paradigm': 'С одной стороны, Deep - это система, реализующая идеи Data Driven Development, так как в центре внимания - ассоциативное хранимое пространство данных. С другой стороны, эти данные атомарны и представлены минимальной единицей хранения смысла - ассоциативной связью, что позволяет описывать ею любые семантические, смысловые, логические, абстрактные и т. д. конструкции в едином диалекте операций над памятью. Вместо того чтобы создавать идеальный язык или идеальную базу данных, Deep - это идеальная среда доступа к ассоциативному подходу, с подменяемым ядром. Это значит в ней может быть использовано множество разных конкурирующих реализаций баз данных и языковых api доступа.',

      'flag-title--all-languages': 'Любые языки и стеки',
      'flag-description--all-languages': 'Вы можете написать ExecutionProvider для любых языков программирования',
      'flag-article--all-languages': 'В Deep код хранится в связях и может обработать то или иное событие. Например, можно реагировать на события как у связей конкретного типа, так и указывая строгие селекторы по диапазонам деревьев с WHERE-like синтаксисом и поддержкой join/traverse механик. Код может быть написан на любом языке, для которого создан ExecutionProvider - это Docker Image согласно нашему стандартному API, в рамках которого запускается код, связанный с ним в базе. Очень скоро мы добавим официальную поддержку in-transaction обработчиков, а также системы для запуска кода на удаленных машинах, в т. ч. на микроконтроллерах.',

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