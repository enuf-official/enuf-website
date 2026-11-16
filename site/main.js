const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Keep the short navigation in sync with the section being read.
if ("IntersectionObserver" in window) {
  const links = Array.from(document.querySelectorAll('nav a[href^="#"]'));
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const link = links.find((item) => item.hash === `#${entry.target.id}`);
      if (!link) continue;
      if (entry.isIntersecting) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }, { rootMargin: "-10% 0px -35% 0px" });
  for (const link of links) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}
