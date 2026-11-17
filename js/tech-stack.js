
const technologies = [
    // Programming Languages
    { name: 'Python', category: 'languages', icon: 'assets/tech/python.svg' },
    { name: 'SQL', category: 'languages', icon: 'assets/tech/sql.svg' },
    { name: 'C#', category: 'languages', icon: 'assets/tech/csharp.svg' },
    { name: 'Bash', category: 'languages', icon: 'assets/tech/bash.svg' },

    // Databases
    { name: 'SQL Server', category: 'databases', icon: 'assets/tech/sql-server.svg' },
    { name: 'PostgreSQL', category: 'databases', icon: 'assets/tech/postgresql.svg' },
    { name: 'Oracle', category: 'databases', icon: 'assets/tech/oracle.svg' },
    { name: 'MySQL', category: 'databases', icon: 'assets/tech/mysql.svg' },
    { name: 'Vertica', category: 'databases', icon: 'assets/tech/vertica.svg' },

    // Cloud Platforms
    { name: 'Microsoft Azure', category: 'cloud', icon: 'assets/tech/azure.svg' },
    { name: 'Azure SQL', category: 'cloud', icon: 'assets/tech/azure-sql.svg' },
    { name: 'Snowflake', category: 'cloud', icon: 'assets/tech/snowflake.svg' },
    { name: 'ADLS Gen2', category: 'cloud', icon: 'assets/tech/adls.svg' },

    // Data Engineering & Analytics
    { name: 'dbt', category: 'data', icon: 'assets/tech/dbt.svg' },
    { name: 'Power BI', category: 'data', icon: 'assets/tech/powerbi.svg' },
    { name: 'SSRS', category: 'data', icon: 'assets/tech/ssrs.svg' },
    { name: 'IBM Cognos', category: 'data', icon: 'assets/tech/cognos.svg' },
    { name: 'Airflow', category: 'data', icon: 'assets/tech/airflow.svg' },

    // DevOps & Tools
    { name: 'Git', category: 'devops', icon: 'assets/tech/git.svg' },
    { name: 'GitHub Actions', category: 'devops', icon: 'assets/tech/github-actions.svg' },
    { name: 'Docker', category: 'devops', icon: 'assets/tech/docker.svg' },
    { name: 'Linux', category: 'devops', icon: 'assets/tech/linux.svg' }
];


// Find the Tech Stack grid
const grid = document.querySelector('#tech-stack #tech-grid');

if (grid) {

    // Create technology cards
    technologies.forEach(tech => {

        const card = document.createElement('div');
        card.className = 'tech-card';
        card.dataset.category = tech.category;

        // Create logo
        const img = document.createElement('img');
        img.src = tech.icon;
        img.alt = tech.name;
        img.loading = 'lazy';

        // Fallback if image is missing
        img.onerror = () => {
            img.style.display = 'none';
        };

        // Create technology name
        const label = document.createElement('span');
        label.textContent = tech.name;

        // Add logo and name to card
        card.append(img, label);

        // Add card to grid
        grid.appendChild(card);
    });


    // Category filtering
    const filterButtons = document.querySelectorAll(
        '#tech-stack [data-filter]'
    );

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            const selectedCategory = button.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => {
                const isActive = btn === button;

                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', String(isActive));
            });

            // Show or hide technology cards
            grid.querySelectorAll('.tech-card').forEach(card => {

                const matchesCategory =
                    selectedCategory === 'all' ||
                    card.dataset.category === selectedCategory;

                card.hidden = !matchesCategory;
            });

        });

    });
}
