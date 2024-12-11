// Bölüm Geçişleri
const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll("section");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        sections.forEach((section) => section.classList.add("hidden"));
        document.querySelector(btn.dataset.target).classList.remove("hidden");
    });
});

// Kayıt Türü Seçimi
function showStudentRegister() {
    document.getElementById("student-register").classList.remove("hidden");
    document.getElementById("school-register").classList.add("hidden");
}

function showSchoolRegister() {
    document.getElementById("school-register").classList.remove("hidden");
    document.getElementById("student-register").classList.add("hidden");
}

// Okul Girişi ve Veri Girişi
const schoolLoginForm = document.getElementById("school-login");
const wasteEntryForm = document.getElementById("waste-entry");

schoolLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Okul giriş işlemleri burada yapılacak
    const schoolName = schoolLoginForm.querySelector("input[type='text']").value;
    const schoolPassword = schoolLoginForm.querySelector("input[type='password']").value;

    if (schoolName && schoolPassword) {
        // Eğer giriş doğruysa, veri girişi formunu göster
        document.getElementById("waste-entry").classList.remove("hidden");
        alert("Giriş başarılı, veri girişi yapabilirsiniz.");
    } else {
        alert("Lütfen okul bilgilerini doğru girin.");
    }
});

// Veri Girişi Formu
wasteEntryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Atık girişi işlemleri
    const studentName = wasteEntryForm.querySelector("input[placeholder='Öğrenci Adı Soyadı']").value;
    const wasteType = wasteEntryForm.querySelector("input[placeholder='Atık Türü']").value;
    const wasteAmount = wasteEntryForm.querySelector("input[placeholder='Atık Miktarı (kg)']").value;

    if (studentName && wasteType && wasteAmount) {
        // Giriş başarılıysa, öğrenciye atık eklenir
        alert(`${studentName} için ${wasteAmount} kg ${wasteType} kaydedildi.`);
        // Giriş bilgilerini temizle
        wasteEntryForm.reset();
    } else {
        alert("Lütfen tüm bilgileri doğru girin.");
    }
});

// Menü ve sayfa geçişlerini daha kullanıcı dostu yapmak için animasyonlar ekleyebiliriz
document.querySelectorAll(".menu-btn").forEach(button => {
    button.addEventListener("click", () => {
        // Tüm bölümleri gizle
        sections.forEach(section => section.classList.add("hidden"));
        // Seçilen bölümü göster
        const target = document.querySelector(button.getAttribute("data-target"));
        target.classList.remove("hidden");
    });
});
