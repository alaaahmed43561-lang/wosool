// بيانات التدريب الحقيقي
const trainings = {
    'national-id': {
        title: 'استخراج بطاقة رقم قومي',
        website: 'https://www.egypt.gov.eg',
        steps: [
            {
                number: 1,
                title: 'افتح موقع مصر الرقمية',
                description: 'سنفتح معك الموقع الرسمي للخدمات الحكومية. اضغط على الزر لفتح الموقع.',
                url: 'https://www.egypt.gov.eg',
                steps: [
                    'اضغط على الزر لفتح الموقع',
                    'انتظر تحميل الموقع',
                    'إذا ظهر تحذير، اضغط "متابعة"'
                ],
                tips: [
                    'احفظ الرابط في المفضلة',
                    'تأكد من ظهور القفل الأخضر',
                    'إذا لم يفتح، حاول نسخ الرابط'
                ],
                audio: 'افتح موقع مصر الرقمية. اضغط على الزر لفتح الموقع الرسمي.'
            },
            {
                number: 2,
                title: 'تسجيل الدخول',
                description: 'ابحث عن زر تسجيل الدخول واضغط عليه.',
                steps: [
                    'ابحث عن "تسجيل الدخول" في الأعلى',
                    'اضغط على الزر',
                    'أدخل الرقم القومي',
                    'أدخل كلمة المرور'
                ],
                tips: [
                    'إذا نسيت كلمة المرور، اضغط "نسيت"',
                    'تأكد من صحة الرقم القومي',
                    'كلمة المرور حساسة للأحرف'
                ],
                audio: 'الخطوة الثانية: سجل الدخول. ابحث عن زر تسجيل الدخول في أعلى الموقع.'
            },
            {
                number: 3,
                title: 'البحث عن الخدمة',
                description: 'ابحث عن خدمة البطاقة الشخصية.',
                steps: [
                    'اكتب "البطاقة الشخصية" في البحث',
                    'اضغط Enter',
                    'اختر الخدمة من النتائج'
                ],
                tips: [
                    'يمكنك البحث بـ "الرقم القومي"',
                    'تأكد أنها الخدمة الرسمية',
                    'اقرأ الوصف جيداً'
                ],
                audio: 'الخطوة الثالثة: ابحث عن خدمة البطاقة الشخصية.'
            },
            {
                number: 4,
                title: 'تعبئة النموذج',
                description: 'املأ بياناتك في النموذج.',
                steps: [
                    'املأ الاسم كما في البطاقة القديمة',
                    'أدخل العنوان بالتفصيل',
                    'اختر المحافظة',
                    'حمّل الصورة الشخصية'
                ],
                tips: [
                    'تأكد من مطابقة البيانات',
                    'الصورة يجب أن تكون حديثة',
                    'حجم الصورة لا يتجاوز 2 ميجا'
                ],
                audio: 'الخطوة الرابعة: املأ النموذج ببياناتك.'
            },
            {
                number: 5,
                title: 'الدفع الإلكتروني',
                description: 'ادفع الرسوم إلكترونياً.',
                steps: [
                    'اضغط على "الدفع الإلكتروني"',
                    'اختر وسيلة الدفع',
                    'أدخل بيانات الدفع',
                    'اضغط "تأكيد"'
                ],
                tips: [
                    'تأكد من اتصال آمن HTTPS',
                    'احفظ إيصال الدفع',
                    'لا تشارك بيانات البطاقة'
                ],
                audio: 'الخطوة الخامسة: ادفع الرسوم إلكترونياً.'
            }
        ]
    },
    
    'electricity': {
        title: 'دفع فاتورة الكهرباء',
        website: 'https://epay.eehc.gov.eg',
        steps: [
            {
                number: 1,
                title: 'افتح موقع الكهرباء',
                description: 'افتح موقع شركة الكهرباء للدفع الإلكتروني.',
                url: 'https://epay.eehc.gov.eg',
                audio: 'افتح موقع شركة الكهرباء.'
            },
            {
                number: 2,
                title: 'إدخال رقم العداد',
                description: 'أدخل رقم عداد الكهرباء.',
                audio: 'أدخل رقم العداد الموجود في الفاتورة.'
            },
            {
                number: 3,
                title: 'التحقق من المبلغ',
                description: 'تأكد من المبلغ المطلوب.',
                audio: 'تأكد من صحة المبلغ المستحق.'
            },
            {
                number: 4,
                title: 'إتمام الدفع',
                description: 'ادفع المبلغ.',
                audio: 'ادفع المبلغ باستخدام بطاقتك.'
            }
        ]
    },
    
    'appointment': {
        title: 'حجز موعد طبي',
        website: 'https://www.mohp.gov.eg',
        steps: [
            {
                number: 1,
                title: 'افتح موقع وزارة الصحة',
                description: 'افتح الموقع الرسمي لوزارة الصحة.',
                url: 'https://www.mohp.gov.eg',
                audio: 'افتح موقع وزارة الصحة.'
            }
        ]
    }
};

// حالة التدريب الحالي
let currentTraining = null;
let currentStepIndex = 0;

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 موقع وصول - جاهز للتدريب العملي');
    
    // إعداد أزرار التدريب
    setupTrainingButtons();
    
    // إعداد أزرار التحكم
    setupControlButtons();
    
    // إعداد المساعد الصوتي
    setupAudioButtons();
    
    // إظهار رسالة ترحيب
    setTimeout(() => {
        showNotification('مرحباً بك في موقع "وصول" للتدريب العملي');
    }, 1000);
});

// إعداد أزرار "ابدأ التدريب"
function setupTrainingButtons() {
    const buttons = document.querySelectorAll('.start-btn');
    
    buttons.forEach(button => {
        // إزالة أي مستمع حدث سابق
        button.removeEventListener('click', handleTrainingClick);
        
        // إضافة مستمع حدث جديد
        button.addEventListener('click', handleTrainingClick);
    });
}

// التعامل مع ضغط زر البدء
function handleTrainingClick(event) {
    const button = event.currentTarget;
    const trainingId = button.getAttribute('data-training');
    
    console.log('🎯 المستخدم ضغط على:', trainingId);
    
    if (trainingId) {
        startTraining(trainingId);
    } else {
        showNotification('❌ لم يتم تحديد نوع التدريب');
    }
}

// بدء التدريب
function startTraining(trainingId) {
    if (!trainings[trainingId]) {
        showNotification('🚫 هذه الخدمة غير متاحة حالياً');
        return;
    }
    
    currentTraining = trainings[trainingId];
    currentStepIndex = 0;
    
    // تحديث العنوان
    document.getElementById('simulator-title').textContent = currentTraining.title;
    document.getElementById('total-steps').textContent = currentTraining.steps.length;
    
    // إظهار المحاكي وإخفاء البطاقات
    document.getElementById('training-simulator').classList.remove('hidden');
    document.getElementById('home').style.display = 'none';
    
    // تحميل الخطوة الأولى
    loadStep(currentStepIndex);
    
    // إشعار البدء
    showNotification(`🎬 بدء تدريب "${currentTraining.title}"`);
    
    // فتح الموقع الحكومي بعد ثانية
    setTimeout(() => {
        if (currentTraining.website) {
            window.open(currentTraining.website, '_blank', 'width=1200,height=700');
            showNotification('🌐 تم فتح الموقع الحكومي في نافذة جديدة');
        }
    }, 1000);
}

// تحميل خطوة
function loadStep(stepIndex) {
    if (!currentTraining || !currentTraining.steps[stepIndex]) {
        return;
    }
    
    const step = currentTraining.steps[stepIndex];
    
    // تحديث العداد
    document.getElementById('current-step').textContent = step.number;
    
    // تحديث المحتوى
    document.getElementById('step-title').textContent = step.title;
    document.getElementById('step-description').textContent = step.description;
    
    // تحديث الرابط
    const linkBtn = document.getElementById('website-link');
    if (step.url) {
        linkBtn.href = step.url;
        linkBtn.style.display = 'inline-flex';
    } else if (currentTraining.website) {
        linkBtn.href = currentTraining.website;
        linkBtn.style.display = 'inline-flex';
    } else {
        linkBtn.style.display = 'none';
    }
    
    // تحديث الخطوات التفصيلية
    const stepsList = document.getElementById('step-steps');
    stepsList.innerHTML = '';
    if (step.steps) {
        step.steps.forEach(stepText => {
            const li = document.createElement('li');
            li.textContent = stepText;
            stepsList.appendChild(li);
        });
    }
    
    // تحديث النصائح
    const tipsList = document.getElementById('step-tips');
    tipsList.innerHTML = '';
    if (step.tips) {
        step.tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    }
    
    // قراءة الشرح تلقائياً بعد نصف ثانية
    setTimeout(() => {
        readStep(step);
    }, 500);
}

// قراءة الخطوة بالصوت
function readStep(step) {
    if (!('speechSynthesis' in window)) {
        showNotification('🔇 المتصفح لا يدعم القراءة الصوتية. ننصح باستخدام Chrome أو Edge');
        return;
    }
    
    // إيقاف أي قراءة سابقة
    window.speechSynthesis.cancel();
    
    // النص للقراءة
    const text = step.audio || step.description;
    const utterance = new SpeechSynthesisUtterance(text);
    
    // إعدادات الصوت
    utterance.lang = 'ar-SA';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // محاولة اختيار صوت عربي
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) {
        utterance.voice = arabicVoice;
    }
    
    // البدء في القراءة
    window.speechSynthesis.speak(utterance);
    showNotification('🔊 جاري قراءة شرح الخطوة...');
}

// إعداد أزرار التحكم
function setupControlButtons() {
    // زر السابق
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            loadStep(currentStepIndex);
            showNotification('↩️ العودة للخطوة السابقة');
        } else {
            showNotification('⏮️ هذه هي الخطوة الأولى');
        }
    });
    
    // زر التالي
    document.getElementById('next-btn').addEventListener('click', function() {
        if (currentTraining && currentStepIndex < currentTraining.steps.length - 1) {
            currentStepIndex++;
            loadStep(currentStepIndex);
            showNotification('↪️ الانتقال للخطوة التالية');
        } else {
            finishTraining();
        }
    });
    
    // زر إنهاء
    document.getElementById('finish-btn').addEventListener('click', finishTraining);
}

// إعداد أزرار الصوت
function setupAudioButtons() {
    // زر التشغيل
    document.getElementById('play-audio').addEventListener('click', function() {
        if (currentTraining && currentTraining.steps[currentStepIndex]) {
            readStep(currentTraining.steps[currentStepIndex]);
        } else {
            showNotification('❌ لا يوجد شرح للقراءة حالياً');
        }
    });
    
    // زر الإعادة
    document.getElementById('repeat-audio').addEventListener('click', function() {
        window.speechSynthesis.cancel();
        setTimeout(() => {
            if (currentTraining && currentTraining.steps[currentStepIndex]) {
                readStep(currentTraining.steps[currentStepIndex]);
            }
        }, 300);
    });
}

// إنهاء التدريب
function finishTraining() {
    if (!currentTraining) return;
    
    // إيقاف أي قراءة صوتية
    window.speechSynthesis.cancel();
    
    // رسالة النجاح
    const trainingName = currentTraining.title;
    showNotification(`🎉 تهانينا! لقد أكملت تدريب "${trainingName}" بنجاح`);
    
    // العودة للرئيسية بعد 3 ثواني
    setTimeout(() => {
        document.getElementById('training-simulator').classList.add('hidden');
        document.getElementById('home').style.display = 'block';
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        
        // إعادة تعيين المتغيرات
        currentTraining = null;
        currentStepIndex = 0;
    }, 3000);
}

// إظهار إشعار للمستخدم
function showNotification(message) {
    const notification = document.getElementById('notification');
    
    // إعداد الإشعار
    notification.textContent = message;
    notification.classList.add('show');
    
    // إخفاء الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// وظائف شريط الوصول
function increaseFont() {
    document.body.style.fontSize = '18px';
    showNotification('🔍 تم تكبير الخط');
}

function decreaseFont() {
    document.body.style.fontSize = '16px';
    showNotification('🔎 تم تصغير الخط');
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    showNotification(isHighContrast ? '🎨 تم تفعيل الوضع المتباين' : '🎨 تم تعطيل الوضع المتباين');
}

function readPage() {
    const title = document.querySelector('h1').textContent;
    const subtitle = document.querySelector('.subtitle').textContent;
    
    if (!('speechSynthesis' in window)) {
        showNotification('🔇 المتصفح لا يدعم القراءة الصوتية');
        return;
    }
    
