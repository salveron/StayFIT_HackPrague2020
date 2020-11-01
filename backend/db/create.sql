DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS video;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS course;

CREATE TABLE user(id INTEGER PRIMARY KEY, name TEXT UNIQUE NOT NULL, phone TEXT UNIQUE NOT NULL);
CREATE TABLE article(id INTEGER PRIMARY KEY, header TEXT UNIQUE NOT NULL, content TEXT, course_id INTEGER, FOREIGN KEY(course_id) REFERENCES course(id));
CREATE TABLE video(id INTEGER PRIMARY KEY, url TEXT UNIQUE NOT NULL, title TEXT UNIQUE NOT NULL, description TEXT, course_id INTEGER, FOREIGN KEY(course_id) REFERENCES course(id));
CREATE TABLE course(id INTEGER PRIMARY KEY, article_id INTEGER UNIQUE,
        header TEXT NOT NULL, topic TEXT NOT NULL, duration TEXT NOT NULL, description TEXT, FOREIGN KEY(article_id) REFERENCES article(id));

INSERT INTO course(id, article_id, header, topic, duration, description) VALUES (1, 1, "5 investment tips", "topic", "10m", "If you have some time, take a look at best investment tips, which can bring you to financial freedom");
INSERT INTO course(id, article_id, header, topic, duration, description) VALUES (2, 4, "How to spend money?", "topic", "20m", "Have you ever asked yourself, where did your money? Or do you live paycheck to paycheck? ");
INSERT INTO course(id, article_id, header, topic, duration, description) VALUES (3, 3, "Financial literacy", "course", "25m", "Take a look at awesome course, which will help you to understand how to gain financiall freedom");
INSERT INTO course(id, article_id, header, topic, duration) VALUES (4, 5, "Header 4", "topic", "40m 30s");
INSERT INTO course(id, header, topic, duration) VALUES (5, "Header 5", "course", "1h");

INSERT INTO user(id, name, phone) VALUES (1, "Peter", "12345");
INSERT INTO user(id, name, phone) VALUES (2, "Jane", "23456");
INSERT INTO user(id, name, phone) VALUES (3, "Apollo", "34567");
INSERT INTO user(id, name, phone) VALUES (4, "David", "45678");
INSERT INTO user(id, name, phone) VALUES (5, "Jay", "56789");

INSERT INTO video(id, url, title, description, course_id)
    VALUES (1, "1. tzihFOcSvtY", "Introduction", NULL, 2);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (2, "YKmwgMD7i6I", "Money makes the world go around", "AAAAA", 2);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (3, "J5FJ2bT26Sg", "Teaching mathematics", NULL, 2);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (4, "4cVce3nxul8", "Money and children", NULL, 2);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (5, "44PvX0Yv368", "Python Flask Tutorial: Full-Featured Web App Part 5 - Package Structure", "BBBBB", 1);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (6, "CSHx6eCkmv0", "Python Flask Tutorial: Full-Featured Web App Part 6 - User Authentication", "CCCCCC", 1);

INSERT INTO article(id, header, content, course_id)
    VALUES (1, "5 stock market investment tips", "
1. Check your emotions at the door
Success in investing doesn’t correlate with IQ … what you need is the temperament to control the urges that get other people into trouble in investing.” That''s wisdom from Warren Buffett, chairman of Berkshire Hathaway and an oft-quoted investing sage and role model for investors seeking long-term, market-beating, wealth-building returns.
Buffett is referring to investors who let their heads, not their guts, drive their investing decisions. In fact, trading overactivity triggered by emotions is one of the most common ways investors hurt their own portfolio returns.
All the stock market tips that follow can help investors cultivate the temperament required for long-term success.

2. Pick companies, not ticker symbols

It’s easy to forget that behind the alphabet soup of stock quotes crawling along the bottom of every CNBC broadcast is an actual business. But don’t let stock picking become an abstract concept. Remember: Buying a share of a company''s stock makes you a part owner of that business.

Remember: Buying a share of a company’s stock makes you a part owner of that business.”

You’ll come across an overwhelming amount of information as you screen potential business partners. But it’s easier to home in on the right stuff when wearing a “business buyer” hat. You want to know how this company operates, its place in the overall industry, its competitors, its long-term prospects and whether it brings something new to the portfolio of businesses you already own.

3. Plan ahead for panicky times

All investors are sometimes tempted to change their relationship statuses with their stocks. But making heat-of-the-moment decisions can lead to the classic investing gaffe: buying high and selling low.
Here’s where journaling helps. (That’s right, investor: journaling. Chamomile tea is a nice touch, but it''s completely optional.)
Write down what makes every stock in your portfolio worthy of a commitment and, while your head is clear, the circumstances that would justify a breakup. For example:
Why I’m buying: Spell out what you find attractive about the company and the opportunity you see for the future. What are your expectations? What metrics matter most and what milestones will you use to judge the company’s progress? Catalog the potential pitfalls and mark which ones would be game-changers and which would be signs of a temporary setback.
What would make me sell: Sometimes there are good reasons to split up. For this part of your journal, compose an investing prenup that spells out what would drive you to sell the stock. We’re not talking about stock price movement, especially not short term, but fundamental changes to the business that affect its ability to grow over the long term. Some examples: The company loses a major customer, the CEO’s successor starts taking the business in a different direction, a major viable competitor emerges, or your investing thesis doesn’t pan out after a reasonable period of time.

4. Build up positions gradually

Time, not timing, is an investor’s superpower. The most successful investors buy stocks because they expect to be rewarded — via share price appreciation, dividends, etc. — over years or even decades. That means you can take your time in buying, too. Here are three buying strategies that reduce your exposure to price volatility:
Dollar-cost average: This sounds complicated, but it’s not. Dollar-cost averaging means investing a set amount of money at regular intervals, such as once per week or month. That set amount buys more shares when the stock price goes down and fewer shares when it rises, but overall, it evens out the average price you pay. Some online brokerage firms let investors set up an automated investing schedule.
Buy in thirds: Like dollar-cost averaging, “buying in thirds” helps you avoid the morale-crushing experience of bumpy results right out of the gate. Divide the amount you want to invest by three and then, as the name implies, pick three separate points to buy shares. These can be at regular intervals (e.g., monthly or quarterly) or based on performance or company events. For example, you might buy shares before a product is released and put the next third of your money into play if it''s a hit — or divert the remaining money elsewhere if it''s not.
Buy “the basket”: Can’t decide which of the companies in a particular industry will be the long-term winner? Buy ’em all! Buying a basket of stocks takes the pressure off picking “the one.” Having a stake in all the players that pass muster in your analysis means you won’t miss out if one takes off, and you can use gains from that winner to offset any losses. This strategy will also help you identify which company is “the one” so you can double down on your position if desired.

5. Avoid trading overactivity

Checking in on your stocks once per quarter — such as when you receive quarterly reports — is plenty. But it’s hard not to keep a constant eye on the scoreboard. This can lead to overreacting to short-term events, focusing on share price instead of company value, and feeling like you need to do something when no action is warranted.
When one of your stocks experiences a sharp price movement, find out what triggered the event. Is your stock the

victim of collateral damage from the market responding to an unrelated event? Has something changed in the underlying business of the company? Is it something that meaningfully affects your long-term outlook?
", 1);
INSERT INTO article(id, header, content, course_id)
    VALUES (2, "4 Tips to spend money", "1.  Track Your Finances
Before you can start figuring out how to spend money more wisely, you first need to understand where your money is going. Make a budget and track both your income and your expenses. Once you know where your money is going, you can start looking for opportunities where it could be better spent.

2. Think About the Long-Term Benefits and Drawbacks of Purchases
Far too many purchases are impulse decisions. While this is fine when it’s a $1 chocolate bar at the supermarket, it becomes a problem for larger purchases. Before you buy something, think about how it will affect you in the future.

How long is it going to last? Is it going to put you in debt? Is the value you will get out of it over its lifetime worth the cost?

These are questions you can use to determine if something is really worth buying.

3. Only Put Money on Your Credit Card if You Can Afford to Pay it off Each Month
Credit cards aren’t inherently a hindrance on your finances. After all, they are convenient and many cards offer cash back on your purchases.

However, you should only spend money on your credit card if you are able to fully pay it off at the end of the month.

If you pay off your credit card balance each month, you won’t incur any interest charges and it will essentially be the same as paying cash.

If you don’t pay off your balance each month, though, the interest accrued can quickly spiral out of control.

4. Stop Trying to Impress Other People
The average person spends far too much money merely trying to maintain an image. From fancy cars to brand-name clothing, much of what we buy has more to do with impressing others than it does to do with purchasing something that we actually want and enjoy.

However, “Keeping Up With the Joneses” is an expensive and unnecessary pursuit. Buy the things that you yourself enjoy and don’t fall prey to the feeling that you have to spend money in order to impress other people.", NULL);
INSERT INTO article(id, header, content, course_id)
    VALUES (3, "Article 3!", "Mega useful text\n\n\nAnd again!", 3);
INSERT INTO article(id, header, content, course_id)
    VALUES (4, "Article 4!", "Mega useful text\n\n\nAnd again!", 2);
INSERT INTO article(id, header, content, course_id)
    VALUES (5, "Article 5!", "Mega useful text\n\n\nAnd again!", 4);