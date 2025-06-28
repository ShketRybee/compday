document.addEventListener('DOMContentLoaded', function() {
    const catalogueTitle = document.querySelector('.catalogue-title');
    const catalogueList = document.querySelector('.catalogue-list');
    
    catalogueTitle.addEventListener('click', function() {
        catalogueList.classList.toggle('hidden');
    });
});