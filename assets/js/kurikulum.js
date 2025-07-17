// START TOP NAVBAR
document.addEventListener("click", function (e) {
  const dropdownBtn = e.target.closest("[data-dropdown-toggle]");
  const openMenu = document.querySelector(".language-menu-top-navbar.show");

  if (dropdownBtn) {
    const menu = dropdownBtn.querySelector(".language-menu-top-navbar");
    menu.classList.toggle("show");
  } else if (openMenu) {
    openMenu.classList.remove("show");
  }
});
// TOP NAVBAR

// START MAIN NAVBAR
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("show");
  });

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("main-navbar");
    if (window.scrollY > 5) {
      navbar.style.marginTop = "0";
      navbar.style.padding = ".85rem 0"; // harus pakai style.
    } else {
      navbar.style.padding = "1rem 0";
      navbar.style.marginTop = "44px";
    }
  });
});
// END MAIN NAVBAR

// DATA MATA KULIAH TEKNIK INFORMATIKA
const coursesInformatika = {
  1: [
    {
      code: "IF101",
      name: "Pengantar Teknologi Informasi",
      sks: 3,
      desc: "Pengenalan konsep dasar teknologi informasi dan peranannya dalam masyarakat modern.",
      type: "Wajib",
    },
    {
      code: "IF102",
      name: "Dasar Pemrograman",
      sks: 4,
      desc: "Pengenalan konsep pemrograman dasar menggunakan bahasa pemrograman Python.",
      type: "Wajib",
    },
    {
      code: "IF103",
      name: "Matematika Diskrit",
      sks: 3,
      desc: "Konsep matematika dasar untuk ilmu komputer termasuk logika, himpunan, dan graf.",
      type: "Wajib",
    },
    {
      code: "IF104",
      name: "Kalkulus",
      sks: 3,
      desc: "Konsep dasar kalkulus dan penerapannya dalam pemecahan masalah komputasi.",
      type: "Wajib",
    },
    {
      code: "UN101",
      name: "Pendidikan Pancasila",
      sks: 2,
      desc: "Pemahaman nilai-nilai Pancasila dalam kehidupan berbangsa dan bernegara.",
      type: "Wajib",
    },
  ],
  2: [
    {
      code: "IF201",
      name: "Struktur Data",
      sks: 4,
      desc: "Pengenalan dan implementasi struktur data dasar seperti array, linked list, stack, dan queue.",
      type: "Wajib",
    },
    {
      code: "IF202",
      name: "Algoritma dan Pemrograman",
      sks: 4,
      desc: "Pemahaman konsep algoritma dan teknik pemrograman yang efisien.",
      type: "Wajib",
    },
    {
      code: "IF203",
      name: "Organisasi Komputer",
      sks: 3,
      desc: "Arsitektur dasar komputer dan organisasi memori serta prosesor.",
      type: "Wajib",
    },
    {
      code: "IF204",
      name: "Basis Data Dasar",
      sks: 3,
      desc: "Pengenalan konsep basis data relasional dan bahasa SQL.",
      type: "Wajib",
    },
    {
      code: "UN201",
      name: "Bahasa Inggris Teknik",
      sks: 2,
      desc: "Pengembangan kemampuan bahasa Inggris untuk keperluan teknis.",
      type: "Wajib",
    },
  ],
  3: [
    {
      code: "IF301",
      name: "Pemrograman Berorientasi Objek",
      sks: 4,
      desc: "Konsep dan implementasi pemrograman berorientasi objek menggunakan Java.",
      type: "Wajib",
    },
    {
      code: "IF302",
      name: "Jaringan Komputer Dasar",
      sks: 3,
      desc: "Pengenalan arsitektur jaringan komputer dan protokol dasar.",
      type: "Wajib",
    },
    {
      code: "IF303",
      name: "Sistem Operasi",
      sks: 3,
      desc: "Konsep dasar sistem operasi dan manajemen sumber daya komputer.",
      type: "Wajib",
    },
    {
      code: "IF304",
      name: "Statistika dan Probabilitas",
      sks: 3,
      desc: "Metode statistika dan teori probabilitas untuk analisis data.",
      type: "Wajib",
    },
    {
      code: "IF305",
      name: "Pemrograman Web Dasar",
      sks: 3,
      desc: "Pengembangan aplikasi web menggunakan HTML, CSS, dan JavaScript.",
      type: "Wajib",
    },
  ],
  4: [
    {
      code: "IF401",
      name: "Basis Data Lanjut",
      sks: 4,
      desc: "Desain basis data, normalisasi, dan optimisasi query.",
      type: "Wajib",
    },
    {
      code: "IF402",
      name: "Interaksi Manusia-Komputer",
      sks: 3,
      desc: "Prinsip desain antarmuka pengguna yang efektif dan user-friendly.",
      type: "Wajib",
    },
    {
      code: "IF403",
      name: "Rekayasa Perangkat Lunak",
      sks: 3,
      desc: "Metodologi pengembangan perangkat lunak dan manajemen proyek.",
      type: "Wajib",
    },
    {
      code: "IF404",
      name: "Grafika Komputer",
      sks: 3,
      desc: "Konsep dasar grafika komputer dan pemrograman grafis.",
      type: "Pilihan",
    },
    {
      code: "IF405",
      name: "Pemrograman Mobile",
      sks: 3,
      desc: "Pengembangan aplikasi mobile untuk platform Android.",
      type: "Pilihan",
    },
  ],
  5: [
    {
      code: "IF501",
      name: "Jaringan Komputer Lanjut",
      sks: 4,
      desc: "Administrasi jaringan, keamanan jaringan, dan protokol lanjut.",
      type: "Wajib",
    },
    {
      code: "IF502",
      name: "Kecerdasan Buatan Dasar",
      sks: 3,
      desc: "Pengenalan konsep kecerdasan buatan dan algoritma pencarian.",
      type: "Wajib",
    },
    {
      code: "IF503",
      name: "Analisis dan Desain Algoritma",
      sks: 4,
      desc: "Teknik analisis kompleksitas algoritma dan desain algoritma efisien.",
      type: "Wajib",
    },
    {
      code: "IF504",
      name: "Pemrograman Web Lanjut",
      sks: 3,
      desc: "Pengembangan aplikasi web modern dengan framework JavaScript.",
      type: "Pilihan",
    },
    {
      code: "IF505",
      name: "Komputasi Awan",
      sks: 3,
      desc: "Konsep cloud computing dan implementasi layanan cloud.",
      type: "Pilihan",
    },
  ],
  6: [
    {
      code: "IF601",
      name: "Machine Learning",
      sks: 4,
      desc: "Algoritma machine learning dan penerapannya dalam analisis data.",
      type: "Wajib",
    },
    {
      code: "IF602",
      name: "Keamanan Informasi",
      sks: 3,
      desc: "Prinsip keamanan sistem informasi dan teknik proteksi data.",
      type: "Wajib",
    },
    {
      code: "IF603",
      name: "Data Mining",
      sks: 3,
      desc: "Teknik ekstraksi pola dan pengetahuan dari kumpulan data besar.",
      type: "Pilihan",
    },
    {
      code: "IF604",
      name: "Internet of Things",
      sks: 3,
      desc: "Konsep dan implementasi sistem IoT dengan perangkat embedded.",
      type: "Pilihan",
    },
    {
      code: "IF605",
      name: "Pengembangan Game",
      sks: 3,
      desc: "Prinsip desain dan pengembangan permainan komputer.",
      type: "Pilihan",
    },
  ],
  7: [
    {
      code: "IF701",
      name: "Big Data Analytics",
      sks: 4,
      desc: "Teknik pengolahan dan analisis data berskala besar.",
      type: "Wajib",
    },
    {
      code: "IF702",
      name: "Manajemen Proyek TI",
      sks: 3,
      desc: "Metodologi manajemen proyek dalam pengembangan sistem TI.",
      type: "Wajib",
    },
    {
      code: "IF703",
      name: "Deep Learning",
      sks: 3,
      desc: "Jaringan saraf tiruan dan aplikasi deep learning.",
      type: "Pilihan",
    },
    {
      code: "IF704",
      name: "Komputasi Kuantum",
      sks: 3,
      desc: "Pengenalan konsep dasar komputasi kuantum.",
      type: "Pilihan",
    },
    {
      code: "IF705",
      name: "Computer Vision",
      sks: 3,
      desc: "Teknik pengolahan citra dan pengenalan objek.",
      type: "Pilihan",
    },
  ],
  8: [
    {
      code: "IF801",
      name: "Kerja Praktek",
      sks: 6,
      desc: "Pengalaman kerja profesional di industri terkait teknologi informasi.",
      type: "Wajib",
    },
    {
      code: "IF802",
      name: "Skripsi",
      sks: 6,
      desc: "Penelitian mandiri dan penulisan karya ilmiah di bidang informatika.",
      type: "Wajib",
    },
  ],
};

// DATA MATA KULIAH SISTEM INFORMASI
const coursesSistemInformasi = {
  1: [
    {
      code: "SI101",
      name: "Pengantar Sistem Informasi",
      sks: 3,
      desc: "Konsep dasar sistem informasi dan perannya dalam organisasi.",
      type: "Wajib",
    },
    {
      code: "SI102",
      name: "Dasar Manajemen",
      sks: 3,
      desc: "Prinsip-prinsip dasar manajemen organisasi modern.",
      type: "Wajib",
    },
    {
      code: "SI103",
      name: "Pemrograman Bisnis",
      sks: 4,
      desc: "Pengantar pemrograman untuk aplikasi bisnis menggunakan Python.",
      type: "Wajib",
    },
    {
      code: "SI104",
      name: "Matematika Bisnis",
      sks: 3,
      desc: "Konsep matematika terapan untuk analisis bisnis.",
      type: "Wajib",
    },
    {
      code: "UN101",
      name: "Pendidikan Pancasila",
      sks: 2,
      desc: "Pemahaman nilai-nilai Pancasila dalam kehidupan berbangsa dan bernegara.",
      type: "Wajib",
    },
  ],
  2: [
    {
      code: "SI201",
      name: "Analisis Proses Bisnis",
      sks: 3,
      desc: "Teknik pemodelan dan analisis proses bisnis organisasi.",
      type: "Wajib",
    },
    {
      code: "SI202",
      name: "Sistem Basis Data",
      sks: 4,
      desc: "Desain dan implementasi basis data untuk sistem informasi.",
      type: "Wajib",
    },
    {
      code: "SI203",
      name: "Akuntansi Dasar",
      sks: 3,
      desc: "Prinsip dasar akuntansi keuangan dan manajerial.",
      type: "Wajib",
    },
    {
      code: "SI204",
      name: "Pemrograman Web",
      sks: 3,
      desc: "Pengembangan aplikasi web dasar menggunakan HTML, CSS, dan JavaScript.",
      type: "Wajib",
    },
    {
      code: "UN201",
      name: "Bahasa Inggris Bisnis",
      sks: 2,
      desc: "Pengembangan kemampuan bahasa Inggris untuk komunikasi bisnis.",
      type: "Wajib",
    },
  ],
  3: [
    {
      code: "SI301",
      name: "Sistem Enterprise",
      sks: 3,
      desc: "Arsitektur sistem informasi tingkat enterprise dan integrasinya.",
      type: "Wajib",
    },
    {
      code: "SI302",
      name: "Perancangan Sistem Interaktif",
      sks: 3,
      desc: "Prinsip desain UX/UI untuk aplikasi sistem informasi.",
      type: "Wajib",
    },
    {
      code: "SI303",
      name: "Manajemen Proyek TI",
      sks: 3,
      desc: "Metodologi manajemen proyek dalam pengembangan sistem informasi.",
      type: "Wajib",
    },
    {
      code: "SI304",
      name: "Statistika Bisnis",
      sks: 3,
      desc: "Teknik statistika untuk analisis data bisnis.",
      type: "Wajib",
    },
    {
      code: "SI305",
      name: "E-Bisnis",
      sks: 3,
      desc: "Strategi dan implementasi bisnis elektronik.",
      type: "Pilihan",
    },
  ],
  4: [
    {
      code: "SI401",
      name: "Analisis dan Desain SI",
      sks: 4,
      desc: "Metodologi analisis dan desain sistem informasi terstruktur.",
      type: "Wajib",
    },
    {
      code: "SI402",
      name: "Manajemen Basis Data",
      sks: 3,
      desc: "Administrasi dan optimisasi sistem basis data perusahaan.",
      type: "Wajib",
    },
    {
      code: "SI403",
      name: "Jaringan dan Keamanan SI",
      sks: 3,
      desc: "Infrastruktur jaringan dan keamanan sistem informasi.",
      type: "Wajib",
    },
    {
      code: "SI404",
      name: "Sistem Pendukung Keputusan",
      sks: 3,
      desc: "Konsep sistem pendukung keputusan dan business intelligence.",
      type: "Pilihan",
    },
    {
      code: "SI405",
      name: "ERP Fundamentals",
      sks: 3,
      desc: "Pengenalan sistem Enterprise Resource Planning.",
      type: "Pilihan",
    },
  ],
  5: [
    {
      code: "SI501",
      name: "Manajemen Sistem Informasi",
      sks: 3,
      desc: "Strategi manajemen sistem informasi dalam organisasi.",
      type: "Wajib",
    },
    {
      code: "SI502",
      name: "Audit Sistem Informasi",
      sks: 3,
      desc: "Teknik audit dan evaluasi sistem informasi.",
      type: "Wajib",
    },
    {
      code: "SI503",
      name: "Data Warehouse",
      sks: 3,
      desc: "Konsep dan implementasi gudang data perusahaan.",
      type: "Wajib",
    },
    {
      code: "SI504",
      name: "E-Government",
      sks: 3,
      desc: "Strategi implementasi sistem informasi pemerintahan elektronik.",
      type: "Pilihan",
    },
    {
      code: "SI505",
      name: "Manajemen Layanan TI",
      sks: 3,
      desc: "Prinsip ITIL dan manajemen layanan teknologi informasi.",
      type: "Pilihan",
    },
  ],
  6: [
    {
      code: "SI601",
      name: "Business Intelligence",
      sks: 4,
      desc: "Teknik analisis data untuk pengambilan keputusan bisnis.",
      type: "Wajib",
    },
    {
      code: "SI602",
      name: "Manajemen Pengetahuan",
      sks: 3,
      desc: "Strategi pengelolaan pengetahuan dalam organisasi.",
      type: "Wajib",
    },
    {
      code: "SI603",
      name: "Analitik Big Data",
      sks: 3,
      desc: "Teknik pengolahan dan analisis data berskala besar.",
      type: "Pilihan",
    },
    {
      code: "SI604",
      name: "Digital Marketing",
      sks: 3,
      desc: "Strategi pemasaran digital dan analisis kampanye online.",
      type: "Pilihan",
    },
    {
      code: "SI605",
      name: "Blockchain untuk Bisnis",
      sks: 3,
      desc: "Aplikasi teknologi blockchain dalam sistem bisnis.",
      type: "Pilihan",
    },
  ],
  7: [
    {
      code: "SI701",
      name: "Strategi SI dan Tata Kelola TI",
      sks: 4,
      desc: "Perencanaan strategis sistem informasi dan tata kelola TI.",
      type: "Wajib",
    },
    {
      code: "SI702",
      name: "Proyek Sistem Informasi",
      sks: 3,
      desc: "Proyek pengembangan sistem informasi secara komprehensif.",
      type: "Wajib",
    },
    {
      code: "SI703",
      name: "Manajemen Rantai Pasok Digital",
      sks: 3,
      desc: "Teknologi informasi dalam manajemen rantai pasok.",
      type: "Pilihan",
    },
    {
      code: "SI704",
      name: "Fintech",
      sks: 3,
      desc: "Inovasi teknologi dalam industri jasa keuangan.",
      type: "Pilihan",
    },
    {
      code: "SI705",
      name: "Analisis Media Sosial",
      sks: 3,
      desc: "Teknik analisis data media sosial untuk bisnis.",
      type: "Pilihan",
    },
  ],
  8: [
    {
      code: "SI801",
      name: "Magang Profesional",
      sks: 6,
      desc: "Pengalaman kerja di industri terkait sistem informasi.",
      type: "Wajib",
    },
    {
      code: "SI802",
      name: "Skripsi",
      sks: 6,
      desc: "Penelitian dan penulisan karya ilmiah di bidang sistem informasi.",
      type: "Wajib",
    },
  ],
};

// Fungsi untuk membuat kartu mata kuliah
function createCourseCard(course) {
  return `
                <div class="course-card">
                    <div class="course-card-header">
                        <div class="course-code">${course.code}</div>
                        <div class="course-title">${course.name}</div>
                        <div class="course-meta">
                            <div class="course-type">${course.type}</div>
                            <div class="sks-badge">${course.sks} SKS</div>
                        </div>
                    </div>
                    <div class="course-card-body">
                        <p class="course-description">${course.desc}</p>
                    </div>
                </div>
            `;
}

// Fungsi untuk mengisi mata kuliah ke dalam accordion
function fillCourses(program, semester, container) {
  const courses =
    program === "informatika"
      ? coursesInformatika[semester]
      : coursesSistemInformasi[semester];
  let coursesHTML = "";

  courses.forEach((course) => {
    coursesHTML += createCourseCard(course);
  });

  container.innerHTML = coursesHTML;
}

// Fungsi untuk inisialisasi tab dan accordion
function initCurriculumPage() {
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove("active"));
      // Show selected tab content
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Accordion functionality for Informatika
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const isActive = header.classList.contains("active");

      // Close all accordions
      accordionHeaders.forEach((h) => {
        h.classList.remove("active");
        h.nextElementSibling.style.display = "none";
      });

      // If clicked accordion was not active, open it
      if (!isActive) {
        header.classList.add("active");
        const panel = header.nextElementSibling;
        panel.style.display = "block";

        // Fill courses for this semester
        const semester = header.getAttribute("data-semester");
        const program =
          header.closest(".tab-content").id === "informatika"
            ? "informatika"
            : "sistem-informasi";
        const container = panel.querySelector(".courses-container");

        fillCourses(program, semester, container);
      }
    });
  });

  // Open first semester by default for Informatika
  const firstHeader = document.querySelector(
    '.accordion-header[data-semester="1"]'
  );
  firstHeader.classList.add("active");
  const firstPanel = firstHeader.nextElementSibling;
  firstPanel.style.display = "block";
  fillCourses("informatika", 1, firstPanel.querySelector(".courses-container"));

  // Generate Sistem Informasi content
  const siContent = document.getElementById("sistem-informasi");
  let siHTML = "";

  for (let i = 1; i <= 8; i++) {
    let semesterTitle = "";
    switch (i) {
      case 1:
        semesterTitle = "Semester 1 - Dasar Sistem Informasi";
        break;
      case 2:
        semesterTitle = "Semester 2 - Analisis Proses Bisnis";
        break;
      case 3:
        semesterTitle = "Semester 3 - Sistem Enterprise";
        break;
      case 4:
        semesterTitle = "Semester 4 - Desain Sistem Informasi";
        break;
      case 5:
        semesterTitle = "Semester 5 - Manajemen SI";
        break;
      case 6:
        semesterTitle = "Semester 6 - Business Intelligence";
        break;
      case 7:
        semesterTitle = "Semester 7 - Strategi SI";
        break;
      case 8:
        semesterTitle = "Semester 8 - Magang & Skripsi";
        break;
    }

    siHTML += `
                    <div class="accordion">
                        <div class="accordion-header" data-semester="${i}">
                            <h3><i class="fas fa-book"></i> ${semesterTitle}</h3>
                            <span class="accordion-icon"><i class="fas fa-chevron-down"></i></span>
                        </div>
                        <div class="accordion-panel">
                            <div class="courses-container"></div>
                        </div>
                    </div>
                `;
  }

  siContent.innerHTML = siHTML;

  // Add event listeners for Sistem Informasi accordions
  const siAccordionHeaders = siContent.querySelectorAll(".accordion-header");

  siAccordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const isActive = header.classList.contains("active");

      // Close all accordions
      siAccordionHeaders.forEach((h) => {
        h.classList.remove("active");
        h.nextElementSibling.style.display = "none";
      });

      // If clicked accordion was not active, open it
      if (!isActive) {
        header.classList.add("active");
        const panel = header.nextElementSibling;
        panel.style.display = "block";

        // Fill courses for this semester
        const semester = header.getAttribute("data-semester");
        const container = panel.querySelector(".courses-container");

        fillCourses("sistem-informasi", semester, container);
      }
    });
  });
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", initCurriculumPage);
