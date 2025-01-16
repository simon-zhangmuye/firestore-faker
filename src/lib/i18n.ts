import { create } from 'zustand'

type Language = 'en' | 'zh' | 'ja' | 'ko' | 'fr' | 'es' | 'de' | 'ru'

interface I18nStore {
  lang: Language
  setLang: (lang: Language) => void
}

export const useI18n = create<I18nStore>((set) => ({
  lang: 'en',
  setLang: (lang) => set({ lang })
}))

export const translations = {
  en: {
    title: 'Firestore Data Generator',
    config: 'Firebase Configuration',
    fakerDocs: 'View Faker.js Documentation',
    connected: 'Connected',
    notConnected: 'Not Connected',
    collectionPath: 'Collection Path',
    numDocuments: 'Number of Documents',
    generateData: 'Generate Data',
    insertFirestore: 'Insert to Firestore',
    tutorial: 'Tutorial',
    template: 'Template',
    preview: 'Preview',
    templateHint: 'Click the template button above to get started quickly, or follow the tutorial to customize your data structure.',
    toast: {
      success: 'Success',
      insertSuccess: 'Successfully added {{count}} documents to collection {{path}}',
      generationFailed: 'Generation Failed',
      checkFormat: 'Please check your template format',
      notInitialized: 'Not Initialized',
      initializeFirst: 'Please initialize Firebase first',
      missingFields: 'Missing Fields',
      fillAllFields: 'Please fill in all required fields',
      firebaseInitialized: 'Firebase Initialized',
      successfullyConnected: 'Successfully connected to Firebase',
      initializationFailed: 'Initialization Failed',
      initializationFailedDescription: 'Failed to initialize Firebase. Please check your configuration.',
      unknownError: 'An unexpected error occurred. Please try again.',
      insertionFailed: 'Failed to insert documents'
    },
    tutorialContent: {
      title: 'Data Template Tutorial',
      basicTypes: 'Basic Data Types',
      basicTypesExample: `{
  "name": "{{name}}", // Generate name
  "email": "{{email}}", // Generate email
  "age": "{{number}}", // Generate random number
  "isActive": "{{boolean}}", // Generate boolean
  "createdAt": "{{timestamp}}" // Generate timestamp
}`,
      mixedValues: 'Fixed and Dynamic Values',
      mixedValuesExample: `{
  "type": "user", // Fixed value
  "role": "admin", // Fixed value
  "level": 1, // Fixed number
  "name": "{{name}}", // Dynamic generation
  "status": "active" // Fixed value
}`,
      mediaTypes: 'Images and Media',
      mediaTypesExample: `{
  "avatar": "{{avatar}}", // Avatar URL
  "cover": "{{image}}", // Random image
  "food": "{{image.food}}", // Food image
  "nature": "{{image.nature}}" // Nature image
}`,
      chineseContent: "Chinese Content",
      chineseContentExample: `{
  "title": "{{title}}", // Title
  "content": "{{paragraph}}", // Paragraph
  "company": "{{company}}", // Company name
  "address": "{{address}}" // Address
}`,
      arrayAndNested: "Arrays and Nested Objects",
      arrayAndNestedExample: `{
  "tags": ["tech", "programming"], // Fixed array
  "categories": ["{{word}}", "{{word}}"], // Dynamic array
  "meta": { // Nested object
    "views": "{{number}}",
    "likes": "{{number}}"
  }
}`
    },
    initializeFirebase: 'Initialize Firebase',
  },
  zh: {
    title: 'Firestore 数据生成器',
    config: 'Firebase 配置',
    fakerDocs: '查看 Faker.js 文档',
    connected: '已连接',
    notConnected: '未连接',
    collectionPath: '集合路径',
    numDocuments: '文档数量',
    generateData: '生成数据',
    insertFirestore: '插入到 Firestore',
    tutorial: '教程',
    template: '模板',
    preview: '预览',
    templateHint: '你可以点击上方的示例模板按钮快速开始使用，或者根据教程自定义你的数据结构。',
    toast: {
      success: '成功',
      insertSuccess: '成功添加 {{count}} 条数据到 {{path}} 集合',
      generationFailed: '生成失败',
      checkFormat: '请检查模板格式',
      notInitialized: '未初始化',
      initializeFirst: '请先初始化 Firebase',
      missingFields: '缺失字段',
      fillAllFields: '请填写所有必填字段',
      firebaseInitialized: 'Firebase 初始化成功',
      successfullyConnected: '成功连接到 Firebase',
      initializationFailed: '初始化失败',
      initializationFailedDescription: '初始化 Firebase 失败，请检查您的配置。',
      unknownError: '发生了意外的错误，请重试。',
      insertionFailed: '插入文档失败'
    },
    tutorialContent: {
      title: '数据模板使用教程',
      basicTypes: '基础数据类型',
      basicTypesExample: `{
  "name": "{{name.zh}}", // 生成中文姓名
  "email": "{{email}}", // 生成邮箱
  "age": "{{number}}", // 生成随机数字
  "isActive": "{{boolean}}", // 生成布尔值
  "createdAt": "{{timestamp}}" // 生成时间戳
}`,
      mixedValues: '固定值与动态值混合',
      mixedValuesExample: `{
  "type": "user", // 固定值
  "role": "admin", // 固定值
  "level": 1, // 固定数字
  "name": "{{name.zh}}", // 动态生成
  "status": "active" // 固定值
}`,
      mediaTypes: '图片和多媒体',
      mediaTypesExample: `{
  "avatar": "{{avatar}}", // 头像URL
  "cover": "{{image}}", // 随机图片
  "food": "{{image.food}}", // 食物图片
  "nature": "{{image.nature}}" // 自然风景图片
}`,
      chineseContent: "中文内容",
      chineseContentExample: `{
  "title": "{{title.zh}}", // 中文标题
  "content": "{{paragraph.zh}}", // 中文段落
  "company": "{{company.zh}}", // 中文公司名
  "address": "{{address.zh}}" // 中文地址
}`,
      arrayAndNested: "数组和嵌套结构",
      arrayAndNestedExample: `{
  "tags": ["技术", "编程"], // 固定数组
  "categories": ["{{word.zh}}", "{{word.zh}}"], // 动态数组
  "meta": { // 嵌套对象
    "views": "{{number}}",
    "likes": "{{number}}"
  }
}`
    },
    initializeFirebase: '初始化 Firebase',
  },
  ja: {
    title: 'Firestore データジェネレーター',
    config: 'Firebase 設定',
    fakerDocs: 'Faker.js ドキュメントを見る',
    connected: '接続済み',
    notConnected: '未接続',
    collectionPath: 'コレクションパス',
    numDocuments: 'ドキュメント数',
    generateData: 'データ生成',
    insertFirestore: 'Firestoreに挿入',
    tutorial: 'チュートリアル',
    template: 'テンプレート',
    preview: 'プレビュー',
    templateHint: 'テンプレートボタンをクリックしてすぐに始めるか、チュートリアルに従ってデータ構造をカスタマイズしてください。',
    toast: {
      success: '成功',
      insertSuccess: '{{path}} コレクションに {{count}} 件のドキュメントを追加しました',
      generationFailed: '生成に失敗しました',
      checkFormat: 'テンプレート形式を確認してください',
      notInitialized: '未初期化',
      initializeFirst: 'Firebase を初期化してください',
      missingFields: '未入力のフィールドがあります',
      fillAllFields: 'すべての必須フィールドを入力してください',
      firebaseInitialized: 'Firebase 初期化成功',
      successfullyConnected: 'Firebase に接続しました',
      initializationFailed: '初期化に失敗しました',
      initializationFailedDescription: 'Firebase の初期化に失敗しました。設定を確認してください。',
      unknownError: '予期せぬエラーが発生しました。再度試してください。',
      insertionFailed: 'ドキュメントの挿入に失敗しました'
    },
    tutorialContent: {
      title: 'データテンプレートチュートリアル',
      basicTypes: '基本データ型',
      basicTypesExample: `{
  "name": "{{name.ja}}", // 名前を生成
  "email": "{{email}}", // メールアドレスを生成
  "age": "{{number}}", // ランダムな数字
  "isActive": "{{boolean}}", // 真偽値
  "createdAt": "{{timestamp}}" // タイムスタンプ
}`,
      mixedValues: '固定値と動的値の混合',
      mixedValuesExample: `{
  "type": "user", // 固定値
  "role": "admin", // 固定値
  "level": 1, // 固定数値
  "name": "{{name.ja}}", // 動的生成
  "status": "active" // 固定値
}`,
      mediaTypes: '画像とメディア',
      mediaTypesExample: `{
  "avatar": "{{avatar}}", // アバターURL
  "cover": "{{image}}", // ランダム画像
  "food": "{{image.food}}", // 食べ物の画像
  "nature": "{{image.nature}}" // 自然の画像
}`,
      chineseContent: "日本語コンテンツ",
      chineseContentExample: `{
  "title": "{{title.ja}}", // 日本語タイトル
  "content": "{{paragraph.ja}}", // 日本語段落
  "company": "{{company.ja}}", // 日本語会社名
  "address": "{{address.ja}}" // 日本語住所
}`,
      arrayAndNested: "配列とネスト構造",
      arrayAndNestedExample: `{
  "tags": ["テクノロジー", "プログラミング"], // 固定配列
  "categories": ["{{word.ja}}", "{{word.ja}}"], // 動的配列
  "meta": { // ネストされたオブジェクト
    "views": "{{number}}",
    "likes": "{{number}}"
  }
}`
    },
    initializeFirebase: 'Firebase を初期化',
  },
  ko: {
    title: 'Firestore 데이터 생성기',
    config: 'Firebase 구성',
    fakerDocs: 'Faker.js 문서 보기',
    connected: '연결됨',
    notConnected: '연결되지 않음',
    collectionPath: '컬렉션 경로',
    numDocuments: '문서 수',
    generateData: '데이터 생성',
    insertFirestore: 'Firestore에 삽입',
    tutorial: '튜토리얼',
    template: '템플릿',
    preview: '미리보기',
    templateHint: '템플릿 버튼을 클릭하여 빠르게 시작하거나 튜토리얼을 따라 데이터 구조를 사용자 정의하세요.',
    toast: {
      success: '성공',
      insertSuccess: '{{path}} 컬렉션에 {{count}}개의 문서를 추가했습니다',
      generationFailed: '생성 실패',
      checkFormat: '템플릿 형식을 확인하세요',
      notInitialized: '초기화되지 않음',
      initializeFirst: 'Firebase를 먼저 초기화하세요',
      missingFields: '필요한 필드가 누락되었습니다',
      fillAllFields: '모든 필드를 채워주세요',
      firebaseInitialized: 'Firebase 초기화 성공',
      successfullyConnected: 'Firebase에 연결되었습니다',
      initializationFailed: '초기화 실패',
      initializationFailedDescription: 'Firebase 초기화에 실패했습니다. 설정을 확인하세요.',
      unknownError: '예상치 못한 오류가 발생했습니다. 다시 시도하세요.',
      insertionFailed: '문서 삽입 실패'
    },
    tutorialContent: {
      title: '데이터 템플릿 튜토리얼',
      basicTypes: '기본 데이터 유형',
      basicTypesExample: `{
  "name": "{{name.ko}}", // 이름 생성
  "email": "{{email}}", // 이메일 생성
  "age": "{{number}}", // 임의의 숫자
  "isActive": "{{boolean}}", // 불리언 값
  "createdAt": "{{timestamp}}" // 타임스탬프
}`,
      mixedValues: '고정값과 동적값 혼합',
      mixedValuesExample: `{
  "type": "user", // 고정값
  "role": "admin", // 고정값
  "level": 1, // 고정 숫자
  "name": "{{name.ko}}", // 동적 생성
  "status": "active" // 고정값
}`,
      mediaTypes: '이미지와 미디어',
      mediaTypesExample: `{
  "avatar": "{{avatar}}", // 아바타 URL
  "cover": "{{image}}", // 랜덤 이미지
  "food": "{{image.food}}", // 음식 이미지
  "nature": "{{image.nature}}" // 자연 이미지
}`,
      chineseContent: "한국어 콘텐츠",
      chineseContentExample: `{
  "title": "{{title.ko}}", // 한국어 제목
  "content": "{{paragraph.ko}}", // 한국어 단락
  "company": "{{company.ko}}", // 한국어 회사명
  "address": "{{address.ko}}" // 한국어 주소
}`,
      arrayAndNested: "배열과 중첩 구조",
      arrayAndNestedExample: `{
  "tags": ["기술", "프로그래밍"], // 고정 배열
  "categories": ["{{word.ko}}", "{{word.ko}}"], // 동적 배열
  "meta": { // 중첩 객체
    "views": "{{number}}",
    "likes": "{{number}}"
  }
}`
    },
    initializeFirebase: 'Firebase 초기화',
  },
  fr: {
    title: 'Générateur de données Firestore',
    config: 'Configuration Firebase',
    fakerDocs: 'Voir la documentation Faker.js',
    connected: 'Connecté',
    notConnected: 'Non connecté',
    collectionPath: 'Chemin de collection',
    numDocuments: 'Nombre de documents',
    generateData: 'Générer les données',
    insertFirestore: 'Insérer dans Firestore',
    tutorial: 'Tutoriel',
    template: 'Modèle',
    preview: 'Aperçu',
    templateHint: 'Cliquez sur le bouton de modèle pour commencer rapidement ou suivez le tutoriel pour personnaliser votre structure de données.',
    toast: {
      success: 'Succès',
      insertSuccess: 'Ajout de {{count}} documents à la collection {{path}}',
      generationFailed: 'Échec de la génération',
      checkFormat: 'Vérifiez le format du modèle',
      notInitialized: 'Non initialisé',
      initializeFirst: 'Initialisez Firebase d\'abord',
      missingFields: 'Champs manquants',
      fillAllFields: 'Veuillez remplir tous les champs requis',
      firebaseInitialized: 'Firebase initialisé',
      successfullyConnected: 'Connecté à Firebase',
      initializationFailed: 'Échec de l\'initialisation',
      initializationFailedDescription: 'Échec de l\'initialisation de Firebase. Vérifiez votre configuration.',
      unknownError: 'Erreur inattendue. Réessayez.',
      insertionFailed: 'Échec de l\'insertion des documents'
    },
    tutorialContent: {
      title: 'Tutoriel des modèles de données',
      basicTypes: 'Types de base',
      basicTypesExample: `{
  "name": "{{name.fr}}", 
  "email": "{{email}}", 
  "age": "{{number}}", 
  "isActive": "{{boolean}}", 
  "createdAt": "{{timestamp}}" 
}`,
      mixedValues: 'Valeurs fixes et dynamiques',
      mixedValuesExample: `{
  "type": "user",
  "role": "admin",
  "level": 1,
  "name": "{{name.fr}}",
  "status": "active"
}`,
      mediaTypes: 'Images et médias',
      mediaTypesExample: `{
  "avatar": "{{avatar}}",
  "cover": "{{image}}",
  "food": "{{image.food}}",
  "nature": "{{image.nature}}"
}`,
      chineseContent: "Contenu français",
      chineseContentExample: `{
  "title": "{{title.fr}}",
  "content": "{{paragraph.fr}}",
  "company": "{{company.fr}}",
  "address": "{{address.fr}}"
}`,
      arrayAndNested: "Tableaux et objets imbriqués",
      arrayAndNestedExample: `{
  "tags": ["tech", "programmation"],
  "categories": ["{{word.fr}}", "{{word.fr}}"],
  "meta": {
    "views": "{{number}}",
    "likes": "{{number}}"
  }
}`
    },
    initializeFirebase: 'Initialiser Firebase',
  },
  es: {
    title: 'Generador de datos Firestore',
    config: 'Configuración de Firebase',
    fakerDocs: 'Ver documentación de Faker.js',
    connected: 'Conectado',
    notConnected: 'No conectado',
    collectionPath: 'Ruta de colección',
    numDocuments: 'Número de documentos',
    generateData: 'Generar datos',
    insertFirestore: 'Insertar en Firestore',
    tutorial: 'Tutorial',
    template: 'Plantilla',
    preview: 'Vista previa',
    templateHint: 'Haga clic en el botón de plantilla para comenzar rápidamente o siga el tutorial para personalizar su estructura de datos.',
    toast: {
      success: 'Éxito',
      insertSuccess: 'Se agregaron {{count}} documentos a la colección {{path}}',
      generationFailed: 'Falló la generación',
      checkFormat: 'Por favor, revise el formato de la plantilla',
      notInitialized: 'No inicializado',
      initializeFirst: 'Por favor, inicialice Firebase primero',
      missingFields: 'Campos faltantes',
      fillAllFields: 'Por favor, complete todos los campos requeridos',
      firebaseInitialized: 'Firebase inicializado',
      successfullyConnected: 'Conectado a Firebase',
      initializationFailed: 'Falló la inicialización',
      initializationFailedDescription: 'Falló la inicialización de Firebase. Revise su configuración.',
      unknownError: 'Ocurrió un error inesperado. Inténtelo de nuevo.',
      insertionFailed: 'Falló la inserción de los documentos'
    },
    tutorialContent: {
      title: 'Tutorial de plantillas de datos',
      basicTypes: 'Tipos básicos',
      basicTypesExample: `{
  "name": "{{name.es}}", 
  "email": "{{email}}", 
  "age": "{{number}}", 
  "isActive": "{{boolean}}", 
  "createdAt": "{{timestamp}}" 
}`,
      mixedValues: 'Valores fijos y dinámicos',
      mixedValuesExample: `{
  "type": "user",
  "role": "admin",
  "level": 1,
  "name": "{{name.es}}",
  "status": "active"
}`,
      mediaTypes: 'Imágenes y medios',
      mediaTypesExample: `{
  "avatar": "{{avatar}}",
  "cover": "{{image}}",
  "food": "{{image.food}}",
  "nature": "{{image.nature}}"
}`,
      chineseContent: "Contenido español",
      chineseContentExample: `{
  "title": "{{title.es}}",
  "content": "{{paragraph.es}}",
  "company": "{{company.es}}",
  "address": "{{address.es}}"
}`,
      arrayAndNested: "Arrays y objetos anidados",
      arrayAndNestedExample: `{
  "tags": ["tecnología", "programación"],
  "categories": ["{{word.es}}", "{{word.es}}"],
  "meta": {
    "views": "{{number}}",
    "likes": "{{number}}"
  }
}`
    },
    initializeFirebase: 'Inicializar Firebase',
  },
  de: {
    title: 'Firestore Datengenerator',
    config: 'Firebase Konfiguration',
    fakerDocs: 'Faker.js Dokumentation ansehen',
    connected: 'Verbunden',
    notConnected: 'Nicht verbunden',
    collectionPath: 'Kollektionspfad',
    numDocuments: 'Anzahl der Dokumente',
    generateData: 'Daten generieren',
    insertFirestore: 'In Firestore einfügen',
    tutorial: 'Anleitung',
    template: 'Vorlage',
    preview: 'Vorschau',
    templateHint: 'Klicken Sie auf die Schaltfläche Vorlage, um schnell zu beginnen, oder folgen Sie dem Tutorial, um Ihre Datenstruktur anzupassen.',
    toast: {
      success: 'Erfolg',
      insertSuccess: '{{count}} Dokumente wurden zur Sammlung {{path}} hinzugefügt',
      generationFailed: 'Generierung fehlgeschlagen',
      checkFormat: 'Bitte überprüfen Sie das Template-Format',
      notInitialized: 'Nicht initialisiert',
      initializeFirst: 'Bitte initialisieren Sie Firebase zuerst',
      missingFields: 'Fehlende Felder',
      fillAllFields: 'Bitte füllen Sie alle erforderlichen Felder aus',
      firebaseInitialized: 'Firebase initialisiert',
      successfullyConnected: 'Verbunden mit Firebase',
      initializationFailed: 'Initialisierung fehlgeschlagen',
      initializationFailedDescription: 'Firebase-Initialisierung fehlgeschlagen. Bitte überprüfen Sie Ihre Konfiguration.',
      unknownError: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      insertionFailed: 'Dokumente konnten nicht eingefügt werden'
    },
    tutorialContent: {
      title: 'Datenvorlagen-Tutorial',
      basicTypes: 'Grundlegende Datentypen',
      basicTypesExample: `{
  "name": "{{name.de}}", 
  "email": "{{email}}", 
  "age": "{{number}}", 
  "isActive": "{{boolean}}", 
  "createdAt": "{{timestamp}}" 
}`,
      mixedValues: 'Feste und dynamische Werte',
      mixedValuesExample: `{
  "type": "user",
  "role": "admin",
  "level": 1,
  "name": "{{name.de}}",
  "status": "active"
}`,
      mediaTypes: 'Bilder und Medien',
      mediaTypesExample: `{
  "avatar": "{{avatar}}",
  "cover": "{{image}}",
  "food": "{{image.food}}",
  "nature": "{{image.nature}}"
}`,
      chineseContent: "Deutscher Inhalt",
      chineseContentExample: `{
  "title": "{{title.de}}",
  "content": "{{paragraph.de}}",
  "company": "{{company.de}}",
  "address": "{{address.de}}"
}`,
      arrayAndNested: "Arrays und verschachtelte Objekte",
      arrayAndNestedExample: `{
  "tags": ["Technologie", "Programmierung"],
  "categories": ["{{word.de}}", "{{word.de}}"],
  "meta": {
    "views": "{{number}}",
    "likes": "{{number}}"
  }
}`
    },
    initializeFirebase: 'Firebase initialisieren',
  },
  ru: {
    title: 'Генератор данных Firestore',
    config: 'Конфигурация Firebase',
    fakerDocs: 'Просмотреть документацию Faker.js',
    connected: 'Подключено',
    notConnected: 'Не подключено',
    collectionPath: 'Путь коллекции',
    numDocuments: 'Количество документов',
    generateData: 'Создать данные',
    insertFirestore: 'Вставить в Firestore',
    tutorial: 'Руководство',
    template: 'Шаблон',
    preview: 'Предпросмотр',
    templateHint: 'Нажмите кнопку шаблона, чтобы быстро начать, или следуйте руководству, чтобы настроить структуру данных.',
    toast: {
      success: 'Успех',
      insertSuccess: 'Добавлено {{count}} документов в коллекцию {{path}}',
      generationFailed: 'Ошибка генерации',
      checkFormat: 'Пожалуйста, проверьте формат шаблона',
      notInitialized: 'Не инициализировано',
      initializeFirst: 'Пожалуйста, сначала инициализируйте Firebase',
      missingFields: 'Отсутствуют поля',
      fillAllFields: 'Пожалуйста, заполните все обязательные поля',
      firebaseInitialized: 'Firebase инициализирован',
      successfullyConnected: 'Подключено к Firebase',
      initializationFailed: 'Ошибка инициализации',
      initializationFailedDescription: 'Ошибка инициализации Firebase. Пожалуйста, проверьте вашу конфигурацию.',
      unknownError: 'Произошла непредвиденная ошибка. Пожалуйста, повторите попытку.',
      insertionFailed: 'Ошибка вставки документов'
    },
    tutorialContent: {
      title: 'Руководство по шаблонам данных',
      basicTypes: 'Основные типы данных',
      basicTypesExample: `{
  "name": "{{name.ru}}", 
  "email": "{{email}}", 
  "age": "{{number}}", 
  "isActive": "{{boolean}}", 
  "createdAt": "{{timestamp}}" 
}`,
      mixedValues: 'Фиксированные и динамические значения',
      mixedValuesExample: `{
  "type": "user",
  "role": "admin",
  "level": 1,
  "name": "{{name.ru}}",
  "status": "active"
}`,
      mediaTypes: 'Изображения и медиа',
      mediaTypesExample: `{
  "avatar": "{{avatar}}",
  "cover": "{{image}}",
  "food": "{{image.food}}",
  "nature": "{{image.nature}}"
}`,
      chineseContent: "Русский контент",
      chineseContentExample: `{
  "title": "{{title.ru}}",
  "content": "{{paragraph.ru}}",
  "company": "{{company.ru}}",
  "address": "{{address.ru}}"
}`,
      arrayAndNested: "Массивы и вложенные объекты",
      arrayAndNestedExample: `{
  "tags": ["технологии", "программирование"],
  "categories": ["{{word.ru}}", "{{word.ru}}"],
  "meta": {
    "views": "{{number}}",
    "likes": "{{number}}"
  }
}`
    },
    initializeFirebase: 'Инициализировать Firebase',
  }
}
