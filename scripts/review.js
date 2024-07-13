document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

if (localStorage.getItem('reviewCount')) {
    localStorage.setItem('reviewCount', parseInt(localStorage.getItem('reviewCount')) + 1);
} else {
    localStorage.setItem('reviewCount', 1);
}

console.log(`You have submitted ${localStorage.getItem('reviewCount')} reviews.`);
