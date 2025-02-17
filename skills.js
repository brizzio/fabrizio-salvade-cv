// Skill data (edit this array to add more skills)
//<section class="bg-gray-100 p-8">
//<h1 class="text-3xl font-bold mb-8 text-center">My Skills</h1>

//<!-- Container for skill bars -->
//<div id="skills" class="max-w-xl mx-auto space-y-6"></div>
//</section>

const skills = [
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 60 },
    { name: 'JavaScript', level: 50 },
    { name: 'Node.js', level: 40 },
    { name: 'React', level: 60 },
    { name: 'Git', level: 70 },
  ];

  // Function to render skill bars
  function renderSkills() {
    const container = document.getElementById('skills');
    container.innerHTML = '';

    skills.forEach(skill => {
      const skillDiv = document.createElement('div');
      console.log('skill', skill, container)
      skillDiv.className = 'skill';
      skillDiv.innerHTML = `
        <!-- Skill label and percentage -->
        <div class="flex justify-between mb-2">
          <span class="font-semibold">${skill.name}</span>
          <span>${skill.level}%</span>
        </div>

        <!-- Skill bar -->
        <div class="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
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