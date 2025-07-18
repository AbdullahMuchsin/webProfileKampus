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

// Sample project data
const projects = [
  {
    id: 1,
    title: "Sistem Informasi Akademik",
    description:
      "Platform terintegrasi untuk manajemen data akademik mahasiswa, dosen, dan mata kuliah.",
    semester: 5,
    programStudi: "Teknik Informatika",
    category: "web",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Aplikasi E-Commerce Mobile",
    description:
      "Aplikasi belanja online dengan fitur pembayaran digital dan rekomendasi produk berbasis AI.",
    semester: 6,
    programStudi: "Sistem Informasi",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Node.js", "TensorFlow"],
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Prediksi Harga Saham Menggunakan LSTM",
    description:
      "Implementasi jaringan saraf tiruan untuk memprediksi pergerakan harga saham di bursa efek.",
    semester: 7,
    programStudi: "Teknik Informatika",
    category: "ai",
    technologies: ["Python", "TensorFlow", "Keras", "Pandas"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    title: "Sistem Monitoring Jaringan",
    description:
      "Aplikasi untuk memantau kinerja dan kesehatan infrastruktur jaringan komputer kampus.",
    semester: 4,
    programStudi: "Teknik Informatika",
    category: "network",
    technologies: ["Python", "SNMP", "Grafana", "InfluxDB"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 5,
    title: "Analisis Sentimen Media Sosial",
    description:
      "Sistem untuk menganalisis opini publik tentang produk tertentu berdasarkan data dari Twitter.",
    semester: 6,
    programStudi: "Sistem Informasi",
    category: "data",
    technologies: ["Python", "NLTK", "Scikit-learn", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 6,
    title: "Game Edukasi Anak",
    description:
      "Permainan interaktif untuk membantu anak-anak belajar berhitung dan membaca.",
    semester: 3,
    programStudi: "Teknik Informatika",
    category: "mobile",
    technologies: ["Unity", "C#", "Blender"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    title: "Sistem Pakar Diagnosa Penyakit",
    description:
      "Aplikasi berbasis web untuk membantu diagnosa awal penyakit berdasarkan gejala.",
    semester: 8,
    programStudi: "Sistem Informasi",
    category: "ai",
    technologies: ["JavaScript", "Vue.js", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
  },
  {
    id: 8,
    title: "IoT Smart Home System",
    description:
      "Sistem otomasi rumah berbasis Internet of Things dengan kontrol melalui smartphone.",
    semester: 5,
    programStudi: "Teknik Informatika",
    category: "network",
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "React Native"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

// Function to render project cards
function renderProjects(projectsToRender) {
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";

  projectsToRender.forEach((project) => {
    const techTags = project.technologies
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join("");

    const projectCard = `
                    <div class="project-card">
                        <div class="project-image">
                            <img src="${project.image}" alt="${project.title}">
                            <div class="project-badge">Semester ${
                              project.semester
                            }</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <div class="project-meta">
                                <span>${project.programStudi}</span>
                                <span>Kategori: ${getCategoryName(
                                  project.category
                                )}</span>
                            </div>
                            <p class="project-description">${
                              project.description
                            }</p>
                            <div class="project-tech">
                                ${techTags}
                            </div>
                            <a href="#" class="project-link">Lihat Detail Proyek</a>
                        </div>
                    </div>
                `;

    projectsGrid.innerHTML += projectCard;
  });

  // Update results count
  document.querySelector(
    ".results-count"
  ).textContent = `Menampilkan ${projectsToRender.length} proyek`;
}

// Helper function to get category name
function getCategoryName(category) {
  const categories = {
    web: "Pengembangan Web",
    mobile: "Aplikasi Mobile",
    ai: "Kecerdasan Buatan",
    data: "Sains Data",
    network: "Jaringan Komputer",
  };
  return categories[category] || category;
}

// Filter projects based on selections
function filterProjects() {
  const programStudi = document.getElementById("program-studi").value;
  const semester = document.getElementById("semester").value;
  const kategori = document.getElementById("kategori").value;

  let filteredProjects = projects;

  if (programStudi !== "all") {
    const programName =
      programStudi === "ti" ? "Teknik Informatika" : "Sistem Informasi";
    filteredProjects = filteredProjects.filter(
      (project) => project.programStudi === programName
    );
  }

  if (semester !== "all") {
    filteredProjects = filteredProjects.filter(
      (project) => project.semester === parseInt(semester)
    );
  }

  if (kategori !== "all") {
    filteredProjects = filteredProjects.filter(
      (project) => project.category === kategori
    );
  }

  renderProjects(filteredProjects);
}

// Initialize event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Render initial projects
  renderProjects(projects);

  // Add event listeners to filters
  document
    .getElementById("program-studi")
    .addEventListener("change", filterProjects);
  document
    .getElementById("semester")
    .addEventListener("change", filterProjects);
  document
    .getElementById("kategori")
    .addEventListener("change", filterProjects);
});

// Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");
    });
  });
});
