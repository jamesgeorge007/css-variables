const controls = document.querySelectorAll('.controls input');

   function handleChange(){
      const suffix = this.dataset.unit || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    controls.forEach(input => input.addEventListener('change', handleChange));
    controls.forEach(input => input.addEventListener('mousemove', handleChange));