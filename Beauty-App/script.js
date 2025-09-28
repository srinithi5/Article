document.addEventListener('DOMContentLoaded', function() {
    const branchesData = [
        {
            title: 'MG Road Salon',
            imageSrc: 'img1.jpg',
            openingDate: 'Opened: January 10, 2022',
            details: 'Address: 101 Fashion Ave, MG Road, Bengaluru.<br>Services: Hair, Makeup, Facials',
            locationLink: 'https://maps.google.com',
            isOpen: true
        },
        {
            title: 'Indiranagar Beauty Hub',
            imageSrc:  'img2.jpg',
            openingDate: 'Opened: June 05, 2023',
            details: 'Address: 123 Glow Street, Indiranagar, Bengaluru.<br>Services: Nails, Skincare, Makeover',
            locationLink: 'https://maps.google.com',
            isOpen: true
        },
        {
            title: 'Koramangala Glam Studio',
            imageSrc: 'img5.jpg',
            openingDate: 'Opened: August 10, 2024',
            details: 'Address: 77 Chic Lane, Koramangala, Bengaluru.<br>Services: Spa, Bridal, Hair',
            locationLink: 'https://maps.google.com',
            isOpen: true
        },
        {
            title: 'Jayanagar Retreat',
            imageSrc: 'img4.jpg',
            openingDate: 'Opened: March 12, 2025',
            details: 'Address: 55 Pamper Road, Jayanagar, Bengaluru.<br>Services: Skin Treatments, Wellness',
            locationLink: 'https://maps.google.com',
            isOpen: true
        }
    ];
    const branchesContainer = document.getElementById('branches-container');
    for (let i = 0; i < branchesData.length; i++) {
        const branch = branchesData[i];
        if (branch.isOpen === true) {
            const tile = document.createElement('div');
            tile.className = 'branch-tile';
            tile.innerHTML =
            `<img src="${branch.imageSrc}" alt="${branch.title}">
                <div class="branch-tile-content">
                    <h3>${branch.title}</h3>
                    <div class="date">${branch.openingDate}</div>
                    <div class="details">${branch.details}</div>
                    <a class="location-link" href="${branch.locationLink}" target="_blank">View Location →</a>
                </div>`;
            branchesContainer.appendChild(tile);
        }
    }

    // Contact form handler (dummy, can be expanded)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
});
