class SkillsBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.animateSkillsOnScroll();
    }

    static get observedAttributes() {
        return ['skills'];
      }
    
    attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'skills' && oldValue !== newValue) {
        this.render();
    }
    }

  
    render() {
        const skills = JSON.parse(this.getAttribute('skills') || '[]');
  
        if (!Array.isArray(skills) || skills.length === 0) {
          this.shadowRoot.innerHTML = `<p>No skills available.</p>`;
          return;
        }
      
      
      this.shadowRoot.innerHTML = `
        <style>
          .skill-bar-container {
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            background-color:rgb(223, 230, 244);
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
            
          }
          .skill-label {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            margin-bottom: 0.1rem;
          }
          .progress-bar {
            width: 100%;
            height: 0.3rem;
            border-radius: 9999px;
            background-color:rgb(251, 251, 248); /* gray-300 */
            overflow: hidden;
          }
          .progress {
            height: 100%;
            width: 0;
            background: linear-gradient(to right, #4ade80, #3b82f6); /* Green to Blue */
            transition: width 0.8s ease;
          }
        </style>
  
        <div class="skill-bar-container">
          ${skills.map(skill => `
            <div class="skill">
              <div class="skill-label">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress" data-level="${skill.level}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  
    animateSkillsOnScroll() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress');
            progressBar.style.width = `${progressBar.dataset.level}%`;
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
  
      this.shadowRoot.querySelectorAll('.skill').forEach(skill => observer.observe(skill));
    }
  }
  
  customElements.define('skills-bar', SkillsBar);
  