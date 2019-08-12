(params) => {
  let newSheet = api.run("this.create_sheet", {name: `Reviews for ${env.get("url")}`});
  api.run("this.sheets_copy", {
                                sheetId: newSheet[0].spreadsheetId,
                                rating: "Rating",
                                title: "Title",
                                content: "Content",
                                author: "Author",
                                date: "Date",
                              });
  //api.run("this.scrape_reviews", { url: env.get("url") });
  let reviews = api.run("this.get_reviews");
  for (let i = 0; i < reviews.length; i++){
      api.run("this.sheets_copy", {
        							sheetId: newSheet[0].spreadsheetId,
        							rating: reviews[i].rating,
        							title: reviews[i].title,
        							content: reviews[i].content,
        							author: reviews[i].author,
        							date: reviews[i].date,
      							  });
  }
  return newSheet[0].spreadsheetUrl;
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */