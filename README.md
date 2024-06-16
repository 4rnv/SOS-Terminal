# SOS-Terminal

Terminal-esque startpage with a bunch of useful features and cool themes.

![](ss/ss(9).png)
![](ss/ss(3).png)
![](ss/ss(4).png)
![](ss/ss(5).png)

# Features

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

To view all keywords while in the terminal, type `list`

## Search functions

Search functions allow you to search the web from any search engine of your choice by specifying a keyword before your search. It is similar to Duckduckgo's !bangs feature. For example, typing `#br query` will return results for query from Brave Search. Similarly typing `#g query` will return results for query from Google. Current supported search functions:

- #g (Google)
- #y (Yahoo)
- #yt (Youtube)
- #b (Bing)
- #br (Brave Search)
- #d (Duckduckgo)
- #w (Wikipedia)
- #a (Amazon)
- #r (Reddit)

## Other functions

- `time`: Displays your local time
- `date`: Displays the date in your timezone
- `ip`: Displays your ip address through whatismyip.com
- `clrscr`: Clears the output in the terminal, `clear` also works

## Usernames

You can add a username to the terminal. The default value is Anonymous. To add a username type `--su` and enter your username in the prompt window.

Since this is a purely frontend project, the username is stored in your browser's local storage and is not accessible elsewhere. It will remain stored even if you reload or close the browser. To remove your username and go back to 'anonymous', type `--logout`. To change your username, simply type `--su` again.

## Themes

You can also use different themes to spruce up your experience. To set a theme use `--st`. Then type the theme name from the visible options. Currently supported themes are:

- borland (recreates the look of borland programs like Turbo C)
- cyber (dark, Matrix-ish)
- w95 (Windows 95 theme)
- lain (inspired by Navi)
- sos (light theme)
- pastel (light pink, red text)
- amoled (true dark, dim text)
- congroo (dark, orange text)
- purple (purple background, white text)

## Screenshots

![](ss/ss(6).png)
![](ss/ss(7).png)
![](ss/ss(8).png)
![](ss/ss(1).png)
![](ss/ss(2).png)
