# Amazon Review Scraper

An app that uses an Apify scraper to collect all reviews of a product and transfer it to a fresh Google Sheet. You must set the desired url in the environment variables.

This bot uses a custom scraper made in Apify that will scrape an Amazon product's reviews from its product review page. This can be accessed by clicking the "See all X reviews" link at the bottom of the reviews, and the url should contain `/product-reviews/` in its body. The code for this scraper can be found [here](https://gist.github.com/WingofaGriffin/fe262e5ad1219794ba33ef30fef0a692).

`Amazon Scrape`: The function to run to run the app. Returns the url of the Google sheet it made for you.

`create_sheet`: A call to create a new Google Sheet with the product url in the title.

`get_reviews`: Returns the dataset of the Apify scraper.

`scrape_reviews`: Calls the Apify scraper to scrape the given url.

`sheets_copy`: Copies the scraped data into a Google Sheet.

## Expansion Ideas

This is an example of a Apify Scraper to grab data from a source and pass it onto another platform (Google Sheets). Transposit allows you to parse your scraped data into many different platforms, so that you can spend less time inputting.

Additionally, this will start a fresh scrape every time you call the function. If you modify your scraper and operations, you could make this only scrape new reviews and append them to a document.

[Click here to find more examples using Transposit!](https://www.transposit.com/apps/)
