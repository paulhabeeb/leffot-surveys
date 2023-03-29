# leffot-surveys
Highly customizable self-hosted alternative to Google Forms, Survey Monkey, and TypeForm. Built with Gatsby and Prismic, surveys collected through Netlify.

[See it live!](https://surveys.leffot.com/what-about-saddle-shoes)

## The Prompt
It started with an open-ended idea. We wanted to gauge customer opinion on shoes we were considering ordering. But the specifics (which shoes, how many, how we would gather opinions, what we’d do with the data, etc) were all up in the air. We knew early on that we wanted to collect names, email addresses, and allow for customer comments.

We needed something that would work across our website, email list, and social media account. Existing solutions offered limited customization, no API or limited API, or were priced too high for what was simply intended to be an experiment. We also preferred to keep the surveys out of any walled gardens and host them ourselves.

## The Result
Because of the open-ended nature of the prompt, I wanted to create a flexible base that would allow us to experiment with different type of surveys and could be easily iterated upon down the line.

I built two kinds of surveys: one that asks users to rank a selection of shoes in their order of preference, and another that asks them to narrow a wide selection of shoes from, say, ten down to five, then rank those remaining five.

The surveys are hosted on Netlify, and responses are collected using [Netlify’s native forms offering](https://www.netlify.com/products/forms/). Netlify triggers a webhook on each form submission. It’s caught by a Google Sheet created specifically for that survey. We’re able to monitor the survey progress in real time.

All content is managed with Prismic, which we also use for our [main site](https://github.com/paulhabeeb/leffot-2021) and [shoe archive](https://github.com/paulhabeeb/leffot-shoe-archive). A new survey can be created simply by making a new post. The color scheme of each survey is customizable within Prismic, and updating content triggers a new build in Netlify.