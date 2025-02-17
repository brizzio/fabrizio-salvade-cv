class TimelineElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['jobs'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'jobs' && newValue) {
        this.jobs = JSON.parse(newValue);
        this.render();
      }
    }
  
    connectedCallback() {
      if (this.hasAttribute('jobs')) {
        this.jobs = JSON.parse(this.getAttribute('jobs'));
        this.render();
      }
    }
  
    render() {
      if (!this.jobs || !Array.isArray(this.jobs)) {
        this.shadowRoot.innerHTML = `<p>No jobs available.</p>`;
        return;
      }
  
      const timelineHtml = this.jobs.map((job) => `
        <article class="timeline__item animate-on-scroll">
          <div class="inner">
            <span class="timeline__date">
              <span class="timeline__month">${job.begin.month}</span>
              <span class="timeline__year">${job.begin.year}</span>
            </span>
            <div class="timeline__card">
              <h2 class="timeline__card-title">
                ${job.company ? `${job.occupation} at ${job.company}` : job.occupation}
                <br />
                <small class="timeline__card-title--small">(${job.duration || 'present'})</small>
              </h2>
              <p>${job.description}</p>
            </div>
          </div>
        </article>
      `).join('');
  
      this.shadowRoot.innerHTML = `
        <style>
          .timeline {
            max-width: 25rem;
            margin: 0 auto;
          }
          .timeline__item {
            width: 100%;
            margin: 0 0 20px 0;
            position: relative;
          }
          .timeline__item:after {
            content: '';
            display: block;
            clear: both;
          }
          .timeline__item div.inner {
            width: 100%;
            float: left;
            margin: 85px 0 0 0;
          }
          .timeline__date {
            display: block;
            width: 60px;
            height: 60px;
            padding: 3px 5px;
            position: absolute;
            top: 0;
            left: 50%;
            margin: 0 0 0 -30px;
            border-radius: 100%;
            border: 4px solid rgb(22, 12, 172);
            font-size: 12px;
            font-weight: 900;
            text-transform: uppercase;
            
            color: rgb(22, 12, 172);
            box-shadow: 0 0 0 7px #f3f4f6;
          }
          .timeline__date span {
            display: block;
            text-align: center;
          }
          .timeline__month {
            font-size: 18px;
            padding-top: 4px;
          }
          .timeline__year {
            font-size: 10px;
          }
          .timeline__card {
            border-radius: 6px;
            border: 2px solid rgb(6, 6, 6);
            transform: translate(-50%);
          }
          .timeline__card-title {
            padding: 15px;
            margin: 0;
            color: #fff;
            font-size: 20px;
            text-transform: uppercase;
            border-radius: 3px 3px 0 0;
            position: relative;
          }
          .timeline__card-title:after {
            content: '';
            position: absolute;
            top: -6px;
            left: 30%;
            width: 20px;
            height: 20px;
            transform: rotate(-45deg);
          }
          .timeline__item div.inner p {
            padding: 15px;
            margin: 0;
            font-size: 14px;
            background: #f3f4f6;
            color: #333;
            border-radius: 0 0 6px 6px;
          }
          .timeline__item:nth-child(2n+2) div.inner {
            float: right;
            .timeline__card {
              transform: translate(50%);
            }
          }
          .timeline__card-title {
            background:rgb(5, 59, 25);
          }
          .timeline__card-title:after {
            background:rgb(5, 59, 25);
          }
  
          .timeline__card-title--small {
            font-size: 10px;
          }
        </style>
        <div class="timeline">
          ${timelineHtml}
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('timeline-element', TimelineElement);
  