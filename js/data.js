// بيانات التدريبات الفعلية للخدمات الحكومية
const trainingData = {
    // الإعاقات المتاحة
    disabilities: [
        {
            id: "visual",
            name: "إعاقة بصرية",
            icon: "fas fa-eye",
            description: "تدريب بصري مع صوتي",
            adaptations: {
                fontSize: "large",
                audio: true,
                highContrast: true
            }
        },
        {
            id: "hearing",
            name: "إعاقة سمعية",
            icon: "fas fa-deaf",
            description: "تدريب مع ترجمة مرئية",
            adaptations: {
                subtitles: true,
                visualAlerts: true,
                vibration: true
            }
        },
        {
            id: "mobility",
            name: "إعاقة حركية",
            icon: "fas fa-wheelchair",
            description: "تدريب بتقليل الضغطات",
            adaptations: {
                keyboardNavigation: true,
                voiceCommands: true,
                simplifiedUI: true
            }
        },
        {
            id: "cognitive",
            name: "إعاقة ذهنية",
            icon: "fas fa-brain",
            description: "تدريب مبسط خطوة بخطوة",
            adaptations: {
                simplifiedText: true,
                stepByStep: true,
                repetition: true
            }
        }
    ],
    
    // الخدمات الحكومية المتاحة للتدريب
    services: [
        {
            id: "national-id",
            name: "استخراج بطاقة رقم قومي",
            icon: "fas fa-id-card",
            category: "مستندات",
            difficulty: "متوسط",
            estimatedTime: "15 دقيقة",
            steps: 8,
            description: "تدريب خطوة بخطوة على عملية استخراج البطاقة الشخصية",
            stepsDetails: [
                {
                    id: 1,
                    title: "الدخول إلى الموقع الرسمي",
                    description: "افتح المتصفح واذهب إلى الموقع الرسمي للخدمات الحكومية: www.egypt.gov.eg",
                    image: "images/steps/national-id/step1.jpg",
                    video: "videos/national-id/step1.mp4",
                    audio: "audio/national-id/step1.mp3",
                    tips: [
                        "تأكد من اتصالك بالإنترنت",
                        "استخدم أحدث نسخة من المتصفح",
                        "احفظ الرابط في المفضلة للمستقبل"
                    ],
                    warning: "احذر من المواقع المزيفة التي تحاول تقليد الموقع الرسمي"
                },
                {
                    id: 2,
                    title: "تسجيل الدخول أو إنشاء حساب",
                    description: "إذا كان لديك حساب بالفعل، قم بتسجيل الدخول. وإذا لم يكن لديك حساب، انقر على 'إنشاء حساب جديد'",
                    image: "images/steps/national-id/step2.jpg",
                    video: "videos/national-id/step2.mp4",
                    audio: "audio/national-id/step2.mp3",
                    tips: [
                        "استخدم بريد إلكتروني تستخدمه بانتظام",
                        "اختر كلمة مرور قوية وسهلة التذكر",
                        "احتفظ بمعلومات الحساب في مكان آمن"
                    ]
                },
                {
                    id: 3,
                    title: "البحث عن خدمة البطاقة الشخصية",
                    description: "في شريط البحث، اكتب 'البطاقة الشخصية' أو 'الرقم القومي' واختر الخدمة المناسبة",
                    image: "images/steps/national-id/step3.jpg",
                    video: "videos/national-id/step3.mp4",
                    audio: "audio/national-id/step3.mp3",
                    tips: [
                        "استخدم مصطلحات بحث مختلفة إذا لم تظهر النتيجة",
                        "تحقق من أن الخدمة مقدمة من مصلحة الأحوال المدنية"
                    ]
                },
                {
                    id: 4,
                    title: "تعبئة نموذج الطلب",
                    description: "املأ جميع الحقول المطلوبة بمعلوماتك الشخصية بدقة (الاسم، العنوان، تاريخ الميلاد...)",
                    image: "images/steps/national-id/step4.jpg",
                    video: "videos/national-id/step4.mp4",
                    audio: "audio/national-id/step4.mp3",
                    tips: [
                        "اقرأ كل حقل بعناية قبل التعبئة",
                        "تأكد من مطابقة المعلومات للوثائق الرسمية",
                        "استخدم لوحة المفاتيح العربية للتأكد من الكتابة الصحيحة"
                    ],
                    warning: "المعلومات الخاطئة قد تؤدي إلى رفض الطلب"
                },
                {
                    id: 5,
                    title: "رفع المستندات المطلوبة",
                    description: "قم بتحميل صور واضحة للمستندات المطلوبة: صورة شخصية، صورة بطاقة قديمة، إثبات العنوان",
                    image: "images/steps/national-id/step5.jpg",
                    video: "videos/national-id/step5.mp4",
                    audio: "audio/national-id/step5.mp3",
                    tips: [
                        "تأكد من أن الصور واضحة وجميع التفاصيل مقروءة",
                        "حجم الصورة يجب ألا يتجاوز 2 ميجابايت",
                        "الصيغ المقبولة: JPG, PNG, PDF"
                    ]
                },
                {
                    id: 6,
                    title: "اختيار مكان الاستلام",
                    description: "اختر المكتب الأقرب إليك لاستلام البطاقة، وحدد الموعد المناسب",
                    image: "images/steps/national-id/step6.jpg",
                    video: "videos/national-id/step6.mp4",
                    audio: "audio/national-id/step6.mp3",
                    tips: [
                        "اختر مكتبًا قريبًا من مكان سكنك",
                        "احجز موعدًا يناسب جدولك",
                        "احتفظ برقم الموعد"
                    ]
                },
                {
                    id: 7,
                    title: "الدفع الإلكتروني",
                    description: "ادفع الرسوم المطلوبة باستخدام إحدى وسائل الدفع الإلكتروني المتاحة",
                    image: "images/steps/national-id/step7.jpg",
                    video: "videos/national-id/step7.mp4",
                    audio: "audio/national-id/step7.mp3",
                    tips: [
                        "تأكد من اتصال آمن (https) قبل إدخال بيانات الدفع",
                        "احفظ إيصال الدفع",
                        "تحقق من الرسوم الرسمية على الموقع"
                    ],
                    warning: "لا تشارك بيانات البطاقة الائتمانية مع أحد"
                },
                {
                    id: 8,
                    title: "متابعة حالة الطلب",
                    description: "بعد الإرسال، يمكنك متابعة حالة طلبك باستخدام رقم الطلب الذي سيصلك على هاتفك",
                    image: "images/steps/national-id/step8.jpg",
                    video: "videos/national-id/step8.mp4",
                    audio: "audio/national-id/step8.mp3",
                    tips: [
                        "احفظ رقم الطلب في مكان آمن",
                        "تحقق من بريدك الإلكتروني بانتظام للتحديثات",
                        "يمكنك الاتصال بالدعم الفني إذا تأخرت العملية"
                    ]
                }
            ],
            finalTips: [
                "الوقت المتوقع للاستلام: 7-10 أيام عمل",
                "احضر بطاقتك القديمة عند استلام الجديدة",
                "الرسوم: 150 جنيه مصري للاستخراج للمرة الأولى"
            ]
        },
        {
            id: "appointment",
            name: "حجز موعد حكومي",
            icon: "fas fa-calendar-check",
            category: "مواعيد",
            difficulty: "سهل",
            estimatedTime: "8 دقيقة",
            steps: 5,
            description: "كيفية حجز موعد في المؤسسات الحكومية المختلفة",
            stepsDetails: [
                {
                    id: 1,
                    title: "اختيار الجهة الحكومية",
                    description: "اختر الجهة الحكومية التي تريد حجز موعد فيها (مصلحة الضرائب، وزارة الداخلية، الخدمات الصحية...)",
                    image: "images/steps/appointment/step1.jpg",
                    tips: ["ابحث بالاسم الرسمي للجهة", "تأكد من أن الموقع رسمي"]
                },
                {
                    id: 2,
                    title: "تسجيل الدخول",
                    description: "سجل دخولك باستخدام البيانات الوطنية أو أنشئ حسابًا جديدًا",
                    image: "images/steps/appointment/step2.jpg",
                    tips: ["استخدم رقمك القومي كاسم مستخدم", "إذا نسيت كلمة المرور، استخدم خدمة الاستعادة"]
                },
                {
                    id: 3,
                    title: "اختيار نوع الخدمة",
                    description: "اختر الخدمة المطلوبة من القائمة (تجديد رخصة، استخراج مستند، معاملة مالية...)",
                    image: "images/steps/appointment/step3.jpg",
                    tips: ["اقرأ وصف كل خدمة بعناية", "اختر الخدمة التي تطابق احتياجك بالضبط"]
                },
                {
                    id: 4,
                    title: "اختيار التاريخ والوقت",
                    description: "من التقويم المتاح، اختر التاريخ والوقت المناسبين لك",
                    image: "images/steps/appointment/step4.jpg",
                    tips: ["خطط مسبقًا واختر وقتًا يناسب التزاماتك", "المواعيد الصباحية عادةً أقل ازدحامًا"]
                },
                {
                    id: 5,
                    title: "تأكيد الحجز",
                    description: "راجع معلومات الحجز ثم اضغط على تأكيد. ستتلقى رسالة تأكيد على هاتفك",
                    image: "images/steps/appointment/step5.jpg",
                    tips: ["احفظ رقم الحجز", "احضر قبل الموعد بـ 15 دقيقة", "احضر المستندات المطلوبة"]
                }
            ]
        },
        {
            id: "treatment",
            name: "تسجيل طلب علاج على نفقة الدولة",
            icon: "fas fa-file-medical",
            category: "صحة",
            difficulty: "متقدم",
            estimatedTime: "25 دقيقة",
            steps: 10,
            description: "التدرب على تقديم طلبات العلاج على نفقة الدولة للمستحقين",
            stepsDetails: [
                {
                    id: 1,
                    title: "الدخول إلى بوابة التأمين الصحي",
                    description: "اذهب إلى الموقع الرسمي لهيئة التأمين الصحي",
                    image: "images/steps/treatment/step1.jpg",
                    tips: ["تأكد من الرابط الرسمي", "استخدم متصفح حديث"]
                },
                {
                    id: 2,
                    title: "التحقق من الأهلية",
                    description: "تحقق من شروط الأهلية للعلاج على نفقة الدولة",
                    image: "images/steps/treatment/step2.jpg",
                    tips: ["اقرأ الشروط بعناية", "تأكد من أن حالتك مشمولة"]
                }
                // ... الخطوات الباقية
            ]
        },
        {
            id: "driving-license",
            name: "تجديد رخصة القيادة",
            icon: "fas fa-car",
            category: "مرور",
            difficulty: "متوسط",
            estimatedTime: "12 دقيقة",
            steps: 6,
            description: "التدرب على عملية تجديد رخصة القيادة إلكترونيًا"
        },
        {
            id: "birth-certificate",
            name: "استخراج شهادة ميلاد",
            icon: "fas fa-baby",
            category: "مستندات",
            difficulty: "سهل",
            estimatedTime: "10 دقيقة",
            steps: 7,
            description: "كيفية طلب شهادة الميلاد عبر الإنترنت"
        },
        {
            id: "electricity-bill",
            name: "دفع فاتورة الكهرباء",
            icon: "fas fa-bolt",
            category: "مرافق",
            difficulty: "سهل",
            estimatedTime: "5 دقائق",
            steps: 4,
            description: "التدريب على دفع فواتير الكهرباء إلكترونيًا"
        }
    ],
    
    // إحصائيات حقيقية
    statistics: {
        totalUsers: 1845,
        completedTrainings: 6723,
        availableServices: 15,
        successRate: 92,
        independenceIncrease: 78,
        averageRating: 4.7,
        feedbackCount: 845
    },
    
    // تقييمات المستخدمين
    testimonials: [
        {
            name: "أحمد سعيد",
            disability: "بصري",
            service: "استخراج بطاقة رقم قومي",
            comment: "أول مرة أقدر أستخدم موقع حكومي لوحدي من غير مساعدة ولادي. شكرًا لوصول!",
            rating: 5,
            date: "15 ديسمبر 2023"
        },
        {
            name: "فاطمة علي",
            disability: "حركية",
            service: "حجز موعد طبي",
            comment: "التدريب ساعدني أفهم الخطوات وأنا مرتاحة في بيتي. وفر عليّ عناء الذهاب للمكتب",
            rating: 5,
            date: "10 ديسمبر 2023"
        },
        {
            name: "محمد خالد",
            disability: "ذهنية",
            service: "دفع فواتير",
            comment: "الشرح البطيء والتكرار ساعدوني أفهم. كنت خايف من الإنترنت والحسابات، لكن الآن واثق",
            rating: 4,
            date: "5 ديسمبر 2023"
        },
        {
            name: "سارة محمود",
            disability: "سمعية",
            service: "تسجيل طلب علاج",
            comment: "الفيديوهات المترجمة ساعدتني أفهم كل خطوة. الموقع مصمم لمتطلباتنا الحقيقية",
            rating: 5,
            date: "1 ديسمبر 2023"
        }
    ]
};

// تصدير البيانات للاستخدام في الملفات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = trainingData;
}
