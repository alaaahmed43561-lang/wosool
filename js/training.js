// بيانات التدريب المتطورة
const advancedTrainings = {
    'national-id': {
        title: 'استخراج بطاقة الرقم القومي',
        website: 'https://www.egypt.gov.eg',
        category: 'documents',
        difficulty: 'متوسط',
        estimatedTime: '15 دقيقة',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        resources: [
            {
                type: 'video',
                title: 'فيديو تعليمي كامل',
                url: 'https://youtu.be/example1',
                duration: '8:30'
            },
            {
                type: 'pdf',
                title: 'دليل التدريب خطوة بخطوة',
                url: '#',
                pages: 12
            },
            {
                type: 'link',
                title: 'الأسئلة الشائعة',
                url: '#faq'
            }
        ],
        steps: [
            {
                id: 1,
                title: 'فتح موقع مصر الرقمية',
                description: 'سنتعلم كيفية الوصول للموقع الرسمي للحكومة المصرية للخدمات الإلكترونية.',
                duration: '2 دقائق',
                detailedDescription: `
                    موقع مصر الرقمية (www.egypt.gov.eg) هو البوابة الرئيسية لجميع الخدمات الحكومية الإلكترونية.
                    في هذه الخطوة سوف:
                    1. نتعرف على كيفية الوصول للموقع
                    2. نتعرف على واجهة الموقع الرئيسية
                    3. نتأكد من أننا في الموقع الرسمي الصحيح
                `,
                action: {
                    type: 'open_website',
                    url: 'https://www.egypt.gov.eg',
                    buttonText: 'افتح موقع مصر الرقمية'
                },
                tips: [
                    'تأكد من اتصالك بالإنترنت',
                    'احفظ الرابط في المفضلة للمستقبل',
                    'تأكد من ظهور القفل الأخضر في المتصفح (HTTPS)',
                    'إذا ظهر تحذير أمان، اضغط على "متابعة إلى الموقع"'
                ],
                warnings: [
                    'احذر من المواقع المماثلة غير الرسمية',
                    'لا تدخل أي بيانات شخصية في مواقع غير موثوقة'
                ],
                audioText: 'الخطوة الأولى: افتح موقع مصر الرقمية. اضغط على الزر لفتح الموقع الرسمي. تأكد من ظهور القفل الأخضر في المتصفح.'
            },
            {
                id: 2,
                title: 'تسجيل الدخول',
                description: 'سنتعلم كيفية التسجيل في الموقع باستخدام البيانات الوطنية.',
                duration: '3 دقائق',
                detailedDescription: `
                    لتتمكن من استخدام الخدمات الإلكترونية، تحتاج إلى حساب على الموقع.
                    خطوات التسجيل:
                    1. ابحث عن زر "تسجيل الدخول" في الزاوية العليا
                    2. اضغط على الزر لفتح صفحة التسجيل
                    3. أدخل الرقم القومي في الحقل الأول
                    4. أدخل كلمة المرور في الحقل الثاني
                `,
                tips: [
                    'إذا نسيت كلمة المرور، اضغط على "نسيت كلمة المرور"',
                    'تأكد من كتابة الرقم القومي بشكل صحيح (14 رقماً)',
                    'كلمة المرور حساسة لحالة الأحرف (كبير/صغير)',
                    'يمكنك استخدام خاصية "تذكرني" لتسجيل الدخول تلقائياً'
                ],
                audioText: 'الخطوة الثانية: سجل الدخول. ابحث عن زر تسجيل الدخول في أعلى الموقع. اضغط عليه ثم أدخل رقمك القومي وكلمة المرور.'
            },
            {
                id: 3,
                title: 'البحث عن خدمة البطاقة الشخصية',
                description: 'سنتعلم كيفية البحث عن الخدمة المطلوبة في الموقع.',
                duration: '2 دقيقة',
                detailedDescription: `
                    يحتوي الموقع على العشرات من الخدمات، لذلك سنتعلم كيفية البحث عن الخدمة المطلوبة.
                    طرق البحث:
                    1. استخدام شريط البحث في أعلى الصفحة
                    2. التصفح عبر الأقسام الرئيسية
                    3. استخدام قائمة الخدمات الشائعة
                `,
                action: {
                    type: 'search',
                    searchTerm: 'البطاقة الشخصية',
                    instruction: 'اكتب "البطاقة الشخصية" في شريط البحث واضغط Enter'
                },
                tips: [
                    'يمكنك البحث باستخدام مصطلحات مختلفة: "الرقم القومي"، "الهوية"',
                    'تحقق من أن الخدمة مقدمة من مصلحة الأحوال المدنية',
                    'اقرأ وصف الخدمة بعناية قبل البدء',
                    'يمكنك حفظ الخدمة في المفضلة للوصول السريع'
                ],
                audioText: 'الخطوة الثالثة: ابحث عن خدمة البطاقة الشخصية. اكتب في شريط البحث: البطاقة الشخصية. ثم اضغط إنتر.'
            },
            {
                id: 4,
                title: 'بدء طلب جديد',
                description: 'سنتعلم كيفية بدء طلب استخراج بطاقة جديدة.',
                duration: '2 دقيقة',
                detailedDescription: `
                    بعد العثور على الخدمة، سنبدأ في تقديم الطلب.
                    خطوات بدء الطلب:
                    1. اضغط على زر "ابدأ الخدمة" أو "تقديم طلب جديد"
                    2. اقرأ الشروط والأحكام
                    3. اضغط على "موافق" للموافقة على الشروط
                    4. انتقل إلى صفحة تعبئة البيانات
                `,
                tips: [
                    'اقرأ الشروط والأحكام بعناية',
                    'تأكد من استيفائك للشروط المطلوبة',
                    'احفظ رقم الطلب للمتابعة لاحقاً',
                    'يمكنك إيقاف الطلب والعودة إليه لاحقاً'
                ],
                audioText: 'الخطوة الرابعة: ابدأ طلب جديد. اضغط على زر "ابدأ الخدمة". اقرأ الشروط ثم اضغط موافق.'
            },
            {
                id: 5,
                title: 'تعبئة البيانات الشخصية',
                description: 'سنتعلم كيفية تعبئة النموذج الإلكتروني بالبيانات المطلوبة.',
                duration: '4 دقائق',
                detailedDescription: `
                    هذه أهم خطوة في العملية، حيث سنقوم بتعبئة جميع البيانات المطلوبة.
                    البيانات المطلوبة عادة:
                    1. الاسم الرباعي (كما في البطاقة القديمة)
                    2. تاريخ ومحل الميلاد
                    3. العنوان الحالي بالتفصيل
                    4. البيانات الوظيفية
                    5. معلومات الاتصال
                `,
                tips: [
                    'تأكد من مطابقة البيانات للوثائق الرسمية',
                    'اكتب العنوان بالكامل دون اختصارات',
                    'استخدم لوحة المفاتيح العربية للتأكد من الكتابة الصحيحة',
                    'يمكنك حفظ البيانات لاستخدامها في طلبات لاحقة'
                ],
                audioText: 'الخطوة الخامسة: املأ البيانات الشخصية. أدخل بياناتك بدقة كما في البطاقة القديمة. تأكد من صحة كل حقل.'
            },
            {
                id: 6,
                title: 'رفع المستندات المطلوبة',
                description: 'سنتعلم كيفية رفع صور المستندات المطلوبة.',
                duration: '2 دقائق',
                detailedDescription: `
                    تحتاج معظم الخدمات إلى مستندات مرفقة.
                    المستندات المطلوبة عادة:
                    1. صورة شخصية حديثة
                    2. صورة البطاقة القديمة (إن وجدت)
                    3. إثبات العنوان
                    4. أي مستندات إضافية حسب الحالة
                `,
                action: {
                    type: 'upload',
                    instruction: 'اضغط على زر "رفع ملف" واختر الصور المطلوبة'
                },
                tips: [
                    'تأكد من وضوح الصور وجميع التفاصيل مقروءة',
                    'حجم الصورة لا يجب أن يتجاوز 2 ميجابايت',
                    'الصيغ المقبولة: JPG, PNG, PDF',
                    'يمكنك استخدام تطبيق تعديل الصور إذا لزم الأمر'
                ],
                audioText: 'الخطوة السادسة: ارفع المستندات المطلوبة. اضغط على زر رفع الملف واختر الصور. تأكد من وضوحها.'
            },
            {
                id: 7,
                title: 'اختيار مكان الاستلام',
                description: 'سنتعلم كيفية اختيار أقرب مكتب لاستلام البطاقة.',
                duration: '1 دقيقة',
                detailedDescription: `
                    بعد تقديم الطلب، تحتاج لاختيار مكان استلام البطاقة.
                    خطوات اختيار المكان:
                    1. اختر المحافظة
                    2. اختر المركز أو المكتب التابع له
                    3. اختر التاريخ المناسب
                    4. اختر الوقت المناسب
                `,
                tips: [
                    'اختر أقرب مكتب لمنزلك أو عملك',
                    'احجز موعداً في وقت يناسب جدولك',
                    'احفظ رقم الموعد وتفاصيله',
                    'يمكنك تغيير الموعد لاحقاً إذا لزم الأمر'
                ],
                audioText: 'الخطوة السابعة: اختر مكان الاستلام. اختر المكتب الأقرب إليك وحدد موعداً مناسباً.'
            },
            {
                id: 8,
                title: 'الدفع الإلكتروني',
                description: 'سنتعلم كيفية دفع الرسوم إلكترونياً.',
                duration: '3 دقائق',
                detailedDescription: `
                    معظم الخدمات الحكومية تتطلب دفع رسوم.
                    طرق الدفع المتاحة:
                    1. البطاقات الائتمانية (فيزا/ماستركارد)
                    2. المحافظ الإلكترونية
                    3. الدفع عند الاستلام (في بعض الحالات)
                `,
                action: {
                    type: 'payment',
                    instruction: 'اضغط على "الدفع الإلكتروني" واتبع التعليمات'
                },
                tips: [
                    'تأكد من اتصال آمن (HTTPS) قبل إدخال بيانات الدفع',
                    'احفظ إيصال الدفع',
                    'تحقق من الرسوم الرسمية على الموقع',
                    'لا تشارك بيانات البطاقة الائتمانية مع أحد'
                ],
                warnings: [
                    'لا تستخدم شبكات WiFi عامة للدفع الإلكتروني',
                    'احذر من المواقع التي تطلب بيانات بطاقتك كاملة'
                ],
                audioText: 'الخطوة الثامنة: ادفع الرسوم. اختر وسيلة الدفع المناسبة. أدخل بيانات الدفع بدقة. احفظ الإيصال.'
            }
        ]
    },
    
    'electricity': {
        title: 'دفع فاتورة الكهرباء',
        website: 'https://epay.eehc.gov.eg',
        category: 'payments',
        difficulty: 'سهل',
        estimatedTime: '10 دقائق',
        steps: [
            {
                id: 1,
                title: 'فتح موقع شركة الكهرباء',
                description: 'سنتعلم كيفية الوصول لموقع الدفع الإلكتروني للكهرباء.',
                duration: '1 دقيقة',
                action: {
                    type: 'open_website',
                    url: 'https://epay.eehc.gov.eg',
                    buttonText: 'افتح موقع الكهرباء'
                },
                audioText: 'افتح موقع شركة الكهرباء للدفع الإلكتروني.'
            },
            {
                id: 2,
                title: 'إدخال رقم العداد',
                description: 'سنتعلم كيفية إدخال رقم عداد الكهرباء.',
                duration: '2 دقيقة',
                audioText: 'أدخل رقم العداد الموجود في الفاتورة.'
            },
            {
                id: 3,
                title: 'التحقق من المبلغ',
                description: 'سنتعلم كيفية التحقق من صحة المبلغ المستحق.',
                duration: '2 دقيقة',
                audioText: 'تأكد من صحة المبلغ المطلوب للدفع.'
            },
            {
                id: 4,
                title: 'إتمام عملية الدفع',
                description: 'سنتعلم كيفية إكمال عملية الدفع الإلكتروني.',
                duration: '3 دقائق',
                audioText: 'ادفع المبلغ باستخدام بطاقتك الائتمانية أو المحفظة الإلكترونية.'
            },
            {
                id: 5,
                title: 'تحميل الإيصال',
                description: 'سنتعلم كيفية تحميل وإرسال إيصال الدفع.',
                duration: '2 دقيقة',
                audioText: 'احفظ إيصال الدفع وأرسله إلى بريدك الإلكتروني.'
            }
        ]
    },
    
    'medical-appointment': {
        title: 'حجز موعد طبي حكومي',
        website: 'https://www.mohp.gov.eg',
        category: 'health',
        difficulty: 'متوسط',
        estimatedTime: '12 دقيقة',
        steps: [
            {
                id: 1,
                title: 'فتح موقع وزارة الصحة',
                description: 'سنتعلم كيفية الوصول لنظام حجز المواعيد الطبية.',
                duration: '1 دقيقة',
                action: {
                    type: 'open_website',
                    url: 'https://www.mohp.gov.eg',
                    buttonText: 'افتح موقع وزارة الصحة'
                },
                audioText: 'افتح موقع وزارة الصحة لحجز المواعيد.'
            }
        ]
    },
    
    'birth-registration': {
        title: 'تسجيل مولود جديد',
        website: 'https://www.egypt.gov.eg',
        category: 'documents',
        difficulty: 'متقدم',
        estimatedTime: '18 دقيقة'
    },
    
    'driving-license': {
        title: 'تجديد رخصة القيادة',
        website: 'https://www.moi.gov.eg',
        category: 'documents',
        difficulty: 'متوسط',
        estimatedTime: '20 دقيقة'
    },
    
    'property-tax': {
        title: 'دفع الضرائب العقارية',
        website: 'https://www.mof.gov.eg',
        category: 'payments',
        difficulty: 'متقدم',
        estimatedTime: '15 دقيقة'
    },
    
    'pension-inquiry': {
        title: 'الاستعلام عن المعاش',
        website: 'https://www.moss.gov.eg',
        category: 'other',
        difficulty: 'سهل',
        estimatedTime: '8 دقائق'
    },
    
    'university-application': {
        title: 'التقديم الإلكتروني للجامعات',
        website: 'https://www.tansik.egypt.gov.eg',
        category: 'education',
        difficulty: 'متقدم',
        estimatedTime: '25 دقيقة'
    }
};

// حالة التطبيق
let currentTraining = null;
let currentStepIndex = 0;
let userCategory = null;
let userProgress = {};
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 مركز التدريب - جاهز للعمل');
    
    // تهيئة بيانات المستخدم
    initUserData();
    
    // إعداد الفئات
    setupCategories();
    
    // إعداد الفلترة
    setupFiltering();
    
    // إعداد أزرار التدريب
    setupTrainingButtons();
    
    // إعداد محاكي التدريب
    setupTrainingSimulator();
    
    // إعداد المساعد الصوتي
    initSpeechSynthesis();
    
    // إظهار رسالة ترحيب
    setTimeout(() => {
        showNotification('مرحباً بك في مركز التدريب العملي! اختر فئتك لبدء التدريب');
    }, 1500);
});

// تهيئة بيانات المستخدم
function initUserData() {
    if (localStorage.getItem('wosoolUserProgress')) {
        userProgress = JSON.parse(localStorage.getItem('wosoolUserProgress'));
        updateProgressDisplay();
    } else {
        userProgress = {
            completedTrainings: [],
            currentProgress: {},
            achievements: ['بدأت التدريب'],
            totalTime: 0
        };
        localStorage.setItem('wosoolUserProgress', JSON.stringify(userProgress));
    }
}

// تحديث عرض التقدم
function updateProgressDisplay() {
    const totalTrainings = Object.keys(advancedTrainings).length;
    const completed = userProgress.completedTrainings.length;
    const progress = totalTrainings > 0 ? Math.round((completed / totalTrainings) * 100) : 0;
    
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    document.querySelector('#progress-text').textContent = `${progress}% مكتمل`;
    document.querySelector('.progress-circle span').textContent = `${progress}%`;
    document.querySelector('.progress-circle').style.background = 
        `conic-gradient(var(--secondary-color) ${progress}%, var(--dark-gray) 0)`;
}

// إعداد الفئات
function setupCategories() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // إزالة التحديد السابق
            categoryCards.forEach(c => c.classList.remove('selected'));
            
            // تحديد الجديد
            this.classList.add('selected');
            userCategory = this.getAttribute('data-category');
            
            // تطبيق التكيفات
            applyCategoryAdaptations(userCategory);
            
            // إظهار رسالة
            const categoryName = this.querySelector('h3').textContent;
            showNotification(`تم اختيار فئة: ${categoryName}. يمكنك الآن اختيار خدمة للتدريب`);
            
            // حفظ الاختيار
            userProgress.userCategory = userCategory;
            localStorage.setItem('wosoolUserProgress', JSON.stringify(userProgress));
            
            // التمرير للخدمات
            document.querySelector('.services-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// تطبيق تكيفات الفئة
function applyCategoryAdaptations(category) {
    const body = document.body;
    
    // إزالة التكيفات السابقة
    body.classList.remove(
        'visual-mode', 'hearing-mode', 'mobility-mode',
        'cognitive-mode', 'elderly-mode', 'illiterate-mode'
    );
    
    // تطبيق التكيفات الجديدة
    switch(category) {
        case 'visual':
            body.classList.add('visual-mode');
            body.style.fontSize = '18px';
            break;
            
        case 'hearing':
            body.classList.add('hearing-mode');
            // إظهار ترجمات نصية
            break;
            
        case 'mobility':
            body.classList.add('mobility-mode');
            setupKeyboardNavigation();
            break;
            
        case 'cognitive':
            body.classList.add('cognitive-mode');
            body.style.fontSize = '20px';
            simplifyInterface();
            break;
            
        case 'elderly':
            body.classList.add('elderly-mode');
            body.style.fontSize = '20px';
            increaseContrast();
            break;
            
        case 'illiterate':
            body.classList.add('illiterate-mode');
            body.style.fontSize = '22px';
            simplifyInterface();
            increaseContrast();
            break;
    }
}

// إعداد الفلترة
function setupFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // تحديث الأزرار النشطة
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // فلترة الخدمات
            serviceCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// إعداد أزرار التدريب
function setupTrainingButtons() {
    const buttons = document.querySelectorAll('.start-training-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!userCategory) {
                showNotification('⚠️ من فضلك اختر فئتك أولاً من الأعلى');
                document.querySelector('.category-selection').scrollIntoView({ 
                    behavior: 'smooth' 
                });
                return;
            }
            
            const serviceId = this.getAttribute('data-service');
            startTraining(serviceId);
        });
    });
}

// بدء التدريب
function startTraining(serviceId) {
    if (!advancedTrainings[serviceId]) {
        showNotification('🚫 هذه الخدمة غير متاحة حالياً');
        return;
    }
    
    currentTraining = advancedTrainings[serviceId];
    currentStepIndex = 0;
    
    // تحديث الواجهة
    document.getElementById('training-title').textContent = currentTraining.title;
    document.getElementById('total-steps').textContent = currentTraining.steps.length;
    
    // إظهار المحاكي وإخفاء المحتوى الآخر
    document.getElementById('training-simulator').classList.remove('hidden');
    document.querySelector('.category-selection').style.display = 'none';
    document.querySelector('.services-section').style.display = 'none';
    
    // تحميل الخطوة الأولى
    loadStep(currentStepIndex);
    
    // تحديث قائمة الخطوات
    updateStepsList();
    
    // تحديث مصادر التعلم
    updateLearningResources();
    
    // إشعار البدء
    showNotification(`🎬 بدء تدريب "${currentTraining.title}"`);
    
    // فتح الموقع الحكومي
    setTimeout(() => {
        if (currentTraining.website) {
            window.open(currentTraining.website, '_blank', 'width=1200,height=700,scrollbars=yes');
            showNotification('🌐 تم فتح الموقع الحكومي في نافذة جديدة');
        }
    }, 1000);
    
    // بدء تتبع الوقت
    startTimeTracking(serviceId);
}

// تحميل خطوة
function loadStep(stepIndex) {
    if (!currentTraining || !currentTraining.steps[stepIndex]) {
        return;
    }
    
    const step = currentTraining.steps[stepIndex];
    
    // تحديث العداد
    document.getElementById('current-step').textContent = step.id;
    
    // تحديث المحتوى
    document.getElementById('step-title').textContent = step.title;
    document.getElementById('step-description').textContent = step.description;
    
    // تحديث الوصف المفصل
    if (step.detailedDescription) {
        const detailedSteps = document.getElementById('detailed-steps');
        detailedSteps.innerHTML = '';
        
        const lines = step.detailedDescription.trim().split('\n');
        lines.forEach(line => {
            if (line.trim()) {
                const li = document.createElement('li');
                li.textContent = line.trim().replace(/^\d+\.\s*/, '');
                detailedSteps.appendChild(li);
            }
        });
    }
    
    // تحديث النص الصوتي
    if (step.audioText) {
        document.getElementById('audio-text').textContent = step.audioText;
    }
    
    // تحديث الرابط
    const linkBtn = document.getElementById('open-website-btn');
    if (step.action && step.action.url) {
        linkBtn.href = step.action.url;
        linkBtn.textContent = step.action.buttonText || 'افتح الموقع';
        linkBtn.style.display = 'flex';
    } else if (currentTraining.website) {
        linkBtn.href = currentTraining.website;
        linkBtn.textContent = `افتح ${currentTraining.title}`;
        linkBtn.style.display = 'flex';
    } else {
        linkBtn.style.display = 'none';
    }
    
    // تحديث النصائح
    const tipsList = document.getElementById('step-tips-list');
    tipsList.innerHTML = '';
    
    if (step.tips) {
        step.tips.forEach(tip => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${tip}`;
            tipsList.appendChild(li);
        });
    }
    
    if (step.warnings) {
        step.warnings.forEach(warning => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${warning}`;
            tipsList.appendChild(li);
        });
    }
    
    // تحديث مؤقت الخطوة
    if (step.duration) {
        document.querySelector('.step-timer span').textContent = `الوقت المقدر: ${step.duration}`;
    }
    
    // تحديث تقدم الشريط
    const progress = ((stepIndex + 1) / currentTraining.steps.length) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${Math.round(progress)}% مكتمل`;
    
    // تحديث حالة الخطوة في القائمة
    updateStepStatus(stepIndex);
    
    // قراءة الشرح تلقائياً
    setTimeout(() => {
        readStep(step);
    }, 800);
}

// تحديث قائمة الخطوات
function updateStepsList() {
    const stepsList = document.getElementById('steps-list');
    stepsList.innerHTML = '';
    
    currentTraining.steps.forEach((step, index) => {
        const stepItem = document.createElement('div');
        stepItem.className = 'step-item';
        if (index === currentStepIndex) {
            stepItem.classList.add('active');
        }
        if (index < currentStepIndex) {
            stepItem.classList.add('completed');
        }
        
        stepItem.innerHTML = `
            <div class="step-number">
                <span>${step.id}</span>
                ${index < currentStepIndex ? '<i class="fas fa-check"></i>' : ''}
            </div>
            <div class="step-title">${step.title}</div>
        `;
        
        stepItem.addEventListener('click', () => {
            if (index <= currentStepIndex) {
                currentStepIndex = index;
                loadStep(currentStepIndex);
            }
        });
        
        stepsList.appendChild(stepItem);
    });
}

// تحديث حالة الخطوة
function updateStepStatus(stepIndex) {
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item, index) => {
        item.classList.remove('active', 'completed');
        if (index === stepIndex) {
            item.classList.add('active');
        } else if (index < stepIndex) {
            item.classList.add('completed');
        }
    });
}

// تحديث مصادر التعلم
function updateLearningResources() {
    if (currentTraining.resources) {
        const resourcesList = document.querySelector('.resources-list');
        resourcesList.innerHTML = '';
        
        currentTraining.resources.forEach(resource => {
            const link = document.createElement('a');
            link.href = resource.url;
            link.className = 'resource-link';
            link.target = '_blank';
            
            let icon = 'fas fa-link';
            if (resource.type === 'video') icon = 'fab fa-youtube';
            if (resource.type === 'pdf') icon = 'fas fa-file-pdf';
            if (resource.type === 'faq') icon = 'fas fa-question';
            
            link.innerHTML = `<i class="${icon}"></i> ${resource.title}`;
            
            if (resource.duration) {
                link.innerHTML += ` <span class="resource-meta">(${resource.duration})</span>`;
            }
            
            resourcesList.appendChild(link);
        });
    }
}

// قراءة الخطوة بالصوت
function readStep(step) {
    if (!('speechSynthesis' in window)) {
        showNotification('🔇 المتصفح لا يدعم القراءة الصوتية. ننصح باستخدام Chrome أو Edge');
        return;
    }
    
    // إيقاف أي قراءة سابقة
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    // النص للقراءة
    const text = step.audioText || step.description;
    currentUtterance = new SpeechSynthesisUtterance(text);
    
    // إعدادات الصوت
    currentUtterance.lang = 'ar-SA';
    currentUtterance.rate = parseFloat(document.getElementById('speech-speed').value) || 0.9;
    currentUtterance.pitch = 1;
    currentUtterance.volume = 1;
    
    // اختيار صوت عربي
    const voices = speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) {
        currentUtterance.voice = arabicVoice;
    }
    
    // إعدادات خاصة بالفئة
    if (userCategory === 'elderly' || userCategory === 'cognitive') {
        currentUtterance.rate = 0.7; // أبطأ لكبار السن
    }
    
    // البدء في القراءة
    speechSynthesis.speak(currentUtterance);
    showNotification('🔊 جاري قراءة شرح الخطوة...');
    
    // تحديث حالة أزرار الصوت
    currentUtterance.onend = function() {
        console.log('✅ انتهت القراءة الصوتية');
    };
}

// إعداد محاكي التدريب
function setupTrainingSimulator() {
    // أزرار التنقل
    document.getElementById('prev-step').addEventListener('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            loadStep(currentStepIndex);
            showNotification('↩️ العودة للخطوة السابقة');
        }
    });
    
    document.getElementById('next-step').addEventListener('click', () => {
        if (currentTraining && currentStepIndex < currentTraining.steps.length - 1) {
            currentStepIndex++;
            loadStep(currentStepIndex);
            showNotification('↪️ الانتقال للخطوة التالية');
        } else {
            completeTraining();
        }
    });
    
    // علام كمكتملة
    document.getElementById('mark-complete').addEventListener('click', () => {
        if (currentTraining && currentTraining.steps[currentStepIndex]) {
            markStepAsComplete();
        }
    });
    
    // إنهاء التدريب
    document.getElementById('finish-training').addEventListener('click', completeTraining);
    
    // الخروج من التدريب
    document.getElementById('exit-training').addEventListener('click', exitTraining);
    
    // المساعدة
    document.getElementById('help-btn').addEventListener('click', showHelp);
    
    // أزرار الصوت
    document.getElementById('play-audio').addEventListener('click', () => {
        if (currentTraining && currentTraining.steps[currentStepIndex]) {
            readStep(currentTraining.steps[currentStepIndex]);
        }
    });
    
    document.getElementById('pause-audio').addEventListener('click', () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.pause();
            showNotification('⏸️ تم إيقاف القراءة مؤقتاً');
        }
    });
    
    document.getElementById('repeat-audio').addEventListener('click', () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        setTimeout(() => {
            if (currentTraining && currentTraining.steps[currentStepIndex]) {
                readStep(currentTraining.steps[currentStepIndex]);
            }
        }, 300);
    });
    
    // سرعة القراءة
    document.getElementById('speech-speed').addEventListener('change', function() {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
            setTimeout(() => {
                if (currentTraining && currentTraining.steps[currentStepIndex]) {
                    readStep(currentTraining.steps[currentStepIndex]);
                }
            }, 300);
        }
    });
    
    // تشغيل الفيديو
    document.getElementById('play-video').addEventListener('click', () => {
        const videoModal = document.getElementById('video-modal');
        const videoFrame = document.getElementById('training-video');
        
        if (currentTraining.videoUrl) {
            videoFrame.src = currentTraining.videoUrl;
        }
        
        videoModal.classList.remove('hidden');
    });
    
    // إغلاق النماذج
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').classList.add('hidden');
            const videoFrame = document.getElementById('training-video');
            videoFrame.src = '';
        });
    });
    
    // النقر خارج النموذج لإغلاقه
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                const videoFrame = document.getElementById('training-video');
                videoFrame.src = '';
            }
        });
    });
    
    // تحميل الدليل
    document.getElementById('download-guide').addEventListener('click', downloadGuide);
    
    // وضع التمرين
    document.getElementById('practice-mode').addEventListener('click', enablePracticeMode);
    
    // الأسئلة الشائعة
    document.getElementById('faq-link').addEventListener('click', showFAQ);
}

// علام الخطوة كمكتملة
function markStepAsComplete() {
    const step = currentTraining.steps[currentStepIndex];
    const stepItem = document.querySelectorAll('.step-item')[currentStepIndex];
    
    stepItem.classList.add('completed');
    
    // حفظ التقدم
    if (!userProgress.currentProgress[currentTraining.title]) {
        userProgress.currentProgress[currentTraining.title] = [];
    }
    
    if (!userProgress.currentProgress[currentTraining.title].includes(step.id)) {
        userProgress.currentProgress[currentTraining.title].push(step.id);
        localStorage.setItem('wosoolUserProgress', JSON.stringify(userProgress));
    }
    
    showNotification(`✅ تم تعليم الخطوة ${step.id} كمكتملة`);
    
    // الانتقال التلقائي للخطوة التالية بعد 2 ثانية
    setTimeout(() => {
        if (currentStepIndex < currentTraining.steps.length - 1) {
            currentStepIndex++;
            loadStep(currentStepIndex);
        }
    }, 2000);
}

// إكمال التدريب
function completeTraining() {
    if (!currentTraining) return;
    
    // إيقاف القراءة الصوتية
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    // حفظ التقدم
    if (!userProgress.completedTrainings.includes(currentTraining.title)) {
        userProgress.completedTrainings.push(currentTraining.title);
        userProgress.achievements.push(`أكملت تدريب ${currentTraining.title}`);
        localStorage.setItem('wosoolUserProgress', JSON.stringify(userProgress));
    }
    
    // تحديث عرض التقدم
    updateProgressDisplay();
    
    // إظهار شهادة الإنجاز
    showCertificate();
    
    // رسالة النجاح
    showNotification(`🎉 تهانينا! لقد أكملت تدريب "${currentTraining.title}" بنجاح`);
}

// إظهار شهادة الإنجاز
function showCertificate() {
    const certificateModal = document.getElementById('certificate-modal');
    const certificateTitle = document.getElementById('certificate-title');
    const userName = document.getElementById('user-name');
    const completionDate = document.getElementById('completion-date');
    const certificateId = document.getElementById('certificate-id');
    
    // تعبئة البيانات
    certificateTitle.textContent = currentTraining.title;
    userName.textContent = 'المتدرب الكريم'; // يمكن استبدالها باسم المستخدم الحقيقي
    completionDate.textContent = new Date().toLocaleDateString('ar-EG');
    certificateId.textContent = `WS-${Date.now().toString().slice(-6)}`;
    
    // إظهار الشهادة
    certificateModal.classList.remove('hidden');
    
    // إعداد زر التحميل
    document.getElementById('download-certificate').addEventListener('click', downloadCertificate);
    
    // إعداد زر المشاركة
    document.getElementById('share-certificate').addEventListener('click', shareCertificate);
}

// تحميل الشهادة
function downloadCertificate() {
    // في الحقيقة، هنا سنستخدم مكتبة مثل html2canvas لالتقاط صورة للشهادة
    showNotification('⏳ جاري تحضير الشهادة للتحميل...');
    
    // محاكاة عملية التحميل
    setTimeout(() => {
        showNotification('✅ تم تحميل شهادة الإنجاز بنجاح');
    }, 2000);
}

// مشاركة الشهادة
function shareCertificate() {
    if (navigator.share) {
        navigator.share({
            title: `شهادة إنجاز - ${currentTraining.title}`,
            text: `لقد أكملت تدريب ${currentTraining.title} بنجاح عبر منصة "وصول"`,
            url: window.location.href
        });
    } else {
        showNotification('📋 تم نسخ رابط الشهادة للحافظة');
        // نسخ الرابط للحافظة
        navigator.clipboard.writeText(window.location.href);
    }
}

// الخروج من التدريب
function exitTraining() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    // إخفاء المحاكي
    document.getElementById('training-simulator').classList.add('hidden');
    
    // إظهار المحتوى الرئيسي
    document.querySelector('.category-selection').style.display = 'block';
    document.querySelector('.services-section').style.display = 'block';
    
    // العودة للأعلى
    document.querySelector('.category-selection').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // إعادة تعيين المتغيرات
    currentTraining = null;
    currentStepIndex = 0;
    
    showNotification('👋 تم الخروج من التدريب. يمكنك اختيار خدمة أخرى');
}

// عرض المساعدة
function showHelp() {
    const helpMessage = `
        <strong>كيفية استخدام محاكي التدريب:</strong><br>
        1. استمع للشرح الصوتي لكل خطوة<br>
        2. افتح الموقع الحكومي في النافذة الجديدة<br>
        3. اتبع التعليمات خطوة بخطوة<br>
        4. استخدم مصادر التعلم الإضافية<br>
        5. احفظ تقدمك للعودة لاحقاً<br><br>
        <strong>للحصول على مساعدة فورية:</strong><br>
        - اتصل بالدعم الفني: 16481<br>
        - راسلنا على: support@wosool.gov.eg
    `;
    
    alert(helpMessage);
}

// تحميل الدليل
function downloadGuide() {
    showNotification('⏳ جاري تحميل دليل التدريب...');
    
    // محاكاة عملية التحميل
    setTimeout(() => {
        showNotification('✅ تم تحميل الدليل بنجاح');
        
        // إنشاء محتوى PDF وهمي
        const guideContent = `
            دليل التدريب: ${currentTraining.title}
            ================================
            
            ${currentTraining.steps.map(step => `
            الخطوة ${step.id}: ${step.title}
            -----------------------------
            ${step.description}
            
            ${step.tips ? `نصائح: ${step.tips.join('\n')}` : ''}
            
            ${step.warnings ? `تحذيرات: ${step.warnings.join('\n')}` : ''}
            `).join('\n\n')}
            
            تم الإنشاء عبر منصة "وصول" - ${new Date().toLocaleDateString('ar-EG')}
        `;
        
        // إنشاء ملف وهمي للتحميل
        const blob = new Blob([guideContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `دليل_${currentTraining.title.replace(/\s+/g, '_')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 1000);
}

// تفعيل وضع التمرين
function enablePracticeMode() {
    showNotification('🔄 تم تفعيل وضع التمرين: يمكنك تكرار الخطوات عدة مرات');
    
    // إضافة خاصية التكرار
    const repeatBtn = document.createElement('button');
    repeatBtn.className = 'audio-btn';
    repeatBtn.innerHTML = '<i class="fas fa-sync-alt"></i> كرر هذه الخطوة';
    repeatBtn.style.marginTop = '10px';
    repeatBtn.style.width = '100%';
    
    repeatBtn.addEventListener('click', () => {
        if (currentTraining && currentTraining.steps[currentStepIndex]) {
            readStep(currentTraining.steps[currentStepIndex]);
        }
    });
    
    const audioControls = document.querySelector('.audio-controls');
    if (!document.getElementById('repeat-step-btn')) {
        repeatBtn.id = 'repeat-step-btn';
        audioControls.appendChild(repeatBtn);
    }
}

// عرض الأسئلة الشائعة
function showFAQ() {
    const faqContent = `
        <div class="faq-modal">
            <h3><i class="fas fa-question-circle"></i> الأسئلة الشائعة - ${currentTraining.title}</h3>
            
            <div class="faq-item">
                <h4>ماذا أفعل إذا لم يفتح الموقع الحكومي؟</h4>
                <p>تأكد من اتصالك بالإنترنت، وجرب تحديث الصفحة. إذا استمرت المشكلة، اتصل بالدعم الفني.</p>
            </div>
            
            <div class="faq-item">
                <h4>كم مرة يمكنني تكرار التدريب؟</h4>
                <p>يمكنك تكرار التدريب عدد غير محدود من المرات، حتى تشعر بالثقة الكافية.</p>
            </div>
            
            <div class="faq-item">
                <h4>هل يمكنني العودة للخطوة السابقة؟</h4>
                <p>نعم، استخدم زر "السابق" للعودة لأي خطوة، أو اخترها مباشرة من قائمة الخطوات.</p>
            </div>
            
            <div class="faq-item">
                <h4>ماذا لو واجهت مشكلة في الخطوة؟</h4>
                <p>استخدم زر "مساعدة" أو اتصل بالدعم الفني على الرقم 16481.</p>
            </div>
            
            <div class="faq-item">
                <h4>هل يمكنني حفظ تقدمي والعودة لاحقاً؟</h4>
                <p>نعم، يتم حفظ تقدمك تلقائياً. يمكنك العودة لاحقاً من حيث توقفت.</p>
            </div>
        </div>
    `;
    
    // إنشاء نافذة FAQ
    const faqModal = document.createElement('div');
    faqModal.className = 'modal';
    faqModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            ${faqContent}
        </div>
    `;
    
    document.body.appendChild(faqModal);
    faqModal.classList.remove('hidden');
    
    // إغلاق النافذة
    faqModal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(faqModal);
    });
    
    faqModal.addEventListener('click', (e) => {
        if (e.target === faqModal) {
            document.body.removeChild(faqModal);
        }
    });
}

// بدء تتبع الوقت
function startTimeTracking(serviceId) {
    if (!userProgress.timeTracking) {
        userProgress.timeTracking = {};
    }
    
    userProgress.timeTracking[serviceId] = {
        startTime: new Date().toISOString(),
        steps: {}
    };
    
    localStorage.setItem('wosoolUserProgress', JSON.stringify(userProgress));
}

// إيقاف تتبع الوقت
function stopTimeTracking(serviceId) {
    if (userProgress.timeTracking && userProgress.timeTracking[serviceId]) {
        const tracking = userProgress.timeTracking[serviceId];
        tracking.endTime = new Date().toISOString();
        
        const start = new Date(tracking.startTime);
        const end = new Date(tracking.endTime);
        const duration = Math.round((end - start) / 1000 / 60); // بالدقائق
        
        userProgress.totalTime = (userProgress.totalTime || 0) + duration;
        
        localStorage.setItem('wosoolUserProgress', JSON.stringify(userProgress));
    }
}

// تهيئة المساعد الصوتي
function initSpeechSynthesis() {
    if (!('speechSynthesis' in window)) {
        console.warn('المتصفح لا يدعم Text-to-Speech');
        return;
    }
    
    // انتظار تحميل الأصوات
    let voices = speechSynthesis.getVoices();
    if (voices.length === 0) {
        speechSynthesis.addEventListener('voiceschanged', () => {
            voices = speechSynthesis.getVoices();
            console.log('✅ تم تحميل الأصوات:', voices.length);
        });
    }
}

// عرض الإشعارات
function showNotification(message) {
    const notification = document.getElementById('notification');
    
    // إعداد الإشعار
    notification.innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${message}</span>
    `;
    
    notification.classList.add('show');
    
    // إخفاء الإشعار بعد 4 ثواني
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// وظائف شريط الوصول
function increaseFont() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${currentSize * 1.1}px`;
    showNotification('🔍 تم تكبير الخط');
}

function decreaseFont() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${currentSize * 0.9}px`;
    showNotification('🔎 تم تصغير الخط');
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    showNotification(isHighContrast ? '🎨 تم تفعيل الوضع المتباين' : '🎨 تم تعطيل الوضع المتباين');
}

function readPage() {
    if (!('speechSynthesis' in window)) {
        showNotification('🔇 المتصفح لا يدعم القراءة الصوتية');
        return;
    }
    
    const pageTitle = document.title;
    const mainContent = document.querySelector('main').textContent.substring(0, 1000);
    
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(pageTitle + '. ' + mainContent);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.9;
    utterance.volume = 1;
    
    speechSynthesis.speak(utterance);
    showNotification('🔊 جاري قراءة محتوى الصفحة');
}

function stopReading() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    showNotification('⏹️ تم إيقاف القراءة');
}

// تبسيط الواجهة للفئات الخاصة
function simplifyInterface() {
    // إخفاء العناصر المعقدة
    document.querySelectorAll('.service-features, .card-meta, .step-timer').forEach(el => {
        el.style.display = 'none';
    });
    
    // تكبير الأزرار
    document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
        btn.style.fontSize = '1.2rem';
        btn.style.padding = '20px 30px';
    });
    
    // تكبير النصوص
    document.querySelectorAll('p, li, span:not(.fa)').forEach(text => {
        text.style.fontSize = '1.1rem';
    });
}

// زيادة التباين
function increaseContrast() {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    
    document.querySelectorAll('.service-card, .category-card, .tool-card').forEach(card => {
        card.style.backgroundColor = '#111';
        card.style.color = '#fff';
        card.style.border = '2px solid #fff';
    });
}

// إعداد التنقل بلوحة المفاتيح
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowRight':
                // السابق (لأننا RTL)
                if (currentStepIndex > 0) {
                    currentStepIndex--;
                    loadStep(currentStepIndex);
                }
                break;
                
            case 'ArrowLeft':
                // التالي
                if (currentTraining && currentStepIndex < currentTraining.steps.length - 1) {
                    currentStepIndex++;
                    loadStep(currentStepIndex);
                }
                break;
                
            case ' ':
                // مسافة لتشغيل/إيقاف الصوت
                if (speechSynthesis.speaking) {
                    speechSynthesis.pause();
                } else if (speechSynthesis.paused) {
                    speechSynthesis.resume();
                } else if (currentTraining && currentTraining.steps[currentStepIndex]) {
                    readStep(currentTraining.steps[currentStepIndex]);
                }
                break;
                
            case 'Escape':
                // خروج
                exitTraining();
                break;
        }
    });
    
    showNotification('⌨️ تم تفعيل التنقل بلوحة المفاتيح: الأسهم للتقدم، المسافة للصوت، Escape للخروج');
}

// حفظ حالة التطبيق
window.addEventListener('beforeunload', function() {
    if (currentTraining) {
        stopTimeTracking(currentTraining.title);
    }
});

console.log('🎯 مركز التدريب العملي - جاهز للاستخدام!');
console.log('👉 اختر فئتك ثم اختر خدمة للتدريب');
