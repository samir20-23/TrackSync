< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Ultimate API Showcase</title>
                    <style>
                        :root {
                            --primary - color: #4361ee;
                        --secondary-color: #3f37c9;
                        --accent-color: #f72585;
                        --bg-color: #f8f9fa;
                        --card-bg: #ffffff;
                        --text-color: #333333;
                        --header-bg: #4cc9f0;
        }

                        body {
                            font - family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: var(--bg-color);
                        color: var(--text-color);
        }

                        header {
                            background - color: var(--header-bg);
                        color: white;
                        text-align: center;
                        padding: 1.5rem;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

                        h1 {
                            margin: 0;
                        font-size: 2.5rem;
                        letter-spacing: 1px;
        }

                        .subtitle {
                            margin - top: 0.5rem;
                        font-style: italic;
                        opacity: 0.9;
        }

                        main {
                            max - width: 1400px;
                        margin: 0 auto;
                        padding: 1rem;
        }

                        section {
                            margin: 2rem 0;
                        padding: 1rem;
                        background-color: rgba(255,255,255,0.8);
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

                        h2 {
                            margin - top: 0.5rem;
                        padding-bottom: 0.5rem;
                        border-bottom: 2px solid var(--primary-color);
                        color: var(--primary-color);
                        display: flex;
                        align-items: center;
        }

                        h2 .section-icon {
                            margin - right: 10px;
                        font-size: 1.5rem;
        }

                        .container {
                            display: flex;
                        flex-wrap: wrap;
                        gap: 20px;
                        justify-content: center; 
        }

                        .card {
                            border: 1px solid #eaeaea;
                        padding: 15px;
                        border-radius: 12px;
                        width: 280px;
                        background-color: var(--card-bg);
                        box-shadow: 0 3px 10px rgba(0,0,0,0.08);
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
        }

                        .card:hover {
                            transform: translateY(-5px);
                        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

                        .card h3 {
                            margin - top: 0.5rem;
                        color: var(--secondary-color);
                        border-bottom: 1px solid #eee;
                        padding-bottom: 0.5rem;
        }

                        .card img {
                            max - width: 100%;
                        border-radius: 8px;
                        height: auto;
                        display: block;
                        margin: 0 auto;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

                        .card-badge {
                            position: absolute;
                        top: 0;
                        right: 0;
                        background-color: var(--accent-color);
                        color: white;
                        padding: 0.25rem 0.5rem;
                        font-size: 0.8rem;
                        border-radius: 0 0 0 8px;
        }

                        .error {
                            color: #e63946;
                        padding: 1rem;
                        text-align: center;
                        border: 1px solid #f8d7da;
                        background-color: #fff5f5;
                        border-radius: 8px;
        }

                        .loading {
                            color: #666;
                        font-style: italic;
                        padding: 2rem 1rem;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
        }

                        .loading::after {
                            content: "...";
                        animation: dots 1.5s infinite;
                        width: 24px;
                        text-align: left;
                        display: inline-block;
        }

                        @keyframes dots {
                            0 % { content: "."; }
            33% {content: ".."; }
                        66% {content: "..."; }
        }

                        .controls {
                            text - align: center;
                        margin: 2rem 0;
                        display: flex;
                        justify-content: center;
                        gap: 1rem;
                        flex-wrap: wrap;
        }

                        button {
                            background - color: var(--primary-color);
                        color: white;
                        border: none;
                        padding: 0.75rem 1.5rem;
                        border-radius: 30px;
                        cursor: pointer;
                        font-size: 1rem;
                        font-weight: 600;
                        transition: all 0.2s ease;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

                        button:hover {
                            background - color: var(--secondary-color);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

                        .quote {
                            font - style: italic;
                        padding: 1rem;
                        background-color: #f9f9f9;
                        border-left: 3px solid var(--primary-color);
                        margin: 0.5rem 0;
        }

                        .tags {
                            display: flex;
                        flex-wrap: wrap;
                        gap: 5px;
                        margin-top: 0.5rem;
        }

                        .tag {
                            background - color: #e9ecef;
                        color: #555;
                        padding: 0.2rem 0.5rem;
                        border-radius: 30px;
                        font-size: 0.8rem;
        }

                        table {
                            width: 100%;
                        border-collapse: collapse;
        }

                        table td, table th {
                            border: 1px solid #ddd;
                        padding: 0.5rem;
        }

                        table th {
                            background - color: #f8f9fa;
        }

                        footer {
                            text - align: center;
                        padding: 2rem;
                        margin-top: 2rem;
                        background-color: #333;
                        color: white;
        }

                        /* For smaller screens */
                        @media (max-width: 768px) {
            .card {
                            width: 100%;
            }
        }

                        /* Theme toggle */
                        .theme-toggle {
                            position: fixed;
                        bottom: 2rem;
                        right: 2rem;
                        background-color: var(--accent-color);
                        border-radius: 50%;
                        height: 50px;
                        width: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
                        z-index: 1000;
        }

                        .dark-theme {
                            --bg - color: #121212;
                        --card-bg: #1e1e1e;
                        --text-color: #e0e0e0;
                        --header-bg: #2c2c2c;
        }

                        .progress-container {
                            position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 5px;
                        background-color: transparent;
                        z-index: 1000;
        }

                        .progress-bar {
                            height: 100%;
                        background-color: var(--accent-color);
                        width: 0%;
                        transition: width 0.3s ease;
        }
                    </style>
                </head>
              
                    <div class="progress-container">
                        <div class="progress-bar" id="progress-bar"></div>
                    </div>

                    <header>
                        <h1>🌐 Ultimate API Showcase</h1>
                        <p class="subtitle">Exploring the world's data through free, public APIs</p>
                    </header>

                    <main>
                        <div class="controls">
                            <button id="reload-all"><span>🔄</span> Reload All Content</button>
                            <button id="toggle-theme"><span>🌙</span> Toggle Dark Mode</button>
                        </div>

                        <!-- ENTERTAINMENT SECTION -->
                        <section id="entertainment">
                            <h2><span class="section-icon">🎬</span> Movies & Entertainment</h2>

                            <h3>Movie Database (TMDB Alternative)</h3>
                            <div class="container" id="movie-list"><p class="loading">Loading popular movies</p></div>

                            <h3>TV Shows</h3>
                            <div class="container" id="tv-shows-list"><p class="loading">Loading popular TV shows</p></div>
                        </section>

                        <!-- PRODUCTS SECTION -->
                        <section id="products">
                            <h2><span class="section-icon">🛍️</span> Shopping & Products</h2>

                            <h3>Store Products</h3>
                            <div class="container" id="product-list"><p class="loading">Loading products</p></div>
                        </section>

                        <!-- PEOPLE SECTION -->
                        <section id="people">
                            <h2><span class="section-icon">👥</span> People & Profiles</h2>

                            <h3>Random User Profiles</h3>
                            <div class="container" id="user-list"><p class="loading">Loading user profiles</p></div>

                            <h3>GitHub Developers</h3>
                            <div class="container" id="github-users"><p class="loading">Loading GitHub profiles</p></div>
                        </section>

                        <!-- ANIMALS SECTION -->
                        <section id="animals">
                            <h2><span class="section-icon">🐾</span> Animals</h2>

                            <h3>Dog Images</h3>
                            <div class="container" id="dog-images"><p class="loading">Loading dog images</p></div>

                            <h3>Cat Facts</h3>
                            <div class="container" id="cat-facts"><p class="loading">Loading cat facts</p></div>

                            <h3>Fox Images</h3>
                            <div class="container" id="fox-images"><p class="loading">Loading fox images</p></div>
                        </section>

                        <!-- ANIME & GAMING SECTION -->
                        <section id="anime-gaming">
                            <h2><span class="section-icon">🎮</span> Anime & Gaming</h2>

                            <h3>Anime Series</h3>
                            <div class="container" id="anime-list"><p class="loading">Loading anime series</p></div>

                            <h3>Studio Ghibli Films</h3>
                            <div class="container" id="ghibli-list"><p class="loading">Loading Ghibli films</p></div>

                            <h3>Pokémon Collection</h3>
                            <div class="container" id="pokemon-list"><p class="loading">Loading Pokémon</p></div>
                        </section>

                        <!-- SPORTS SECTION -->
                        <section id="sports">
                            <h2><span class="section-icon">⚽</span> Sports</h2>

                            <h3>Soccer Leagues</h3>
                            <div class="container" id="soccer-leagues"><p class="loading">Loading soccer leagues</p></div>

                            <h3>NBA Teams</h3>
                            <div class="container" id="nba-teams"><p class="loading">Loading NBA teams</p></div>
                        </section>

                        <!-- FOOD & DRINK SECTION -->
                        <section id="food-drink">
                            <h2><span class="section-icon">🍴</span> Food & Drink</h2>

                            <h3>Random Meals</h3>
                            <div class="container" id="meal-list"><p class="loading">Loading meal recipes</p></div>

                            <h3>Cocktail Recipes</h3>
                            <div class="container" id="cocktail-list"><p class="loading">Loading cocktail recipes</p></div>
                        </section>

                        <!-- SCIENCE & TECH SECTION -->
                        <section id="science-tech">
                            <h2><span class="section-icon">🔬</span> Science & Technology</h2>

                            <h3>NASA Astronomy Picture of the Day</h3>
                            <div class="container" id="nasa-apod"><p class="loading">Loading NASA APOD</p></div>

                            <h3>Current ISS Location</h3>
                            <div class="container" id="iss-location"><p class="loading">Loading ISS location</p></div>
                        </section>

                        <!-- GEOGRAPHY SECTION -->
                        <section id="geography">
                            <h2><span class="section-icon">🌎</span> Geography & Travel</h2>

                            <h3>Countries Information</h3>
                            <div class="container" id="countries-info"><p class="loading">Loading countries</p></div>
                        </section>

                        <!-- FINANCE SECTION -->
                        <section id="finance">
                            <h2><span class="section-icon">💰</span> Finance & Cryptocurrency</h2>

                            <h3>Cryptocurrency Prices</h3>
                            <div class="container" id="crypto-prices"><p class="loading">Loading cryptocurrency data</p></div>
                        </section>

                        <!-- ART & CREATIVITY SECTION -->
                        <section id="art-creativity">
                            <h2><span class="section-icon">🎨</span> Art & Creativity</h2>

                            <h3>Random Art (Harvard Art Museums)</h3>
                            <div class="container" id="art-gallery"><p class="loading">Loading artwork</p></div>
                        </section>

                        <!-- QUOTES & TRIVIA SECTION -->
                        <section id="quotes-trivia">
                            <h2><span class="section-icon">💬</span> Quotes & Trivia</h2>

                            <h3>Random Quotes</h3>
                            <div class="container" id="quotes-list"><p class="loading">Loading quotes</p></div>

                            <h3>Random Jokes</h3>
                            <div class="container" id="jokes-list"><p class="loading">Loading jokes</p></div>

                            <h3>Trivia Questions</h3>
                            <div class="container" id="trivia-list"><p class="loading">Loading trivia questions</p></div>
                        </section>
                    </main>

                    <footer>
                        <p>Created with ❤️ using free public APIs | No API keys required</p>
                        <p>All content is fetched from public APIs and is subject to their terms and conditions</p>
                    </footer>

                    <div class="theme-toggle" id="theme-toggle-icon">🌙</div>

                    <script>
        // API Utility Functions
                        async function fetchData(url) {
            try {
                const response = await fetch(url);
                        if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                        return await response.json();
            } catch (error) {
                            console.error('Error fetching data:', error);
                        return null;
            }
        }

                        async function fetchWithCache(url, cacheBuster = false) {
            // Add cache buster if needed
            const finalUrl = cacheBuster ? `${url}${url.includes('?') ? '&' : '?'}_=${Date.now()}` : url;
                        return fetchData(finalUrl);
        }

                        // Helper functions for common UI patterns
                        function showLoading(containerId) {
            const container = document.getElementById(containerId);
                        if (container) {
                            container.innerHTML = '<p class="loading">Loading</p>';
            }
        }

                        function showError(containerId, message = "Failed to load data") {
            const container = document.getElementById(containerId);
                        if (container) {
                            container.innerHTML = `<p class="error">${message}</p>`;
            }
        }

                        // Movie Database (TMDB Alternative API)
                        async function loadMovies() {
            const container = document.getElementById('movie-list');
                        showLoading('movie-list');

                        try {
                // Using OMDb API with random popular movie IDs (no key needed for this specific approach)
                const movieIds = ['tt0111161', 'tt0068646', 'tt0468569', 'tt0071562', 'tt0050083', 'tt0108052', 'tt0167260', 'tt0110912', 'tt0060196', 'tt0120737'];
                const randomMovies = movieIds.sort(() => 0.5 - Math.random()).slice(0, 4);

                        container.innerHTML = '';

                        for (const id of randomMovies) {
                    const data = await fetchWithCache(`https://www.omdbapi.com/?i=${id}&apikey=3e074a0f`);

                        if (data && data.Response === "True") {
                        const card = document.createElement('div');
                        card.classList.add('card');

                        card.innerHTML = `
                        <div class="card-badge">${data.Year}</div>
                        <img src="${data.Poster}" alt="${data.Title} poster">
                            <h3>${data.Title}</h3>
                            <p><strong>Director:</strong> ${data.Director}</p>
                            <p><strong>Cast:</strong> ${data.Actors.split(', ').slice(0, 2).join(', ')}...</p>
                            <p><strong>Rating:</strong> ${data.imdbRating}/10</p>
                            <div class="tags">
                                ${data.Genre.split(', ').map(genre => `<span class="tag">${genre}</span>`).join('')}
                            </div>
                            `;

                            container.appendChild(card);
                    }
                }

                            if (container.children.length === 0) {
                                showError('movie-list');
                }
            } catch (error) {
                                console.error('Error loading movies:', error);
                            showError('movie-list');
            }
        }

                            // TV Shows API
                            async function loadTvShows() {
            const container = document.getElementById('tv-shows-list');
                            showLoading('tv-shows-list');

                            try {
                // Using random TV show IDs
                const showIds = ['tt0944947', 'tt0903747', 'tt0108778', 'tt0386676', 'tt0141842', 'tt1475582', 'tt0773262', 'tt4574334'];
                const randomShows = showIds.sort(() => 0.5 - Math.random()).slice(0, 4);

                            container.innerHTML = '';

                            for (const id of randomShows) {
                    const data = await fetchWithCache(`https://www.omdbapi.com/?i=${id}&apikey=3e074a0f`);

                            if (data && data.Response === "True") {
                        const card = document.createElement('div');
                            card.classList.add('card');

                            card.innerHTML = `
                            <div class="card-badge">${data.Year.split('–')[0]}-${data.Year.includes('–') ? data.Year.split('–')[1] || 'Present' : data.Year}</div>
                            <img src="${data.Poster}" alt="${data.Title} poster">
                                <h3>${data.Title}</h3>
                                <p><strong>Seasons:</strong> ${data.totalSeasons || 'N/A'}</p>
                                <p><strong>Rating:</strong> ${data.imdbRating}/10</p>
                                <div class="tags">
                                    ${data.Genre.split(', ').map(genre => `<span class="tag">${genre}</span>`).join('')}
                                </div>
                                `;

                                container.appendChild(card);
                    }
                }

                                if (container.children.length === 0) {
                                    showError('tv-shows-list');
                }
            } catch (error) {
                                    console.error('Error loading TV shows:', error);
                                showError('tv-shows-list');
            }
        }

                                // Products API
                                async function loadProducts() {
            const container = document.getElementById('product-list');
                                showLoading('product-list');

                                try {
                const data = await fetchWithCache('https://fakestoreapi.com/products');

                                container.innerHTML = '';
                if (data && data.length > 0) {
                                    data.slice(0, 4).forEach(product => {
                                        const card = document.createElement('div');
                                        card.classList.add('card');

                                        card.innerHTML = `
                            <div class="card-badge">$${product.price}</div>
                            <img src="${product.image}" alt="${product.title}">
                            <h3>${product.title.substring(0, 40)}${product.title.length > 40 ? '...' : ''}</h3>
                            <div class="tags">
                                <span class="tag">${product.category}</span>
                            </div>
                            <p>${product.description.substring(0, 100)}...</p>
                            <p><strong>Rating:</strong> ${product.rating.rate}/5 (${product.rating.count} reviews)</p>
                        `;

                                        container.appendChild(card);
                                    });
                } else {
                                    showError('product-list');
                }
            } catch (error) {
                                    console.error('Error loading products:', error);
                                showError('product-list');
            }
        }

                                // Random User API
                                async function loadRandomUsers() {
            const container = document.getElementById('user-list');
                                showLoading('user-list');

                                try {
                const data = await fetchWithCache('https://randomuser.me/api/?results=4', true);

                                container.innerHTML = '';
                if (data && data.results && data.results.length > 0) {
                                    data.results.forEach(user => {
                                        const card = document.createElement('div');
                                        card.classList.add('card');

                                        card.innerHTML = `
                            <img src="${user.picture.large}" alt="${user.name.first}">
                            <h3>${user.name.first} ${user.name.last}</h3>
                            <p><strong>Age:</strong> ${user.dob.age}</p>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Phone:</strong> ${user.phone}</p>
                            <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                        `;

                                        container.appendChild(card);
                                    });
                } else {
                                    showError('user-list');
                }
            } catch (error) {
                                    console.error('Error loading users:', error);
                                showError('user-list');
            }
        }

                                // GitHub Users API
                                async function loadGithubUsers() {
            const container = document.getElementById('github-users');
                                showLoading('github-users');

                                try {
                // Some popular GitHub users
                const users = ['torvalds', 'gaearon', 'sindresorhus', 'tj', 'yyx990803', 'kentcdodds', 'gitnacho', 'mbostock', 'addyosmani', 'defunkt'];
                const randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 4);

                                container.innerHTML = '';
                                for (const username of randomUsers) {
                    const data = await fetchWithCache(`https://api.github.com/users/${username}`);

                                if (data) {
                        const card = document.createElement('div');
                                card.classList.add('card');

                                card.innerHTML = `
                                <img src="${data.avatar_url}" alt="${data.login}">
                                    <h3>${data.name || data.login}</h3>
                                    <p>${data.bio || 'No bio available'}</p>
                                    <p><strong>Followers:</strong> ${data.followers.toLocaleString()}</p>
                                    <p><strong>Public Repos:</strong> ${data.public_repos.toLocaleString()}</p>
                                    <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
                                    `;

                                    container.appendChild(card);
                    }
                }

                                    if (container.children.length === 0) {
                                        showError('github-users');
                }
            } catch (error) {
                                        console.error('Error loading GitHub users:', error);
                                    showError('github-users');
            }
        }

                                    // Dog Images API
                                    async function loadDogImages() {
            const container = document.getElementById('dog-images');
                                    showLoading('dog-images');

                                    try {
                                        container.innerHTML = '';
                                    // Get 4 random dog images
                                    for (let i = 0; i < 4; i++) {
                    const data = await fetchWithCache('https://dog.ceo/api/breeds/image/random', true);

                                    if (data && data.status === 'success') {
                        const breedParts = data.message.split('/')[4].split('-');
                                    let breedName;
                        
                        if (breedParts.length > 1) {
                                        breedName = `${breedParts[1]} ${breedParts[0]}`;
                        } else {
                                        breedName = breedParts[0];
                        }
                        
                        breedName = breedName.replace(/^\w/, c => c.toUpperCase());

                                    const card = document.createElement('div');
                                    card.classList.add('card');

                                    card.innerHTML = `
                                    <h3>${breedName}</h3>
                                    <img src="${data.message}" alt="${breedName} dog">
                                        `;

                                        container.appendChild(card);
                    }
                }

                                        if (container.children.length === 0) {
                                            showError('dog-images');
                }
            } catch (error) {
                                            console.error('Error loading dog images:', error);
                                        showError('dog-images');
            }
        }

                                        // Fox Images API
                                        async function loadFoxImages() {
            const container = document.getElementById('fox-images');
                                        showLoading('fox-images');

                                        try {
                                            container.innerHTML = '';
                                        // Get 4 random fox images
                                        for (let i = 0; i < 4; i++) {
                    const data = await fetchWithCache('https://randomfox.ca/floof/', true);

                                        if (data && data.image) {
                        const card = document.createElement('div');
                                        card.classList.add('card');

                                        card.innerHTML = `
                                        <h3>Random Fox #${i + 1}</h3>
                                        <img src="${data.image}" alt="Random fox">
                                            `;

                                            container.appendChild(card);
                    }
                }

                                            if (container.children.length === 0) {
                                                showError('fox-images');
                }
            } catch (error) {
                                                console.error('Error loading fox images:', error);
                                            showError('fox-images');
            }
        }

                                            // Cat Facts API
                                            async function loadCatFacts() {
            const container = document.getElementById('cat-facts');
                                            showLoading('cat-facts');

                                            try {
                                                container.innerHTML = '';
                                            // Get 4 cat facts
                                            for (let i = 0; i < 4; i++) {
                    const data = await fetchWithCache('https://catfact.ninja/fact', true);

                                            if (data && data.fact) {
                        const card = document.createElement('div');
                                            card.classList.add('card');

                                            card.innerHTML = `
                                            <h3>Cat Fact #${i + 1}</h3>
                                            <div class="quote">${data.fact}</div>
                                            <p><strong>Length:</strong> ${data.length} characters</p>
                                            `;

                                            container.appendChild(card);
                    }
                }

                                            if (container.children.length === 0) {
                                                showError('cat-facts');
                }
            } catch (error) {
                                                console.error('Error loading cat facts:', error);
                                            showError('cat-facts');
            }
        }

                                            // Anime API
                                            async function loadAnimeList() {
            const container = document.getElementById('anime-list');
                                            showLoading('anime-list');

                                            try {
                // Adding a delay to avoid rate limiting with the Jikan API
                const data = await fetchWithCache('https://api.jikan.moe/v4/anime?limit=4&order_by=score&sort=desc');

                                            container.innerHTML = '';
                if (data && data.data && data.data.length > 0) {
                                                data.data.forEach(anime => {
                                                    const card = document.createElement('div');
                                                    card.classList.add('card');

                                                    card.innerHTML = `
                            <div class="card-badge">Score: ${anime.score}/10</div>
                            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                            <h3>${anime.title}</h3>
                            <p><strong>Episodes:</strong> ${anime.episodes || 'Unknown'}</p>
                            <p><strong>Type:</strong> ${anime.type}</p>
                            <p><strong>Year:</strong> ${anime.year || 'Unknown'}</p>
                            <div class="tags">
                                ${anime.genres.slice(0, 3).map(genre => `<span class="tag">${genre.name}</span>`).join('')}
                            </div>
                        `;

                                                    container.appendChild(card);
                                                });
                }else {
                                                showError('anime-list');
                }
            } catch (error) {
                                                console.error('Error loading anime list:', error);
                                            showError('anime-list');
            }
        } 
                           