# SOS-Terminal

Terminal-esque startpage with a bunch of useful features and cool themes.

## Features

You can open a site by simply typing it in the terminal. Currently supported site keywords:

- Amazon
- Bing
- Duckduckgo
- Github
- Gmail 
- Google
- Pinterest
- Translate
- Wikipedia
- X
- Yahoo
- Yandex Image search (`image search`)
- Youtube

`time`: Displays your local time
`date`: Displays the date in your timezone
`ip`: Displays your ip address through whatismyip.com
`clrscr`: Clears the output in the terminal. `clear` also works

### Usernames

You can add a username to the terminal. The default value is anonymous. To add a username type `--su` and enter your username in the prompt window.

Since this is a purely frontend project, the username is stored in your browser's local storage and is not accessible elsewhere. It will remain stored even if you reload or close the browser. To remove your username and go back to 'anonymous', type `--logout`

### Themes

You can also use different themes to spruce up your experience. To set a theme use `--st`. Then type the theme name from the visible options Currently supported themes are:

- borland (recreates the look of borland programs like Turbo C)
- cyber (dark, matrix-ish)
- w95 (Windows 95 theme)
- lain (no explanation required)
- sos (light theme)
- pastel (light pink, red text)
- amoled (true dark, dim text)
- kyouma (dark, orange text)
- purple (purple background, white text)