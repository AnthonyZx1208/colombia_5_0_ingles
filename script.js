// Technical glossary generated with JavaScript.
const terms = [
  ["Figma", "Design", "A tool for creating interfaces, prototypes, and design systems."],
  ["UI", "Interface", "The visual elements that allow users to interact with an application."],
  ["UX", "Experience", "The perception and ease of use a person has while using a product."],
  ["Component", "Design", "A reusable element that maintains consistency across an interface."],
  ["Variant", "Design", "A different state or version of the same component."],
  ["Auto Layout", "Figma", "A feature that automatically arranges elements according to content."],
  ["Frame", "Figma", "A container used to organize screens or groups of elements."],
  ["Asset", "Resources", "A visual file or element that can be reused in a project."],
  ["9-slice", "Video Games", "A technique for resizing panels without deforming their corners."],
  ["Prototype", "Validation", "An interactive simulation used to test an idea before full development."],
  ["HTML5", "Web", "The language that structures the content of a page."],
  ["CSS3", "Web", "The language that defines styles, colors, spacing, and visual design."],
  ["JavaScript", "Web", "A language that adds actions and interactivity to websites."],
  ["Bootstrap", "Framework", "A library that helps create responsive sites with ready-made components."],
  ["Grid", "Layout", "A row-and-column system for distributing content."],
  ["Responsive", "Web Design", "The ability to adapt to phones, tablets, and computers."],
  ["Navbar", "Navigation", "A menu bar that allows users to move through the page."],
  ["Card", "Component", "A visual block for presenting information in an organized way."],
  ["Carousel", "Component", "An element that displays information in slides."],
  ["SEO", "Web", "Practices that help search engines understand a page."],
  ["Accessibility", "Quality", "Design intended to make a website usable by more people."],
  ["AI", "Technology", "Systems capable of analyzing information and supporting complex tasks."],
  ["Automation", "Productivity", "The execution of tasks through technological systems."],
  ["Data", "Information", "Elements used to analyze processes and support decisions."],
  ["Privacy", "Ethics", "Protection of users' personal information."],
  ["Cybersecurity", "Security", "Protection against attacks, losses, or unauthorized access."],
  ["Algorithm", "Programming", "An ordered set of steps for solving a problem."],
  ["Repository", "Development", "A space where project code is stored and organized."],
  ["GitHub Pages", "Publishing", "A service for publishing websites from a repository."],
  ["Digital Ethics", "Responsibility", "Criteria for using technology in a fair and secure way."]
];

const table = document.querySelector("#glossaryTable");

if (table) {
  terms.forEach(([term, category, explanation]) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${term}</strong></td>
      <td>${category}</td>
      <td>${explanation}</td>
    `;
    table.appendChild(row);
  });
}

// Buttons that reveal key ideas in the talk cards.
document.querySelectorAll(".reveal-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const target = document.querySelector(`#${targetId}`);

    if (target) {
      target.classList.toggle("is-visible");
      button.textContent = target.classList.contains("is-visible") ? "Hide key idea" : "Show key idea";
    }
  });
});

// Automatic menu closing on small screens.
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#mainMenu");
    const instance = bootstrap.Collapse.getInstance(menu);

    if (instance) {
      instance.hide();
    }
  });
});
