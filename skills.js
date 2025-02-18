// Skill data (edit this array to add more skills)
//<section class="bg-gray-100 p-8">
//<h1 class="text-3xl font-bold mb-8 text-center">My Skills</h1>

//<!-- Container for skill bars -->
//<div id="skills" class="max-w-xl mx-auto space-y-6"></div>
//</section>

const skills = [
    { name: 'Gestão de Progetos (Scrum, Agile, Lean, CCPM', level: 90 },
    { name: 'Frontend e UX/UI (React, Next, Flutter, PWA)', level: 75 },
    { name: 'Stacks (MERN, LAMP, Serverless, GraphQL + Apollo )', level: 80 },
    { name: 'Linguagens de Backend (Node, Php, .Net)', level: 95 },
    { name: 'Database (CouchDB, Redis, Kafka, Hadoop)', level: 60 },
    { name: 'Versionamento (Git, Bitbucket)', level: 90 },
    { name: 'Devops (DNS, Deploy, NGINX, APACHE)', level: 70 },
    { name: 'IA (Agents, Tensorflow, Prompt, Redes Neurais)', level: 70 },
  ];

  // Function to render skill bars
  function renderSkills() {
    const container = document.getElementById('skills');
    container.innerHTML = '';

    skills.forEach(skill => {
      const skillDiv = document.createElement('div');
      console.log('skill', skill, container)
      skillDiv.className = 'skill px-4';
      skillDiv.innerHTML = `
        <!-- Skill label and percentage -->
        <div class="flex justify-between mb-2">
          <span class="font-semibold text-sm">${skill.name}</span>
          <span>${skill.level}%</span>
        </div>

        <!-- Skill bar -->
        <div class="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-green-400 to-blue-500 skill-level"
            style="width: 0;"
            data-level="${skill.level}">
          </div>
        </div>
      `;
      container.appendChild(skillDiv);
    });
  }

  // Function to animate bars on scroll
  function animateSkills() {
    document.querySelectorAll('.skill-level').forEach(skill => {
      const rect = skill.getBoundingClientRect();
      // Check if the bar is visible in the viewport
      if (rect.top < window.innerHeight) {
        skill.style.width = skill.getAttribute('data-level') + '%';
      }
    });
  }

  // Initialize skill bars and animate on load/scroll
  renderSkills();
  window.addEventListener('scroll', animateSkills);
  window.addEventListener('DOMContentLoaded', () => {
    renderSkills();  // Ensure skill bars are added to the DOM
    animateSkills(); // Trigger animation after rendering
  });