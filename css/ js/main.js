// بيانات التدريب
const trainings = {
    'national-id': {
        title: 'استخراج بطاقة رقم قومي',
        website: 'https://www.egypt.gov.eg',
        steps: [
            {
                number: 1,
                title: 'افتح موقع مصر الرقمية',
                description: 'سنفتح معاك الموقع الرسمي للخدمات الحكومية. اضغط على الزر لفتح الموقع.',
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
        steps: [
            {
                number: 1,
                title: 'اختيار المستشفى',
                description: 'اختر المستشفى الحكومي.',
                audio: 'اختر المستشفى الذي تريد الحجز فيه.'
            }
        ]
    }
};

// حالة التدريب الحالي
let currentTraining = null;
let currentStep = 0;

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 موقع وصول جاهز!');
    
    // إعداد أزرار التدريب
    setupTrainingButtons();
    
    // إعداد أزرار التحكم
    setupControlButtons();
    
    // إعداد المساعد الصوتي
    setupAudioButtons();
});

// إعداد أزرار "ابدأ التدريب"
function setupTrainingButtons() {
    const buttons = document.querySelectorAll('.start-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const trainingId = this.getAttribute('data-training');
            console.log('🎯 بدء تدريب:', trainingId);
            startTraining(trainingId);
        });
    });
}

// بدء التدريب
function startTraining(trainingId) {
    if (!trainings[trainingId]) {
        showNotification('🚫 هذه الخدمة غير متاحة حالياً');
        return;
    }
    
    currentTraining = trainings[trainingId];
    currentStep = 0;
    
    // تحديث العنوان
    document.getElementById('simulator-title').textContent = currentTraining.title;
    document.getElementById('total-steps').textContent = currentTraining.steps.length;
    
    // إظهار المحاكي
    document.querySelector('.training-simulator').classList.remove('hidden');
    
    // التمرير للمحاكي
    document.querySelector('.training-simulator').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // تحميل الخطوة الأولى
    loadStep(currentStep);
    
    // إشعار البدء
    showNotification(`🎬 بدء تدريب "${currentTraining.title}"`);
    
    // فتح الموقع بعد ثانية
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
        linkBtn.style.display = 'flex';
    } else if (currentTraining.website) {
        linkBtn.href = currentTraining.website;
        linkBtn.style.display = 'flex';
    } else {
        linkBtn.style.display = 'none';
    }
    
    // تحديث الخطوات
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
    
    // قراءة تلقائية بعد نصف ثانية
    setTimeout(() => {
        readStep(step);
    }, 500);
}

// قراءة الخطوة
function readStep(step) {
    if (!('speechSynthesis' in window)) {
        showNotification('🔇 المتصفح لا يدخدم القراءة الصوتية');
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
    
    // اختيار صوت عربي
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) {
        utterance.voice = arabicVoice;
    }
    
    // البدء
    window.speechSynthesis.speak(utterance);
    showNotification('🔊 جاري قراءة الشرح...');
}

// إعداد أزرار التحكم
function setupControlButtons() {
    // زر السابق
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            loadStep(currentStep);
            showNotification('↩️ العودة للخطوة السابقة');
        }
    });
    
    // زر التالي
    document.getElementById('next-btn').addEventListener('click', function() {
        if (currentTraining && currentStep < currentTraining.steps.length - 1) {
            currentStep++;
            loadStep(currentStep);
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
        if (currentTraining && currentTraining.steps[currentStep]) {
            readStep(currentTraining.steps[currentStep]);
        }
    });
    
    // زر الإعادة
    document.getElementById('repeat-audio').addEventListener('click', function() {
        window.speechSynthesis.cancel();
        setTimeout(() => {
            if (currentTraining && currentTraining.steps[currentStep]) {
                readStep(currentTraining.steps[currentStep]);
            }
        }, 300);
    });
}

// إنهاء التدريب
function finishTraining() {
    if (!currentTraining) return;
    
    // إيقاف الصوت
    window.speechSynthesis.cancel();
    
    // رسالة النجاح
    showNotification(`🎉 تهانينا! أكملت تدريب "${currentTraining.title}"`);
    
    // العودة بعد 3 ثواني
    setTimeout(() => {
        document.querySelector('.training-simulator').classList.add('hidden');
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        currentTraining = null;
        currentStep = 0;
    }, 3000);
}

// إظهار إشعار
function showNotification(message) {
    const notification = document.getElementById('notification');
    
    // إعداد الإشعار
    notification.textContent = message;
    notification.className = 'notification show';
    
    // إخفاء بعد 3 ثواني
    setTimeout(() => {
        notification.className = 'notification';
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
    showNotification('🎨 تم تغيير التباين');
}

function readPage() {
    const title = document.querySelector('h1').textContent;
    const content = document.querySelector('.subtitle').textContent;
    
    const utterance = new SpeechSynthesisUtterance(title + '. ' + content);
    utterance.lang = 'ar-SA';
    window.speechSynthesis.speak(utterance);
    showNotification('🔊 جاري قراءة الصفحة');
}

function stopReading() {
    window.speechSynthesis.cancel();
    showNotification('⏹️ تم إيقاف القراءة');
}
