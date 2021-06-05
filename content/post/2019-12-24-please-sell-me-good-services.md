---
title: Please, sell me good services
date: "2019-12-24"
description: Exploring the options for cloud storage and password managers, and difficulties with finding reliable services
tags:
- productivity
- discuss
- security
- cloud
---

I've ended up identifying basically 2 services that I need both for personal use as well as work to be efficient and safe.

1) Cloud storage - ability to store files off my own computer and synchronize with all my computers

2) Password manager - generating and storing good passwords and giving me convenient access to them when I need it

It seems like these should be pretty widely wanted things, things that have been around for a long time, and there's a lot of competition, yet I've been unable to find any good options.

My general criteria to be able to use and trust any such tool are simple:

 - Safe zero knowledge encryption based cloud storage and synchronization of my data - it cannot be possible for them to leak my data accidentally or on purpose
 - Operating in a trustworthy jurisdiction - companies from the U.S. and Australia are at least immediately disqualified as their laws make it possible for them to be forced to change their application to either break the encryption, copy all their users' passwords, or just inject their code with trojans or whatever else at any point in time - thus making them inherently untrustworthy .. preferably my data should be stored within the EU or Switzerland
 - Wide platform support, as I need to be able to collaborate with people, and I myself use multiple different systems - Windows, MacOS, Linux, Android and iOS are minimally required.
 - Easy sharing of content when I need to do it - passwords and other secrets are regularly shared within a team, and it'd be very beneficial to be able to share links to documents or other files in my cloud storage, though that is less required and more a nice to have for me

The list isn't long, it shouldn't be unreasonable, so why so many issues? Well tools exist that fulfill these requirements, but they seem to have a number of other issues that make using them difficult or at the very least unpleasant.


## Cloud storage

Additional things I'd need for cloud storage are pretty limited, really I can just think of:

 - Ability to configure disk space usage limits
 - Ability to define where the local cache is stored (no need to use relatively limited SSD space when big spinning disk RAIDs are available)
 - No unreasonable limits to storage - optimally I want to pay for what I use, regardless of if I use 1GB or 10TB, but to back up the video content I create, photos, and so on tends to take a lot of space

What would be nice is if it had file versioning support for backup purposes, so I don't have to worry about ransomware wiping out all the files and so on, otherwise I need yet another tool for backups which will have the same number of issues.

Immediately a large number of options are ruled out due to the basic requirements of trustworthiness. All the giants like Google, Azure, Amazon, Dropbox, and many of the somewhat smaller options like SpiderOak and Backblaze just get instantly disqualified for being U.S. based entities even if they had all the other features I need. Most aren't zero-knowledge so I can't trust them with any of my data anyway. Most of the remainder typically support just Windows and MacOS.

I've been using pCloud for some time now as a bit of a compromise solution. It's not ideal, but it fulfills my needs better than the rest. Yet, it also regularly forgets who I am, zero-knowledge encryption requires extra hoops to jump through which causes some issues, it is limited to 2TB limiting my ability to use it, and .. it's unstable and has other really annoying bugs, some just "by design". If I try to transfer my source code folders into it, it will crash. The service just dies, the systray icon goes away, and the drive stops existing. It seems like it cannot handle large numbers of files. Same happens if I then try to delete the files from it. Also I can't move files between the crypted folders and the non-crypted ones, and there's other funky things going on with the filesystem that make it difficult for me to use it in general.

Tresorit seemed to fulfill most of my needs but then I got surprised that they require my phone number on their registration form, normally not a significant concern if they have a good reason for it, but I checked what it says they wanted to use it for: "Please provide your phone number so we may better help you". Immediate red flag - what is up with this? I try to ask their support, they repeat the mantra: it's to help me set up my account tailored to my needs. Err, what does that even mean? When I mentioned to them that the only valid use I know for using my phone number is SMS based 2FA, and they didn't seem to say if it was that, so I expect they're using it for marketing - they denied this. I then found out that their privacy policy clearly states that they DO use the phone number for marketing purposes. They've kinda lost all trustworthiness at this point if they can't clearly state what they do with your data and then just flat out lie about it. Also, limited to 1TB. Still, considering the amount of issues I have with pCloud I might just buy a throwaway number (costs about 1€ at a kiosk - the reason why using phone numbers for identifying purposes is not viable) and register using it.

I've even been thinking of using tools like BoxCryptor to enhance the security of an otherwise less trustworthy system, but in the past I've had bad experiences with those tools as well, especially with synchronization with multiple machines. They also tend to ruin the shareability of content, but that's the least of my worries.


## Password managers

Besides the general criteria, I require from a password manager:

 - Ability to integrate to my browsers for both autofill of passwords (though does not need to be "hands off"), and generating new ones easily
 - Good password generation algorithms
 - Ability to survive me using multiple browser profiles on multiple devices simultaneously and overall just accessing the passwords on multiple machines.

Sounds pretty basic, so what's the problem?

I've tried a number of password managers but just can't seem to find anything that is truly good. Most of them just fail even on the basic requirements, KeePass doesn't handle with multiple computers having the database open simultaneously all that well, F-Secure KEY does not support Linux, LastPass is owned by LogMeIn - a company from the states, and so on.

I ended up switching to Dashlane as my latest full fledged experiment, and I can't say I've been happy. The basics are in place, but the experience is pretty terrible.

I keep getting logged out of Dashlane for no reason, I tell it to remember my credentials, yet I keep getting asked to login repeatedly. It's more than a minor inconvenience when your password is properly long and you've got 2FA set up on a device with also a good password required to unlock it. The browser extensions are incredibly buggy and overall poorly designed, often it just doesn't load for a website and I need to reload it several times to get the autofill to work, and it keeps suggesting saving my phone numbers, credit cards, addreses etc. which I've told literally hundreds of times by now to "never save". When I open up e.g. PayPal and Dashlane asks me to log in and I do - well .. I get redirected from the site I wanted to be on, to their dashboard for no reason. Their support is also incapable of acknowledging their software has issues, it took me literal months to initially even get to try their software as their support was so unresponsive to my clear bug reports with data about how to reproduce them and so on.

They also insist on releasing "updates" to their software on a regular basis, but unfortunately do not understand the concept of quality assurance, automated testing, etc. and thus I end up regularly with my password generator simply not working and other such critical issues. Their support insists they need to make regular updates and these cannot be disabled because of security reasons, which makes me think that if they need to release security updates every 2 weeks or so that there's a lot more wrong with Dashlane than I've seen so far.

Where am I going to find a password manager that I can trust, which doesn't annoy me all the time? I remember I had some reasons to not use 1Password, but that was a long time ago and that's probably not valid anymore. The list of options is gladly growing, but on the other hand not all of these options are obvious the first time you launch it but only after a month or a few of active use.

If I could find a good cloud storage option, then tools that do not provide their own cloud solution, such as Buttercup, would also become more viable options for me. Until then, I can't really even consider them.


# Crowdsourcing research?

I'd love to pay more to get a better service, if it was available. I'd spread the gospel if I found a good tool, and recommend them to my friends, and to the teams I work in. There's just a limit of how much personal effort I can put into finding a tool. Does anyone know of good trustworthy and stable tools that would fulfill these needs?

Is Tresorit a good choice? What about 1Password? Are there others I should consider, and if so - why?
