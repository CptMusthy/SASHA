const translations = {
  tr: {
    title: "SASHA",
    header: "Hoşgeldiniz!",
    desc: "Bize WhatsApp'tan ulaşın",
    whatsappMsg: "Merhaba, bilgi almak istiyorum."
  },
  en: {
    title: "SASHA",
    header: "Welcome!",
    desc: "Contact us on WhatsApp",
    whatsappMsg: "Hello, I would like to get some information."
  },
  ro: {
    title: "SASHA",
    header: "Bine ați venit!",
    desc: "Contactați-ne pe WhatsApp",
    whatsappMsg: "Bună, aș dori să primesc informații."
  }
};

const phoneNumber = "905xxxxxxxxx"; // <- Kendi WhatsApp numaranı buraya yaz

const langSwitcher = document.getElementById("langSwitcher");
const whatsappBtn = document.getElementById("whatsappBtn");

function changeLanguage(lang) {
  // HTML içindeki tüm data-key alanlarını güncelle
  document.querySelectorAll("[data-key]").forEach(el => {
    el.innerText = translations[lang][el.dataset.key];
  });

  // WhatsApp mesajını seçilen dile göre ayarla
  whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(translations[lang].whatsappMsg)}`;
}

// Dil değiştiriciye event bağla
langSwitcher.addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});

// Varsayılan dil: Türkçe
changeLanguage("tr");
