---
title: Standard Windows development environment
date: "2019-12-21"
description: Discussion about what you would like to see in a standard development environment for Windows
tags:
- productivity 
- windows
- programming
- discuss
---

# Preface

Previously I've written about [how to develop "like a pro" on Windows]({{< ref "/post/2019-07-11-developing-like-a-pro-on-windows.md" >}}) with various tips and tricks about how to get your work optimized and solve common problems. Then I wrote [Aperture Control]({{< ref "/post/2019-11-12-introducing-aperture-control.md" >}}) to automate some of the common setup tasks for Windows.


## Standard development environment for Windows

Now, using Aperture Control and based on the tips, I've set up a repository to configure what I could consider a fairly [standard development environment](https://github.com/Lieturd/aperture-control-example) for Windows.

It's trying to not be too opinionated, but provide a good base to start from, and suggest some tools and configurations not everyone might be aware of yet that can significantly benefit a lot of developers. Most of all, it's aiming to be easy to take into use and customize as you see fit.

There's all kinds of things from package managers, programmer fonts (DejaVu), CygWin, placeholders for autorun cmds, to configuring local bin folder similar to `~/.bin` a lot of *nix users have set up and configuring some sensible defaults for Windows and e.g. Git.

Usage should be simple: Fork / otherwise clone the repository, tweak to your liking (e.g. based on [the recipe collection](https://github.com/Lieturd/aperture-control-recipes)), and run on the machines you want to keep synced with your settings. When you have an update to make - push it to the repo and it will be automatically updated to your other machines as a scheduled task checks for updates hourly.


# Discussion topic

What do you think should and shouldn't be part of a standard development environment? What are you missing, what do you not want "poisoning" your machine?

Any good practices you've come up with your folder structures, or settings for Windows or other software that you'd like to share and see spread?

Do you have a wishlist for things that you'd like to still see while developing in Windows? Maybe someone else knows how.

My personal wish: getting my terminal to support emojis and other such things properly. I like writing scripts that output 👍 for success and 😢 for failure, yet I just end up with various rectangles and other such things on my screen when I try to use them. The [beta UTF-8 support](https://stackoverflow.com/questions/56419639/what-does-beta-use-unicode-utf-8-for-worldwide-language-support-actually-do) does not seem to really help, and causes some additional issues for me as well.