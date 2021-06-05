---
title: Developing like a pro, on Windows
date: "2019-07-11"
description: It seems a lot of devs are under the misconception that only *nix is suitable for development. I want to prove them wrong, and assist others in optimizing their Windows working environment.
tags:
- tutorial
- productivity
- programming
- windows
---

So it seems to me like a lot of people don't seem to value Windows for development. There seems to be a lot of misconceptions about it's capabilities, availability of tooling, and lack of understanding of what really are the options.

This guide will hopefully help you guys see that Windows is a viable option just like anything else, and not just for C#. There's also a few more generic tips about Windows use not purely useful in development.

This guide is based around my own working habits and principles, e.g. if you are developing something that requires a database, I'm assuming you want to avoid running it locally anyway as you'll quickly end up poisoning your system with various services. Instead you should typically try running such things on virtual machines or containers in one way or another.

It is also often a good idea to run more complicated development environments in managed virtual machines or containers, to ensure that resetting the environment, or getting new team members on-boarded does not require an elaborate OS specific guide that is never exactly up-to-date.


## Table of contents

 * [Privacy etc. concerns with Windows 10](#privacy-etc-concerns-with-windows-10)
 * [Security](#security)
 * [Terminal emulators](#terminal-emulators)
 * [Package managers](#package-managers)
 * [Virtualization](#virtualization)
 * [GNU toolchain, CygWin and WSL](#gnu-toolchain-cygwin-and-wsl)
 * [Apple builds](#apple-builds)
 * [Scripting, aliasing, and autorun](#scripting-aliasing-and-autorun)
 * [Paths](#paths)
 * [SSH keys + Pageant](#ssh-keys--pageant)
 * [Window management](#window-management)
 * [Screenshots](#screenshots)
 * [Emoji & UTF-8 special characters](#emoji--utf-8-special-characters)
 * [Fonts](#fonts)
 * [Git, Diff, and other such tools](#git-diff-and-other-such-tools)
 * [What about automatic restarts?](#what-about-automatic-restarts)
 * [Permissions](#permissions)
 * [Automation of much of the above](#automation-of-much-of-the-above)
 * [Closing thoughts](#closing-thoughts)

(Hey dev.to peeps, care to make it easier to do these?)

## Privacy etc. concerns with Windows 10

It's fair to touch on this topic to start with.

Some people seem to still have these concerns. I can't say that running an OS from any large company is safe these days, these companies sure haven't deserved anyone's trust, but it does seem like Microsoft stepped up and alleviated them pretty well, and there are unofficial tools that help with it further.

![Windows 10 Offline account](https://thepracticaldev.s3.amazonaws.com/i/3g9u8u8x51d7u7momrwn.png)

Firstly, when setting up your Windows computer or user account, just don't use a Microsoft account but an offline account. This disables some mostly useless features, like syncing Edge settings, and you might get nagged by Microsoft Store about switching your account to use a Microsoft Account every now and then but clicking "No" isn't that much effort. Pretty sure you can also convert your account or at least create a new one if you didn't do this to start with.

Secondly, similarly when installing your computer, make sure you just answer "No" to all the tracking questions, no to ads, no to extensive metrics, etc. - this really does disable quite a lot of the things that people were concerned of.

![DoNotSpy10](https://thepracticaldev.s3.amazonaws.com/i/jqokqv6iv92ybiz3e19k.jpg)

And thirdly, install [DoNotSpy10](https://pxc-coding.com/donotspy10/) and tweak the remaining settings you're not comfortable with. It works wonders.

After these I'd trust my Windows PC at least as much as anything by Google, Apple or e.g. Canonical (behind Ubuntu, known e.g. for making shady deals with Amazon). Some Linux, BSD, etc. distributions could be a bit more privacy-conscious, but there's a limit to how much effort I'm going to put in it, and how broken a system I'm willing to tolerate.

For the truly privacy-conscious I can highly recommend [Pi-Hole](https://pi-hole.net/), it's a bit of work to set up, and doesn't really work easily as a solution "on the go", but when configured in your network you can block a lot of tracking that you wouldn't want in your network. It's kinda annoying to see just how many tracking attempts it can block from my phone apps. Alternatively I know [F-Secure FREEDOME VPN](https://www.f-secure.com/en/home/products/freedome) has an option for blocking online tracking as well, other VPN solutions might as well.


## Security

Security really is a topic that applies to all systems equally. You can get viruses on MacOS and Linux, and do stupid things online regardless of which OS you're using.

On Windows by default you're quite secure, just don't go running every random `.exe` in your email attachments or that malicious websites want to download, and you're fine.

The only exception is full-disk encryption, for that I don't know of any other solution that works mostly problem-free than BitLocker and that requires Pro version of Windows. There's DiskCryptor and other such things but I've ended up having to put a lot of effort into fixing them after Windows Update breaks the boot sector.

![BitLocker](https://thepracticaldev.s3.amazonaws.com/i/bpd5enuztc73ryqq0wgc.png)

If you still worry, use something like [F-Secure SAFE](https://www.f-secure.com/en/home/products/safe) or any of the of the many other security suites and get protection on a higher level. This kind of active always-on security tools are btw not really widespread on non-Windows machines, so I could easily classify them as less secure.

Don't disable User Account Control (the permission dialogs), don't automatically click Yes to the UAC dialogs, and don't enable scripted content on your Office docs from random sources and you really will be quite safe.

Oh and for an extra tip: use a password manager, regardless of what OS you're using. Lots of options out there, some with more features (e.g. cross-platform sync, or sharing with other people, etc.) than others. Pick any and use it, and you'll already be a lot better secured on the internet than most people on any OS.


## Terminal emulators

So as an important first step, let's discuss terminal emulators.

Nobody wants to look at or work with the old Command Prompt window (`conhost.exe`, not `cmd.exe` like most people seem to think).

![ConHost window](https://thepracticaldev.s3.amazonaws.com/i/9j401szlbdejy7l7r81r.png)

The terminal suffers from many issues, it's kinda slow, has no tabbing, copy & pasting is clunky, font support is kinda bad. But despair not! There are options.

1. [ConEmu](https://conemu.github.io/)

![ConEmu window](https://thepracticaldev.s3.amazonaws.com/i/8edgtsoyxd90emv3ccg4.png)

Tabs, split view, background customization, themes, tons of customization options, quake style slide down -option, profiles, options for running different different shells, etc.

Yes, all these are possible with ConEmu. If all you want is a good Terminal Emulator for Windows, use this. It's easy to install, no need to look elsewhere.

There's one downside that I feel I need to mention - the default prompt it's configured for is a bit annoying. You might want to edit `%PROGRAMFILES%\ConEmu\ConEmu\CmdInit.cmd` (check the [permissions](#permissions) -section below for how) or tweak the settings in-app to change this.

2. [The new Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701)

![Windows Terminal](https://thepracticaldev.s3.amazonaws.com/i/dney938qkk96iztc97sx.jpg)

Microsoft themselves realized that their terminal is kinda bad and drives away developers. So they're actively working on a new one. It's currently in "Early Preview Build" -phase, and requires Windows 10 version 18362.0 or higher. It seems very promising, but there might be reasons why you can't use it or wouldn't want to depend on it - you can just use ConEmu then.

3. Various cross-platform Terminal Emulators

There's now several that I've found, you've got the Node.js based [Hyper](https://hyper.is/) that has been around for a while, there's [Bterm](http://bterm.bleenco.io/), and like a long list of them on [https://terminalsare.sexy/#terminal-emulation-applications](https://terminalsare.sexy/#terminal-emulation-applications) - pick one, pick 5, try them, see what you like.

Personally I've really only liked [Alacritty](https://github.com/jwilm/alacritty) out of those, the others that I tried felt slow or otherwise janky, e.g. Hyper tends to randomly throw popups at you about some `package.json` parsing errors or other such nonsense when you're doing exactly nothing outside of running the default install.


## Package managers

There's a few of them out there now, e.g. [Scoop](https://scoop.sh/) and [Chocolatey](https://chocolatey.org/) to name a few. I can't with a straight face claim they're excellent, they tend to e.g. require me to launch a separate admin shell to run their commands instead of asking for privilege escalation when I run them, but there's clearly hope in this department and currently some options exist.

I personally have used Chocolatey to install a number of things and it seems to be problem-free.


## Virtualization

Like mentioned, I depend on virtualization to keep my various development environments etc. separate from my host OS, regardless of what OS is in question. It just seems wrong to poison your main OS with various project specific dependencies etc. that are likely going to start causing conflicts and other unmaintainable situations sooner or later.

As I tend to work only in a OS-agnostic way, all development I do needs to work with cross-platform tools. There's really only 2 base technologies you can do that with that I'm aware of right now:

1. [VirtualBox](https://www.virtualbox.org/)
2. [Docker](https://www.docker.com/)

If you know you'll always be using Docker only, then no problem, go and install Docker using their recommended methods for Windows and you're golden. It depends on Hyper-V and the installer will enable that for you if you don't have it installed yet, and that should solve all your problems. I've never been ok with Hyper-V myself so there's a high chance you'll end up with some random problems with e.g. anti-cheat systems in games and other things, but for pure development use it should be fine.

For any other cases I would highly recommend using VirtualBox, and if you also need Docker, either installing it via [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) (managed [Kubernetes](https://kubernetes.io/) environment, with easy access to Docker via `minikube docker-env`) or the old & vastly superior [Docker Toolbox for Windows](https://github.com/docker/toolbox/releases). Docker really is run by a bunch of people out of touch with reality, so they make it incredibly difficult to make it possible to run the working version of it

I'm specifically discounting VMWare as an option as it doesn't play as well with all the tools you want to use to manage your virtual machines, e.g. [Vagrant](https://www.vagrantup.com/), and it's not really seemed worth the cost to me for years since VirtualBox has significantly matured.


## GNU toolchain, CygWin and WSL

Some of the GNU tools (and some other typical *nix tools as well) are pretty nifty, and while Windows does come with some similar command line tools and Power Shell might be able to do a bunch of similar functions in a neat way, I gotta admit that I've never been super happy with either option.

What I do is I install [CygWin](https://www.cygwin.com/) (I use the `x86_64` version) and put it on my `PATH`, and use the CygWin setup tool to manage the various things I might want to install. Why use `nslookup` when I can just use `dig`, `curl` is easy to install as is `grep`, and `ls` beats `dir` as well. There are some occasional issues when a tool bundles their own `cygwin1.dll` or if you also end up installing MSYS2, but these tend to be rare and fairly easy to solve. I guess [MSYS2](https://www.msys2.org/) is also a viable alternative to CygWin though I have little personal experience with it, it uses `pacman` similar to Arch Linux for package management and that's kinda neat.

Then when I hit some of the rare cases when Windows support for some tool I really want to use kinda sucks, I tend to be able to run it quite well under [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) (what a terrible name) aka WSL. As an example I had some issues with running [Jekyll](https://jekyllrb.com/) on Windows because their developers apparently don't care to make their tools cross-platform, ran it in WSL and it was fine.

With WSL there's the extra fun bit that I can run an X Server on my Windows, e.g. [VcXsrv](https://sourceforge.net/projects/vcxsrv/) and have even GUI utilities run. There's still a lot of limitations and e.g. getting PulseAudio routed to the real Windows -side seems near impossible atm, but there's again quite a bit of promise here.

On top of that, I sometimes really rarely fire up e.g. Fedora on VirtualBox to try out some of the software that doesn't work even under WSL.


## Apple builds

Need MacOS for builds of your iOS/MacOS application? Think you need to buy Apple hardware for that?

There's various build automation systems that take care of it as well as things like [MacinCloud](https://www.macincloud.com/) that help with that.

So this also does not stop you from using Windows, and a solution like this might steer you towards the right choice of cross-platform development 🙂

Really this kind of hostile business practices should be reason enough to boycott a company like Apple, but sometimes you have to deal with the realities that you want to also release your app for the people who do run Apple hardware.


## Scripting, aliasing, and autorun

BASH scripting is kinda neat for some things, and people know how to set up their favorite aliases on it easily. However this is not the only option.

The Windows shell supports many basic operations anyway, especially if you already installed CygWin/MSYS2. I can e.g. run `find . -name "*.sh" -exec git update-index --chmod=+x {} ;` or `cat README.md | grep https://` just fine. Env variables? Can do, just use `set FOO=bar`.

[Batch scripting](https://en.wikibooks.org/wiki/Windows_Batch_Scripting) has been around for quite a while, and while it looks unfamiliar to most, it's typically capable enough to perform your most common problems.

You can write `.bat` or `.cmd` scripts, as well as just run them inline. E.g. instead of something like `$(minikube docker-env)` to execute the output of that command, you can run `@FOR /f "tokens=*" %i IN ('minikube docker-env') DO @%i` - looks quite funky for sure if you're not used to looking at it, but works just as well. There's also the option of running VBScript for some things outside the scope of the capabilities of Batch scripting, but as always, I tend to prefer the cross-platform solutions.

You CAN just run your BASH scripts on Windows, install `bash` via CygWin (or use WSL), and they tend to work fine if people are careful with not assuming certain things.

For anything even slightly more complicated, the options tend to be writing your scripts or tools with e.g. Python, Go, or Rust. Ruby is a widely used option as well that some use fairly successfully but it seems to me distributing tools made with Ruby is kind of a pain. If you're doing JavaScript development you can just use `npm` scripts or the various CLI utility libraries.

What about aliasing then? What if you want your `ls` to actually run `ls -haF --color=always`? Well, there's a solution for that.

```
DOSKEY ls=ls -haF --color=always
```

It's again, kinda odd if you've never seen it, but it works.

Want to make this permanent? There's way to do it via ConEmu and some others' tools, but for a more universal solution is where the autorun comes into play.

Create a script, e.g. in `%USERPROFILE%\init.cmd` and put your things in there. For compatibility and convenience prefix the thing with a line saying `@echo off` to disable the commands being output every time a new shell is started.

This makes the whole file look more like this:


```
@echo off
DOSKEY ls=ls -haF --color=always
```

Now you'll want to open up `regedit.exe` and browse to `HKEY_CURRENT_USER\Software\Microsoft\Command Processor` and create a new "Expandable string" value called `Autorun` (if one doesn't exist yet) with the data `%USERPROFILE%\init.cmd` (or the path to where-ever your script is).

If you trust your computer's security on random scripts you found on the internet (ever noticed how often people just curl and blindly pipe it to bash? 🤢), you could also save this as `autorun.reg` and double-click on it.

```
[HKEY_CURRENT_USER\Software\Microsoft\Command Processor]
"Autorun"=hex(2):25,00,55,00,53,00,45,00,52,00,50,00,52,00,4f,00,46,00,49,00,\
  4c,00,45,00,25,00,5c,00,69,00,6e,00,69,00,74,00,2e,00,63,00,6d,00,64,00,00,\
  00
```

That will give you a script that you can easily edit and get your aliases or other common commands e.g. to set up your Docker environment or whatever you want for each instance of `cmd.exe` you are running regardless of which terminal it is in.


## Paths

Some people might not be aware of this, but you can manage the `PATH` in Windows as well. You can either do it via the script above (`set PATH=%PATH%;<new item>` - notice the `;` and not `:` as the separator), or via the `View advanced system settings` option you can find in Control Panel / Start menu. In the `System Properties` dialog that opens up, on the `Advanced` tab, click on `Environment Variables`, find either the system-wide or user-specific `Path` and click `Edit...`. Pretty easy, right?

![View advanced system settings](https://thepracticaldev.s3.amazonaws.com/i/r271r8tkgn9ydybdurow.png)

Put your CygWin `bin` directory here.


## SSH keys + Pageant

SSH keys are a bit annoying on Windows in my experience, because the only decent tool for generating them seems to be PuTTygen from the [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) -suite, but it uses it's own format by default and you need to find the options to get proper standard OpenSSH compatible stuff out of it. It is however very much doable.

Pageant is the SSH key agent for Windows. I've yet to find another one that actually works.

Use the PuTTy installer to get PuTTygen as well as Pageant. Use PuTTygen to generate your keys, store the `.ppk` files somewhere on your filesystem, and if you want to keep them always loaded add Shortcuts to them to your `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup` -folder and when you log in they will be loaded to Pageant.

If you do this make sure you have your disk fully encrypted and have reasonable security, you do NOT want your SSH keys to be easily stolen.


## Window management

For me WinSplit Revolution has been doing what I need for organizing my windows quickly and effectively, but it's not for everyone and the official project is dead. There's a fork [WinSplit Reloaded](https://github.com/pupitetris/winsplit-reloaded) but it doesn't seem actively developed either.

There really is a lot of options out there though if you need them, just check out [https://www.slant.co/topics/1249/~best-window-managers-for-windows#1](https://www.slant.co/topics/1249/~best-window-managers-for-windows#1) for a list of some others.


## Screenshots

I used to run [https://getgreenshot.org/](https://getgreenshot.org/) for screenshots, and I kinda feel like I still should .. but `LWin+Shift+S` is enough for me to quickly copy a part of my screen and paste it into my communication tools so I rarely need anything else. I've heard a lot of good about [LightShot](https://app.prntscr.com/en/) as well, and really there's a number of options as well, here's again one list of options: [https://alternativeto.net/software/greenshot/?platform=windows](https://alternativeto.net/software/greenshot/?platform=windows)


## Emoji & UTF-8 special characters

Nowadays `LWin+.` opens an emoji picker, which is pretty nifty when you want to add stuff in your output, documents, or whatever. 👍

It's admittedly kinda clunky in some ways (I tend to hit `Esc` to close it), but after using it for a while it feels pretty natural.


## Fonts

Like all other systems, Windows also supports fonts, incl. the very standard TrueType -fonts. These can be used to make your IDEs, as well as your terminal emulators more clear and better looking. I personally really like to use [DejaVu fonts](https://dejavu-fonts.github.io/) for both my terminals and IDEs, as they have a nice clean look to them where all the characters are clearly different.

Installation is as easy as downloading the `.zip`, opening up `Fonts` (in Settings or Control Panel).

![Fonts in Windows Settings](https://thepracticaldev.s3.amazonaws.com/i/uhjyqw56jmwjcyfjv5ng.png)

It seems you can get some fonts from the Microsoft Store as well, but really the offering there is quite minimal.


## Git, Diff, and other such tools

Forget that awful `Git Bash for Windows` that people seem to end up with. It poisons your system with some awful attempt to get BASH in just to run Git and fails at making it work really well.

For CLI use you can either use the official binary from [https://git-scm.com/download/win](https://git-scm.com/download/win), or again install it via CygWin. Both should work, both likely need some configuration to get your diff tools working perfectly, and maybe setting up a `GIT_SSH` environment variable to get it to use `plink.exe` (again from the PuTTY package) to use Pageant for your SSH keys ([https://stackoverflow.com/a/10353937/3989287](https://stackoverflow.com/a/10353937/3989287)).

However, why would you use CLI when you can use a GUI tool that will give you much better understanding of the state of the repository, and the changes you're about to commit?

My personal favorite atm is [GitKraken](https://www.gitkraken.com/git-client) but  [SourceTree](https://www.sourcetreeapp.com/) and [many other options](https://git-scm.com/download/gui/windows) exist.

For diffing, I've got a soft spot for [WinMerge](http://winmerge.org/?lang=en). I've never met a diff/merge tool that does what I need from it better than it. [Many options exist again](https://merabheja.com/12-best-free-file-comparison-tools-for-windows-10/).


## What about automatic restarts?

Yea, Windows has a tendency now to automatically install updates and reboot when necessary. It is kind of a security feature, and typically causes little annoyance if you have your editors set up to save files automatically (though some like Sublime Text now remember the content even without saving), and don't tend to have massively important things running in terminal emulators or incognito windows or similar.

The easiest way to avoid such issues is to set up the "active hours" under Windows Update settings - it will prevent your updates from happening during working hours or similar. Similarly if you are going to an important meeting, maybe just pause updates completely - there's a new "Pause updates for 7 days" -button in the same Windows Update -settings.

To me personally that is also not enough on some of the computers I work on because I might leave e.g. this post open for a long while and I don't want to come back to it being gone.

There's a number of additional things you can do depending on your edition of Windows.

 - [Change the automatic installation to notifications](https://www.laptopmag.com/articles/stop-windows-automatic-reboots)
 - [Removing the UpdateOrhestrator's Reboot ability](https://www.windowscentral.com/how-prevent-windows-10-rebooting-after-installing-updates)
 - [Group Policy updates and registry hacks](https://www.makeuseof.com/tag/disable-forced-restarts-windows-update/)

Depending on your needs and circumstances some of these are more applicable than others.


## Permissions

> But what about the pesky file permissions? I can't edit the files when I need to!?!?

People just fundamentally don't understand file permissions on Windows. People disable User Account Control, or just install things outside of `Program Files` or similar to work around the permission system they don't understand instead of learning it.

That's like recommending you to run everything as `root` or running `chmod -R 0777 /` on Linux, or disabling SELinux - insane, but you 100% know people that have done that because they just can't be bothered to learn.

If you need to run a command and you don't have permissions to do the thing - run the command prompt / other application as an administrator, it's easy. In the Start Menu you can typically right-click on any item and choose "Run as Administrator". Think of this as `sudo`.

Well what about when you feel like your user should have access to the files and you don't? You can edit the permissions for the specific files or folders.

Open up the File Explorer, browse to the content in question, right click on the entry and choose "Properties".

![Windows File Properties](https://thepracticaldev.s3.amazonaws.com/i/plctcqat96vg759opo0t.png)

Then switch to the "Security" -tab and you can view the permissions set for it. Want to change them, e.g. to add permissions for yourself?

Click `Edit...`, then e.g. `Add...` and when it asks to "Enter the object names to select" you can just write in your username, in my case `Lietu` and hit `OK`.

With yourself selected on the screen you can then e.g. click on the `Allow` checkbox for `Full control`, and click `OK` on the dialogs and voilá your problem is solved.

![Windows File Security](https://thepracticaldev.s3.amazonaws.com/i/9qn2x46qh2s6htiwumal.png)

This is more akin to `sudo chown <username> file`.


## Automation of much of the above

I wrote a tool to automate many of these things, [Aperture Control](https://github.com/Lieturd/aperture-control) - free (BSD 3-clause) tool and collection of PowerShell scripts, Batch scripts, and Registry patches, to e.g. install various tools automatically from Chocolatey and Scoop, or configure your Windows setup as you like.

There's a collection of ready-made recipes for it available at [https://github.com/Lieturd/aperture-control-recipes](https://github.com/Lieturd/aperture-control-recipes), which hopefully will keep growing.

Using Aperture Control I also wrote a template that I consider a good [standard development environment](https://github.com/Lieturd/aperture-control-example) and a great base to start using Aperture Control from. Hopefully it helps you out too. It's somewhat opinionated but I tried to leave most personalization tweaks outside of that and just add things I think are pretty universally required or make developing on Windows better.


## Closing thoughts

I've been a heavy *nix user over the years, but really I find it impossible to find a *nix desktop I'm comfortable with.

Windows used to be much worse, I get it if you have had bad experiences, but since Windows 7 came out Microsoft has really significantly improved on stability and reliability. The errors that you might bump into are easier and easier to find solutions for online, and you just generally have less of them. I've found [@MicrosoftHelps on Twitter](https://twitter.com/MicrosoftHelps) to really be some of the best customer support experience I've had.

Linux has too many issues with drivers, bugs and poorly designed features, e.g. drag & drop not working or having separate clipboards for mouse selection and `Ctrl+C` & `Ctrl+V`.

MacOS is too dumbed down without even having basic ability to control the volume per application, or tweaking any settings at all really. If you don't like the way Apple likes it, too bad.

There really are no other mature enough desktop environments to have the tooling I depend on.

Windows has been a good development environment for years, and keeps getting better and better with Microsoft *actively* fixing issues, adding things like WSL, and really listening to [feedback from developers](https://wpdev.uservoice.com/).

And on top of all this, you can get a much more powerful working computer, with e.g. built-in 4G modems, touch screens, etc. for the fraction of the price of a Mac.

I would like to hear if you guys got any other tips, or problems with Windows development environments you might want to mention - we could maybe solve together some of these painpoints that are still remaining.

My next goal might well be to try and automate a bunch of what I wrote above - get myself a nice Windows environment set up by running one Batch script or VBScript file. If you've got any tips towards that I'm all ears 🙂
