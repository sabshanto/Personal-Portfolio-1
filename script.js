// --- Project Filtering Logic ---
function filterProjects(category, btn) {
    // 1. Remove 'active' class from all filter buttons
    let buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => button.classList.remove('active'));
    
    // 2. Add 'active' class to the clicked button
    btn.classList.add('active');

    // 3. Select all project cards
    let projects = document.querySelectorAll('.project-card');
    
    // 4. Loop through cards and show/hide based on category
    projects.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hide');
        } else {
            // Check if card's data-category matches clicked category
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        }
    });
}

// --- Testimonial Slider Data & Logic ---
const testimonials = [
    {
        text: "Sabbir is a versatile creative. His ability to handle both code and design made our project workflow incredibly smooth.",
        name: "Club President",
        role: "DIU Software Engineering Club",
        // UPDATED IMAGE PATH
        img: "images/Club President.png" 
    },
    {
        text: "The promo video he created for Codetrap was full of energy and perfectly captured the event's spirit. Highly recommended.",
        name: "Event Coordinator",
        role: "Codetrap Programming Contest",
        // UPDATED IMAGE PATH
        img: "images/Event Coordinator.png"
    },
    {
        text: "Great attention to detail in the Proctor Repository System interface. It is user-friendly and looks professional.",
        name: "Faculty Supervisor",
        role: "Daffodil International University",
        // UPDATED IMAGE PATH
        img: "images/Faculty Supervisor.png"
    }
];

function showTestimonial(index) {
    // 1. Update Text content
    document.getElementById('t-text').innerText = testimonials[index].text;
    document.getElementById('t-name').innerText = testimonials[index].name;
    document.getElementById('t-role').innerText = testimonials[index].role;
    
    // 2. Update Image
    document.getElementById('t-img').src = testimonials[index].img;

    // 3. Update Dots (Active state)
    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}