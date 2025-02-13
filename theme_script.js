document.getElementById("theme_toggle_switch").addEventListener('click', switchTheme);

document.onload = setTheme;

function setTheme() {
    theme = localStorage.getItem("theme");
    document.documentElement.setAttribute('data-theme', theme);

    if (document.getElementById("title_image_text")) {
        if (theme == "dark") {
            document.getElementById("title_image_text").innerText = "in retro-spect..."
        } else {
            document.getElementById("title_image_text").innerText = "tempus fugit..."
        }
    }
}

function switchTheme() {
    current_theme = localStorage.getItem("theme");

    if (current_theme == "light") {
        document.documentElement.setAttribute('data-theme', 'dark');

        if (document.getElementById("title_image_text")) {
            document.getElementById("title_image_text").innerText = "in retro-spect..."
        }

        localStorage.setItem("theme", "dark")
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        
        if (document.getElementById("title_image_text")) {
            document.getElementById("title_image_text").innerText = "tempus fugit..."
        }

        localStorage.setItem("theme", "light")
    }

    document.location.reload();
}
