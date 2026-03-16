const d = (daysAgo, hour = 9) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hour, 0, 0, 0);
  return date;
};

const fmt = (date) =>
  date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

const testdata = [
  // 1. Jordan
  {
    sender: "airjlee@uw.edu",
    senderName: "Jordan Lee",
    to: "you@gmail.com",
    subject: "On Cancel Culture",
    starred: true,
    content: `Mob mentality—to follow popular opinions thoughtlessly—is a concept often seen throughout the present-day culture of social media, propaganda, and many influential figures. Comparable to an animal following a herd, forming individual opinions is more troublesome than simply following the rest of the pack. And in many ways, social media application Twitter is the peak manifestation of such values. Now, of course, Twitter itself is a much useful application which connects diverse groups—and their opinions—from all around the globe. However, a small vocal demographic still utilizes it to spread envious, self-righteous negativity, disguised as virtuous acts for activism, but at its core, promotes an environment in which opposing opinions is not refuted with debate, but instead with attacks to their livelihoods and career. This phenomenon is dubbed Cancel culture.

I would like to begin with clarifying that most times, I do not agree with the unpopular opinion. Personally, in many of these cases, I really do feel a strong urge to reply with a strongly worded and aggressive comment, one aimed more towards demeaning the person than actually refuting their point. But I, along with what I believe to be the silent majority, choose not to insult an entire person based on one opinion, ending up only spreading more negativity than actually attempting to make a difference in that person's viewpoint. But, with my time spent on the internet, I have seen a lot of occasions where a debate over a controversial topic spirals into a life-achievement showcase, where each side attacks each other on an extremely personal level. Now, at this scale, internet arguments really don't matter at all. But, like vox.com puts it, when "a celebrity or other public figure does or says something offensive. A public backlash, often fueled by politically progressive social media, ensues. Then come the calls to cancel the person — that is, to effectively end their career or revoke their cultural cachet, whether through boycotts of their work or disciplinary action from an employer." This is—as many like to put it—cancel culture—where a single misstep in presenting yourself—or even having presented yourself, because these people simply love digging up old controversies—can lead to your entire career being ruined in a matter of days. Nowadays, instead of civilly attempting to change someone's on a topic or even accepting that someone's views from a world ten years ago may not reflect what they think now, this hate mob would rather send messages of, well, hate—which oftentimes include genuine threats to a person's wellbeing, whether to their career or even death threats. Facilitated by Twitter—where the popular replies are given more visibility—many who share the current and popular opinion see others who spread this hate, and in turn share the mob mentality in which censoring the other opinion is alright, bashing someone for a single mistake is alright and where the person who holds this offensive opinion or makes this mistake should be punished with their entire life being ruined. They love taking things to an extreme level, to fulfill their own self-righteous ideals of how those wrong—or those who've been wrong—should be completely erased, giving no chance for redemption, change, or any apology whatsoever. Instead of taking offense to and attempting to change their misguided views, which often come from a lack of understanding, this mob takes offense from the very existence of this other person, no matter what good deeds they have done. And so, they try their hardest to strip this other person of their career, and usually succeed, because to a corporation, what's more important—Their reputation, which directly correlates with their revenue, or an employee, who will only slightly dampen their earnings? And so, they will succeed, not in genuine activism, but instead attacking someone with the same negativity they—many times—try to stop.

But of course, these are simply generalizations that don't mean anything without genuine examples. But for these examples, there are definitely a lot. And by simply scrolling through Twitter everyday, you're bound to find these meaningless internet arguments everywhere, but it gets interesting when actual consequences usually arise in celebrities and influencers, who have enough of a following to cause genuine damage. As is the case with 2010s YouTube star Jenna Marbles, who back in that era, made several comedic sketches that are considered offensive today. Jenna Marbles was engaged in recent controversy dating back to June this year, where several groups of people on Twitter were angered at her use of blackface in a video from 2012. That video, which was considered funny and not offensive at the internet culture back then, incited a new wave of Twitter users to jump on the cancel culture train, and begin to give malicious backlash to the point that Jenna Marbles, herself, made the decision to leave her YouTube channel and the internet, conceding to the hate that she received from the Twitter mobs. It's unbelievable how a video from 8 years ago, in a time where the Internet was only beginning to bloom, in a time where the general consensus was that humor was allowed in any forms, even in forms that may have been culturally discriminatory, was able to cause enough of a reaction to essentially take down a YouTube channel which has been running for ten years. Jenna Marbles, after facing the backlash, deleted her videos and put out an apology to those angry. And putting aside the debate of whether or not her video was actually demeaning, Jenna Marbles has clearly shown that she regrets posting those videos, that her views from the past clearly do not coincide with her standards today. And so she was pressured to leave YouTube. As the second most subscribed YouTuber, Felix Kjellberg, puts it, "Jenna Marbles was one of the most genuinely good people on this platform and now she gets bullied off the site by mistakes that happened 8-10 years ago…Who cares?" and quote "These actions reflect in no way who she is and the content she makes today, anyone who watches her can see that. Some things were more leviant [sic] a few years ago — that's not to say it was right, but where the line is drawn from the past and today seems non existent. I thought the point was to learn from your mistakes and do better? We all have problems in our past, no one in the world is perfect[.]" At the end of the day, pushing a person off their career isn't going to change anything. But in many ways, people have their self-righteous, virtue-signalling matters validated by this mentality that nobody is allowed to change, and societal change can only happen by removing those who are in some way, or I guess should say, in any ways offensive whatsoever. Pushing Jenna Marbles off her beloved platform is—believe or not—not going to fix the issues of race in our society. The takeaway from bystanders is not that blackface is bad, but that you need to try your hardest to remove any offensive things from your past, and do your best to not make any more mistakes in the future. It's not reinforcing having moral core values, it's reinforcing that you should be as sneaky as you can.

But, moving on from that, even though most of 'cancel culture' occur to online influencers, there have still been cases of the same negativity forced onto people who have a smaller, easily ignorable online presence. Although just rumors, I have even seen an incident in our community where a high-school graduate posted a video in which the n-word is supposedly used in a comedic way. After which a group of about 10 Twitter users screen recorded, shared online, and had thread bashing the graduate, which led to emails to the graduate's future college, and the eventual removal of this student from their future college. Although I don't see the humor in the aforementioned video, it irks me greatly that one video, made in jest, and unknowingly offensive, was able to destroy this student's future aspirations, and quite possibly ruin their life. Although they lacked the thousands of people that usually attempt to cancel someone, they still had the same negativity—which was further magnified again and again within that Twitter thread, and in turn, amplifying that malice to a point where the student wasn't given a chance to apologize, to change, but instead just directly damaging the person's livelihood. They stopped taking offense to the video, and instead took offense to that entire person's life, leading them to try to ruin it in any way they can. And ruin it they did. Seeing that internet culture has developed to a point where discussion and debate is ignored, and jumping the gun to damaging a person's wellbeing is more common, it really sets a scary precedent and an even scarier omen as to what may happen to free speech on the internet.

I do not believe that spreading more negativity in attempts to further societal change is useful. In fact, I think alongside this mob mentality and a need to feel righteous, genuine malice is causing these spurs of cancel culture. Whether from top creators or even scarier, the spread to smaller social circles throughout our country, cancel culture has developed to the point where it's genuinely terrifying trying to not have an opinion against popular standards, or make a misstep anywhere online. Nothing is going to stop those who do not actually wish to change someone for the better, nothing is going to stop those who only wish harm on those they deem offensive. But, as they derive their power to 'cancel' others from this mob mentality, we should all be a little conscious of what ways our emotions may change our civil debate into malicious arguments.

Jordan`,
    time: fmt(d(0, 15)),
    createAt: d(0, 15),
    unread: true,
  },

  // 2. Company 1 firing (formal termination)
  {
    sender: "hr@crestwood-institute.org",
    senderName: "Human Resources — Crestwood Institute",
    to: "you@gmail.com",
    subject: "Notice of Employment Termination — Effective Immediately",
    content: `Dear Employee,

Following our meeting earlier today, this letter serves as formal written notice that your employment with the Crestwood Institute has been terminated, effective immediately.

This decision was made in accordance with Section 9.4 of your employment agreement (Termination for Cause — Reputational Harm), following the review initiated on Monday regarding recent public statements attributed to you.

You are required to:
  — Return all company-issued equipment and materials within 5 business days
  — Cease representing yourself as affiliated with the Crestwood Institute in any capacity
  — Comply with the confidentiality and non-disparagement clauses outlined in your original contract

Your final paycheck, including accrued PTO through today's date, will be processed within the standard two-week payroll cycle.

Please do not contact students, faculty, or staff regarding this matter. All communication should be directed to HR.

Human Resources Department
Crestwood Institute`,
    time: fmt(d(0, 14)),
    createAt: d(0, 14),
    unread: false,
  },

  // 3. Social media notif
  {
    sender: "trust-safety@platform-notify.com",
    senderName: "Trust & Safety Team",
    to: "you@gmail.com",
    subject: "Your account has been flagged for review",
    content: `Hello,

Your account has been flagged following a significant increase in user reports over the past 48 hours.

Our Trust & Safety team is currently reviewing your recent content for potential violations of our Community Guidelines — specifically sections 4.2 (Harmful Speech) and 7.1 (Coordinated Reporting Abuse).

During the review period, certain account features may be temporarily limited, including the ability to post, share, or send direct messages. This is a precautionary measure while we assess the reports.

You will receive a follow-up notification within 72 hours. If you believe this review was triggered in error, you may submit an appeal through your Account Settings.

Trust & Safety Team`,
    time: fmt(d(0, 12)),
    createAt: d(0, 12),
    unread: true,
  },

  // 4. Hate mail
  {
    sender: "xm3847t@protonmail.com",
    senderName: "xm3847t",
    to: "you@gmail.com",
    subject: "(no subject)",
    content: `You think you can just say whatever you want and face no consequences?

We know where you work. We know your address. The internet does not forget and neither do we.

Resign now. Before we make this much worse for you.`,
    time: fmt(d(0, 10)),
    createAt: d(0, 10),
    unread: false,
  },

  // 5. Company 1 firing email (HR meeting request — came before the termination)
  {
    sender: "hr@crestwood-institute.org",
    senderName: "Human Resources — Crestwood Institute",
    to: "you@gmail.com",
    subject: "Mandatory meeting request — Employee Code of Conduct",
    content: `Dear Employee,

The Human Resources department has been made aware of public statements recently attributed to you that have generated significant concern from both internal leadership and external stakeholders.

We are requesting a mandatory meeting at your earliest availability to discuss these matters in the context of our Employee Code of Conduct, specifically Sections 3 (Professional Conduct) and 9 (Public Representation of the Organization).

Please confirm your availability for a time this week. If we do not hear back within 48 hours, this matter will be escalated to senior leadership for further action.

This communication is confidential and should not be shared externally.

Human Resources Department
Crestwood Institute`,
    time: fmt(d(0, 9)),
    createAt: d(0, 9),
    unread: false,
  },

  // 6. Friend
  {
    sender: "priya.nair88@gmail.com",
    senderName: "Priya Nair",
    to: "you@gmail.com",
    subject: "Check your phone — seriously, right now",
    content: `Hey,

I don't know if you've been online in the last few hours but your name is trending. Number 2 in the US right now.

There are screenshots going around. I don't know if they're edited or real but they're moving fast — people are already tagging your sponsors and your employer. Some accounts with large followings are piling on.

Please stay off social for now. Do not post anything, do not reply to anyone, and don't let anyone quote-tweet you into a spiral.

Call me when you can. I'm serious.

Priya`,
    time: fmt(d(0, 8)),
    createAt: d(0, 8),
    unread: true,
  },

  // 7. Social media notif
  {
    sender: "alerts@mentionmonitor.io",
    senderName: "Mention Monitor",
    to: "you@gmail.com",
    subject: "Mention alert: 3,400+ new mentions in the past 24 hours",
    content: `MENTION MONITOR — DAILY SUMMARY
Period: Last 24 hours

Your tracked name has been mentioned 3,412 times across monitored platforms.

Top sources:
  Twitter/X          2,109 mentions
  Reddit             541 mentions (r/PublicFreakout, r/OutOfTheLoop)
  News publications  47 articles (The Guardian, Vox, Insider, Daily Mail, Vice)
  YouTube            14 new videos referencing you by name

Sentiment breakdown:
  Negative    71%
  Neutral     19%
  Positive    10%

Notable: Two posts from accounts with 500K+ followers have been shared over 40,000 times combined.

This alert was triggered because mention volume exceeded your set threshold of 500/day.

— Mention Monitor`,
    time: fmt(d(0, 7)),
    createAt: d(0, 7),
    unread: true,
  },

  // 8. Client backing out
  {
    sender: "marcus.okonkwo@gmail.com",
    senderName: "Marcus Okonkwo",
    to: "you@gmail.com",
    subject: "Re: co-authored paper — Annals of Communication",
    content: `Hey,

I've spent the last two days trying to figure out the right way to say this. There isn't one, so I'll just be direct.

I'm asking the journal to remove my name from the paper. I've already emailed the editorial office. Given what's come out this week, I don't think I can keep my name associated with the submission, and I want to be upfront with you about that rather than just let you find out from them.

We've worked together for three years and I know this isn't easy to receive. I'm not saying I think you're a bad person. But I have to protect my own work and standing right now, and I hope you can understand that.

I'm sorry.

Marcus`,
    time: fmt(d(0, 6)),
    createAt: d(0, 6),
    unread: false,
  },

  // 9. Hate mail
  {
    sender: "noreply@cancelledforreal.net",
    senderName: "noreply@cancelledforreal.net",
    to: "you@gmail.com",
    subject: "we know what you did",
    content: `we heard about everything

the thread is archived. we have screenshots

it's already sent out`,
    time: fmt(d(1, 22)),
    createAt: d(1, 22),
    unread: false,
  },

  // 10. Hate mail
  {
    sender: "formerly.a.fan@gmail.com",
    senderName: "formerly.a.fan@gmail.com",
    to: "you@gmail.com",
    subject: "I used to defend you",
    content: `I can't believe I recommended your work to my students. I sent your content to friends when they asked who to follow.

I feel like an idiot now.

I genuinely hope you take some time to think about the real harm this causes. Not your career or your reputation. The actual people who are affected.

I won't be following your work anymore.

Many regrets.`,
    time: fmt(d(1, 20)),
    createAt: d(1, 20),
    unread: false,
  },

  // 11. Social media notif
  {
    sender: "petition-alerts@change.org",
    senderName: "Change.org Alerts",
    to: "you@gmail.com",
    subject: "Petition referencing you has reached 47,000 signatures",
    content: `This is an automated notification from Change.org.

A public petition titled "Hold [Your Name] Accountable" has reached 47,000 signatures as of today.

The petition calls for:
  — Termination of your current employment
  — Removal of your published work from major platforms
  — A formal public apology

The petition has been shared in several high-traffic social media threads and linked in coverage from at least three national publications this week.

This notification was sent because your email address was listed in correspondence associated with this petition.

Change.org Alerts`,
    time: fmt(d(1, 18)),
    createAt: d(1, 18),
    unread: true,
  },

  // 12. Social media notif
  {
    sender: "do-not-reply@speakr-alerts.com",
    senderName: "Speakr Platform",
    to: "you@gmail.com",
    subject: "Your speaker profile has been removed",
    content: `Hello,

Your profile has been removed from the Speakr speaker marketplace, effective today.

This action was taken following a review initiated by multiple event organizers who contacted our team this week. Under our platform terms (Section 6.3), Speakr reserves the right to remove profiles that may create reputational or liability concerns for our partner events.

Two upcoming speaking engagements that were booked through our platform — the Digital Futures Conference (April 4) and the Momentum Summit (May 17) — have been cancelled by the organizing teams. You should expect separate communication from each event directly.

Any outstanding invoices for completed engagements will still be processed per standard terms.

Speakr Platform Team`,
    time: fmt(d(1, 16)),
    createAt: d(1, 16),
    unread: true,
  },

  // 13. Brand deal termination
  {
    sender: "partnerships@lumenbrand.com",
    senderName: "Sophie Tran",
    to: "you@gmail.com",
    subject: "Notice of Partnership Termination — Lumen Brand",
    content: `Hi,

I'm reaching out on behalf of the Lumen Brand partnerships team.

After an internal review, we've made the decision to immediately terminate our ongoing collaboration, effective today. The values reflected in the recent public statements attributed to you are not aligned with Lumen Brand's standards or those of our customer community.

All active deliverables are cancelled. Please refrain from publishing any content referencing Lumen Brand products or using our assets until further notice.

Our legal team will follow up separately regarding the terms of contract dissolution, specifically Section 8 of our agreement.

We appreciate the work we did together and wish you well going forward.

Regards,
Sophie Tran
Head of Creator Partnerships
Lumen Brand`,
    time: fmt(d(1, 14)),
    createAt: d(1, 14),
    unread: false,
  },

  // 14. Company 2 firing
  {
    sender: "hr@nexusmediagroup.com",
    senderName: "Human Resources — Nexus Media Group",
    to: "you@gmail.com",
    subject: "Termination of Contract — Consulting Agreement",
    content: `Dear Consultant,

This email serves as formal notice that Nexus Media Group is terminating your consulting agreement, effective as of today's date.

This decision follows the reputational review initiated by our leadership team on Monday in response to the recent controversy involving public statements attributed to you. Per Section 11 (Termination for Cause) of your consulting contract, this termination is immediate and without severance.

All ongoing project access has been revoked. Please do not contact internal team members or clients on behalf of Nexus Media Group.

If you have questions regarding final invoicing, please direct them to accounts@nexusmediagroup.com.

Human Resources
Nexus Media Group`,
    time: fmt(d(1, 12)),
    createAt: d(1, 12),
    unread: false,
  },

  // 15. Client backing out
  {
    sender: "noreply@universitypress.edu",
    senderName: "University Press Editorial Board",
    to: "you@gmail.com",
    subject: "Withdrawal of your contribution — Voices in Context anthology",
    content: `Dear Contributor,

Following an emergency meeting of the editorial board, we have made the decision to withdraw your essay from the Voices in Context anthology, which had been scheduled for publication in May.

This decision reflects the board's assessment that the current circumstances would significantly impact the reception of the anthology and undermine the contributions of the other writers involved. It was not made unanimously, and it was not made easily.

The clause governing withdrawal under reputational circumstances (Section 12, Clause B) of your contributor agreement has been invoked. Your submitted materials will not appear in the print or digital editions.

We will follow up regarding any applicable return of the contributor honorarium.

Editorial Board
University Press`,
    time: fmt(d(1, 10)),
    createAt: d(1, 10),
    unread: false,
  },

  // 16. Hate mail
  {
    sender: "truth.accountability.now@proton.me",
    senderName: "truth.accountability.now@proton.me",
    to: "you@gmail.com",
    subject: "Your apology means nothing",
    content: `A PR apology written by your team isn't accountability. Posting a carefully worded statement after you got caught isn't growth.

Real accountability means stepping down. It means giving space to the people you've harmed. It means not showing back up in six months with a podcast and a book deal acting like it never happened.

We'll be watching.`,
    time: fmt(d(1, 8)),
    createAt: d(1, 8),
    unread: false,
  },

  // 17. News reporter
  {
    sender: "j.calloway@nytimes.com",
    senderName: "James Calloway",
    to: "you@gmail.com",
    subject: "Request for comment — story publishing tomorrow at 9am",
    content: `Hi,

I'm a reporter at The New York Times covering the controversy surrounding your remarks from last Thursday's panel. We are publishing a piece tomorrow morning and would like to offer you the opportunity to respond before it goes to print.

The story will address the comments in question, reactions from several advocacy groups, and statements from two of your former collaborators. I want to be fair and give you a chance to share your perspective.

Please respond by 11:59 PM tonight if you'd like your statement included. If I don't hear back, I'll note that you declined to comment.

Best,
James Calloway
Staff Reporter, The New York Times
212-556-1847`,
    time: fmt(d(2, 20)),
    createAt: d(2, 20),
    unread: true,
  },

  // 18. News
  {
    sender: "t.kim@buzzfeednews.com",
    senderName: "Tara Kim",
    to: "you@gmail.com",
    subject: "BuzzFeed News — comment request before Friday publication",
    content: `Hi,

I'm a senior reporter at BuzzFeed News working on a piece about the viral controversy surrounding your remarks earlier this week. In addition to the public reaction, we've spoken with several individuals who say they have had troubling interactions with you in professional settings over the past few years.

We want to give you an opportunity to respond before we publish. The story is currently scheduled for Friday morning.

If you'd like to provide a comment or a formal statement, please send it to me by Wednesday at 6 PM ET. Your response will be included in full or in part, depending on length.

Thank you,
Tara Kim
Senior Reporter, BuzzFeed News
t.kim@buzzfeednews.com`,
    time: fmt(d(2, 16)),
    createAt: d(2, 16),
    unread: true,
  },

  // 19. Client backing out
  {
    sender: "content@novapodcastnetwork.com",
    senderName: "Nova Podcast Network",
    to: "you@gmail.com",
    subject: "Removal of your show from Nova Podcast Network",
    content: `Hi,

This is a formal notice that Nova Podcast Network will be removing all episodes associated with your show from our platform and distribution network, effective immediately.

This decision was made following an internal review and direct feedback from our advertising partners, several of whom have suspended their association with your content.

Your RSS feed access and network dashboard credentials will be revoked within 24 hours. Episodes will be taken down from Apple Podcasts, Spotify, Amazon Music, and all other platforms where they were distributed under our network.

If you have questions about your content rights or episode files, please contact our content operations team directly.

Content Operations
Nova Podcast Network`,
    time: fmt(d(2, 12)),
    createAt: d(2, 12),
    unread: false,
  },

  // 20. Friend
  {
    sender: "livvy.reyes@gmail.com",
    senderName: "Livvy Reyes",
    to: "you@gmail.com",
    subject: "Checking in",
    content: `Hey,

I know your inbox is probably a disaster right now so I'll keep this short.

I've known you for seven years. I know who you actually are. None of what's being thrown around online right now reflects the person I know.

Don't read the comment sections. Don't respond to strangers. Talk to a lawyer before you talk to anyone in the press.

I'm around if you need to talk. Bringing food Thursday if that's okay.

Livvy`,
    time: fmt(d(3, 14)),
    createAt: d(3, 14),
    unread: true,
  },

  // 21. Hate mail
  {
    sender: "donotreply4839@mail.com",
    senderName: "donotreply4839@mail.com",
    to: "you@gmail.com",
    subject: "disgusting",
    content: `I hope every door closes for you.

i hope every opportunity you had disappears. i hope you die alone.

fuck you`,
    time: fmt(d(3, 10)),
    createAt: d(3, 10),
    unread: false,
  },

  // 22. Company 2 notice (initial warning, came before the termination)
  {
    sender: "hr@nexusmediagroup.com",
    senderName: "Human Resources — Nexus Media Group",
    to: "you@gmail.com",
    subject: "Urgent — reputational review of consulting relationship",
    content: `Dear Consultant,

We are writing to inform you that Nexus Media Group has initiated an internal review of our current consulting relationship in light of recent public statements and media coverage attributed to you.

This review is a precautionary measure as we assess potential reputational and business impacts on our organization and clients. During this period, we ask that you pause all active project work and refrain from communicating with internal staff or external clients on behalf of Nexus.

We expect to have a resolution within 48 to 72 hours and will be in touch as soon as a decision has been made.

Please treat this communication as confidential.

Human Resources
Nexus Media Group`,
    time: fmt(d(4, 14)),
    createAt: d(4, 14),
    unread: false,
  },

  // 23. Partnership termination
  {
    sender: "sponsorships@driftgear.co",
    senderName: "Drift Gear Partnerships",
    to: "you@gmail.com",
    subject: "Termination of partnership agreement — Drift Gear",
    content: `Hi,

Following our internal review and consideration of feedback from our community, Drift Gear has made the final decision to terminate our partnership agreement, effective immediately.

This decision is permanent. We will not be revisiting the relationship at a later date.

Please remove all Drift Gear branding, product references, and affiliate links from your existing content within 7 business days. Failure to do so may result in legal action under Section 14 of our partnership agreement.

Any outstanding payments for work completed prior to this date will be processed on the standard schedule.

Partnerships
Drift Gear`,
    time: fmt(d(4, 10)),
    createAt: d(4, 10),
    unread: false,
  },

  // 24. Client backing out
  {
    sender: "bookings@cbsmornings.com",
    senderName: "Dana Holloway",
    to: "you@gmail.com",
    subject: "Cancellation of your appearance — March 22nd",
    content: `Hi,

I'm writing to let you know that we'll be cancelling your scheduled appearance on CBS Mornings, which had been set for March 22nd.

Given the current news cycle and the attention surrounding recent events, our editorial team doesn't feel this is the right moment to move forward with the booking. This was not an easy call, but we feel it's the right one for the program.

We won't be rescheduling at this time. If circumstances change, we'd be open to revisiting in the future.

Thank you for your understanding.

Best,
Dana Holloway
Talent Booking, CBS Mornings`,
    time: fmt(d(5, 14)),
    createAt: d(5, 14),
    unread: false,
  },

  // 25. Social media notif
  {
    sender: "noreply@creatorplatform-alerts.com",
    senderName: "Creator Platform",
    to: "you@gmail.com",
    subject: "Monetization suspended on your account",
    content: `Hello,

Following a review of your account activity and recent reports from users and advertisers, we have suspended monetization on your Creator Platform account, effective immediately.

This includes:
  — Ad revenue sharing
  — Channel memberships and subscriptions
  — Super Chat and tipping features
  — Brand partnership integrations

This suspension will remain in place until our review is complete. You will be notified of the outcome within 7–10 business days.

You may continue to post content during this period, but it will not generate revenue.

If you believe this action was taken in error, please submit an appeal through your Account Settings within 30 days.

Creator Platform Support`,
    time: fmt(d(6, 10)),
    createAt: d(6, 10),
    unread: true,
  },
];

export { testdata };
