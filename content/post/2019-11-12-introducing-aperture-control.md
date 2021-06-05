---
title: Introducing Aperture Control
date: "2019-11-12"
description: New tool for automating Windows environments
tags:
- productivity
- windows
- tutorial
- opensource
---

I previously posted about how to "[develop like a pro on Windows]({{< ref "/post/2019-07-11-developing-like-a-pro-on-windows.md" >}})" as it seemed to me like most people really failed to understand that a lot of great tools exist for Windows that make developers very effective also on Windows.

Since then I've bumped into concepts like [Nix, a purely functional package manager](https://nixos.org/nix/) and have been wondering if we could reach some similar goals with Windows.

The things I wanted to see synchronized between all my Windows machines, and automated after a new installation were at least:

 - Installed applications
 - Configuration for common things like Git
 - Environment variables, file associations, and the like
 - Windows features (e.g. Hyper-V, and Windows Subsystem for Linux)
 - Other Windows settings (Dark Mode, sleep and hibernation, privacy related settings, etc.)

I looked around for existing tooling and ... well it didn't look like there was much around that didn't have a number of dependencies I'd have to install first, that were free, didn't require running servers, and wouldn't relinquish control of your PC to some external system.


# Introducing Aperture Control

After some thinking I realized the problem shouldn't be all that difficult to solve at least partially and get into a significantly meaningful level of support with some PowerShell scripts, Batch scripts, and Registry patches.

I'd already seen a number of installers with a quick PowerShell one-liner, so I thought that might be the way I'd want to go and gave it a go.

And so now we have [Aperture Control](https://github.com/Lieturd/aperture-control) and an accompanying "[recipe collection](https://github.com/Lieturd/aperture-control-recipes)" with some of the first attempts to solve my most common headaches.

![Aperture Control in action](https://thepracticaldev.s3.amazonaws.com/i/97nopw2zkyatcag75q3u.gif)


## How to use Aperture Control

First step is to fork the [Aperture Control repository in GitHub](https://github.com/Lieturd/aperture-control) and customize it according to your needs.

Let's take the example that you would like to install [Chocolatey](https://chocolatey.org), and a number of packages with it.

Step 1: Get the [recipe to install or upgrade Chocolatey](https://github.com/Lieturd/aperture-control-recipes/blob/master/recipes/install-chocolatey.ps1) and copy it in your repository as `recipes/01-install-chocolatey.ps1`.

Step 2: Get the [recipe to install packages](https://github.com/Lieturd/aperture-control-recipes/blob/master/recipes/install-packages.ps1) and copy it in your repository as `recipes/02-install-packages.ps1`.

Step 3: Customize according to your desires, e.g. if you wanted to install 7-Zip, ConEmu, Visual Studio Code, and Windows Subsystem for Linux you would customize the script to say something like:

```powershell
# Install all the packages you want to use in other scripts

choco.exe install -y `
    7zip `
    conemu `
    vscode `
    wsl `
    # This non-empty line is important, do not move it
```

You can find the names of Chocolatey packages with the `choco search` command, or via their [online package search](https://chocolatey.org/packages). The collection is really quite impressive (and there's Scoop as well with a few unique additions).

Step 4: Commit and push your changes to your fork.

Step 5: Run Aperture Control in an Administrator PowerShell (replace `your/repository` with the correct GitHub user and repository):

```powershell
# Windows by default seems to block execution of PowerShell scripts
Set-ExecutionPolicy -ExecutionPolicy Unrestricted

(New-Object System.Net.WebClient).DownloadFile('https://raw.githubusercontent.com/your/repository/master/setup.ps1', 'setup.ps1')
.\setup.ps1 your/repository
```

If you really want, you can also store the repository contents on e.g. an USB stick and not share the scripts on GitHub. You only need to run the `run-ac-recipes.ps1` -script as Administrator then, as `setup.ps1` takes care of downloading the GitHub repository contents.


## The "standard development environment"

After writing a few recipes for my own use and thinking about what kind of tips I would like to share with my friends, I thought of the concept of a "standard development environment", what I would consider things that everyone should be doing.

Similar to how in Linux world it's now common to have `~/.bin` in your `PATH` for all those little binaries you end up with, there should be a `%USERPROFILE%\bin` on Windows. You will want certain tools installed, better terminal, ability to configure aliases, and so on.

So with that in mind, I built [an example for Aperture control](https://github.com/Lieturd/aperture-control-example) to configure what I would consider a fairly standard development environment. It's still fairly opinionated on what kind of tools and configuration people might want, but it's easy to fork and configure to your needs.

I'd love to hear feedback on what kind of parts you might want to see there, what do you think is extraneous, and how it's working for you.


## What's next?

There's a lot of things that Aperture Control still cannot do by itself, but overall PowerShell is quite capable and the [PowerShell Gallery](https://www.powershellgallery.com) has lots of extra things to provide even more capabilities for it, so there really are not a lot of limits for what you can do with this.

What should be considered is if it is easily possible to e.g. deal with backing up or syncing various application settings (IDEs, browsers, etc.), and how to better deal with keeping your own custom files in the repository (e.g. for [Autorun cmd](https://dev.to/lietux/developing-like-a-pro-on-windows-4bbh#scripting)) and easily apply them.

I don't have all the ideas for what problems should be solved, or how to solve them, but I imagine there's a lot of smart people out there who can contribute. *YOU* can help by testing it out, spreading the word, submitting feature requests and bug reports (both for the tool and the recipes), creating new recipes, and so on.

You can tell me in the comments, what would you like to see automated in your Windows environments?


*Edit: Updated the tool a bit to have all the recipes stored in one folder for better control over the execution order of recipes of all types and updated the post.*

*Edit:* Added reference to "standard development environment"