document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const categories = document.querySelectorAll('.category-list a');
    categories.forEach(category => {
        const text = category.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            category.style.display = 'inline-block';
        } else {
            category.style.display = 'none';
        }
    });
});
