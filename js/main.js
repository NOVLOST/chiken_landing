    // Модальное окно

// Получаем элемент dialog
// 1. Находим наш диалог по ID
const dialog = document.getElementById('orderDialog');

// 2. Функция открытия (именно она вызывается вашим onclick="openModal()")
function openModal() {
    if (dialog) {
        dialog.showModal(); // showMoDal() открывает окно и автоматически создает затемнение фона
    } else {
        console.error('Элемент dialog не найден!');
    }
}

// 3. Функция закрытия
function closeModal() {
    if (dialog) {
        dialog.close();
    }
}

// 4. Привязываем закрытие к кнопке-крестику внутри диалога
const closeBtn = document.querySelector('.close-dialog');
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// 5. Закрытие при клике на затемненный фон (backdrop)
dialog.addEventListener('click', (event) => {
    // Если клик был именно по самому диалогу (фону), а не по форме внутри него
    if (event.target === dialog) {
        dialog.close();
    }
});

// 6. Обработка отправки формы (чтобы страница не перезагружалась)
const form = dialog.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Останавливаем стандартную перезагрузку страницы
    
    // Здесь позже можно будет добавить код для отправки данных на сервер или в Telegram
    
    alert('Спасибо! Ваша заявка принята. Мы перезвоним в течение 15 минут.');
    dialog.close(); // Закрываем окно
    form.reset();   // Очищаем поля формы
});
        // Маска для телефона
        document.getElementById('phone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value[0] === '7' || value[0] === '8') {
                    value = value.substring(1);
                }
                let formattedValue = '+7';
                if (value.length > 0) {
                    formattedValue += ' (' + value.substring(0, 3);
                }
                if (value.length >= 3) {
                    formattedValue += ') ' + value.substring(3, 6);
                }
                if (value.length >= 6) {
                    formattedValue += '-' + value.substring(6, 8);
                }
                if (value.length >= 8) {
                    formattedValue += '-' + value.substring(8, 10);
                }
                e.target.value = formattedValue;
            }
        });

        // Плавная прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Анимация при скролле
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Наблюдение за элементами
        document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .faq-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });