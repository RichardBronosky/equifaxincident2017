# TL;DR
I purchased<br/>
[www.equifaxincident2017.com](http://www.equifaxincident2017.com/index/)<br/>
to demonstrate that it was a mistake for Equifax to purchase<br/>
[www.equifaxsecurity2017.com](https://www.equifaxsecurity2017.com)<br/>
Read on to learn more.

# It's clear that Equifax knows nothing about security.
If they did, they would be conditioning their <strike>victims</strike> users to go to security2017.equifax.com rather than [www.equifaxsecurity2017.com](https://www.equifaxsecurity2017.com).

# Why is this a problem?
There is nothing to stop anyone from buying a domain that **includes your trademark**. The only protection anyone has is on **domains you own**. (And there is an unlimited number of domains that can be created with your trademark in them.)

## What's the difference?

### A [domain](https://en.wikipedia.org/wiki/Domain_name)...
is easiest described as "your name dot com". But you know that not all sites are "dot coms". There are also "dot net" and "dot org" as well as "dot edu" and "dot gov". Is that all? Not even close. All of these different "after the dot" portions are called "Top Level Domains". There are a lot of them, but they are finite. So a domain is more accurately described as "your name dot top level domain".

### A [trademark](https://www.uspto.gov/trademarks-getting-started/trademark-basics/trademark-patent-or-copyright)...
identifies and distinguishes the source of the goods of one party from those of others. You know equifax owns equifax.com. That is their "primary domain". Why is it primary? Because the public trusts its officiality more than anything else. More than anything else? Like what? Well, if I told you, "go to IHateEquifax.com" then you would expect that it is not an official Equifax site.

# What's the solution?
You teach your customers that there is 1 and exactly 1 domain to trust and for everything else you make subdomains.

## What's a subdomain?
If a domain is "your name dot com". A subdomain is "anything dot your name dot com".

## Why is this more secure?
Because subdomains are not purchased. They are free and unlimited to create **as long as you own the domain they are under/left of**. They are like mineral rights in a nation where you own everything below you to the center of the earth.

## Recap
* For less than $10 I bought the domain equifax**incident**2017.com because it looked like equifax**security**2017.com which Equifax has (but never should have) promoted as official.
    * I am hosting this for free on GitHub, but that doesn't stop me from making [a page that looks exactly like the official page](http://www.equifaxincident2017.com/index/) (like Phishing scammers are surely doing right now).
* Anyone can buy names like:
    * equifaxsecurity2017.com (something to the right of the trademark)
    * security2017equifax.com (something to the left of the trademark)
* Only the owner of equifax.com can create (not buy because it's free) names like:
    * security2017.equifax.com (same as the last one, but with that extra dot)
    * www.equifax.com (yes, www is a subdomain)
    * enroll.equifax.com (this list could go on forever)
* SSL certificates (aka: <span style="color: #177f45;">https</span> or <img src="/etc/greenlock.png" alt="green lock" style="margin:0px; padding:0px; border:0px; max-width:9px;">) only mean that traffic is encrypted. It does not mean that the site is affiliated with a trademark used in the domain or in the content.
    * [SSL certificates are free](https://letsencrypt.org/). I just chose not to use one because I wanted to host on GitHub.

# Why did I do this?
Because I know that there was an engineer like me at Equifax who told their boss that buying equifaxsecurity2017.com was bad for security. That person's boss didn't get it. They had never seen the consequences that engineer warned about. I've been that engineer. I've bought and configured hundreds of domains that were bad ideas. But none of those missteps received the press that this is going to get. I hope this can be shown to all future bosses who ask engineers to buy these domains.
