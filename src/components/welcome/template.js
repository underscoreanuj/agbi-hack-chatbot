
const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Welcome</h5>
      <div class="card-text">
        <p>
          This is an interactive chatbot which mimics a doctor's interview to provide you 
          with a preliminary diagnosis based on your symptoms.
        </p>
        <p>
          Please click 
          <span class="badge badge-primary">Next</span> 
          to begin the chat.
        </p>
        <p class="text-muted small">
          <i class="fa fa-info-circle"></i> 
          The objective of this chatbot is to aid the user understand their symptoms better.
          We do not collect/store any personal data without your consent.
          We ask you your age, sex & symptoms only.
          If & only if you consent to it we use your location to provide you with a better user experiance.
          <a target="_blank" href="https://www.privacypolicies.com/live/bad23b39-364b-47c0-81a4-bec3d5a1d284">
            T&C
          </a>
          </p>
      </div>
    `);
  });
};

export default template;
