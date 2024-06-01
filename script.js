const inputField = document.querySelector('.input');
    const outputArea = document.getElementById('outputarea'); 

    // inputField.addEventListener('keypress', function(event) {
    // if (event.key === 'Enter') {
    //     var userInput = inputField.value.toLowerCase().trim();
    //     inputField.value = '';

    //     query(userInput);
    //     }
    // });

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const userInput = inputField.value.toLowerCase().trim();
            var SearchUrl;
            if (userInput.startsWith('#g ')) {
                const query = userInput.substring(3).trim();
                console.log(query);
                if (query) {
                    SearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                    window.open(SearchUrl, '_blank');
                    inputField.value = '';
                }
            } 
            else if (userInput.startsWith('#y ')) {
                const query = userInput.substring(3).trim();
                console.log(query);
                if (query) {
                    SearchUrl = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
                    window.open(SearchUrl, '_blank');
                    inputField.value = '';
                }
            }
            else if (userInput.startsWith('#yt ')) {
                const query = userInput.substring(4).trim();
                console.log(query);
                if (query) {
                    SearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                    window.open(SearchUrl, '_blank');
                    inputField.value = '';
                }
            }
            else if (userInput.startsWith('#a ')) {
                const query = userInput.substring(3).trim();
                console.log(query);
                if (query) {
                    SearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
                    window.open(SearchUrl, '_blank');
                    inputField.value = '';
                }
            }
            else {
                query(userInput);
                inputField.value = '';
            }
        }
    });

    function query(userInput) {
        var output;
        var url;

        switch (userInput) {
            case 'sos':
                output = navigator.userAgent;
                display(output);
                break;

            case 'list':
                output = `
                List of supported function calls: time, date, ip, clrscr, image search. To set username, use --su; to set theme, use --st; to remove username type --logout. List of supported sites: amazon, bing, duckduckgo, github, gmail, google, pinterest, translate, wikipedia, x, yahoo, youtube
                `;
                display(output);
                break;

            case 'time':
                const time = new Date();
                output = "Present Day, Present Time > " + time.toLocaleString();
                display(output);
                break;

            case 'date':
                const date = new Date();
                output = "Today's Date > " + date.toDateString();
                display(output);
                break;

            case 'ip':
                url = 'https://www.whatismyip.com/';
                output = window.open(url, '_blank');
                break;

            case 'google':
                url = 'https://google.com';
                output = window.open(url, "_blank");
                break;

            case 'gmail':
                url = 'https://mail.google.com';
                output = window.open(url, "_blank");
                break;
        
            case 'yahoo':
                url = 'https://yahoo.com';
                output = window.open(url, "_blank");
                break;

            case 'youtube':
                url ='https://youtube.com';
                output = window.open(url, "_blank");                
                break;
        
            case 'bing':
                url = 'https://bing.com';
                output = window.open(url, "_blank");
                break;
        
            case 'duck':
            case 'duckduckgo':
                url = 'https://duckduckgo.com';
                output = window.open(url, "_blank");
                break;

            case 'x':
            case 'xitter':
            case 'twitter':
                url ='https://x.com';
                output = window.open(url, "_blank");                
                break;
        
            case 'wikipedia':
            case 'wiki':
                url = 'https://en.wikipedia.org'
                output = window.open(url, '_blank');
                break;

            case 'amazon':
                url = 'https://amazon.com';
                output = window.open(url, '_blank');
                break;

            case 'image':
            case 'imagesearch':
            case 'image search':
                url = 'https://yandex.com/images/';
                output = window.open(url, "_blank");
                break;

            case 'translate':
                url ='https://translate.google.com/';
                output = window.open(url, "_blank");                
                break;
        
            case 'pinterest':
                url = 'https://pinterest.com/'
                output = window.open(url, '_blank');
                break;

            case 'github':
                url = 'https://github.com'
                output = window.open(url, '_blank');
                break;

            case 'sneed':
                output = "The sign is a subtle joke. The shop is called \"Sneed's Feed & Seed\", where \"feed\" and \"seed\" both end in the sound \"-eed\", thus rhyming with the name of the owner, Sneed. The sign says that the shop was \"Formerly Chuck's\", implying that the two words beginning with \"F\" and \"S\" would have ended with \"-uck\", rhyming with \"Chuck\". So, when Chuck owned the shop, it would have been called \"Chuck's Feeduck and Seeduck\".";
                display(output);
                break;

            case 'chuck':
                output = "This command is deprecated, consider using \'sneed\'.";
                display(output);
                break;

            case '':
                output = "Your input is empty";
                display(output);
                break;
            
            case 'clear':
            case 'clrscr':
                clearDisplay();
                break;

            case 'logout':
            case '--logout':
                localStorage.removeItem('SOS-Terminal-username');
                location.reload();
                break;
            
            default:
                output = "That command is not supported. Type list to view all supported commands.";
                display(output);
                break;
        }
    }

    function display(output) {
        var newOutput = document.createElement('div');
        //newOutput.innerHTML = output;
        outputArea.appendChild(newOutput);
        var i = 0;
        var txt = output;
        var speed = 10;

        function typeWriter() {
            if (i < txt.length) {
                newOutput.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    }

    function clearDisplay() {
        outputArea.innerHTML = "";
    }

    document.querySelector('.input').addEventListener('input', function(event) {
            const value = event.target.value;
            if (value === '--su' || value === '-su') {
                event.target.value = '';
                var username = prompt('Enter your username:');
                if (username) {
                    limit = 20;
                    username = username.trim().substring(0, limit);
                    localStorage.setItem('SOS-Terminal-username', username);
                    displayUsername();
                }
            }
            else if (value === '--st' || value === '-st') {
                event.target.value = '';
                var theme = prompt('Select your theme: sos,borland,lain,pastel,cyber,amoled,kyouma,w95,purple');
                theme = theme.toLowerCase().trim();
                switchTheme(theme);
            }
        });

        function switchTheme(theme) {
            const validThemes = ['sos','borland', 'lain', 'pastel', 'cyber', 'amoled', 'kyouma', 'w95', 'purple'];
            if (validThemes.includes(theme)) {
                const currentTheme = localStorage.getItem('SOS-Terminal-theme');
                if (currentTheme) {
                    document.body.classList.remove(currentTheme);
                }
                localStorage.setItem('SOS-Terminal-theme', theme);
                document.body.classList.add(theme);
            } else {
                alert('Invalid theme name.');
            }
        }

        function displayUsername() {
            const storedUsername = localStorage.getItem('SOS-Terminal-username');
            if (storedUsername) {
                document.querySelector('.username').textContent = `SOS://@${storedUsername} >`;
            }
            else {
                document.querySelector('.username').textContent = `SOS://Anonymous >`;
            }
        }

        window.onload = function() {
            const storedTheme = localStorage.getItem('SOS-Terminal-theme');
            if (storedTheme) {
                document.body.classList.add(storedTheme);
            }
            displayUsername();
        };