// let testimonialIndex = 0;
// // let cropIndex = 0;

// function showTestimonialSlides() {
//     const slides = document.querySelectorAll('.testimonial-slide');
//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${-testimonialIndex * 100}%)`;
//     });
//     testimonialIndex = (testimonialIndex + 1) % slides.length;
// }

// // function showCropSlides() {
// //     const slides = document.querySelectorAll('.crop-slide');
// //     slides.forEach((slide, index) => {
// //         slide.style.transform = `translateX(${-cropIndex * 100}%)`;
// //     });
// //     cropIndex = (cropIndex + 1) % slides.length;
// // }

// document.addEventListener('DOMContentLoaded', () => {
//     showTestimonialSlides();
//     // showCropSlides();
//     setInterval(showTestimonialSlides, 5000); // Change slide every 5 seconds
//     // setInterval(showCropSlides, 5000); // Change slide every 5 seconds
// });

let testimonialIndex = 0;

function showTestimonialSlides() {
    const slides = document.querySelectorAll('.testimonial-slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-testimonialIndex * 100}%)`;
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.testimonial-slide');
    testimonialIndex = (testimonialIndex + 1) % slides.length;
    showTestimonialSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.testimonial-slide');
    testimonialIndex = (testimonialIndex - 1 + slides.length) % slides.length;
    showTestimonialSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showTestimonialSlides();
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});


// document.querySelectorAll('.accordion-button').forEach(button => {
//     button.addEventListener('click', () => {
//         const accordionContent = button.nextElementSibling;
//         button.classList.toggle('active');

//         if (button.classList.contains('active')) {
//             accordionContent.style.display = 'block';
//         } else {
//             accordionContent.style.display = 'none';
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const data = {
//         precisionFarmingEfficiency: "85%",
//         reducedCarbonEmissions: "15% reduction",
//         waterConservation: "20% savings",
//         increasedCropYield: "30% increase",
//         soilHealthImprovement: "25% improvement",
//         pesticideReduction: "40% reduction",
//         energySavings: "18% savings"
//     };

//     document.getElementById('precision-farming-efficiency').textContent = data.precisionFarmingEfficiency;
//     document.getElementById('reduced-carbon-emissions').textContent = data.reducedCarbonEmissions;
//     document.getElementById('water-conservation').textContent = data.waterConservation;
//     document.getElementById('increased-crop-yield').textContent = data.increasedCropYield;
//     document.getElementById('soil-health-improvement').textContent = data.soilHealthImprovement;
//     document.getElementById('pesticide-reduction').textContent = data.pesticideReduction;
//     document.getElementById('energy-savings').textContent = data.energySavings;
// });
