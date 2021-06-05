---
title: Setting up a company's IT
date: "2018-11-02"
description: Guidance on how to organize your company's IT operations, be they purely internal, or if you are hosting services other people use.
tags:
- security 
- gdpr
- pci-dss 
- passwords
---

## Preface

This is a set of tips, guidelines, etc. that you should follow to make sure your IT operations run smoothly, securely, and cost-efficiently. You should go through the list and pick the low hanging fruits first, and then see which ones you should implement later.

If you're just starting a new company, most things should be easy to set up right from the start and doing so will help you ensure that things continue to are done right in the future as well, as you need to always accommodate for those decisions.

## Data storage and access

This is how you keep and access your email, company's shared documents, and handle authentication to various services.

### Password storage (*EXTREMELY* important)

First and foremost, how you store your passwords, both for a single user and how you share e.g. login information to bought services, is a crucial first step to ensuring both smooth and secure operation.

We've all heard about how Sony and other even big companies with clearly the necessary budget to do things properly, have managed their passwords on Excel sheets that then get put on low security environments for easy access.

There is really no excuse to not invest in a password manager, that both:

1. Ensures the passwords you use, are unique and strong.
2. Allows secure sharing of your passwords, among team members.

Some excellent options for password managers are (in alphabetical order):

 - [1Password](https://1password.com/)
 - [Buttercup](https://buttercup.pw/)
 - [Dashlane](https://www.dashlane.com/)
 - [F-Secure KEY](https://www.f-secure.com/en/web/home_global/key)
 - [LastPass](https://www.lastpass.com/)

They all have their own pros and cons, and you need to evaluate them for your own purposes, however Buttercup is slightly more different from the others as it leaves the storage of the passwords for you to decide. With the others, you will always use their cloud storage (not certain of all of these, but typically zero knowledge encrypted) to store the database in, but with Buttercup you can use whatever you like (Google Drive, Dropbox, your company's file server, whatever).

The paid services typically are about $5-$10/mo/user, so not a drain on even a small company. However, if price is an issue then Buttercup (or KeePass, or other similar systems) are worth taking a look at.

You should ensure that all the company employees AND external parties who have access to your shared documents etc. use similar secure methods for their passwords.

### Two-Factor Authentication (2FA)

Quite a few services with any security implications for you support 2FA using various different means. The easiest to set up typically is using either Google Authenticator, Authy, or similar mobile app to generate 2FA tokens, but a [YubiKey](https://www.yubico.com/products/yubikey-hardware/) can be a good investment as well and offers many surprising integrations to e.g. PAM on Linux servers and Windows Hello.

You can avoid a large number of issues by having Two-Factor Authentication set up on your:

 - Password managers
 - Collaboration and productivity tools (Google G Suite, Microsoft Office 365, ...)
 - Web based email
 - Social media accounts (both company's accounts and everyone with access to e.g. your company's Facebook page)
 - Cloud hosting systems (AWS, Azure, GCP)
 - Really anything that supports it

These should be required by company policy and software configuration where possible. Once the staff has used these for even a short while they become second nature and don't really bother people, even if they feel like a chore to begin with.

However, storing your backup tokens etc. becomes another little hurdle.

### Document storage

Often you will want to write documents available for multiple people in your company and not just for yourself. Even if you're writing for yourself, you might want your documents to be stored securely and without risk of you losing them. Additionally sharing documents between your different devices might be a thing you might want to do.

The worst option you can do, typically is to juggle your documents and their hundreds of different versions over email, but this is still the de facto standard in quite a few places.

Your priorities might vary, but at least the following considerations might be important to you:

 - Security (no unauthorized access)
 - Reliability (no accidental loss of data)
 - Sharing (allowing access to other people)
 - Convenience (e.g. simultaneously editing a document, etc.)
 - Version control (knowing where to find the latest version, and keeping history)

There are several good options for this, and how much value you put on each of these areas will affect your decisions.

Some of the obvious easy answers are:

 - [Google G Suite](https://gsuite.google.com/)
 - [Microsoft Office 365 for Business](https://products.office.com/en/compare-all-microsoft-office-products?tab=2)

These tools definitely rank high on sharing, and convenience, as well as version control. Typically security is pretty high too, making it possible to e.g. require 2FA, but some people just don't like U.S. corporations controlling their data. They also don't store the files in a zero-knowledge encrypted manner, which might be something you'd like.

Other options I've seen used and have used to various degrees of success are:

 - [Dropbox](https://www.dropbox.com/)
 - [pCloud](https://www.pcloud.com/)
 - [SpiderOak](https://spideroak.com/)

These all operate on a quite different fashion, as both Google and Microsoft provide high degree of convenience, but using these tools e.g. simultaneous editing of documents is going to be very difficult, and version control might have to be done using filenames (`progress report 2018-11-02.docx`). However, at least some of them can provide higher degrees of security (zero-knowledge encryption), and potentially other benefits to you.

As a side note, if you ever use file/directory names for versioning, grouping or similar, use ISO-8601 (YYYY-MM-DD) to make sure they get sorted properly.

Regardless of which option you choose you still need to worry about backups - human error happens and an accidental drag & drop or fumble on the keyboard could wipe your whole storage.

### Backups

What you really need backups for are at least:

 - 2FA backup codes
 - Legal documents, book keeping information (invoices both in and out, etc.)
 - Corporate documents
 - Passwords (at least if you don't rely on a service with it's own cloud storage)

How to manage backups is unfortunately still not an easy subject, even in 2018. There are several complications, and security risks associated with backups as well.

Some of the problems are if you store your documents on these cloud storage systems, you need a system able to read the files from there, before it can back them up. Additionally if your backups are not stored securely, in an encrypted format with restricted access, they might become a new weak point in your security strategy.

Some systems that may help with this are (in alphabetical order):

 - [CloudBerry Backup](https://www.cloudberrylab.com/backup.aspx)
 - [JungleDisk](https://www.jungledisk.com/)
 - [SpiderOak](https://spideroak.com/)

If in a pinch, you might get reasonable backups by using something like `rsync` on a secured server, but hard disks fail even on backup servers, so it's yet another little thing to monitor and worry about.

### Internet security

It's important for you to make sure that at least for critical things your Internet usage is securely handled.

E.g. your personal social media use, gaming, etc. should optimally not be done on machines you work on. This so you limit potential damage of ransomware, other malware from getting to your corporate banking, or people stealing your secrets.

Additionally, it's good to use tools like HTTPS Everywhere, and trustworthy VPNs to reduce the chances of your communications being intercepted while at an airport or cafe or similar. Having anti-virus software (yes, even on your Mac) is also important to reduce chances of malware breaches, and limit their potential damage.

One of the best packages I've seen so far is [F-Secure TOTAL](https://www.f-secure.com/en/web/home_global/total), which combines antivirus, password manager, and VPN service in one package. There are however many other excellent VPN services, as well as antivirus tools, so you should check them out and evaluate them with your own needs in mind.

Also make sure your office router is properly configured, with a unique strong password, so you don't fall victim to the simplest possible forms of attack.

It's also a good idea to make sure your work machines are properly firewalled, and that you regularly run software updates. This applies both on your work machines, as well as that little web server you bought from that nice hosting company 5 years ago. Having someone replace your homepage with a goatse is not exactly good advertisement.

### Limiting access

Does your CEO (or the CTO for that matter) really need all the SSH keys to your servers? Access to all the passwords? Admin account on every service you use?

The same question applies in addition to the CEO to most other people - you should limit access to systems that are relevant to the person's work, and access levels as well.

This simply so when accidents happen, the scope is limited. It's best if you can have different admins for different systems, so a compromising a single person does not compromise all your systems.

## Physical security

In addition to threats from the Internet, you're always at risk of physical attacks, and more likely, negligence - e.g. losing equipment.

Make sure your office has locks and alarm systems, as burglaries happen even in nice places and you don't want to lose that backup server in the back room.

It's a bit questionable if this belongs in this section, but encryption is important on every system. Make sure all your work machines use full disk encryption, as well as BIOS passwords or similar when possible. BitLocker is a pretty decent tool on Windows machines (though it regularly gets automatically paused with updates for some reason so be careful), and Macs have FileVault.

These rules should also apply to all phones with any work material on them (email, collaboration tools, password managers, access to company social media accounts, ...) - they should be fully encrypted, and require strong password to unlock.

Now, your CEO might feel these rules don't apply to them, but you should assure them that they are not infallible either and get them to see the light.

## PCI-DSS

If you operate any kind of online store, you probably fall under PCI-DSS (Payment Card Industry Data Security Standard) regulation at least on some level. For at least the lower tiers of self-certification completing the above should ensure you're fulfilling their requirements.

For higher tiers you might have to do additional work, e.g. locking down what people can do on the work machines they use for certain actions. This is not exactly pleasant for anyone, so it might be best to limit the exposure to PCI-DSS regulation either by using 3rd party payment solutions, or by organizational structures, but this is a very lengthy topic and I'm not the best expert on these.

## GDPR

The GDPR requires quite a few little things from your company, among which are most importantly that you:

 - Know where your data is (especially personal data) and who you share it with (e.g. Google Analytics, PayPal, your accounting company)
 - Use reasonable means to secure that data (encryption, limiting access, etc.)
 - Keep only the minimal amount of data about people for your needs
 - Notify your customers of breaches in a timely manner (a few days within breach)
 - Get consent from your customers for processing their data
 - Avoid collecting sensitive personal data (race, political preferences, religion, union status, health, sex life, sexual orientation, even e.g. hobbies)
 - Provide easy way to get a copy of their data to people who request it
 - Provide an easy way to have their data be deleted for people who want it

Now the above steps help you with security quite a bit, but leave most of the others still for you to figure out.

To get you on the right mood to solve this problem, you might want to check out the "GDPR nightmare letter", which is quite exaggerated but highlights many potential issues for your company: https://www.linkedin.com/pulse/nightmare-letter-subject-access-request-under-gdpr-karbaliotis/

Other resources on the matter:

 - https://blog.varonis.com/gdpr-requirements-list-in-plain-english/
 - https://blog.varonis.com/privacy-design-cheat-sheet/
 - https://blog.varonis.com/eu-gdpr-spotlight-pseudonymization-as-an-alternative-to-encryption/

## Final words

There's probably still a lot missing, especially for tool and procedure recommendations, as well as some topics completely.

I'll try to update this over time as I get new ideas to add here.

What do you think about the suggestions? What did I forget to mention? Let me know in the comments.

I at least identified a need to write more on:

 - Internal communication tools (Slack, Discord, Microsoft Teams, and the like)
 - Calendar
 - Email
