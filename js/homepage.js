// تهيئة الصفحة الترحيبية
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏠 الصفحة الترحيبية - جاهزة');
    
    // إعداد القائمة المتحركة
    setupMobileMenu();
    
    // إعداد العدادات المتحركة
    setupCounters();
    
    // إعداد كروسل الشهادات (إذا أضفناها)
    setupTestimonials();
    
    // إعداد أزرار الدعوة للعمل
    setupCallToAction();
    
    // إعداد شريط الوصول
    setupAccessibilityBar();
    
    // عرض رسالة ترحيبية
    setTimeout(() => {
        showWelcomeMessage();
    }, 2000);
});

// إعداد القائمة المتحركة للهواتف
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.main-nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
}

// إعداد العدادات المتحركة
function setupCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 ثانية
                const step = target / (duration / 16); // 60 إطار في الثانية
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// إعداد شهادات المستخدمين
function setupTestimonials() {
    // يمكن إضافة كروسل أو تأثيرات للشهادات هنا
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        // تأثير ظهور متدرج
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// إعداد أزرار الدعوة للعمل
function setupCallToAction() {
    const ctaButtons = document.querySelectorAll('.cta-buttons a');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// إعداد شريط الوصول
function setupAccessibilityBar() {
    // نفس وظائف ملف التدريب
    window.increaseFont = function() {
        const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
        document.body.style.fontSize = `${currentSize * 1.1}px`;
        showNotification('🔍 تم تكبير الخط');
    };
    
    window.decreaseFont = function() {
        const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
        document.body.style.fontSize = `${currentSize * 0.9}px`;
        showNotification('🔎 تم تصغير الخط');
    };
    
    window.toggleContrast = function() {
        document.body.classList.toggle('high-contrast');
        const isHighContrast = document.body.classList.contains('high-contrast');
        showNotification(isHighContrast ? '🎨 تم تفعيل الوضع المتباين' : '🎨 تم تعطيل الوضع المتباين');
    };
    
    window.readPage = function() {
        if (!('speechSynthesis' in window)) {
            showNotification('🔇 المتصفح لا يدعم القراءة الصوتية');
            return;
        }
        
        const pageTitle = document.title;
        const heroText = document.querySelector('.hero-title').textContent + '. ' + 
                         document.querySelector('.hero-subtitle').textContent;
        
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        
        const utterance = new SpeechSynthesisUtterance(pageTitle + '. ' + heroText);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.9;
        
        window.speechSynthesis.speak(utterance);
        showNotification('🔊 جاري قراءة محتوى الصفحة');
    };
    
    window.stopReading = function() {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        showNotification('⏹️ تم إيقاف القراءة');
    };
}

// عرض رسالة ترحيبية
function showWelcomeMessage() {
    const notification = document.createElement('div');
    notification.className = 'notification welcome-message';
    notification.innerHTML = `
        <div class="welcome-content">
            <i class="fas fa-hands-helping"></i>
            <div>
                <h4>مرحباً بك في "وصول"! 👋</h4>
                <p>مشروع وطني لتمكين الجميع من الخدمات الرقمية</p>
            </div>
        </div>
        <button class="close-welcome">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // إظهار الرسالة
    setTimeout(() => {
        notification.classList.add('show');
    }, 500);
    
    // إغلاق الرسالة
    notification.querySelector('.close-welcome').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // إغلاق تلقائي بعد 10 ثواني
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 10000);
}

// دالة عرض الإشعارات
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // إظهار الإشعار
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // إخفاء الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// تأثيرات الظهور عند التمرير
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.target-card, .problem-card, .solution-card, .work-step, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.classList.add('scroll-animate');
        observer.observe(element);
    });
}

// تهيئة كل شيء عند التحميل
setTimeout(() => {
    setupScrollAnimations();
}, 1000);

console.log('✨ الصفحة الترحيبية مشغلة وجاهزة!');
