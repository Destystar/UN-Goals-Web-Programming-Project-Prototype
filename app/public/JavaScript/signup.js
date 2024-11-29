document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('Signup-name');
        const emailInput = document.getElementById('Signup-email');
        const commentInput = document.getElementById('comment');
        
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameInput.value,
                    email: emailInput.value,
                    comment: commentInput.value
                })
            });
            
            if (response.ok) {
                alert('Thank you! We will send you an email.');
                form.reset();
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
});

//The image section
let image = document.getElementById("image");
/* Add image paths here or remove if only single image wanted*/
let images = [
  "../Assets/img 1.jpg",
  "../Assets/img 2.jpg",
  "../Assets/img 3.jpg",
  "../Assets/img 4.jpg",
];

function setImage() {
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}

window.onload = setImage;
