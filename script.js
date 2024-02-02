document.addEventListener('DOMContentLoaded', function() {
    const generateCardBtn = document.getElementById('generate-card-btn');
    const cardGenerator = document.querySelector('.card-generator');

    generateCardBtn.addEventListener('click', function() {
        // Call function to fetch Kanye West quote or lyrics from API
        fetchKanyeWestQuote().then(quote => {
            // Call function to generate Pokémon card with Kanye West content
            const cardHTML = generateCard(quote);
            // Render the generated card HTML
            cardGenerator.innerHTML = cardHTML;
        }).catch(error => {
            console.error('Error fetching Kanye West quote:', error);
        });
    });

    // Function to fetch Kanye West quote or lyrics from API
    async function fetchKanyeWestQuote() {
        try {
            // You need to replace 'your-kanye-west-api-endpoint' with the actual API endpoint
            const response = await fetch('your-kanye-west-api-endpoint');
            const data = await response.json();
            return data.quote; // Assuming the API returns the quote as 'quote' property
        } catch (error) {
            throw new Error('Failed to fetch Kanye West quote');
        }
    }

    // Function to generate Pokémon card with Kanye West content
    function generateCard(quote) {
        // Generate the card HTML structure with the quote
        const cardHTML = `
            <div class="pokemon-card">
                <img src="kanye-west-image.jpg" alt="Kanye West" class="kanye-west-image">
                <div class="card-content">
                    <h2 class="card-title">Kanye West Pokémon Card</h2>
                    <p class="quote">${quote}</p>
                </div>
            </div>
        `;
        return cardHTML;
    }
});
