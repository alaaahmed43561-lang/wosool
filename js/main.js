// بيانات الموقع
let currentDisability = null;
let currentService = null;
let currentStep = 0;
let userProgress = {};
let selectedDisabilityType = null;

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة البيانات
    initData();
    
    // إعداد واجهة المستخدم
    setupUI();
    
    // إعداد مستمعي الأحداث
    setupEventListeners();
    
    // تحديث الإحصائيات
    updateStatistics();
    
    // تحميل التقييمات
    loadTestimonials();
});

// تهيئة البيانات
function initData() {
    // محاكاة بيانات التقدم المحفوظة
    if (!localStorage.getItem('wosoolProgress')) {
        userProgress = {
            completedServices: [],
            currentTrainings: {},
            lastDisability: null,
            ratings: []
        };
        localStorage.setItem('wosoolProgress', JSON.stringify(userProgress));
    } else {
        userProgress = JSON.parse(localStorage.getItem('wosoolProgress'));
    }
    
    // استعادة الإعاقة الأخيرة إذا وجدت
    if (userProgress.lastDisability) {
        selectDisability(userProgress.lastDisability);
    }
}

// إعداد واجهة المستخدم
function setupUI() {
    // تحديث قائمة الخدمات
    updateServicesList();
    
    // إعداد بطاقات الإعاقة
    setupDisabilityCards();
    
    // إعداد شريط الوصول
    setupAccessibilityBar();
    
    // إعداد التنقل
    setupNavigation();
}

// إعداد بطاقات الإعاقة
function setupDisabilityCards() {
    const cards = document.querySelectorAll('.disability-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const disabilityType = this.getAttribute('data-disability');
            selectDisability(disabilityType);
        });
    });
}

// اختيار نوع الإعاقة
function selectDisability(type) {
    // إزالة التحديد السابق
    document.querySelectorAll('.disability-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // تحديد الجديد
    const selectedCard = document.querySelector(`[data-disability="${type}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        selectedDisabilityType = type;
        
        // حفظ الاختيار
        userProgress.lastDisability = type;
        localStorage.setItem('wosoolProgress', JSON.stringify(userProgress));
        
        // إظهار رسالة تأكيد
        showNotification(`تم اختيار ${getDisabilityName(type)}. يمكنك الآن اختيار خدمة للتدريب.`);
        
        // تطبيق التكيفات
        applyDisabilityAdaptations(type);
    }
}

// الحصول على اسم الإعاقة
function getDisabilityName(type) {
    const disabilities = {
        'visual': 'الإعاقة البصرية',
        'hearing': 'الإعاقة السمعية',
        'mobility': 'الإعاقة الحركية',
        'cognitive': 'الإعاقة الذهنية'
    };
    return disabilities[type] || 'الإعاقة';
}

// تطبيق تكيفات الإعاقة
function applyDisabilityAdaptations(type) {
    const body = document.body;
    
    // إزالة التكيفات السابقة
    body.classList.remove('visual-mode', 'hearing-mode', 'mobility-mode', 'cognitive-mode');
    
    // تطبيق التكيفات الجديدة
    switch(type) {
        case 'visual':
            body.classList.add('visual-mode');
            enableScreenReaderSupport();
            break;
        case 'hearing':
            body.classList.add('hearing-mode');
            enableVisualAlerts();
            break;
        case 'mobility':
            body.classList.add('mobility-mode');
            enableKeyboardNavigation();
            break;
        case 'cognitive':
            body.classList.add('cognitive-mode');
            simplifyInterface();
            break;
    }
}

// تحديث قائمة الخدمات
function updateServicesList() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;
    
    // مسح المحتوى القديم
    servicesGrid.innerHTML = '';
    
    // إضافة الخدمات من قاعدة البيانات
    trainingData.services.forEach(service => {
        const serviceCard = createServiceCard(service);
        servicesGrid.appendChild(serviceCard);
    });
}

// إنشاء بطاقة خدمة
function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-service', service.id);
    
    // حساب التقدم إذا وجد
    const progress = userProgress.completedServices.includes(service.id) ? 'مكتمل' : 'جديد';
    const progressClass = userProgress.completedServices.includes(service.id) ? 'completed' : '';
    
    card.innerHTML = `
        <div class="service-icon">
            <i class="${service.icon}"></i>
        </div>
        <span class="service-progress ${progressClass}">${progress}</span>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <div class="service-meta">
            <span><i class="fas fa-clock"></i> ${service.estimatedTime}</span>
            <span><i class="fas fa-signal"></i> ${service.difficulty}</span>
            <span><i class="fas fa-list-ol"></i> ${service.steps} خطوات</span>
        </div>
        <button class="btn-start-training" data-service="${service.id}">
            ابدأ التدريب
        </button>
    `;
    
    // إضافة مستمع الحدث
    const startBtn = card.querySelector('.btn-start-training');
    startBtn.addEventListener('click', function(e) {
        e.preventDefault();
        startTraining(service.id);
    });
    
    return card;
}

// بدء التدريب على خدمة
function startTraining(serviceId) {
    if (!selectedDisabilityType) {
        showNotification('الرجاء اختيار نوع الإعاقة أولاً', 'warning');
        document.querySelector('#disability-selection').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    
    // البحث عن الخدمة
    const service = trainingData.services.find(s => s.id === serviceId);
    if (!service) return;
    
    currentService = service;
    currentStep = 0;
    
    // إخفاء أقسام الموقع
    document.querySelectorAll('section:not(#training-simulator)').forEach(section => {
        section.classList.add('hidden');
    });
    
    // إظهار المحاكي
    const simulator = document.getElementById('training-simulator');
    simulator.classList.remove('hidden');
    
    // تحديث عنوان التدريب
    document.getElementById('training-title').textContent = service.name;
    
    // بدء الخطوة الأولى
    loadTrainingStep(0);
    
    // إضافة للتدريبات الجارية
    if (!userProgress.currentTrainings[serviceId]) {
        userProgress.currentTrainings[serviceId] = {
            startedAt: new Date().toISOString(),
            lastStep: 0,
            completedSteps: []
        };
        localStorage.setItem('wosoolProgress', JSON.stringify(userProgress));
    }
    
    // التمرير إلى الأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// تحميل خطوة التدريب
function loadTrainingStep(stepIndex) {
    if (!currentService || !currentService.stepsDetails) return;
    
    const step = currentService.stepsDetails[stepIndex];
    if (!step) return;
    
    // تحديث العداد
    document.getElementById('step-counter').textContent = `الخطوة ${step.id} من ${currentService.stepsDetails.length}`;
    
    // تحديث العنوان والوصف
    document.getElementById('step-title').textContent = step.title;
    document.getElementById('step-description').textContent = step.description;
    
    // تحديث الصورة
    const stepImage = document.getElementById('step-image');
    stepImage.src = step.image || 'images/default-step.jpg';
    stepImage.alt = step.title;
    
    // تحديث النصائح والتحذيرات
    updateStepTips(step);
    
    // تحديث أزرار التحكم
    updateControlButtons(stepIndex);
    
    // تحديث التقدم المحلي
    currentStep = stepIndex;
    
    // تحديث التقدم في localStorage
    if (userProgress.currentTrainings[currentService.id]) {
        userProgress.currentTrainings[currentService.id].lastStep = stepIndex;
        if (!userProgress.currentTrainings[currentService.id].completedSteps.includes(stepIndex)) {
            userProgress.currentTrainings[currentService.id].completedSteps.push(stepIndex);
        }
        localStorage.setItem('wosoolProgress', JSON.stringify(userProgress));
    }
    
    // تفعيل القراءة الصوتية للإعاقة البصرية
    if (selectedDisabilityType === 'visual') {
        setTimeout(() => readStepAloud(step), 500);
    }
}

// تحديث النصائح
function updateStepTips(step) {
    const notesContainer = document.querySelector('.simulator-notes');
    if (!notesContainer) return;
    
    notesContainer.innerHTML = '';
    
    // إضافة النصائح
    if (step.tips && step.tips.length > 0) {
        const tipsNote = document.createElement('div');
        tipsNote.className = 'note';
        tipsNote.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            <div>
                <p><strong>نصائح مهمة:</strong></p>
                <ul>
                    ${step.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
        notesContainer.appendChild(tipsNote);
    }
    
    // إضافة التحذيرات
    if (step.warning) {
        const warningNote = document.createElement('div');
        warningNote.className = 'note warning';
        warningNote.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <div>
                <p><strong>تحذير:</strong> ${step.warning}</p>
            </div>
        `;
        notesContainer.appendChild(warningNote);
    }
}

// تحديث أزرار التحكم
function updateControlButtons(stepIndex) {
    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');
    
    // زر السابق
    if (stepIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('disabled');
    }
    
    // زر التالي
    if (stepIndex === currentService.stepsDetails.length - 1) {
        nextBtn.textContent = 'إنهاء التدريب';
        nextBtn.classList.add('finish-training');
    } else {
        nextBtn.textContent = 'التالي';
        nextBtn.classList.remove('finish-training');
    }
}

// القراءة الصوتية للخطوة
function readStepAloud(step) {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = `${step.title}. ${step.description}`;
        speech.lang = 'ar-SA';
        speech.rate = 0.9;
        speech.pitch = 1;
        
        // إضافة النصائح إذا وجدت
        if (step.tips) {
            speech.text += ' نصائح: ' + step.tips.join('. ');
        }
        
        // إضافة التحذير إذا وجد
        if (step.warning) {
            speech.text += ' تحذير: ' + step.warning;
        }
        
        window.speechSynthesis.speak(speech);
    }
}

// إعداد شريط الوصول
function setupAccessibilityBar() {
    // تكبير الخط
    document.getElementById('font-increase').addEventListener('click', function() {
        document.body.classList.toggle('large-text');
    });
    
    // تصغير الخط
    document.getElementById('font-decrease').addEventListener('click', function() {
        document.body.classList.remove('large-text');
    });
    
    // التباين العالي
    document.getElementById('high-contrast').addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
    
    // القراءة الصوتية
    document.getElementById('text-to-speech').addEventListener('click', function() {
        readCurrentPage();
    });
    
    // إيقاف القراءة
    document.getElementById('stop-speech').addEventListener('click', function() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    });
}

// إعداد التنقل
function setupNavigation() {
    // التنقل في المحاكي
    document.getElementById('prev-step').addEventListener('click', goToPreviousStep);
    document.getElementById('next-step').addEventListener('click', goToNextStep);
    document.getElementById('repeat-step').addEventListener('click', repeatCurrentStep);
    document.getElementById('exit-training').addEventListener('click', exitTraining);
    
    // أزرار الوسائط
    document.getElementById('play-audio').addEventListener('click', playStepAudio);
    document.getElementById('play-video').addEventListener('click', playStepVideo);
    document.getElementById('zoom-image').addEventListener('click', zoomStepImage);
    
    // قائمة الهاتف
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
    
    // إغلاق النموذج
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('feedback-modal').classList.add('hidden');
    });
    
    // إرسال التقييم
    document.getElementById('feedback-form').addEventListener('submit', submitFeedback);
    
    // تقييم النجوم
    document.querySelectorAll('.rating .star').forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            setRating(value);
        });
    });
}

// التنقل بين الخطوات
function goToPreviousStep() {
    if (currentStep > 0) {
        loadTrainingStep(currentStep - 1);
    }
}

function goToNextStep() {
    if (!currentService || !currentService.stepsDetails) return;
    
    if (currentStep < currentService.stepsDetails.length - 1) {
        loadTrainingStep(currentStep + 1);
    } else {
        // إنهاء التدريب
        completeTraining();
    }
}

function repeatCurrentStep() {
    loadTrainingStep(currentStep);
}

// إنهاء التدريب
function completeTraining() {
    // تحديث التقدم
    if (!userProgress.completedServices.includes(currentService.id)) {
        userProgress.completedServices.push(currentService.id);
        userProgress.currentTrainings[currentService.id].completedAt = new Date().toISOString();
        localStorage.setItem('wosoolProgress', JSON.stringify(userProgress));
    }
    
    // إظهار رسالة التهنئة
    showNotification(`تهانينا! لقد أكملت تدريب "${currentService.name}" بنجاح 🎉`, 'success');
    
    // إظهار نموذج التقييم
    setTimeout(() => {
        document.getElementById('feedback-modal').classList.remove('hidden');
    }, 1000);
    
    // العودة للرئيسية
    setTimeout(exitTraining, 3000);
}

// الخروج من التدريب
function exitTraining() {
    // إخفاء المحاكي
    document.getElementById('training-simulator').classList.add('hidden');
    
    // إظهار جميع الأقسام
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('hidden');
    });
    
    // تحديث قائمة الخدمات
    updateServicesList();
    
    // تحديث الإحصائيات
    updateStatistics();
    
    // التمرير للأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// تشغيل الصوت
function playStepAudio() {
    if (!currentService || !currentService.stepsDetails) return;
    
    const step = currentService.stepsDetails[currentStep];
    if (!step.audio) {
        // استخدام القراءة الصوتية إذا لم يوجد ملف
        readStepAloud(step);
        return;
    }
    
    // تشغيل ملف الصوت
    const audio = new Audio(step.audio);
    audio.play();
    showNotification('جاري تشغيل الشرح الصوتي...');
}

// تشغيل الفيديو
function playStepVideo() {
    if (!currentService || !currentService.stepsDetails) return;
    
    const step = currentService.stepsDetails[currentStep];
    if (!step.video) {
        showNotification('لا يتوفر فيديو لهذه الخطوة', 'info');
        return;
    }
    
    // إنشاء مشغل فيديو
    const videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.innerHTML = `
        <div class="video-modal-content">
            <span class="close-video">&times;</span>
            <h3>${step.title}</h3>
            <video controls style="width: 100%; max-width: 800px;">
                <source src="${step.video}" type="video/mp4">
                متصفحك لا يدعم تشغيل الفيديو
            </video>
        </div>
    `;
    
    document.body.appendChild(videoModal);
    
    // إضافة مستمعي الأحداث
    videoModal.querySelector('.close-video').addEventListener('click', function() {
        document.body.removeChild(videoModal);
    });
    
    // إغلاق بالنقر خارج الفيديو
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            document.body.removeChild(videoModal);
        }
    });
}

// تكبير الصورة
function zoomStepImage() {
    const stepImage = document.getElementById('step-image');
    
    const zoomModal = document.createElement('div');
    zoomModal.className = 'zoom-modal';
    zoomModal.innerHTML = `
        <div class="zoom-modal-content">
            <span class="close-zoom">&times;</span>
            <img src="${stepImage.src}" alt="${stepImage.alt}" style="max-width: 90vw; max-height: 80vh;">
        </div>
    `;
    
    document.body.appendChild(zoomModal);
    
    // إضافة مستمعي الأحداث
    zoomModal.querySelector('.close-zoom').addEventListener('click', function() {
        document.body.removeChild(zoomModal);
    });
    
    // إغلاق بالنقر خارج الصورة
    zoomModal.addEventListener('click', function(e) {
        if (e.target === zoomModal) {
            document.body.removeChild(zoomModal);
        }
    });
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // التنقل في المحاكي
    document.getElementById('prev-step').addEventListener('click', goToPreviousStep);
    document.getElementById('next-step').addEventListener('click', goToNextStep);
    document.getElementById('repeat-step').addEventListener('click', repeatCurrentStep);
    document.getElementById('exit-training').addEventListener('click', exitTraining);
    
    // أزرار الوسائط
    document.getElementById('play-audio').addEventListener('click', playStepAudio);
    document.getElementById('play-video').addEventListener('click', playStepVideo);
    document.getElementById('zoom-image').addEventListener('click', zoomStepImage);
    
    // التنقل في الموقع
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                
                // إغلاق القائمة على الهاتف
                document.querySelector('nav ul').classList.remove('active');
            }
        });
    });
    
    // قائمة الهاتف
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
    
    // إغلاق النموذج
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('feedback-modal').classList.add('hidden');
    });
    
    // إرسال التقييم
    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitFeedback();
    });
    
    // تقييم النجوم
    document.querySelectorAll('.rating .star').forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            setRating(value);
        });
        
        star.addEventListener('mouseover', function() {
            const value = this.getAttribute('data-value');
            highlightStars(value);
        });
        
        star.addEventListener('mouseout', function() {
            const currentRating = document.querySelector('.rating').getAttribute('data-current') || 0;
            highlightStars(currentRating);
        });
    });
}

// تحديث الإحصائيات
function updateStatistics() {
    // استخدام بيانات حقيقية من trainingData
    const stats = trainingData.statistics;
    
    // تحديث العدادات
    document.querySelectorAll('.counter').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const actualValue = getStatValue(target, counter);
        
        // تأثير العد
        animateCounter(counter, actualValue);
    });
}

// الحصول على القيمة
