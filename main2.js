// عناصر الـ DOM
let display = document.getElementById('display');
let modeText = document.getElementById('mode-text');

// دالة التبديل بين Dark Mode و Normal Mode
function toggleTheme() {
    // استخدام classList.toggle لتشغيل أو إيقاف كلاس 'dark' في الـ body
    document.body.classList.toggle('dark');

    // استخدام if - else لمعرفة الثيم الحالي وتغيير النص
    if (document.body.classList.contains('dark')) {
        modeText.textContent = 'DARK MODE';
    } else {
        modeText.textContent = 'NORMAL MODE';
    }
}

// دالة إضافة القيمة للشاشة
function appendValue(value) {
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// دالة مسح الشاشة
function clearScreen() {
    display.value = '0';
}

// دالة حساب الناتج
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'خطأ';
    }
}