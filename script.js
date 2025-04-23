function joinNow() {
    alert("Thank you for your interest! We'll contact you soon with beta access.");
  }
  
  function featureClicked(featureName) {
    alert("You clicked on: " + featureName);
  }
  
  function handleJoin(event) {
    event.preventDefault();
    alert("Thank you for signing up! We'll be in touch soon.");
  }
  
  function handleContact(event) {
    event.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
  }
  const modalData = {
    learning: {
      title: "Personalized Learning Paths",
      desc: "Get a custom-tailored learning plan powered by AI that adapts to your coding strengths, weaknesses, and speed. Advance at your own pace with adaptive difficulty levels and structured growth milestones."
    },
    feedback: {
      title: "Real-Time AI Feedback",
      desc: "Our AI analyzes your code as you write and suggests improvements, detects bugs, and provides best practice tips instantly. It's like having a tutor beside you 24/7."
    },
    mentorship: {
      title: "Live Mentorship",
      desc: "Connect with industry experts during scheduled live sessions. Get personalized career advice, resolve doubts, and build your professional network."
    },
    projects: {
      title: "Industry Projects",
      desc: "Work on real-world projects from top companies to build your portfolio. Collaborate with peers, get feedback from mentors, and showcase your skills."
    },
    resume: {
      title: "AI-Driven Resume Builder",
      desc: "Use AI tools to craft a powerful resume based on your skills, project experience, and job interests. Simulate interview questions and get AI-reviewed suggestions."
    },
    jobs: {
      title: "Job Placement",
      desc: "Once you're ready, we help match you with hiring partners. From mock interviews to job referrals, we ensure you're ready for the tech industry."
    }
  };

  function openModal(key) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").textContent = modalData[key].title;
    document.getElementById("modal-description").textContent = modalData[key].desc;
    modal.style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }