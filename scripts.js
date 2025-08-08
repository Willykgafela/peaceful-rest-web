document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  document.querySelectorAll('.accordion-question').forEach(q => {
    q.addEventListener('click', () => {
      const ans = q.nextElementSibling;
      ans.classList.toggle('open');
    });
  });

  // Form validation for booking & contact
  document.querySelectorAll('form.validate').forEach(form => {
    form.addEventListener('submit', e => {
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = 'red';
        }
      });
      if (!valid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  });

  // Modal popup (e.g. donation or callback request)
  document.querySelectorAll('[data-modal-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mod = document.querySelector(btn.dataset.modalTarget);
      mod.style.display = 'flex';
    });
  });
  document.querySelectorAll('.modal .close').forEach(span => {
    span.addEventListener('click', () => {
      span.closest('.modal').style.display = 'none';
    });
  });
  window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });

  // Modal open/close logic
  document.querySelectorAll('[data-modal-target]').forEach(btn => {
    btn.onclick = function() {
      document.querySelector(this.getAttribute('data-modal-target')).style.display = 'block';
    };
  });
  document.querySelectorAll('.close').forEach(span => {
    span.onclick = function() {
      this.closest('.modal').style.display = 'none';
    };
  });
  window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) modal.style.display = 'none';
    });
  };

  // Payment form logic
  const donationForm = document.getElementById('donationForm');
  if (donationForm) {
    donationForm.onsubmit = function(e) {
      e.preventDefault();
      // Simulate payment success
      donationForm.style.display = 'none';
      document.getElementById('paymentSuccess').style.display = 'block';
    };
  }
});
