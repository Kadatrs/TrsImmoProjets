function slideLeftIfInView(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target);
      }
    });
  }

function slideRightIfInView(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target);
      }
    });
  }











  
  var leftElement = document.querySelector('.left');
  
  var observer = new IntersectionObserver(slideLeftIfInView, {
    root: null,
    threshold: 0.2 // Adjust the threshold as needed
  });
  
  observer.observe(leftElement);
  





  
  var rightElement = document.querySelector('.right');
  
  var observer = new IntersectionObserver(slideRightIfInView, {
    root: null,
    threshold: 0.2 // Adjust the threshold as needed
  });
  
  observer.observe(rightElement);



  
  
  
  
  
  
  
  
  var leftElement = document.querySelector('.propic1');
  
  var observer = new IntersectionObserver(slideLeftIfInView, {
    root: null,
    threshold: 0.2 // Adjust the threshold as needed
  });
  
  observer.observe(leftElement);







  var rightElement = document.querySelector('.propic3');
  
  var observer = new IntersectionObserver(slideRightIfInView, {
    root: null,
    threshold: 0.2 // Adjust the threshold as needed
  });
  
  observer.observe(rightElement);