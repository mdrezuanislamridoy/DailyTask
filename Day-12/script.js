const headings = document.querySelectorAll('.heading');
    const paras = document.querySelectorAll('.para');

    headings.forEach(heading => {
      heading.addEventListener('click', () => {
        paras.forEach(para => para.style.display = 'none');
        document.getElementById(heading.dataset.target).style.display = 'block';
      });
    });