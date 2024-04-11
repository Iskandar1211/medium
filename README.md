# medium
 Библиотеки React, которые стоит использовать в 2024 году
Рид Баргер
Рид Баргер

·
Следовать

9 минут чтения
·
26 февраля 2024 г.
718


4





Чтобы создавать приложения с помощью React, необходимо знать подходящие библиотеки для добавления необходимых вам функций.

Например, чтобы добавить определенную функцию, например аутентификацию или стилизацию, вам потребуется найти хорошую стороннюю библиотеку для ее обработки.

В этом подробном руководстве я собираюсь показать вам все библиотеки, которые я бы рекомендовал вам использовать в 2024 году для простого создания быстрых и надежных приложений React.

🛠️ Фреймворк React
Прежде всего, как нам вообще создать приложение React в 2024 году?

Если вам нужен проект React, визуализируемый клиентом, лучшим выбором будет Vite , который заменил устаревший инструмент Create React App.

Если вы заинтересованы в создании проекта React, отображаемого на сервере, или полнофункционального проекта, Next.js — наиболее полная и популярная полнофункциональная среда React. В Next.js версии 13 появился маршрутизатор приложений, который предоставил нам такие функции, как серверные компоненты и действия сервера, что позволяет нам получать данные и отображать наши компоненты React на сервере.

Если некоторые функции Next.js кажутся вам слишком сложными для понимания, отличной полноценной альтернативой для создания динамических и статических сайтов является Remix .

Если вы создаете приложение, которое хотите быстро загружать и в основном обслуживать статический контент, еще один отличный выбор — Astro . Astro позволяет использовать React вместе с другими фреймворками, такими как Vue и Svelte (что означает «независимость от фреймворка»), и предназначен для доставки наименьшего количества JavaScript, необходимого клиенту, что приводит к очень быстрой загрузке.

📦 Менеджер пакетов
Чтобы установить все эти библиотеки, перечисленные в этом руководстве, вам понадобится что-то, называемое менеджером пакетов.

Если у вас установлен Node.js, который необходим для локального запуска проекта React на вашем компьютере, вы можете просто использовать NPM , который по-прежнему остается отличным выбором в 2024 году. Существуют и другие альтернативы NPM, включая Yarn и PNPM.

Новейшая альтернатива, которая быстро становится очень популярной в мире JavaScript, — Bun . Bun — это одновременно среда выполнения JavaScript, такая как Node, а также менеджер пакетов и позиционируется как более быстрая альтернатива Node и NPM.

🎨 Библиотеки CSS и пользовательского интерфейса
Теперь, когда вы настроили свой проект и установили библиотеки, как вы собираетесь стилизовать свои проекты React?

Все упомянутые выше фреймворки включают базовую поддержку CSS. В 2024 году вполне нормально, если вы хотите просто стилизовать свои проекты React с помощью простого CSS .

Вы можете использовать таблицы стилей CSS или модули CSS, но, пожалуй, самым популярным выбором на данный момент с точки зрения чистого стиля является использование Tailwind CSS . Tailwind CSS включает в себя несколько шагов настройки, но позволяет объединять готовые классы вместе, чтобы быстро добавлять стили непосредственно в файлы компонентов.

ShadCN — очень популярная библиотека пользовательского интерфейса 2024 года, которая сочетает в себе Tailwind CSS с библиотекой компонентов под названием Radix UI. Библиотеки компонентов, такие как Radix, позволяют легко добавлять компоненты, не программируя их самостоятельно. ShadCN стал популярным благодаря большему контролю над внешним видом ваших компонентов с помощью Tailwind CSS.

Существует также множество других очень популярных библиотек функциональных компонентов. Пользовательский интерфейс Material по-прежнему остается популярным, как и другие, такие как Mantine и Chakra UI . Какой из них вы выберете, действительно зависит от того, как вы хотите, чтобы ваше окончательное приложение выглядело. Я бы порекомендовал опробовать несколько этих UI-библиотек и посмотреть, какая из них вам больше всего понравится.

💽 Управление государством
React имеет встроенные инструменты, такие как useState и useReducer, для управления состоянием вашего приложения в базовых приложениях. Если вы используете Next.js, управление состоянием перенесено на URL-адрес при работе с серверными компонентами. Несмотря на эти возможности, вам может потребоваться более точный способ управления состоянием.

У вас может быть много частей состояния, и вам нужен больший контроль над тем, как обновления состояния отображают ваши компоненты. Если да, то вы можете воспользоваться специальной библиотекой управления состоянием.

Такие библиотеки, как Zustand , Recoil и Jotai , которые очень похожи, позволяют вам управлять состоянием, просто объявляя свойства и методы объекта. В конечном итоге это самый простой способ управления состоянием компонентов вашего приложения.

Если бы мне пришлось выбрать одну библиотеку управления состоянием для всех моих проектов React в 2024 году, я бы выбрал Zustand . Чтобы научиться им пользоваться, почти не требуется времени. Он также не требует добавления компонента провайдера в ваше приложение, что делает его очень удобным для использования в любом компоненте, который вам нравится.

🐕 Получение данных
Управление состоянием и получение данных часто идут рука об руку. Если вы создаете приложение React, отображаемое клиентом, вам, вероятно, понадобится библиотека выборки данных.

Лучшим способом получения данных с сервера в приложении React в 2024 году остается React Query или Tanstack Query, как он сейчас называется. TanStack Query дает вам детальный контроль не только над получением данных, временем их извлечения и повторной загрузки, кэшированием с помощью удобных пользовательских перехватчиков, а также очень легко изменяет или мутирует данные.

Другой надежной альтернативой является SWR , который также предлагает собственный хук для обработки запросов и мутаций, но он гораздо проще с точки зрения того, что он предлагает. Вы не ошибетесь, выбрав любой из них, получив данные и выполнив HTTP-запросы с помощью API-интерфейса выборки.

🧭 Маршрутизация
Если вы используете такую ​​структуру, как Next.js, Remix или Astro, о вашей маршрутизации уже позаботятся. Все они имеют встроенные способы создания маршрутов или страниц в вашем проекте.

В случае приложения React, отображаемого клиентом, например, созданного с помощью Vite или Create React App, вам нужно будет выбрать библиотеку маршрутизации. React Router по-прежнему остается самым популярным выбором. Он позаботится обо всех ваших нуждах в маршрутизации. Он также очень продвинут благодаря функциям загрузки данных с помощью loaderреквизита. Этот loaderреквизит позволяет вам получать данные для заданного маршрута без использования внешней библиотеки, такой как React Query.

Многообещающая библиотека, обладающая не менее хорошими функциями, — это Tanstack Router . Маршрутизатор Tanstack был создан с учетом полной типобезопасности и предлагает отличные настройки по умолчанию для выборки данных, как это предусмотрено в React Router версии 6.

Хотя Tanstack Router немного новее, вы действительно не ошибетесь, выбрав любой из вариантов, и это идеальное сочетание, если вы уже используете Tanstack Query или SWR в своих приложениях.

🔒 Аутентификация
Хотя аутентификация — это то, что обрабатывается серверной частью наших проектов, стоит знать, какие библиотеки лучше всего интегрируются с проектами React, как на клиенте, так и на сервере.

В 2024 году Supabase стал очень надежным решением для аутентификации и предлагает простую интеграцию с приложениями React как на сервере, скажем, в проекте Next.js, так и на клиенте. В прошлые годы Firebase выбиралась по тем же причинам, но его сложнее интегрировать на серверной стороне.

Если вы используете Next.js, вам доступна масса опций, таких как NextAuth , Clerk и новичок Lucia . К сожалению, в текущем году для Next.js нет встроенной библиотеки аутентификации, но, возможно, в будущем она появится.

Тем временем я лично буду использовать Supabase и настоятельно рекомендую вам ознакомиться с их документацией.

🥞 База данных и ORM
Как и аутентификация, ваша база данных — это то, что будет и должно в основном взаимодействовать с вашим серверным кодом.

Базы данных, такие как Supabase и Firebase, не требуют наличия сервера. Вы можете получать и изменять данные непосредственно в клиенте, а также добавлять правила безопасности на свою панель управления, чтобы гарантировать, что определенные типы запросов разрешены или запрещены в зависимости от статуса и роли аутентификации пользователей.

Помимо этих двух вариантов, если вы используете традиционный сервер или полнофункциональную платформу, существует бесчисленное множество вариантов. В 2024 году общее предпочтение явно будет отдано базам данных SQL, таким как MySQL или PostgreSQL, а не базам данных NoSQL, таким как MongoDB или Firebase.

Для взаимодействия с вашей базой данных вы будете использовать либо простой SQL, либо ORM, который позволяет использовать собственный язык запросов. Популярные варианты ORM включают Prisma или Drizzle . Оба из них позволяют генерировать типобезопасный код, чтобы вы знали, какие данные будут возвращены, и оба очень хорошо интегрируются с базами данных SQL или NoSQL по вашему выбору.

🕰️ Даты и время
Когда вы работаете с JavaScript, всегда рекомендуется иметь библиотеку дат. Конструктор даты в JavaScript непредсказуем, и практически невозможно надежно работать с такими вещами, как часовые пояса.

Вариантов масса, но я склоняюсь к date- fns или day.js. Обе — очень маленькие, но обширные библиотеки, которые позволяют манипулировать датами JavaScript либо в браузере, либо на серверной части. Вы не ошибетесь ни с одним из них.

📋 Формы
В большинстве случаев вам может не понадобиться библиотека форм, если вы просто создаете приложение с простой формой регистрации, requiredобычно все, что вам нужно, — это использование реквизита для входных данных.

Если вы создаете что-то более сложное и у вас много форм, React Hook Form — это полнофункциональная библиотека форм, которая позволяет вам проверять ввод формы и отображать ошибки с минимальным использованием кода.

Другие библиотеки форм, такие как Formik и React Final Form, предоставят вам ту же функциональность, но React Hook Form немного лучше, поскольку имеет более современный API, основанный на хуках, и обычно требует меньше кода.

☔️ Перетаскивание
Когда дело доходит до добавления перетаскивания в ваше приложение, вам почти наверняка понадобится сторонняя библиотека. В прошлом самым популярным выбором был React Beautiful DnD. С 2024 года он больше не получает регулярных обновлений.

В дальнейшем надежной заменой перетаскиванию будет использованиеДнД комплект. Он легкий, очень гибкий, а документация включает в себя множество очень полезных примеров, охватывающих все варианты использования, которые могут возникнуть при реализации перетаскивания.

📱 Мобильные приложения
Если вы хотите создать мобильное приложение, библиотекой для разработчиков React всегда была React Native. Есть несколько интересных библиотек, расширяющих границы React Native и расширяющих возможности Интернета.

Expo — это инструмент, похожий на Vite, но для создания мобильных приложений React. Он имеет такие замечательные функции, как быстрое обновление, а с Expo Go вы можете легко запускать проект на своем устройстве по мере его разработки. Expo упрощает использование вашей мобильной базы кода и ее развертывание в Интернете.

Это конечная цель других проектов, таких как Tamagui , с которым вам также следует ознакомиться, если вы хотите создать настоящее нативное приложение, работающее на Android, iOS и в Интернете.

Если у вас есть приложение React, которое вы уже написали для запуска в браузере, самый быстрый способ запустить его как собственное приложение и запустить его в Apple App Store или Google Play Store — использовать Capacitor.js .

🚀 Развертывание
Сейчас существует больше способов развернуть ваше приложение React, чем когда-либо. Vercel , вероятно, является самой простой платформой для развертывания вашего приложения React, независимо от того, отображается ли оно на клиенте или на сервере. Они поддерживают практически все возможные фреймворки, включая языки, отличные от JavaScript. У них щедрый план хобби, а конкурентами в той же сфере являются Netlify и Cloudflare Pages .

Cloudflare Pages может быть немного сложнее настроить, особенно если у вас полнофункциональный проект React, но это самый щедрый с точки зрения цены вариант из всех этих вариантов. Если вы не против заплатить за сервер, вы можете использовать что-то вроде Railway или Render, что отлично подходит для развертывания, если у вас есть сервер, отдельный от вашего приложения React.

🏆 Библиотека №1, которую нужно знать
Наконец, самая важная библиотека номер один, которую вам следует знать, если вы разработчик React в 2024 году, — это TypeScript . Все упомянутые мной фреймворки включают варианты создания приложения React с использованием TypeScript.

TypeScript — это инструмент, который позволяет обнаруживать ошибки типов в коде JavaScript и предотвращать ошибки во время выполнения. Вы можете создавать все свои проекты React, используя только JavaScript, но в какой-то момент вы либо сами увидите преимущества использования TypeScript, либо посмотрите на кодовую базу, в которой есть TypeScript.

Я настоятельно рекомендую вам выделить некоторое время на изучение TypeScript. Это самый важный и самый востребованный инструмент, который должен знать разработчик React, и он может значительно улучшить общее качество вашего кода.

🏆 Станьте профессиональным разработчиком React
Ищете лучший ресурс для изучения React от начала до конца?

✨ Представляем: учебный курс React

В учебном курсе представлены все ресурсы, которые помогут вам добиться успеха в React:

🎬 200 подробных видео
🕹️ 100 практических задач по React
🛠️ 5 впечатляющих портфолио проектов
📄 10 основных шпаргалок по React
🥾 Полноценный учебный курс по Next.js
🖼️ Полная серия анимационных видеороликов.
Нажмите ниже, чтобы попробовать React Bootcamp самостоятельно.