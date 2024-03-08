    document.addEventListener('DOMContentLoaded', function () {
        const businesses = [
            
        { name: 'FlavorFusion Grill', category: 'restaurant', neighborhood: 'Downtown', rating: 4.5 },
        { name: 'CulinaryCraft Eatery', category: 'auto', neighborhood: 'Midtown', rating: 3.8 },
        { name: 'TastyPalette Bistro', category: 'auto', neighborhood: 'Suburb', rating: 4.2 },
        // Add more sample business data here
        ];
    
        // Function to display businesses
        function displayBusinesses(businessesToShow) {
            const businessList = document.querySelector('.business-list');
            businessList.innerHTML = '';
    
            businessesToShow.forEach(business => {
                const businessItem = document.createElement('div');
                businessItem.classList.add('business');
                businessItem.innerHTML = `
                    <h2>${business.name}</h2>
                    <p>Category: ${business.category}</p>
                    <p>Neighborhood: ${business.neighborhood}</p>
                    <p>Rating: ${business.rating} stars</p>
                `;
                businessList.appendChild(businessItem);
            });
        }
    
        // Initial display of all businesses
        displayBusinesses(businesses);
    
        // Function to update category dropdown
        function updateCategoryDropdown(selectedCategory) {
            const categoryDropdown = document.querySelector('#category');
            categoryDropdown.value = selectedCategory;
        }
    
        // Event listener for category dropdown
        document.querySelector('#category').addEventListener('change', function () {
            const selectedCategory = this.value;
            updateCategoryDropdown(selectedCategory);
    
            if (selectedCategory === 'all') {
                // Display all businesses
                displayBusinesses(businesses);
            } else {
                // Display only businesses of the selected category
                const filteredBusinesses = businesses.filter(business => business.category === selectedCategory);
                displayBusinesses(filteredBusinesses);
            }
        });
    });
    